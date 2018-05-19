const express = require('express');
const router = express.Router();
const shopController = require('./../controllers/appControllers');
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/authenticator')



let setRouter = (app) =>{

    let baseUrl = appConfig.apiVersion + '/edwisorShop';

    app.get(`${baseUrl}/category/all`,auth.isAuthenticated,shopController.getAllCategories);

    /**
    * @api {get} http://localhost:3000/api/v1/edwisorShop/category/all Get all categories
    * @apiVersion 0.0.1
    * @apiGroup Read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "error": false,
    "message": "Categories Found!",
    "status": 200,
    "data": {
            "categoryTitle": "Electronics Store",
            "catDescription": "Search for Electronics",
            "createdOn": "2018-05-17T03:51:42.000Z",
            "lastModified": "2018-05-17T03:51:38.231Z",
            "categoryId": "BkI82OqAz"
        }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
   "error": true,
   "message": "Category not found",
   "status": 402,
   "data": null
}
*/

//get a category from category ID
    app.get(`${baseUrl}/category/:categoryId`,auth.isAuthenticated, shopController.getSingleCategory)
//en display single category

    /**
    * @api {get} http://localhost:3000/api/v1/edwisorShop/category/:categoryId  Get a single category
    * @apiVersion 0.0.1
    * @apiGroup Read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId The categoryId should be passed as the URL parameter.
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Category Found",
    "status": 200,
    "data": {
        "categoryTitle": "Electronics Store",
        "catDescription": "Search for Electronics",
        "createdOn": "2018-05-17T03:51:42.000Z",
        "lastModified": "2018-05-17T03:51:38.231Z",
        "categoryId": "BkI82OqAz"
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
   "error": true,
   "message": "Category Id is Incorrect",
   "status": 402,
   "data": null
}


*/

//create a new category
    app.post(`${baseUrl}/category/create`,auth.isAuthenticated, shopController.createCategory)
//end create new category

/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/category/create  Create a single category
    * @apiVersion 0.0.1
    * @apiGroup Create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Category Created",
    "status": 200,
    "data": {
        "categoryTitle": "Electronics Store",
        "catDescription": "Search for All Electronics",
        "createdOn": "2018-05-19T06:18:01.000Z",
        "lastModified": "2018-05-19T06:13:13.400Z",
        "_id": "5affc199bec54421346ec0e0",
        "categoryId": "BJWjWSpRz",
        "__v": 0
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
   "error": true,
   "message": "Category Not Created",
   "status": 402,
   "data": null
}


*/

//delete category
    app.post('/category/delete/:categoryId',auth.isAuthenticated, shopController.deleteCategory)
//end delete category

/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/category/delete/:categoryId  Delete a category
    * @apiVersion 0.0.1
    * @apiGroup Delete
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Category Found",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No category found",
    "status": 402,
    "data": null
}

*/

//edit category
    app.put(`${baseUrl}/category/:categoryId/edit`,auth.isAuthenticated, shopController.updateCategory);
//edit category end

/**
    * @api {put} http://localhost:3000/api/v1/edwisorShop/category/:categoryId/edit  Edit a Category
    * @apiVersion 0.0.1
    * @apiGroup Update
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Category Edited successfully!",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No category is edited!",
    "status": 402,
    "data": null
}

*/

    //for products route
//get all products in that category
    app.get(`${baseUrl}/:categoryId/product/all`,auth.isAuthenticated,shopController.getAllProducts)
//end get all products
/**
    * @api {get} http://localhost:3000/api/v1/edwisorShop/:categoryId/product/all  Get all products in a category
    * @apiVersion 0.0.1
    * @apiGroup Read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Found",
    "status": 200,
    "data": {

            "categoryId": "BkI82OqAz",
            "productTitle": "redmi note 5 pro",
            "productDescription": "Stunning visuals,FHD+ display, A powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB",
            "size": "5.99 inches",
            "specs": "4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li",
            "price": "14,999",
            "reviews": "Best Mobile| Best Camera | Worth of Money",
            "createdOn": "2018-05-18T04:03:53.774Z",
            "lastModified": "2018-05-18T04:03:53.774Z",
            "productId": "SkG3lRs0G"
        }
    }

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No product found",
    "status": 402,
    "data": null
}

*/

//get a single product
    app.get(`${baseUrl}/product/:productId`,auth.isAuthenticated, shopController.getSingleProduct)
//end get single product

