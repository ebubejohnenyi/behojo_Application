const pool = require('../dbConnection/database')
const HcfUser = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ebubejohnenyi1231@gmail.com#$%^&*()!+=-';
const sendMail = require('../mailSender/sendMail');

const checkInputEmpty = (req, res, firstname, lastname, email, phonenumber, password) => {
    if (!firstname || !lastname || !email || !phonenumber || !password) {
        res.status(400).json({ message: 'Input field cannot be empty' });
    }
}

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, password } = req.body;
        const user = new HcfUser(firstname, lastname, email, phonenumber, password);
        const insertNewUser = `INSERT INTO hcf_info (firstname, lastname, email, phonenumber, password) VALUES (?, ?, ?, ?, ?)`;

        checkInputEmpty(req, res, firstname, lastname, email, phonenumber, password)

        const userExistQuery = `SELECT * FROM hcf_info WHERE email = ?`;
        const [existingUser] = await pool.query(userExistQuery, [user.email])
        if (existingUser && existingUser.length > 0) {
            console.log('User Already Exist')
            return res.status(400).json('User Already Exist');
        } else {
            const hashedPassword = await bcrypt.hash(user.password, 10)
            const [result] = await pool.query(insertNewUser, [user.firstname, user.lastname, user.email, user.phonenumber, hashedPassword])
            return res.status(200).json({ success: 'ok', user });
        }
    } catch (error) {
        console.error('Error during registration', error);
        res.status(500).json({ error: 'Bad Bad request' });
    }
}


const login = async (req, res) => {
    const link = 'http://localhost:3000/verifyToken'
    try {
        const { email, password } = req.body
        const findEmailInDatabase = `SELECT * FROM hcf_info WHERE email = ?`;
        const [foundUserInDb] = await pool.query(findEmailInDatabase, [email])

        if (foundUserInDb && foundUserInDb.length > 0) {

            const [user] = foundUserInDb
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {

                const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
                sendMail(email, token, link)

                res.cookie('auth_token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Use secure flag in production
                    sameSite: 'Strict'
                });

                return res.status(200).json({ success: 'Login Successful', user, token })
            }

            return res.status(400).json({ message: 'Password Invalid' });
        }

        console.log('No user found.')
        return res.status(400).json({ message: 'No user found' })

    } catch (error) {
        return res.status(404).json({ message: 'Potential error logging in', error: error.message })
    }
}

const verifyToken = async (req, res) => {
    const tokenFromHeader = req.headers['authorization'];
    const tokenFromBody = req.body.token;
    const token = tokenFromBody || (tokenFromHeader && tokenFromHeader.split(' ')[1]);
    try {
        if (token) {
            const decodeUserToken = jwt.verify(token, JWT_SECRET)
            return res.status(200).json({ message: 'Token is valid', user: decodeUserToken });
        }
        console.log('Invalid Token')
        return res.status(400).json({ message: 'Invalid Token' })
    } catch (error) {
        console.log('Potential Error -> ', error)
        res.status(404).json({ error: error.message })
    }
}

const verifyTokenGet = async (req, res) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(400).json({ message: 'Invalid Token' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return res.status(200).json({ message: 'Token is valid', user: decoded });
    } catch (error) {
        console.error('Token verification error', error);
        return res.status(400).json({ message: 'Invalid Token' });
    }
};


module.exports = {
    registerUser,
    login,
    verifyToken,
    verifyTokenGet
}
