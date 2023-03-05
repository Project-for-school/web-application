const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const pug = require("pug");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 5000;

dotenv.config();

//api
const ProductsApi = require("./api/route/route.products");
const UsersApi = require("./api/route/route.Users");

//client
const AuthClient = require("./route/auth/auth.route");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(cors());
app.use(morgan("common"));
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

//api
app.use("/api", ProductsApi);
app.use("/api/user", UsersApi);
// end web api

//client
app.use("/auth", AuthClient);
//end client

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`err: ${err}`);
  });

app.listen(port, () => {
  console.log(`Server is running`);
});
