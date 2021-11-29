const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URL || "mongodb+srv://JQuievreux:Erin25012017@cluster0.mxqak.mongodb.net/Portfolio" 

mongoose.connect(DB_URI).then(()=>{
console.log("connected to : "+DB_URI);
})