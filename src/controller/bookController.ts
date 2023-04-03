import { RequestHandler } from "express";

import Book from "../model/bookModel";

const getAllBooks: RequestHandler = async (req, res) => {
  try {
    const Books = await Book.find({});
    res.status(200).json(Books);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getSingleBook: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBooks: RequestHandler = async (req, res) => {
  try {
    const books = await Book.create(req.body);
    return res
      .status(200)
      .json({ message: "Book created successfully", data: books });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
const updateBook: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    return res
      .status(200)
      .json({ message: "Book updated successfully!", data: book });
  } catch (error: any) {
    return res.status(500).json({ message: error });
  }
};

const deleteBook: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    return res.status(200).json({ message: "Book deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error });
  }
};
export { getAllBooks, getSingleBook, createBooks, updateBook, deleteBook };
