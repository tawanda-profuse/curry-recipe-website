if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
// const dbURI ='mongodb://tawanda:<password>@curryrecipes-shard-00-00.nj5x6.mongodb.net:27017,curryrecipes-shard-00-01.nj5x6.mongodb.net:27017,curryrecipes-shard-00-02.nj5x6.mongodb.net:27017/curry-recipes?ssl=true&replicaSet=atlas-zudhbc-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose
  // .connect(dbURI, {
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(8080)) // change to 3000
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/recipes", requireAuth, (req, res) => res.render("recipes"));
app.use(authRoutes);
