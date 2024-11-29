const express = require('express');
const cors = require('cors');
const path= require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 80;
const db = require("./db")
const router = require("./routes")

//swagger
const YAML = require("yamljs")
const swaggerJSDocs = YAML.load("./backend/api.yaml")
const swaggerUI = require("swagger-ui-express")

//Swagger Route
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))



//database connection
db.connect();


//middleware
app.use(bodyParser.json({ limit: "50mb"}))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb"}))


//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "*")
    next()
})

//routes
app.use('/api', router);


app.use('/uploads', express.static(path.join(__dirname, "/../uploads")))
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    }catch (e)  {
        res.send("Oops! Unexpected Error")
    }
})

app.use(cors())

//server listening
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Listening on port no ${PORT}`)
})

