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
    },

    async read(req, res) {
        try {

            const product = await table.product.findAll()
            return res.status(201).json(product)

        } catch (error) {
            console.log("error ! cannot posible lister products")
            res.status(500).json({ error: "cannot posible lister products" })
        }
    },

    async update(req, res) {
        const product_id = req.params.id;
        const { name, description, price, category, madeIn, picture } = req.body;

        try {

            const product = await table.product.findByPk(product_id);
            if (!product) return res.status(400).json("this product doesn´t exist");

            const newProduct = await table.product.update(
                {
                    name: name,
                    description: description,
                    price: price,
                    category: category,
                    madeIn: madeIn,
                    picture: picture
                },

                {
                    where: { id: product.id }
                }
            )

            return res.status(201).json({ msg: "product updated", product: newProduct })


        } catch (error) {
            console.log(`error : ${error}`);
            res.status(500).json({ error: "can´t update product!" })
        }


    },

    async delete(req, res) {
        const product_id = req.params.id;

        try {

            const product = await table.product.findByPk(product_id);
            if (!product) return res.status(404).json("this product doesn´t exist!")
            await product.destroy()

            return res.status(201).json("success! product deleted")

        } catch (error) {
            console.log(`error! ${error}`);
            res.status(500).json("error! imposible delete product")
        }
    }
}