const express = require('express');

// routers

// controllers

// init our express app
const app = express();

// enable to express app to receive json format
app.use(express.json())

// enable static files on public folder (render files on html)

// enable cors

// define endpoints

// global error handler

// catch if not exists endpoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server`
    })
})

// export express app
module.exports = { app };