const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
};

connectDB();
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection errr"));
db.once("open", () => {
  console.log("connected");
});

//Models
require("./Category");
