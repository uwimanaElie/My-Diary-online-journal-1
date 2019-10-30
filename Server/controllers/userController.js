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
