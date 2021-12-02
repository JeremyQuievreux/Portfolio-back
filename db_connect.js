const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_PORTFOLIO_JQ

mongoose.connect(DB_URI).then(()=>{
console.log("connected to : "+DB_URI);
})