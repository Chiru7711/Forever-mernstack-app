import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";


// function for add product 
const addProduct = async (req, res) =>{
    try {
        const {name, description, price, category, subCategory, sizes, bestseller, bestsellerNum} = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        // check if all images are provided
        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        //upload the images to the cloudinary storage

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await  cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )
        // to parsed result sizes
        const parsedSizes = Array.isArray(sizes) ? sizes : sizes ? JSON.parse(sizes) : [];
        // save the data in mongodb
        const productData = {
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes: parsedSizes,
            bestseller: bestseller === "true" || bestseller === true || bestsellerNum === 1 || bestsellerNum === "1",
            image: imagesUrl,
            date: Date.now()
        }
        
        // For debugging if needed
        // console.log(productData); 
        
        const product = new productModel(productData);
        await product.save();


        res.json({success: true, message:"Product saved successfully"})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// function for list products

const  listProducts = async (req, res) =>{
    try {
        const  products = await productModel.find({});
        
        // Clean up malformed sizes data
        const cleanedProducts = products.map(product => {
            if (product.sizes) {
                let cleanedSizes = product.sizes;
                
                // If sizes is a string that looks like an array, parse it
                if (typeof product.sizes === 'string') {
                    try {
                        cleanedSizes = JSON.parse(product.sizes);
                    } catch (e) {
                        cleanedSizes = product.sizes.split(',').map(s => s.trim());
                    }
                }
                
                // Clean up individual size strings
                if (Array.isArray(cleanedSizes)) {
                    cleanedSizes = cleanedSizes.map(size => {
                        if (typeof size === 'string') {
                            return size.replace(/["\'\[\]]/g, '').trim();
                        }
                        return size;
                    }).filter(size => size && size.length > 0);
                }
                
                return { ...product.toObject(), sizes: cleanedSizes };
            }
            return product;
        });
        
        res.json({success: true, products: cleanedProducts})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// function for removing product

const removeProduct = async (req, res) =>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message:"Product removed successfully"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// function for single product info 
const singleProduct = async (req, res) =>{
    try {
        
        const { productId} = req.body 
        const product = await productModel.findById(productId)
        res.json({success: true, product})
 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export {listProducts, addProduct, singleProduct, removeProduct}