const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database connection successful"))
    .catch((error) => {
        console.log("database connection failed");
        console.log(error.message);
        process.exit(1);
    });
};

module.exports = dbconnect;