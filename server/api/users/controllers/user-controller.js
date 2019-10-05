const User = require("../models/user-model");

module.exports = {
  getUsername: function(req, res, next) {
    const result = `${req.params.id}XD`;
    res.send(result);
  },

  create: function(req, res, next) {
    const { username, firstname, lastname, room, email, password } = req.body;

    let newUser = new User({
      username: username,
      firstname: firstname,
      lastname: lastname,
      room: room,
      email: email,
      password: password
    });

    newUser
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "[User.create] error."
        });
      });
  },

  checkIfUserExist: function(req, res, next) {
    User.count({ username: req.params.username }, function(err, count) {
      if (count > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  }
};
