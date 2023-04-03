"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const bookController_1 = require("../controller/bookController");
router.route('/').get(bookController_1.getAllBooks);
router.route('/:id').get(bookController_1.getSingleBook);
router.route('/').post(bookController_1.createBooks);
router.route('/:id').put(bookController_1.updateBook);
router.route('/:id').delete(bookController_1.deleteBook);
exports.default = router;
