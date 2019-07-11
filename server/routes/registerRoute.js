const express = require("express");
const router = express.Router();
const addUser = require("../db");
const validate = require("../validate/validateNew");
const Users = require("../models/userModel");
const hash = require("../hash");

router.post("/", async (req, res, next) => {

  //validate input 
  const error = validate(req.body);

  if (error) {
    console.log(error.details[0].message)
    res.status(400).send(error.details[0].message);
    return;
  }

  let user = await Users.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User is already registered')

  //save user into database
  try {

    //hash password
    const { name, email } = req.body;
    const password = await hash(req.body.password);

    //create new user object
    user = new Users({
      name,
      email,
      password
    })

    //save user into database
    const userSaved = await addUser(user);

    if (typeof (userSaved.email) !== "undefined") {
      let response = {
        name: req.body.name,
        email: req.body.email
      }

      const token = user.generateToken();
      res.header('x-auth-token', token).status(200).send(response);
      console.log('User registered successfully', userSaved);
    }

    else {
      res.status(500).send('Unable to register user')
    }
  }
  catch (e) {
    console.log(e)
  }
});

module.exports = router;