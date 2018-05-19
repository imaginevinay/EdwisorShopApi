const express = require('express');
const mongoose = require ('mongoose');
const shortId = require ('shortid'); 
const response = require ('./../response/responseLib')
const logger = require('./../response/loggerLib')
const check = require('./../response/checkLib')
const time = require('./../response/timeLib')

//importing mongood=se model collection
const categoryModel = mongoose.model('categoryModel')
const productModel  = mongoose.model('productModel')
const cartModel = mongoose.model('cartModel');

//getting all categories
let getAllCategories = (req,res) =>{
    categoryModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            console.log(err);
            logger.error(err.message,'getAllCategories',10)
            let apiResponse = response.generate(true,'Error Occured', 500, null)
            res.send(apiResponse);
        }
        else if (check.isEmpty(result)) {
            logger.info('No field found' , 'getAllCategories')
            let apiResponse = response.generate(true, 'No category found' , 402, null)
            res.send(apiResponse);
        }
        else {  
            logger.info('Category Details Captured!', 'Category Controller: getAllCategory', 10)
            let apiResponse = response.generate(false,'Category Found', 200, result)
            res.send(apiResponse);
        }
    })
}

//get single category
let getSingleCategoryFunction = (req,res) =>{
    categoryModel.findOne({'categoryId' : req.params.categoryId})
    .select('-__v -_id')
    .exec((err,result) =>{
        if(err) {
            logger.error(err.message,'find one category', 10);
            let apiResponse = response.generate(true, 'Not Found', 500, null)
            res.send(apiResponse)
        }
        else if (check.isEmpty(result)){
            logger.info('No field found ','get single category')
            let apiResponse = response.generate(true, 'Category Id is incorrect' , 402, null)
        }
        else {
            logger.info('Category Details Captured!', 'Category Controller: singleCategory', 10)
            let apiResponse = response.generate(false,'Category Found', 200, result)
            res.send(apiResponse);
        }
    })
}

