## Vanilla Node.js REST API
This is vanilla Node.js REST API with MongoDB for data storage

## Technologies Used
NodeJs, MongoDB and Mongoose

## Getting Started
Download and install [NodeJs](https://nodejs.org)

Clone respository:
```git
    https://github.com/its-nedum/vanilla-nodejs-rest-api.git
```

Open this file directory in your terminal and run the following command:

- Install Mongoose dependecy
```bash
    npm install
```

- Start server on port 7000
```bash
    npm start
```

## API Routes
<table>
	<thead>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/user</td>
            <td>Create a user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user</td>
            <td>Get all users</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user/:id</td>
            <td>Get a single user</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/user/:id</td>
            <td>Update a user</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/user/:id</td>
            <td>Delete a user</td>
        </tr>
    </tbody>
</table>