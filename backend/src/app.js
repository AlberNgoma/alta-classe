const express = require("express");
const cors = require("cors");
const clientRoute = require("./routes/client-route")

const app = express();

app.use(cors())
app.use(express.json())


app.use("/", clientRoute)

app.listen(4000, () => {
    console.log("server is runing...")
})


