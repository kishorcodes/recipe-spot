//imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const session = require("express-session");
console.log(fileUpload);
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));

//main layout(header,footer)
app.set("layout", "./layouts/main");

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

//recipe routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log("Server up at port " + port);
});
