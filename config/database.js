const mongoose = require("mongoose");

const dotenv = require("dotenv");

mongoose.set('strictQuery', false);

dotenv.config();

const { MONGO_URL } = process.env;

const connection = mongoose.connect(MONGO_URL);

module.exports = connection ;