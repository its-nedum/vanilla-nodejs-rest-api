const User = require('../models/user');
const { parse } = require('querystring')

const createUser = async (req, res) => {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    
    try {
        if (req.headers['content-type'] === FORM_URLENCODED) {
            let user = "";

            req.on('data', (chunk) => {
                user += chunk;
            });

            req.on('end', async () => {
                // prevent duplicate entry by checking for email
                const checkUser = await User.findOne({ email: parse(user).email});
                if (!checkUser) {
                    // save the user to database
                    const result = await User.create(parse(user));
                    // return the saved user
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(result));
                    res.end()
                }
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end('User already exists')
            });
        } else {
            res.end(`Please use ${FORM_URLENCODED} and try again`)
        }

    } catch (error) {
        res.end('Something went wrong please try again')
        // console.log(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const result = await User.find();
    
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } catch (error) {
        res.end('No user found')
        // console.log(error);
    }
}

const getUser = async (req, res, id) => {
    try {
        const result = await User.findById(id);
    
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } catch (error) {
        res.end('User not found')
        // console.log(error);
    }
}

const updateUser = async (req, res, id) => {
    try {

        // const id = req.params;
        const result = await User.findById(id);
    
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res, id) => {
    try {

        // const id = req.params;
        const result = await User.findById(id);
    
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}