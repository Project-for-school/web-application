const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const pug = require("pug");

const app = express();
const port = 5000;

//api
const ProductsApi = require("./api/route/route.products");
const UsersApi = require("./api/route/route.Users");

//database
const URI =
  "mongodb+srv://admin:D2NxqwICK4qB9Z28@cluster0.n6x8tmr.mongodb.net/School?retryWrites=true&w=majority";

//client
const AuthClient = require('./route/auth/auth.route')

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//api
app.use("/api", ProductsApi);
app.use("/api", UsersApi);
// end web api


//client
app.use('/auth', AuthClient)
//end client

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`err: ${err}`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
