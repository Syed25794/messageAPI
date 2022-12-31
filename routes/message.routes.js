const Router = require("express");

const postMessage = require("../controllers/message.controllers");

const messageRouter = Router();

messageRouter.post("/create",postMessage);

module.exports = messageRouter ;