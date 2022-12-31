const  Message = require("../models/message.models");

const postMessage = async ( req, res )=>{
    const { name, email, message } = req.body;
    try {
        const payload = new Message({
        name,
        email,
        message
        });
        console.log(payload);
        payload.save();
        res.status(200).json({"msg":"message posted successfully"});
    } catch (error) {
        res.status(404).json({"error":error});
    }
}

module.exports= postMessage;

