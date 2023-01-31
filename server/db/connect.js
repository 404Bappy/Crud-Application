const mongoose = require("mongoose");
const DB = "mongodb+srv://crudApp:kSJ616jt36lKVJh9@cluster0.sz23nml.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect(DB,{
     userCreateIndex:true,
     useFindAndModify: false,
     useNewUrlParser:true,
     useUnifieldTopology:true
 }).then(() => console.log("connection Start")).catch((error) => console.log("error.message"));