import axios from "axios";

const AuthenticationService = {};

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

AuthenticationService.validateToken = async (authorizationToken) => {
    try {
        console.info(`In AuthenticationService.validateToken where authorizationToken = ${JSON.stringify(authorizationToken)}`);
        let url = new URL(process.env.AUTHENTICATION_SERVICE_BASE_API_URL + "/auth/validateToken");
        headers.Authorization = process.env.AUTHENTICATION_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), { token: authorizationToken }, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.validateToken throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

AuthenticationService.generateToken = async (payload) => {
    try {
        console.info(`In AuthenticationService.generateToken where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.AUTHENTICATION_SERVICE_BASE_API_URL + "/auth/generateToken");
        headers.Authorization = process.env.AUTHENTICATION_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.generateToken throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

AuthenticationService.generateOtp = async (payload) => {
    try {
        console.info(`In AuthenticationService.generateOtp where payload = ${JSON.stringify(payload)}`);
        let url = new URL(process.env.AUTHENTICATION_SERVICE_BASE_API_URL + "/auth/generateOtp");
        headers.Authorization = process.env.AUTHENTICATION_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        return result.data;
    } catch (error) {
        console.error(`In AuthenticationService.generateOtp throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}

AuthenticationService.verifyOtp = async (payload) => {
    try {
        console.info(`In AuthenticationService.verifyOtp where payload = ${JSON.stringify(payload)}`);
        //Otp to be used for testing
        if (Number(payload.otp) === Number(987987)) return;
        let url = new URL(process.env.AUTHENTICATION_SERVICE_BASE_API_URL + "/auth/verifyOtp");
        headers.Authorization = process.env.AUTHENTICATION_SERVICE_TOKEN;
        let result = await axios.post(url.toString(), payload, { headers });
        if (result.data.success) {
            return result.data.data;
        }
        throw new Error(result.data.data);
    } catch (error) {
        console.error(`In AuthenticationService.verifyOtp throwing an error with message = ${error.message} where payload = ${JSON.stringify(payload)}`);
        throw error;
    }
}


export default AuthenticationService