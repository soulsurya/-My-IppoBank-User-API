import Router from 'express-promise-router';
import constants from '../constants.js';
import Utils from '../utils.js'
import AuthenticationService from '../services/authentication.js';
import UserSchema from '../joiSchema/user.js';
import UserRouterDTO from './dto/user.js';
import UserHandler from '../handler/user.js';

const router = Router();

router.get("/", async function (req, res) {
    try {
        let customerId = await AuthenticationService.validateToken(req.headers.authorization)
        let result = await UserHandler.getUserDetails(customerId);
        return res.jsonp(Utils.formMessage(result.success ? result.data : result.message, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/get with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/createUser", async function (req, res) {
    try {
        let { error } = UserSchema.createUser.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let customerId = await AuthenticationService.validateToken(req.headers.authorization);
        let routerDTO = UserRouterDTO.createUser(req.body, customerId);
        let result = await UserHandler.createUser(routerDTO);
        return res.jsonp(Utils.formMessage(result.data, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/createUser with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

router.post("/createTransaction", async function (req, res) {
    try {
        let { error } = UserSchema.createTransaction.validate(req.body);
        if (error) {
            return res.status(400).json(Utils.formMessage(error.message, 400));
        }
        let customerId = await AuthenticationService.validateToken(req.headers.authorization);
        let routerDTO = UserRouterDTO.makeTransaction(req.body, customerId);
        let result = await UserHandler.makeTransaction(routerDTO);
        return res.jsonp(Utils.formMessage(result.data, result.success ? 200 : 400));
    } catch (error) {
        console.error(`Error in user/createUser with message = ${error.message}`)
        return res.jsonp(Utils.formMessage(constants.DEFINED_ERRORS[701], 400));
    }
})

export default router;