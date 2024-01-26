const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const employeeRouter = require("./routes/employee");

const cookieParser = require("cookie-parser");

dotenv.config();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to mongodb"))
  .catch((err) => console.timeLog(err));

app.use("/api/employee/", employeeRouter);

app.listen(process.env.PORT, () => {
  console.log("connected to 5000");
});
