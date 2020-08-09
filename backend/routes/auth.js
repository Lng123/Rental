const router = require('express').Router();
const bcrypt = require('bcrypt');

let User = require('../models/user.model')

router.route('/').get(async (req, res) => {
  // req.session.userId ="test";
    if (!req.session.loggedIn) {
        res.send();
        return;
    }
    await User.User.find({email :req.session.userId})
      .then((users) =>{
        // console.log("user find");
        // console.log(res);
        res.json(users);
        return;
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/signup').post( async (req, res) => {

    try {
      const user =  req.body
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(user.password, salt);

      user.password = hashedPassword;
      const newUser = new User.User(user);
      newUser.save()
          .then(() => res.json("registered"))
          .catch(err => res.status(400).json(err));
    } catch {
      res.status(500).send()
    }

});

router.route('/test').post(async (req, res) => {
  req.session.userId ="WOW";
  console.log(req.session);
  res.status(200).send();
});



router.route('/login').post(async (req, res) => {
  // req.session.userId ="NEW";
  // console.log(req.session);
  // console.log(req.body);
  const user = await User.User.find({email :req.body.loginEmail});
  console.log(user);
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }

  if (await bcrypt.compare(req.body.loginPassword, user[0].password)) {
    // console.log("success");
    // console.log("session" + req.session);
    req.session.userId = req.body.loginEmail;
    req.session.loggedIn = true;
    res.send(200);
    // console.log("session" + req.session);
  } else {
    res.send("invalid")
  }
})

module.exports = router;