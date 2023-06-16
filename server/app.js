const express = require("express")
const app = express();
app.use(express.json());

require('dotenv').config()

const mail = require("./sendMail")
const cors = require("cors")

app.use(cors())
app.post("/mail",mail)

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})