var express = require('express');
var router = express.Router();

const MessagesModel = require('../models/messages');

/* GET home page. */
router.post('/sendmessage', function(req, res, next) {
  console.log("1 MESSAGE RECU");

  let { firstname, lastname, content, email} = req.body;

  MessagesModel.create({
    firstname,
    lastname,
    email,
    content
  })
  .then(() => {
    console.log("message reçu");
    res.send({error: false, message: "Votre message a bien été envoyé et enregistré."})
  })
});

module.exports = router;
