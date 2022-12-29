const express = require("express");

const connection = require("./config/database");

const messageRouter = require("./routes/message.routes");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/message",messageRouter);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home page.</h1>");
});

require("dotenv").config();

const {PORT} = process.env;

console.log(PORT);

app.listen(8080,async()=>{
    try{
        console.log(`Server is running on localhost port : ${PORT}`);
        connection;
        console.log("Connected with database");
    }catch(error){
        if( error ){
            console.log("Something went wrong with connecting database...");
            throw error;
        }
    }
});
