import UserLoanService from "../services/loan.js";
import UserLoanHandlerDTO from "./dto/loan.js";
import UserHandler from "./user.js";

const UserLoanHandler = {};

UserLoanHandler.checkEligibility = async (loanDetails) => {
    try {
        console.info(`In UserLoanHandler.checkEligibility where loanDetails = ${JSON.stringify(loanDetails)}`);
        let handlerResponse = UserLoanHandlerDTO.getBaseResponse();
        let handlerDTO = UserLoanHandlerDTO.checkEligibility(loanDetails);
        handlerResponse = await UserLoanService.checkEligibility(handlerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserLoanHandler.checkEligibility throwing an error with message = ${error.message}  where loanDetails = ${JSON.stringify(loanDetails)}`);
        throw error;
    }
}

UserLoanHandler.createLoan = async (loanDetails) => {
    try {
        console.info(`In UserLoanHandler.createLoan where loanDetails = ${JSON.stringify(loanDetails)}`);
        let handlerResponse = UserLoanHandlerDTO.getBaseResponse()
        let handlerDTO = UserLoanHandlerDTO.createLoan(loanDetails);
        // If already a bank customer then add it's customer Id in loan
        if (handlerDTO.isBankCustomer) {
            let customerDetails = await UserHandler.getUserDetailsByPhoneNumber(handlerDTO?.phoneNumber);
            handlerDTO.customerId = customerDetails?.customerId
        }
        handlerResponse.data = await UserLoanService.createLoan(handlerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserLoanHandler.createLoan throwing an error with message = ${error.message}  where loanDetails = ${JSON.stringify(loanDetails)}`);
        throw error;
    }
}

UserLoanHandler.payLoanEmi = async (loanDetails) => {
    try {
        console.info(`In UserLoanHandler.payLoanEmi where loanDetails = ${JSON.stringify(loanDetails)}`);
        let handlerResponse = UserLoanHandlerDTO.getBaseResponse()
        let handlerDTO = UserLoanHandlerDTO.payLoanEmi(loanDetails);
        handlerResponse = await UserLoanService.payLoanEmi(handlerDTO);
        return handlerResponse;
    } catch (error) {
        console.error(`In UserLoanHandler.payLoanEmi throwing an error with message = ${error.message}  where loanDetails = ${JSON.stringify(loanDetails)}`);
        throw error;
    }
}

export default UserLoanHandler;