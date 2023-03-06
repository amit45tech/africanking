const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('dotenv').config();
const cors = require('cors');

const userRoutes = require('./routes/action');
const bodyParser = require('body-parser');

const produce = require("./producer")


const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});

let port = process.env.PORT ;

app.use(bodyParser.json());

app.use(cors());
app.use('/', userRoutes);
app.get("/", (req, res) => res.send('HEllo from  new express'));
app.all("*", (req, res) => res.send("This doesn't exist!"));














server.listen(port, () => {
    console.log("server is listening to port ...", port);
});