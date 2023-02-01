import Joi from 'joi';

const UserSchema = {}

UserSchema.createUser = Joi.object().keys({
    phoneNumber: Joi.string().required(),
    userName: Joi.string().required(),
    accountType: Joi.string().required(),
    dob: Joi.string().required(),
    state: Joi.string().required(),
    pincode: Joi.string().required(),
    idType: Joi.string().required(),
    idNumber: Joi.string().required()
});

UserSchema.createTransaction = Joi.object().keys({
    customerId: Joi.string().required(),
    accountId: Joi.string().required(),
    transactionValue: Joi.string().required(),
    transactionType: Joi.string().required(),
    paidToAccountId: Joi.string().optional().allow(null, ''),
    paidToIfsc: Joi.string().optional().allow(null, ''),
    paymentMode: Joi.string().required(),
});


export default UserSchema;