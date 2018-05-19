const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema(
    {
        categoryId : {
            type : String,
            unique : true
        },
        categoryTitle: {
            type : String,
            default : ''
        },
        catDescription : {
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
mongoose.model('categoryModel',categorySchema);