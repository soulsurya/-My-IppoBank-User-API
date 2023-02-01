import lodash from 'lodash'
import constants from '../constants.js';
import AuthenticationService from "../services/authentication.js";
import AuthHandlerDTO from './dto/auth.js';
import UserHandler from "./user.js";

const AuthHandler = {};

AuthHandler.generateOtp = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.generateOtp where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = await AuthenticationService.generateOtp(routerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.generateOtp where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

AuthHandler.verifyOtp = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.verifyOtp where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse();
        handlerResponse.data = await AuthenticationService.verifyOtp(routerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.verifyOtp where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

AuthHandler.verifySignIn = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse()
        let otpVerification = await AuthenticationService.verifyOtp(routerDTO);
        let userDetails = await UserHandler.getUserDetailsByPhoneNumber(routerDTO.phoneNumber);
        if (lodash.isEmpty(userDetails)) {
            handlerResponse.success = false;
            handlerResponse.message = constants.CUSTOM_MESSAGES[103]
        } else {
            let handlerDTO = AuthHandlerDTO.verifySignIn(userDetails)
            handlerResponse.data.token = await AuthenticationService.generateToken(handlerDTO)
        }
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

AuthHandler.verifySignUp = async (routerDTO) => {
    try {
        console.info(`In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)}`);
        let handlerResponse = AuthHandlerDTO.getBaseResponse()
        let handlerDTO = AuthHandlerDTO.verifySignUp(routerDTO);
        let otpVerification = await AuthenticationService.verifyOtp(handlerDTO);
        let userDetails = await UserHandler.createUserOnSignUp(routerDTO);
        if (lodash.isEmpty(userDetails)) {
            handlerResponse.success = false;
            handlerResponse.message = constants.CUSTOM_MESSAGES[102]
        } else {
            let handlerDTOGetToken = AuthHandlerDTO.getToken(userDetails);
            handlerResponse.data.token = await AuthenticationService.generateToken(handlerDTOGetToken)
        }
        return handlerResponse;
    } catch (error) {
        console.error(`Error In AuthHandler.verifySignIn where routerDTO = ${JSON.stringify(routerDTO)} with message = ${error.message}`);
        throw error;
    }
}

export default AuthHandler;