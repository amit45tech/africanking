const express = require('express');
const router = express.Router();
require('dotenv').config();

const produce = require("../producer")

let   betStat="TRUE", crashresult = "", GameID = process.env.GAMEID, TableID = process.env.TABLEID, GameName = process.env.GAMENAME, TableName = process.env.TABLENAME;

//player Balance  
router.post("/createRound", async (req, res) => {
    try {
        const userId = req.body.UserId;
        const roundId = req.body.RoundId;

        const event = { "result": { "gameId": GameID, "gameName": GameName, "tableId": TableID, "tableName": TableName, "roundID": roundId, "roundStatus": "ROUND_START", "betStatus": "TRUE", "result": 0 } };

        // call the `produce` function and log an error if it occurs
        produce(event).catch((err) => {
            console.error("error in producer: ", err)
        });

        res.status(200).send("round Created successfully!");

    } catch (error) {
        res.status(500).json(error);
    }
});


//player Balance  
router.post("/roundStatus", async (req, res) => {
    try {
        const userId = req.body.UserId;
        const roundId = req.body.RoundId;
        const rStatus = req.body.Rstatus;
        const betStat = req.body.BetStatus;

        const event = { "result": { "gameId": GameID, "gameName": GameName, "tableId": TableID, "tableName": TableName, "roundID": roundId, "roundStatus": rStatus, "betStatus": betStat, "result": 0 } };

        // call the `produce` function and log an error if it occurs
        produce(event).catch((err) => {
            console.error("error in producer: ", err)
        });

        res.status(200).send(rStatus);

    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;