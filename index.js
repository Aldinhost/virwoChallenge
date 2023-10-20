const connection = require("./database/connection.js");
const express = require('express');

// DB
connection();

//Server
const app = express();
const port = 3700;

// Data body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const userRoutes = require('./routes/userRoutes');

app.use('/api/user', userRoutes);


app.listen(port, () => {
    console.log('Server running at port ', port);
});