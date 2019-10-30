import generateToken from '../helpers/tokenGenerators';
class User {
    constructor() {
        this.users = [];
    }

    createUser = (req, res) => {
        const currentId = this.users.length + 1;
        let createdUser = {
            id: currentId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
        this.users.push(createdUser);
        const token = generateToken(createdUser.email);
        return res.status(201).json({
            status: 201,
            message: `User created successfully`,
            data: {
                id: parseInt(createdUser.id, 10),
                token,
            },
        });

    };
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

}

export default new User();