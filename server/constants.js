const constants = {
    CUSTOM_MESSAGES: {
        100: 'Unable to generate otp, Please try again!',
        101: 'Invalid otp, Please enter valid otp!',
        102: 'Error while creating user, please try after sometime!',
        103: 'User not found!',
    },
    DEFINED_ERRORS: {
        401: "Unauthorized to access the URL",
        701: "OOPS!! We are working on it",
        500: "Internal Server Error",
        200: "Success",
    },
    SPLITS: {
        ADMIN_SPLIT_TOKEN: ':&&:',
        CUSTOMER_SPLIT_TOKEN: ':%%:'
    }
};


export default constants;