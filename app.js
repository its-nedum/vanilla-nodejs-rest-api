// import modules
const http = require('http');
const db = require('./dbCon/db')

const { createUser, getUser, getAllUsers, updateUser, deleteUser } = require('./controllers/userController')

const port = process.env.PORT || 7000

// create a server and setup API endpoints
const server = http.createServer((req, res) => {
    if (req.url === '/api/user' && req.method === 'POST') {
        createUser(req, res);  
    } else if (req.url === '/api/user' && req.method === 'GET') {
        getAllUsers(req, res);
    } else if (req.url.match(/\/api\/user\/\w+/) && req.method === 'GET') {
        // get user id from URL
        const id = req.url.split('/')[3];
        getUser(req, res, id);
    } else if (req.url.match(/\/api\/user\/\w+/) && req.method === 'PUT') {
        // get user id from URL
        const id = req.url.split('/')[3];
        updateUser(req, res, id);
    } else if (req.url.match(/\/api\/user\/\w+/) && req.method === 'DELETE') {
        // get user id from URL
        const id = req.url.split('/')[3];
        deleteUser(req, res, id);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found!' }))
    }
});

server.listen(port, () => console.log(`Server is running on ${port}...`));

module.exports = server;