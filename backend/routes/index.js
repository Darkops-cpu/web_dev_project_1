const express = require('express')

const router = express.Router()


const questionRouter = require('./Question')
const answerRouter = require('./Answer')

//Base Route
router.get("/", (req, res) => {
    res.send("This api is reserved for discussion forum")
});

router.use("/questions", questionRouter);  //Questions Route
router.use("/answers", answerRouter);      //Answers Route


module.exports = router