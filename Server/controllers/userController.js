import Userclass from '../models/user';
import userData from '../models/userDatas'

class Usercontroller {

    signUp = (req, res) => {
        let { email } = req.body;
        if (Userclass.isEmailTaken(email)) {
            return res.status(409).send({
                status: 409,
                error: `${email} has been used`,
            });
        };
        // const response = userData.push(...req)
        const response = Userclass.createUser(req, res);
        return res.status(201).send(response);

    };
}

login = (payload) => {
    const user = this.users.find(newUser => newUser.email === payload.email &&
        newUser.password === payload.password);
    if (!user) {
        return {
            status: 401,
            error: 'Incorrect email or password'
        };
    }
    const token = generateToken(user.email);
    let result = {
        UserId: user.id,
        token: token,
    }
    result = {
        status: 200,
        message: 'User is successfully logged in',
        data: result
    }
    return result;
}

isEmailTaken = email => this.users.find(u => u.email === email);

export default new User();