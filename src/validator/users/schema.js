const joi = required('joi');

const UsersPayloadSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    fullname: joi.string().required(),
});

module.exports = { UsersPayloadSchema };