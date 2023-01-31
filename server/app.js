require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB = "mongodb+srv://crudApp:kSJ616jt361KVJh9@cluster0.sz23nml.mongodb.net/?retryWrites=true&w=majority"

const port = 8003;

app.listen(port, () => {
    console.log((`Server is listening on port ${port}`));
});




