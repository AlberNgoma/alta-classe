const express = require("express");
const cors = require("cors");
require("dotenv").config()


const client = require("./routes/client-route");
const product = require("./routes/product-router");
const login = require("./routes/login-route")

const app = express();

app.use(cors())
app.use(express.json())


app.use("/", client)
app.use("/", product)
app.use("/", login)

app.listen(4000, () => {
    console.log("server is runing...")
})


