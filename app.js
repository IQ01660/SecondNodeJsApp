//imports
const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');


//creating the express app
const app = express();

//making a static public folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

//main route
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

//404 route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

//listening to requests
app.listen(3400);