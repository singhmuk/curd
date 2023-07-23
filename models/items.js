import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {type:String, required:true},
  address: {type:String, required:true},
})

const Items = mongoose.model('curd', ItemSchema);
export default Items;