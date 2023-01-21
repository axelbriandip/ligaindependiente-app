const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { app } = require('./app');

// utils
const { db } = require('./utils/db.util');

// start server
const startServer = async () => {
    try {
        await db.authenticate()

        // init models

        await db.sync();
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Express app running in port ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

startServer();