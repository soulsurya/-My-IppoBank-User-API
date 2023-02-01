const AuthRouterDTO = {};

AuthRouterDTO.generateOtp = (request) => {
    console.info(`Inside AuthRouterDTO.generateOtp where request = ${JSON.stringify(request)}`);
    return { phoneNumber: request.phoneNumber };
}

AuthRouterDTO.verifyOtp = (request) => {
    console.info(`Inside AuthRouterDTO.verifyOtp where request = ${JSON.stringify(request)}`);
    return request;
}

AuthRouterDTO.verifySignUp = (request) => {
    console.info(`Inside AuthRouterDTO.verifySignUp where request = ${JSON.stringify(request)}`);
    return {
        phoneNumber: request.phoneNumber,
        otp: request.otp,
        userName: request.userName?.trim(),
    };
}

export default AuthRouterDTO;