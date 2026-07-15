const express = require("express");
const cors = require("cors");
const client = require("./routes/client-route")
const product = require("./routes/product-router")

const app = express();

app.use(cors())
app.use(express.json())


app.use("/", client)
app.use("/", product)

app.listen(4000, () => {
    console.log("server is runing...")
})


