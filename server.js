//use npm packages express and path here
const http = require("http");
const express = require ("express");
const path = require("path");

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });