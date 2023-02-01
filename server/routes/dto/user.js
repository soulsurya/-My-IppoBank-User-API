const UserRouterDTO = {};

UserRouterDTO.createUser = (request, customerId) => {
    console.info(`Inside UserRouterDTO.createUser where request = ${JSON.stringify(request)} and customerId = ${customerId}`);
    return {
        phoneNumber: request.phoneNumber,
        userName: request.userName?.trim(),
        accountType: request.accountType,
        dob: request.dob,
        state: request.state,
        pincode: request.pincode,
        idType: request.idType,
        idNumber: request.idNumber,
        customerId: customerId
    };
}

UserRouterDTO.makeTransaction = (request, customerId) => {
    console.info(`Inside UserRouterDTO.makeTransaction where request = ${JSON.stringify(request)} and customerId = ${customerId}`);
    return {
        customerId: request?.customerId,
        accountId: request?.accountId,
        transactionValue: request?.transactionValue,
        transactionType: request?.transactionType,
        paidToAccountId: request?.paidToAccountId || "",
        paidToIfsc: request?.paidToIfsc || "",
        paymentMode: request?.paymentMode || "",
    };
}

export default UserRouterDTO;