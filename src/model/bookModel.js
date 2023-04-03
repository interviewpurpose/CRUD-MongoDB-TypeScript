import * as mongoose from "mongoose";
import { Model } from "mongoose";

type BookType = BookModel & mongoose.Document;
export interface BookModel {
    title: {
        type: String,
        required: true,
    };
    description: {
        type: String,
        required: true,
    };
}
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const Book: Model<BookType> = mongoose.model<BookType>("Book", BookSchema);
export default Book;