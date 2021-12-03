const mongoose = require('mongoose');

const DB_URI = process.env.BDD_JEREMY;

mongoose.connect(DB_URI).then(()=>{
console.log("connected to : "+DB_URI);
})