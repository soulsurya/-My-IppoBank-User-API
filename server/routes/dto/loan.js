const LoanRouterDTO = {};

LoanRouterDTO.createLoan = (request) => {
    console.info(`Inside LoanRouterDTO.createLoan where request = ${JSON.stringify(request)}`);
    return {
        phoneNumber: request.phoneNumber,
        userName: request.userName,
        loanType: request.loanType,
        dob: request.dob,
        pincode: request.pincode,
        state: request.state,
        monthlyIncome: request.monthlyIncome,
        monthlyExpense: request.monthlyExpense,
        idType: request.idType,
        idNumber: request.idNumber,
        loanTenure: request.loanTenure,
        loanAmount: request.loanAmount,
        employmentType: request.employmentType,
        isBankCustomer: request.isBankCustomer,
        ...(request.customerId && { customerId: request.customerId })
    };
}

LoanRouterDTO.checkEligibility = (request) => {
    console.info(`Inside LoanRouterDTO.checkEligibility where request = ${JSON.stringify(request)}`);
    return {
        loanTenure: isNaN(request.loanTenure) ? 0 : Number(request.loanTenure),
        monthlyExpense: isNaN(request.monthlyExpense) ? 0 : Number(request.monthlyExpense),
        monthlyIncome: isNaN(request.monthlyIncome) ? 0 : Number(request.monthlyIncome),
        loanAmount: isNaN(request.loanAmount) ? 0 : Number(request.loanAmount),
    };
}

LoanRouterDTO.payEmi = (request) => {
    console.info(`Inside LoanRouterDTO.payEmi where request = ${JSON.stringify(request)}`);
    return {
        transactionValue: Number(request.transactionValue),
        paymentMode: request.paymentMode,
        loanId: request.loanId,
        customerId: request?.customerId
    };
}


export default LoanRouterDTO;