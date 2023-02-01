const UserLoanHandlerDTO = {};

UserLoanHandlerDTO.getBaseResponse = () => {
    return {
        success: true,
        data: {},
        message: ''
    }
}

UserLoanHandlerDTO.checkEligibility = (loanDetails) => {
    console.info(`Inside UserLoanHandlerDTO.checkEligibility where loanDetails = ${JSON.stringify(loanDetails)}`)
    return loanDetails;
}

UserLoanHandlerDTO.payLoanEmi = (loanDetails) => {
    console.info(`Inside UserLoanHandlerDTO.payLoanEmi where loanDetails = ${JSON.stringify(loanDetails)}`)
    return loanDetails;
}

UserLoanHandlerDTO.createLoan = (loanDetails) => {
    console.info(`Inside UserLoanHandlerDTO.createLoan where loanDetails = ${JSON.stringify(loanDetails)}`)
    return loanDetails;
}

export default UserLoanHandlerDTO;