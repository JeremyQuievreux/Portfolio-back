const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    lastname: {type: String},
    firstname: {type: String},
    email: {type: String},
    content: {type: String}
});

const MessagesModel = mongoose.model('Messages', messageSchema);

module.exports = MessagesModel;