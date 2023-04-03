import express from 'express';

const router = express.Router();
import { getAllBooks, getSingleBook,createBooks,updateBook,deleteBook } from '../controller/bookController';

router.route('/').get(getAllBooks);
router.route('/:id').get(getSingleBook);
router.route('/').post(createBooks);
router.route('/:id').put(updateBook);
router.route('/:id').delete(deleteBook);

export default router;