//create a category
let createCategory = (req,res) =>{
        console.log(req.body);
        var today = time.getLocalTime();
        let catId = shortId.generate();

        let  newCategory = new categoryModel ({
            categoryId : catId,
            categoryTitle : req.body.title,
            catDescription : req.body.description,
            createdOn : today,
            lastmodified : today
        })

        newCategory.save((err,result) =>{
            if(err){
                console.log(err);
                logger.error(err.message,'create Category',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No field found' , 'create New Category')
                let apiResponse = response.generate(true, 'Cannot create category' , 402, null)
                res.send(apiResponse);
            }
            else {  
                logger.info('Category Created!', 'Category Controller: createCategory', 10)
                let apiResponse = response.generate(false,'Category Created', 200, result)
                res.send(apiResponse);
            }
        })
    }

    //delete category 
    let deleteCategoryFunction = (req,res) =>{
        categoryModel.remove({ 'categoryId': req.params.categoryId }, (err,result) =>{
            if(err){

                logger.error(err.message,'delete category',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (result.n == 0) {
                logger.info('No field found' , 'delete category')
                let apiResponse = response.generate(true, 'No category found' , 402, null)
                res.send(apiResponse);
            }
            else {  
                logger.info('Category Details Deleted !', 'Category Controller: deteleCategory', 10)
                let apiResponse = response.generate(false,'Category Found', 200, result)
                res.send(apiResponse);
            }
        })
    }

    //update Category
    let updateCategoryFunction = (req,res)=>{
        let options = req.body;
        console.log(options)
        categoryModel.updateOne({ 'categoryId': req.params.categoryId }, options, (err, result) => {
            
            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)

            } else if (check.isEmpty(result) || result.nModified == 0  ) {

                logger.info('No category is edited', 'Category Controller: editCategory', 5)
                let apiResponse = response.generate(true, "No category is edited!", 402, null);
                console.log(result)
                res.send(apiResponse)
            } else {
                logger.info('Category Edited Successfully!', 'Category Controller: editCategory', 10)
                let apiResponse = response.generate(false, "Category Edited successfully!", 200, result);                
                res.send(apiResponse);
            }
        });
    }

    //display all products in a category
    let getAllProducts = (req,res) =>{
        productModel.find({'categoryId' : req.params.categoryId})
        .select('-__v -_id')
        .lean()
        .exec((err,result)=>{
            if(err){
                console.log(err);
                logger.error(err.message,'get all products',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No field found' , 'get all products')
                let apiResponse = response.generate(true, 'No product found' , 402, null)
                res.send(apiResponse);
            }
            else {  
                logger.info('Product Details Captured!', 'Product Controller: getAllProduct', 10)    
                let apiResponse = response.generate(false,'Products Found', 200, result)
                res.send(apiResponse);
            }
        })
    }

    //create a product in category
    let createProductInCategory = (req,res) =>{
        let time = Date.now();
        let prodId = shortId.generate();

        let newProduct = new productModel ({

            categoryId :  req.params.categoryId,
            productId : prodId,
            productTitle : req.body.name,
            productDescription : req.body.description,
            size : req.body.size,
            color : req.body.color,
            specs : req.body.specs,
            price : req.body.price,
            seller : req.body.seller,
            reviews : req.body.reviews,
            createdOn : time,
            lastModified : time
        });
        newProduct.save((err,result)=>{
            if(err){
                console.log(err);
                logger.error(err.message,'create product',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No field found' , 'create product')
                let apiResponse = response.generate(true, 'No product was created' , 402, null)
                res.send(apiResponse);
            }
            else {  
                logger.info('Product Created!', 'Product Controller: createProduct', 10)
                let apiResponse = response.generate(false,'Product Created', 200, result)
                res.send(apiResponse);
            }
        })
    }//end of new product created

    //edit product in a category
    let editProduct = (req,res) =>{
        let options  = req.body;
        productModel.update({'productId' : req.params.productId}, options , {multi : true} , (err,result) =>{
            if(err){
                console.log(err);
                logger.error(err.message,'edit product',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No field found' , 'edit product')
                let apiResponse = response.generate(true, 'No product found' , 402, null)
                res.send(apiResponse);
            }
            else { 
                logger.info('Product Details Captured!', 'Product Controller: editProduct', 10)     
                let apiResponse = response.generate(false,'Product Found', 200, result)
                res.send(apiResponse);
            }
        })
    }

    //delete product
    let deleteproduct = (req,res) =>{
        productModel.remove({'productId' : req.params.productId}, (err,result)=>{
            if(err){
                console.log(err);
                logger.error(err.message,'delete product',10)
                let apiResponse = response.generate(true,'Error Occured', 500, null)
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No field found' , 'delete product')
                let apiResponse = response.generate(true, 'No product found' , 402, null)
                res.send(apiResponse);
            }
            else { 
                logger.info('Product Details Captured!', 'Product Controller: deleteProduct', 10)    
                let apiResponse = response.generate(false,'Product Deleted', 200, result)
                res.send(apiResponse);
            }
        })
    }
    //get single product
let getSingleProductFunction = (req,res) =>{
    productModel.findOne({'productId' : req.params.productId})
    .select('-__v -_id')
    .exec((err,result) =>{
        if(err) {
            logger.error(err.message,'find one product', 10);
            let apiResponse = response.generate(true, 'Not Found', 500, null)
            res.send(apiResponse)
        }
        else if (check.isEmpty(req.params.productId)){
            logger.info('No field found ','get single product')
            let apiResponse = request.generate(true, 'No product found' , 402, null)
        }
        else {
            logger.info('Product Details Captured!', 'Product Controller: getSingleProduct', 10)
            let apiResponse = response.generate(false,'Product Found', 200, result)
            res.send(apiResponse);
        }
    })
}

//display cart 
 let addToCartFunction = (req,res) =>{
         if(check.isEmpty(req.body.prodId)) {
             logger.error('Error Occured : Parameters Missing', 'Origin : add to cart function', 5);
             let apiResponse = response.generate(true, 'Product cannot be added check the parameters', 402, null);
             res.send(apiResponse)
         }
         else {
            let time = Date.now()
            let id = shortId.generate();
            let newCart = new cartModel (
        {
            cartId : id,
            categoryId : req.body.catId,
            productId : req.body.prodId,
            createdOn : time,
            lastModified : time
         }
    );
    newCart.save((err,result) =>{
        if(err){
            logger.error('Error Occured : Paramerts Incorrect', 'Cannot save new cart',10);
            let apiResponse = response.generate(true,'Product cannot be added', 402,null);
            res.send(apiResponse)
        }
        else{
            logger.info('Product added successfully','Add Product to cart', 200, result);
            let apiResponse = response.generate(false,'Product Added to cart', 200,result);
            res.send(apiResponse)
        }
    })
        }//end else     

 }

 let displayCart = (req,res) =>{
     cartModel.find({'cartId' : req.params.cartId})
     .select('-__v -_id')
     .lean()
     .exec((err,result) =>{
         if(err) {
             logger.error('Cart not found', 'cartDisplayFunction', 10)
             let apiResponse = response.generate(true,'Cart Not Found',402,null);
             res.send(apiResponse);
         }
         else if (check.isEmpty(result)) {
            logger.info('No field found' , 'display cart')
            let apiResponse = response.generate(true, 'No Cart Found', 402, null)
            res.send(apiResponse);
        }
         else{
             logger.info('Cart Found!', 'cart display function', 10);
             let apiResponse = response.generate(false,'Cart Found!', 200,result);
             res.send(apiResponse);
         }
     })
 }//end display cart


 //delete cart 
 let deleteCart = (req,res) =>{
     cartModel.remove({'cartId' : req.params.cartId},(err,result) =>{
        if(err)
        {
           logger.error('Cart not deleted', 'cartDeleteFunction', 10)
            let apiResponse = response.generate(true,'Cart Not Found',402,null);
            res.send(apiResponse); 
        }
        else {
               logger.info('Cart Deleted!', 'cart delete function', 10);
               let apiResponse = response.generate(false,'cart deleted!', 200,result);
               res.send(apiResponse);
           }
        })
 }//end delete cart

module.exports = {
    
    getAllCategories : getAllCategories,
    getSingleCategory : getSingleCategoryFunction,
    createCategory : createCategory,
    deleteCategory  : deleteCategoryFunction,
    updateCategory : updateCategoryFunction,
    getAllProducts : getAllProducts,
    createProduct : createProductInCategory,
    editProduct : editProduct,
    deleteproduct : deleteproduct,
    getSingleProduct : getSingleProductFunction ,
    addToCart  :addToCartFunction,
    displayCart : displayCart,
    deleteCart : deleteCart
    
}