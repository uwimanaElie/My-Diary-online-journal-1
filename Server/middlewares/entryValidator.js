import Joi from 'joi';

const entryValidator = (req, res, next) => {
    const schema = {
        title: Joi.string().trim().min(10).required(),
        description: Joi.string().trim().min(50).required()
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
export default entryValidator;