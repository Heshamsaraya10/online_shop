const { rejects } = require('assert')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const { test } = require('node:test')
const { resolve } = require('path')
const { promises } = require('readline')

const DB_URL = 'mongodb://localhost:27017/online-shop'

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: String,
    price: Number,
})

async function main() {
    await mongoose.connect(DB_URL);
}

main().catch(err => console.log(err));


const product = mongoose.model('product', productSchema)

exports.getAllProducts = async () => {
    try {
        await mongoose.connect(DB_URL);
        // await product.insertMany([
        //     // {
        //     //     name: "phone",
        //     //     price: 120,
        //     //     image: 'https://m.media-amazon.com/images/I/51mH1rGI3lL._AC_SX569_.jpg',
        //     //     category: "mobile",
        //     //     descreption: "android phone"
        //     // },
        //     // {
        //     //     name: "samsung",
        //     //     price: 100,
        //     //     image: 'https://m.media-amazon.com/images/I/61mOx8va+LL._AC_SY300_SX300_.jpg',
        //     //     category: "mobile",
        //     //     descreption: "android phone "
        //     // },
        //     // {
        //     //     name: "iphone",
        //     //     price: 1000,
        //     //     image: 'https://m.media-amazon.com/images/I/51AbpyEpuCL._AC_SX679_.jpg',
        //     //     category: "mobile",
        //     //     descreption: "ios"
        //     // },
        //     // {
        //     //     name: "iphone",
        //     //     price: 700,
        //     //     image: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX569_.jpg',
        //     //     category: "mobile",
        //     //     descreption: "ios"
        //     // },
        //     // {
        //     //     name: "T-shirt",
        //     //     price: 50,
        //     //     image: 'https://assets.hermes.com/is/image/hermesproduct/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_g.jpg',
        //     //     category: "clothes",
        //     //     descreption: "t shirt"
        //     // },
        //     // {
        //     //     name: "T-Shirt",
        //     //     price: 60,
        //     //     image: 'https://www.stoneycreekhunting.co.nz/image/cache/catalog/product_images/corporate/mens/shirts/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg',
        //     //     category: "clothes",
        //     //     descreption: "shirt"
        //     // },
        //     // {
        //     //     name: "jacket",
        //     //     price: 30,
        //     //     image: 'https://cdn.shopify.com/s/files/1/0017/2146/6995/products/QX-1_FRONT_AzureBlue_2faa399c-44af-4a43-9fd8-4be87ff5fc41_2000x.jpg',
        //     //     category: "clothes",
        //     //     descreption: "jacket"
        //     // },
        //     // {
        //     //     name: "T-shirt",
        //     //     price: 20,
        //     //     image: 'https://www.americaneagle.com.eg/assets/AmericanEagle/1165_9152_001/1165_9152_001_f.jpg',
        //     //     category: "clothes",
        //     //     descreption: "shirt"
        //     // },
        //     // {
        //     //     name: "Labtop",
        //     //     price: 700,
        //     //     image: 'https://m.media-amazon.com/images/I/614kA8ZXwFL._AC_UF894,1000_QL80_.jpg',
        //     //     category: "combuters",
        //     //     descreption: "combuters"
        //     // },
        //     // {
        //     //     name: "Labtop",
        //     //     price: 2000,
        //     //     image: 'https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/00dc6d0e8ad8391a8b0483d9786fce84/s/p/sp776-mbp15touch-space.jpeg',
        //     //     category: "combuters",
        //     //     descreption: "combuters"
        //     // },
        //     // {
        //     //     name: "Labtop",
        //     //     price: 500,
        //     //     image: 'https://m.media-amazon.com/images/I/91zKmiPmArS._AC_UF1000,1000_QL80_.jpg',
        //     //     category: "combuters",
        //     //     descreption: "combuters"
        //     // },
        //     // {
        //     //     name: "Labtop",
        //     //     price: 600,
        //     //     image: 'https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/8/1/81otveo4fnl._ac_sl1500_.jpg',
        //     //     category: "combuters",
        //     //     descreption: "combuters"
        //     // },
        // ])

        return await product.find({})
    } catch (err) { console.log(err) }
}

exports.insertMany = async () => {
    try {
        await mongoose.connect(DB_URL);
        await product.insertMany([
            {
                name: "phone",
                price: 120,
                image: 'https://m.media-amazon.com/images/I/51mH1rGI3lL._AC_SX569_.jpg',
                descreption: "android phone"
            },

        ])
    } catch (err) { console.log(err) }
}

exports.getAllProductsbycategory = async (category) => {
    try {
        await product.category
        await mongoose.connect(DB_URL);
        return result = await product.find({ category: category })
    } catch (err) { console.log(err) }
};

exports.getProductById = async (id) => {
    try {
        // await product.findById(id)
        await mongoose.connect(DB_URL);
        const result = await product.findById(id)
        return result
    } catch (err) { console.log(err) }

}

exports.getFirstProduct = async (product) => {
    try {
        await mongoose.connect(DB_URL)
        const result = await product.findOne({})
        return result
    } catch (err) { console.log(err) }

}

