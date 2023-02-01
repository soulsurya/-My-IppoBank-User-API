import Joi from 'joi';

const AuthJoiSchema = {}

AuthJoiSchema.generateOtp = Joi.object().keys({
    phoneNumber: Joi.string().required()
});

AuthJoiSchema.verifySignIn = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    otp: Joi.string().required(),
    userName: Joi.string().optional()
});

AuthJoiSchema.verifySignUp = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    otp: Joi.string().required(),
    userName: Joi.string().required()
});

export default AuthJoiSchema;