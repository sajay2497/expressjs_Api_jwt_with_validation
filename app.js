require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./api/users/user.router");

app.use("/api/users",userRouter);

app.listen(process.env.MYSQL_HOST, () => {
    console.log("server up and running on PORT :", process.env.MYSQL_HOST);
  });