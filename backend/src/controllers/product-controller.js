const table = require("../models/index");

module.exports = {

    async create(req, res) {
        const { name, description, price, category, madeIn } = req.body;
        const picture = req.file.path;

        try {

            if (!picture) return res.status(404).json("image is required!");

            const newProduct = await table.product.create({
                name: name,
                description: description,
                price: price,
                category: category,
                madeIn: madeIn,
                picture: picture
            })
            return res.status(201).json({
                msg: "success! product created",
                product: newProduct
            })

        } catch (error) {
            console.log(`error ! creating product`)
        }
    }
}