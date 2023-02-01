import UserLoanService from "../services/loan.js";
import UserProfileService from "../services/userProfile.js";
import UserHandlerDTO from "./dto/user.js";

const UserHandler = {};

UserHandler.getUserDetails = async (customerId) => {
    try {
        console.info(`In UserHandler.getUserDetails where customerId = ${customerId}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        let userData = await UserProfileService.getUserByCustomerId(customerId);
        let userLoans = await UserLoanService.getLoansByCustomerId(customerId);
        handlerResponse.data = UserHandlerDTO.getUserDetailsResponse(userData, userLoans);
        return handlerResponse
    } catch (error) {
        console.error(`In UserHandler.getUserDetails throwing an error with message = ${error.message}  where customerId = ${customerId}`);
        throw error;
    }
}

UserHandler.getUserDetailsByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In UserHandler.getUserDetailsByPhoneNumber where phoneNumber = ${phoneNumber}`);
        return await UserProfileService.getUserByPhoneNumber(phoneNumber);
    } catch (error) {
        console.error(`In UserHandler.getUserDetailsByPhoneNumber throwing an error with message = ${error.message}  where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}

UserHandler.createUserOnSignUp = async (userDetails) => {
    try {
        console.info(`In UserHandler.createUserOnSignUp where userDetails = ${JSON.stringify(userDetails)}`);
        let handlerDTO = UserHandlerDTO.createUserOnSignUp(userDetails);
        return await UserProfileService.createUserOnSignUp(handlerDTO);
    } catch (error) {
        console.error(`In UserHandler.createUserOnSignUp throwing an error with message = ${error.message}  where userDetails = ${JSON.stringify(userDetails)}`);
        throw error;
    }
}

UserHandler.createUser = async (userDetails) => {
    try {
        console.info(`In UserHandler.createUser where userDetails = ${JSON.stringify(userDetails)}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        let handlerDTO = UserHandlerDTO.createUser(userDetails);
        handlerResponse = await UserProfileService.createUser(handlerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserHandler.createUser throwing an error with message = ${error.message}  where userDetails = ${JSON.stringify(userDetails)}`);
        throw error;
    }
}

UserHandler.makeTransaction = async (transaction) => {
    try {
        console.info(`In UserHandler.makeTransaction where transaction = ${JSON.stringify(transaction)}`);
        let handlerResponse = UserHandlerDTO.getBaseResponse()
        let handlerDTO = UserHandlerDTO.makeTransaction(transaction);
        handlerResponse = await UserProfileService.makeTransaction(handlerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserHandler.makeTransaction throwing an error with message = ${error.message}  where transaction = ${JSON.stringify(transaction)}`);
        throw error;
    }
}

export default UserHandler;