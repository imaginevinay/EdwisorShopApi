const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {   
        categoryId : {
            type : String,
            default : ''
        },        
        productId : {
            type : String,
            unique : true
        },
        productTitle : {
            type : String,
            default : ''
        },
        productDescription : {
            type : String,
            default : ''
        },
        size : {
            type : String,
            default : ''
        },
        color : {
            type : String,
            type : ''
        },
        specs : {
          type : String,
          default : ''
        },
        price  : {
            type : String,
            default : ''
        },
        seller : {
            type : String
        },
        reviews : {
            type : String,
            default : ''
        },
        createdOn : {
            type : Date,
            default : Date.now()
        },
        lastModified : {
            type : Date,
            default : Date.now()
        }
    }
);
mongoose.model('productModel',productSchema);