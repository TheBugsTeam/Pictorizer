const Joi = require("joi");

const registrationValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "hu"] },
      })
      .required(),
    password: Joi.string()
      .min(6)
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        )
      )
      .required(),
  });
  return schema.validate(data);
};

module.exports.registrationValidation = registrationValidation;
