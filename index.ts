import express from "express"
import sequelize from '../server/src/db';
import app from "../server/src/server"
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'));


sequelize.sync({ force: true })
  .then(() => {
    console.log('Database connected.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });