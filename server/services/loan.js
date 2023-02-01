import axios from "axios";

const UserLoanService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

UserLoanService.getLoansByCustomerId = async (customerId) => {
    try {
        console.info(`In UserLoanService.getLoansByCustomerId where customerId = ${customerId}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/user/getByCustomerId");
        url.search = new URLSearchParams({ customerId }).toString();
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserLoanService.getLoansByCustomerId throwing an error with message = ${error.message} where customerId = ${customerId}`);
        throw error;
    }
}

UserLoanService.createLoan = async (payload) => {
    try {
        console.info(`In UserLoanService.createLoan where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/user/create");
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserLoanService.createLoan throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

UserLoanService.checkEligibility = async (payload) => {
    try {
        console.info(`In UserLoanService.checkEligibility where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/user/checkEligibility");
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        return result.data;
    } catch (error) {
        console.error(`In UserLoanService.checkEligibility throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

UserLoanService.payLoanEmi = async (payload) => {
    try {
        console.info(`In UserLoanService.payLoanEmi where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_LOAN_SERVICE_BASE_API_URL + "/user/payLoanEmi");
        headers.Authorization = process.env.USER_LOAN_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        return result.data;
    } catch (error) {
        console.error(`In UserLoanService.payLoanEmi throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}


export default UserLoanService;