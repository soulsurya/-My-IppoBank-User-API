import Router from 'express-promise-router';
import constants from '../constants.js';
import Utils from '../utils.js'
import LoanSchema from '../joiSchema/loan.js';
import LoanRouterDTO from './dto/loan.js';
import UserLoanHandler from '../handler/loan.js';
import AuthenticationService from '../services/authentication.js';

const router = Router();

router.post("/createLoan", async function (req, res) {
    try {
        let { error } = LoanSchema.createLoan.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = LoanRouterDTO.createLoan(req.body);
        let result = await UserLoanHandler.createLoan(routerDTO);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in loan/createLoan with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/checkEligibility", async function (req, res) {
    try {
        let { error } = LoanSchema.checkEligibility.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = LoanRouterDTO.checkEligibility(req.body);
        let result = await UserLoanHandler.checkEligibility(routerDTO);
        return res.jsonp(Utils.formMessage(result.data, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in loan/checkEligibility with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/payEmi", async function (req, res) {
    try {
        let { error } = LoanSchema.payEmi.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let customerId = await AuthenticationService.validateToken(req.headers.authorization);
        let routerDTO = LoanRouterDTO.payEmi(req.body);
        let result = await UserLoanHandler.payLoanEmi(routerDTO);
        return res.jsonp(Utils.formMessage(result.data, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in loan/payEmi with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;