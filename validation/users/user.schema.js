const joi = require("@hapi/joi");

const schema = {
    user:joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        name: joi.string().required(),
    }),
    login:joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
    })
};

module.exports = schema;
