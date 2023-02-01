const UserHandlerDTO = {};

UserHandlerDTO.getBaseResponse = () => {
    return {
        success: true,
        data: {},
        message: ''
    }
}

UserHandlerDTO.createUserOnSignUp = (userDetails) => {
    console.info(`Inside UserHandlerDTO.createUserOnSignUp where userDetails = ${JSON.stringify(userDetails)}`)
    return {
        phoneNumber: userDetails.phoneNumber,
        userName: userDetails.userName
    }
}

UserHandlerDTO.createUser = (userDetails) => {
    console.info(`Inside UserHandlerDTO.createUser where userDetails = ${JSON.stringify(userDetails)}`)
    return userDetails;
}

UserHandlerDTO.makeTransaction = (transaction) => {
    console.info(`Inside UserHandlerDTO.makeTransaction where transaction = ${JSON.stringify(transaction)}`)
    return transaction;
}

UserHandlerDTO.getUserDetailsResponse = (userDetails, loanDetails) => {
    try {
        console.info(`Inside UserHandlerDTO.getUserDetailsResponse where userDetails = ${JSON.stringify(userDetails)} and loanDetails = ${JSON.stringify(loanDetails)}`);
        return { userDetails, loanDetails }
    } catch (error) {
        console.error(`Error Inside UserHandlerDTO.getUserDetailsResponse where userDetails = ${JSON.stringify(userDetails)} and loanDetails = ${JSON.stringify(loanDetails)} with message = ${error.message}`);
        throw error;
    }
}

export default UserHandlerDTO;