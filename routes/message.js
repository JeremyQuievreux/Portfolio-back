var express = require('express');
var router = express.Router();

const MessagesModel = require('../models/messages');

/* GET home page. */
router.post('/send', function(req, res, next) {
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

router.post('/all', function(req, res, next) {
  let {password} = req.body;
  if (password === process.env.PASSWORD_ADMIN) {
    MessagesModel.find()
    .then((messages) => {
      res.send({error:false, data: messages, message: "password ok / envoie des messages"})
    })
    console.log("!!! GOOD PASSWORD !!!")
  } else {
    console.log("!!! WRONG PASSWORD !!!");
    res.send({error: true, message: "mauvais mot de passe"})
  }
})

module.exports = router;
