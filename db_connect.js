const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URL

mongoose.connect(DB_URI).then(()=>{
console.log("connected to : "+DB_URI);
})