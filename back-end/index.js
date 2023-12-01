// dotenv has the port, and futuraly the database keys
import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT;

// default express
import express from 'express'
const app = express()

// simple test route
app.get('/', (req, res) => {
  res.send("Hello!");
})

// put the thing alive
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})