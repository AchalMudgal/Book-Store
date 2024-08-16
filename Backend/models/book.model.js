import {Schema,model} from "mongoose";

const bookSchema = new Schema({
  title:{type:String,required:true},
  auther:{type:String,required:true},
  publishYear:{type:Number,required:true}
},{timestamps:true})

export const Book = model("book",bookSchema);