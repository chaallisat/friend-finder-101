//use npm packages express and path here
const http = require("http");
const express = require ("express");

const app = express();

const path = req.url;

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());