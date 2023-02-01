const Utils = {};

Utils.formMessage = (message, code) => {
    let response = { code: "", success: false };
    response.data = message;
    response.code = code;

    if (response.code === 200 || response.code === 202) {
        response.success = true;
    }

    return response;
}

export default Utils;