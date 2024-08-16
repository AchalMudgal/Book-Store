import { Book } from "../models/book.model.js";
import { STATUS } from "../common/configs.js";
import { json } from "express";

export const addBook = async(req,res) =>{
  try {
    const {title,auther,publishYear} = req.body;
    const isBook = await Book.findOne({title,auther,publishYear});
    if(isBook) return res.status(STATUS.BAD_REQUEST).json({message:`${title} book already exist!`});
    const newBook = new Book({title:title,auther:auther,publishYear:publishYear});
    await newBook.save();
    return res.status(STATUS.CREATED).json({message:`${title} book created successfully`,data:newBook}); 
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message})
  }
}

export const getAllBooks = async(req,res) => {
  try {
    const allBooks = await Book.find();
    return res.status(STATUS.OK).json({message:"All books data fetched successfully",count:allBooks.length,data:allBooks});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message})
  }
}

export const bookById = async (req,res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if(!book) return res.status(STATUS.BAD_REQUEST).json({message:"Book _id is required!"});
    return res.status(STATUS.OK).json({message:"Data fetched successfully",data:book});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message});
  }
}

export const updateBookById = async (req,res) => {
  try {
    const id = req.params.id;
    const isBook = await Book.findById(id);
    if(!isBook) return res.status(STATUS.BAD_REQUEST).json({message:`${id} does not exist!`});

    isBook.title = req.body.title || isBook.title;
    isBook.auther = req.body.auther || isBook.auther;
    isBook.publishYear = req.body.publishYear || isBook.publishYear;

    const updatedBook = await isBook.save();
    return res.status(STATUS.OK).json({message:"Book updated successfully",data:updatedBook});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message})
  }
}

export const deleteBookById = async(req,res) => {
  try {
    const id = req.params.id;
    const isDelete = await Book.findByIdAndDelete(id);
    if(!isDelete) return res.status(STATUS.BAD_REQUEST).json({message:"Book does not exist!"});
    return res.status(STATUS.OK).json({message:`${isDelete.title} book deleted successfully`});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message})
  }
}