import express from 'express';

const router = express.Router();
import { getAllBooks, getSingleBook,createBooks,updateBook,deleteBook } from '../controller/bookController';

/**
 * @swagger
 * /api/books:
 *  get:
 *    summary: Get all books 
 *    tags: [Book]
 *    responses:
 *      200:
 *        description: The list of books
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Book'
 */
router.route('/').get(getAllBooks);
/**
 * @swagger
 * /api/books/{id}:
 *  get:
 *    summary: Get books by id
 *    tags: [Book]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id of books
 *        schema:
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: books by its id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      500:
 *        description: Internal server error 
 */
router.route('/:id').get(getSingleBook);
/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - title
 *        - description
 *      properties:
 *        title:
 *          type: string
 *          description: name of the book
 *        description:
 *          type: string
 *          description: total quantity of the book
 */

/**
 * @swagger
 * /api/books:
 *  post:
 *    summary: create a new book
 *    tags: [Book]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      500:
 *        description: Internal server error
 */
router.route('/').post(createBooks);
/**
 * @swagger
 * /api/books/{id}:
 *  put:
 *    summary: Update book by id
 *    tags: [Book]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: book id
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: book was not found
 *      500:
 *        description: Internal server error
 */
router.route('/:id').put(updateBook);
/**
 * @swagger
 * /api/books/{id}:
 *  delete:
 *    summary: remove book from array
 *    tags: [Book]
 *    parameters:
 *      - in: path
 *        name: id
 *        description: book id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: The book was deleted
 *      404:
 *        description: The book was not found
 */

router.route('/:id').delete(deleteBook);

export default router;