/**
    * @api {get} http://localhost:3000/api/v1/edwisorShop/product/:productId  Get a single product
    * @apiVersion 0.0.1
    * @apiGroup Read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId ProductId of the product passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Found",
    "status": 200,
    "data": {
        "categoryId": "BkI82OqAz",
        "productTitle": "redmi note 5 pro",
        "productDescription": "Stunning visuals,FHD+ display",
        "size": "5.99 inches",
        "specs": "4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li",
        "price": "14,999",
        "reviews": "Best Mobile| Best Camera | Worth of Money",
        "createdOn": "2018-05-18T04:03:53.774Z",
        "lastModified": "2018-05-18T04:03:53.774Z",
        "productId": "SkG3lRs0G"
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No product found!",
    "status": 402,
    "data": null
}

*/

//create a product
    app.post(`${baseUrl}/:categoryId/product/create`,auth.isAuthenticated, shopController.createProduct)
//end create a product
/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/:categoryId/product/create  Create a product
    * @apiVersion 0.0.1
    * @apiGroup Create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Found",
    "status": 200,
    "data": {
        "categoryId": "BkI82OqAz",
        "productTitle": "redmi note 5 pro",
        "productDescription": "Stunning visuals,FHD+ display",
        "size": "5.99 inches",
        "specs": "4 GB RAM | 64 GB ROM | Expandable Upto 128 GB | 5.99 inch Full HD+ Display |12MP + 5MP Dual Rear Camera | 20MP Front Camera |4000 mAh Li",
        "price": "14,999",
        "reviews": "Best Mobile| Best Camera | Worth of Money",
        "createdOn": "2018-05-18T04:03:53.774Z",
        "lastModified": "2018-05-18T04:03:53.774Z",
        "productId": "SkG3lRs0G"
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No product found!",
    "status": 402,
    "data": null
}

*/

//delete a product
    app.post(`${baseUrl}/product/:productId/delete`,auth.isAuthenticated, shopController.deleteproduct)
//end delete product

/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/product/:productId/delete  Delete a Product
    * @apiVersion 0.0.1
    * @apiGroup Delete
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} productId ProductId of the product passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Deleted",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No product found!",
    "status": 402,
    "data": null
}

*/

//edit a product
    app.put(`${baseUrl}/:categoryId/:productId/edit`,auth.isAuthenticated, shopController.editProduct)
//end edit product
/**
    * @api {put} http://localhost:3000/api/v1/edwisorShop/:categoryId/:productId/edit  Edit a Product
    * @apiVersion 0.0.1
    * @apiGroup Update
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} categoryId CategoryId of the category passed as the URL parameter
    * @apiParam {String} productId ProductId of the product passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Found",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No product found!",
    "status": 402,
    "data": null
}

*/

    //for cart
//display cart info
    app.get(`${baseUrl}/cart/:cartId/all`,auth.isAuthenticated, shopController.displayCart)
//end display cart
/**
    * @api {get} http://localhost:3000/api/v1/edwisorShop/cart/:cartId/all  Get products in cart
    * @apiVersion 0.0.1
    * @apiGroup Read
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    * @apiParam {String} cartId CartId of the cart passed as the URL parameter
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "cart Found!",
    "status": 200,
    "data": [
        {
            "categoryId": "uiopp",
            "productId": "789jhyu,",
            "createdOn": "2018-05-19T08:16:51.179Z",
            "lastModified": "2018-05-19T08:16:51.179Z",
            "cartId": "H1s_TLpCM"
        }
    ]
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No Cart Found",
    "status": 402,
    "data": null
}

*/

//add products to cart
    app.post(`${baseUrl}/cart/add`,auth.isAuthenticated, shopController.addToCart);
//end add products
/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/cart/add  Create a new cart
    * @apiVersion 0.0.1
    * @apiGroup Create
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Product Added to cart",
    "status": 200,
    "data": {
        "categoryId": "BkI82OqAz",
        "productId": "Bde74S2Oq",
        "createdOn": "2018-05-19T07:46:21.451Z",
        "lastModified": "2018-05-19T07:46:21.451Z",
        "_id": "5affd64db9a19723ac47f16d",
        "cartId": "HkSI8U6CG",
        "__v": 0
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "Product cannot be added check the parameters",
    "status": 402,
    "data": null
}

*/

//delete cart 
    app.post(`${baseUrl}/cart/:cartId/delete`,auth.isAuthenticated,shopController.deleteCart)
//end delete cart
/**
    * @api {post} http://localhost:3000/api/v1/edwisorShop/cart/:cartId/delete  Delete cart
    * @apiVersion 0.0.1
    * @apiGroup Delete
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter)
    *
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
    "err": false,
    "message": "Cart Deleted!",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1
    }
}

     @apiErrorExample {json} Error-Response:
    *
    * {
   "error": true,
   "message": "Route Not Found",
   "status": 404,
   "data": null
}
{
    "err": true,
    "message": "No Cart Found",
    "status": 402,
    "data": null
}

*/

}

module.exports = {
    setRouter : setRouter
}