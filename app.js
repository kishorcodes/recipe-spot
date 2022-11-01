//imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

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

//recipe routes
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log("Server up at port " + port);
});
