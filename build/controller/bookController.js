"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBooks = exports.getSingleBook = exports.getAllBooks = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Books = yield bookModel_1.default.find({});
        res.status(200).json(Books);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getAllBooks = getAllBooks;
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const book = yield bookModel_1.default.findOne({ _id: id });
        res.status(200).json(book);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getSingleBook = getSingleBook;
const createBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.create(req.body);
        return res
            .status(200)
            .json({ message: "Book created successfully", data: books });
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.createBooks = createBooks;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield bookModel_1.default.findByIdAndUpdate(id, req.body);
        return res
            .status(200)
            .json({ message: "Book updated successfully!", data: book });
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield bookModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({ message: "Book deleted successfully!" });
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
});
exports.deleteBook = deleteBook;
