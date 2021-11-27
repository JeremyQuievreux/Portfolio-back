const mongoose = require('mongoose');

const DB_URI =  "mongodb+srv://JQuievreux:Erin25012017@cluster0.mxqak.mongodb.net/Portfolio" 

mongoose.connect(DB_URI).then(()=>{
console.log("connected to : "+DB_URI);
})