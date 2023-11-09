import express from "express"
import sequelize from './src/db';
import app from "./src/server"
import { Request, Response } from "express";
const port = 3001

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error: any) => {
    console.error('Error connecting to the database:', error);
  });