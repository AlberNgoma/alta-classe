const table = require("../models/index")
const bcrypt = require('bcrypt');


module.exports = {

    async create(req, res) {
        const { name, email, address, phone, password } = req.body;
        const safePassword = await bcrypt.hash(password, (10));

        try {
            const isExistEmail = await table.profile.findOne({ where: { email } });
            if (isExistEmail) return res.status(400).json("This email just exist !");

            const newProfile = await table.profile.create({
                name: name,
                email: email,
                password: safePassword,
                type: 'client'
            })

            const newClient = await table.client.create({
                address: address,
                phone: phone,
                profile_id: newProfile.id
            })

            return res.status(200).json({
                msg: 'success! client created',
                profile: newProfile,
                client: newClient
            })


        } catch (error) {
            console.log(`error creating client! ${error}`);
            res.status(500).json(`error! ${error}`)
        }




    },

    async read(req, res) {

        try {

            const users = await table.client.findAll({
                include: [
                    {
                        model: table.profile, as: 'profile',
                        attributes: ['name', 'email']
                    }
                ]
            })

            return res.status(201).json(users)

        } catch (error) {
            console.log(`error! ${error}`)
            res.status(500).json({ error: "error listing clients" })
        }
    },

    async update(req, res) {
        const client_id = req.params.id;
        const { name, email, address, phone } = req.body;

        try {

            const client = await table.client.findByPk(client_id);
            if (!client) return res.status(404).json({ error: "this client does´n exist" })

            const profile_id = client.profile_id;

            const newProfile = await table.profile.update(
                {
                    name: name,
                    email: email
                },
                {
                    where: { id: profile_id }
                }
            )

            const newClient = await table.client.update(
                {
                    address: address,
                    phone: phone
                },

                {
                    where: { id: client.id }
                }
            )

            return res.status(201).json("success, client updated!",
                newClient,
                newProfile
            )


        } catch (error) {
            console.log(`error! ${error}`);
            res.status(500).json({ error: "error updating client!" })
        }
    },

    async delete(req, res) {
        const client_id = req.params.id;
        try {

            const client = await table.client.findByPk(client_id);
            if (!client) return res.status(404).json("this client does´n exist!")
            const profile_id = client.profile_id;

            await table.client.destroy(
                {
                    where: { id: client.id }
                }
            )

            await table.profile.destroy(
                {
                    where: { id: profile_id }
                }
            )

            return res.status(201).json("success! client deleted ")



        } catch (error) {
            console.log(`error ! ${error}`)
            res.status(500).json({ error: "error deleting client" })
        }
    }




}

