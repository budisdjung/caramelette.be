require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const recipeRouter = require("./routes/recipe");

app.use(bodyParser.json());
app.use("/caramelette", recipeRouter);

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(
      `Server is successfully running, and app is listening to port ${process.env.PORT}`
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
