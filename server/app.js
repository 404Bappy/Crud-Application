require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require(".db/connect");

const port = 9000;

app.listen(port, () => {
    console.log((`Server is listening on port ${port}`));
});




