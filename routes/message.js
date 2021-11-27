var express = require('express');
var router = express.Router();

const MessagesModel = require('../models/messages');

/* GET home page. */
router.post('/sendmessage', function(req, res, next) {

  let { firstname, lastname, content, email} = req.body;

  MessagesModel.create({
    firstname,
    lastname,
    email,
    content
  })
  .then(() => {
    res.send({error: false, message: "Votre message a bien été envoyé et enregistré."})
  })
});

module.exports = router;
