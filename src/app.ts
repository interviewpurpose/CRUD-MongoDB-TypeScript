import express, { Application, Request, Response } from "express";
const app: Application = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
