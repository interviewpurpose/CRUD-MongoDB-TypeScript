"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bookRoute_1 = __importDefault(require("./route/bookRoute"));
const app = (0, express_1.default)();
// database
mongoose_1.default.connect(`${process.env.MONGO_URI}`);
app.use(express_1.default.json());
app.use('/api/books', bookRoute_1.default);
app.get("/", (req, res) => {
    res.send("welcome");
});
app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
