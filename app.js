const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.set("layout", "./layouts/main");

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log("Server up at port " + port);
});


// connectDB();

// const mysql = require("mysql2");
// const express = require("express");
// const app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded());
// app.use(express.static(__dirname + "/public"));
// const con = mysql.createConnection({
//   host: "localhost",
//   user: "kishor",
//   password: "kishorx123",
//   insecureAuth: true,
//   database: "kappe",
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected to mysql");
// });

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/submit", (req, res) => {
//   const { collegename, place, phone } = req.body;
//   if (collegename && place && phone) {
//     con.query(
//       `INSERT INTO dkcolleges(name,place,phone) VALUES('${collegename}','${place}','${phone}')`,
//       (err, result) => {
//         if (err) throw err;
//         res.render("submitstatus", {
//           message: "COLLEGE INFORMATION SUBMITTED!",
//         });
//       }
//     );
//   } else {
//     res.render("submitstatus", {
//       message: "FIELDS CANNOT BE EMPTY! TRY AGAIN",
//     });
//   }
// });
// app.listen(3000, () => {
//   console.log("server is running");
// });
