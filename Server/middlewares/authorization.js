import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/user'

dotenv.config();
const authorization = (req, res, next) => {
    const token = req.header('x-auth-token');
    try {
        const decode_jwt = jwt.verify(token, process.env.privateKey);
        if (!User.isEmailTaken(decode_jwt.Email)) {
            return res.status(401).send({
                status: 401,
                error: 'You are not authorized'
            })
        }
        next();
    } catch (err) {
        return res.status(400).send({
            status: 400,
            error: err.message
        })
    }

}
export default authorization;