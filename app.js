//imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 3001;
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(cookieParser("recipespotsecure"));
app.use(
  session({
    secret: "recipespotsecure",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(flash());
app.use(fileUpload());

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log("Server up at port " + port);
});
