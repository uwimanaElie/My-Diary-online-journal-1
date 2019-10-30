import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (email) => jwt.sign({ Email: email }, process.env.privateKey, { expiresIn: '1day' });

export const userEmail = (token) => {
    const userData = jwt.verify(token, process.env.privateKey);
    return userData.Email;
}
export default generateToken;