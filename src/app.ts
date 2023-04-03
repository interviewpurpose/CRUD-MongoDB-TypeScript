require('dotenv').config();
import express, { Application, Request, Response } from "express";
import db from "mongoose";
import BookRouter from './route/bookRoute';

const app: Application = express();


// database
db.connect("mongodb://localhost:27017/bookShelf");

app.use(express.json());
app.use('/api/books', BookRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})