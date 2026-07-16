const table = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


module.exports = {
    async login(req, res) {
        
        const { email, password } = req.body;

        try {
            const profile = await table.profile.findOne({ where: { email } })

            if (!profile) return res.status(404).json("this profile doesn´t exist");

            const validPassword = await bcrypt.compare(password, profile.password);
            if (!validPassword) return res.status(401).json("password is wrong");

            const token = jwt.sign(
                {
                    id: profile.id,
                    name: profile.name,
                    type: profile.type
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES
                }
            )

            return res.status(200).json({
                msg: "success! login is done",
                token: token
            })



        } catch (error) {
            console.log(`error ! ${error}`);
            res.status(500).json({ error: "couldn´t login" })
        }
    }
}