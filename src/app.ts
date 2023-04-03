require('dotenv').config();
import express, { Application, Request, Response } from "express";
import db from "mongoose";
import BookRouter from './route/bookRoute';

// swagger
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app: Application = express();


// database
db.connect(`${process.env.MONGO_URI}`);

const options = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "REST API for Swagger Documentation",
        version: "1.0.0",
      },
      schemes: ["http", "https"],
      servers: [{ url: "http://localhost:3000/" }],
    },
    apis: ['./build/route/*.js'],
  };
  const swaggerSpec = swaggerJSDoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api/books', BookRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})