const sequelize = require("sequelize");

const connection = new sequelize('ac', 'root', "Albertongoma", {
    host: 'localhost',
    dialect: 'mysql',
})

connection.authenticate().then(() => {
    console.log("Database connected!")
}).catch((error) => {
    console.log(`error ${error}`)
})