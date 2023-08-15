const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    price:Number,
    category: {
      type: String,
      enum: ["SUV", "SUPERCAR", "CLASS"],
      default: "CLASS"
    }
  });
const userSchema = new mongoose.Schema ({
  username:String,
  email :String,
  password:String
})
const Users =mongoose.model("Users",userSchema) ;
const Product = mongoose.model("Product", productSchema);
module.exports = {Product,Users}
;
