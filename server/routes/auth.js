import Router from 'express-promise-router';
import constants from '../constants.js';
import AuthHandler from '../handler/auth.js';
import AuthJoiSchema from '../joiSchema/auth.js';
import AuthenticationService from '../services/authentication.js';
import Utils from '../utils.js'
import AuthRouterDTO from './dto/auth.js';

const router = Router();

router.post("/generateOtp", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.generateOtp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.generateOtp(req.body);
        // Do not get otp for number 8770509122
        let result = routerDTO?.phoneNumber === '8770509122' ? { success: true, data: {} } : await AuthenticationService.generateOtp(routerDTO);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/generateOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/verifyOtp", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.verifySignIn.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.verifyOtp(req.body);
        let handlerResponse = await AuthHandler.verifyOtp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/generateOtp with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/verifySignIn", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.verifySignIn.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.verifyOtp(req.body);
        let handlerResponse = await AuthHandler.verifySignIn(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/verifySignIn with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/verifySignUp", async function (req, res) {
    try {
        let { error } = AuthJoiSchema.verifySignUp.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let routerDTO = AuthRouterDTO.verifySignUp(req.body);
        let handlerResponse = await AuthHandler.verifySignUp(routerDTO);
        return res.jsonp(Utils.formMessage(handlerResponse.success ? handlerResponse.data : handlerResponse.message, handlerResponse.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in auth/verifySignIn with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;