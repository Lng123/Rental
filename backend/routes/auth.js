const router = require('express').Router();
const bcrypt = require('bcrypt');

let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/signup').post( async (req, res) => {

    try {
      const user =  req.body
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(user.password, salt);
      console.log(salt);
      console.log(hashedPassword);
      user.password = hashedPassword;
      console.log(user);
      const newUser = new User(user);
      console.log(newUser)
      newUser.save()
          .then(() => res.json("registered"))
          .catch(err => res.status(400).json(err));
    } catch {
      res.status(500).send()
    }

});

router.route('/login').post(async (req, res) => {
  const user = await User.find({email :req.body.email});
  console.log(user);
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(req.body.password, user[0].password)) {
      res.send('success')
      console.log("works");
    } else {
      res.send("invalid")
      console.log("doesnt");
    }
  } catch  {
    res.status(500).send()
  }
})

module.exports = router;