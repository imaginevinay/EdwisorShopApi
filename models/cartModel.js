const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = new Schema(
    {
    cartId : {
        type : String,
        unique : true
    },
    categoryId : {
        type : String,
        default  :''
    },
    productId: {
        type: String,
        default : ''
    },
    createdOn : {
        type:  Date,
        default : Date.now()
    },
    lastModified :{
        type : Date,
        default : Date.now()
    }
});
mongoose.model('cartModel', cartSchema)
