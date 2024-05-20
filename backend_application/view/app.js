const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser())
const pool = require('../dbConnection/database')
const sellerController = require('../controller/sellerController')

app.use(cors({
    origin: 'http://localhost:3000', // Update with your frontend URL
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.post('/register', sellerController.registerUser);
app.post('/login', sellerController.login);
app.post('/verifyToken', sellerController.verifyToken);
app.get('/verifyToken', sellerController.verifyTokenGet);

pool.getConnection()
    .then(connection => {
        console.log('Database connected!');
        connection.release(); // Release the connection
        app.listen(port, () => console.log(`I am listening ${port}`));
    })
    .catch(err => {
        console.error('Database connection failed:', err.stack);
        process.exit(1); // Exit with error
    });