import Joi from 'joi';

const userValidator = (req, res, next) => {
    const schema = {
        firstName: Joi.string().regex(/^[a-zA-Z]+$/).trim().min(3).required(),
        lastName: Joi.string().regex(/^[a-zA-Z]+$/).trim().min(3).required(),
        email: Joi.string().email().trim().required(),
        password: Joi.string().alphanum().trim().required(),
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        return res.status(400).send({
            status: 400,
            error: `${result.error.details[0].message}`,
        })
    }
    next();
}
export default userValidator;