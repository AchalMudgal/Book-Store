import express from "express";
const router = express.Router();
import { addBook,getAllBooks,bookById,updateBookById,deleteBookById } from "../controller/book.controller.js";

router.post("/addBook",addBook);
router.get("/getBooks",getAllBooks);
router.get("/book/:id",bookById);
router.put("/book/:id",updateBookById);
router.delete("/book/:id",deleteBookById);
export default router;