import axios from "axios";

const UserProfileService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

UserProfileService.getUserByCustomerId = async (customerId) => {
    try {
        console.info(`In UserProfileService.getUserByCustomerId where customerId = ${customerId}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/user/getUserById");
        url.search = new URLSearchParams({ customerId }).toString();
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserProfileService.getUserByCustomerId throwing an error with message = ${error.message} where customerId = ${customerId}`);
        throw error;
    }
}

UserProfileService.getUserByPhoneNumber = async (phoneNumber) => {
    try {
        console.info(`In UserProfileService.getUserByPhoneNumber where phoneNumber = ${phoneNumber}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/user/getUserByNumber");
        url.search = new URLSearchParams({ phoneNumber }).toString();
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserProfileService.getUserByPhoneNumber throwing an error with message = ${error.message} where phoneNumber = ${phoneNumber}`);
        throw error;
    }
}

UserProfileService.createUserOnSignUp = async (payload) => {
    try {
        console.info(`In UserProfileService.createUserOnSignUp where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/user/createUserOnSignUp");
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserProfileService.createUserOnSignUp throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

UserProfileService.createUser = async (payload) => {
    try {
        console.info(`In UserProfileService.createUser where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/user/createUser");
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        return result.data;
    } catch (error) {
        console.error(`In UserProfileService.createUser throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

UserProfileService.getUserTransactionsByCustomerId = async (customerId) => {
    try {
        console.info(`In UserProfileService.getUserTransactionsByCustomerId where customerId = ${customerId}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/transaction/getUserByNumber");
        url.search = new URLSearchParams({ customerId }).toString();
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.get(url.toString(), { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In UserProfileService.getUserTransactionsByCustomerId throwing an error with message = ${error.message} where customerId = ${customerId}`);
        throw error;
    }
}

UserProfileService.makeTransaction = async (payload) => {
    try {
        console.info(`In UserProfileService.makeTransaction where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.USER_PROFILE_SERVICE_BASE_API_URL + "/transaction/createUserTransaction");
        headers.Authorization = process.env.USER_PROFILE_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        return result.data;
    } catch (error) {
        console.error(`In UserProfileService.makeTransaction throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

export default UserProfileService;