const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../db/conn.cjs');

const User = require('../model/userSchema.cjs')

router.get('/', (req, res)=>{
  res.send('Hello World from Replit router');
});

router.post('/register', async (req, res)=>{

  const { name, email, phone, work, password, cpassword } = req.body;

if(!name || !email || !phone || !work || !password || !cpassword)
  return res.status(422).json({
    error: "Plz fill all the details"
  });
try {
  const userExist = await User.findOne({ email:email })
    if(userExist) {
      return res.status(422).json({
        error : "email already registered"
      });
    }else if (password != cpassword){
      return res.status(422).json({
        error : "password doesnot match"
      });
    }else {
      const user = new User({
      name, email, phone, work, password, cpassword})
  
  const userRegister = await user.save()
      
  if(userRegister) {
     res.status(200).json({
        message:"user registered successfully"
  });
    
    }

  }
  
} catch(err) {
  console.log(err)
}

});

// login route

router.post('/signin', async (req, res) => {
   try {
     const { email, password} = req.body;

     if(!email || !password) {
       return res.status(400).json({
         message:"please register"
       })
     }
     const userLogin = await User.findOne({
       email:email
     });

     if(userLogin) {
       const isMatch = await bcrypt.compare(password, userLogin.password);
       
       //token
       
      const token = await userLogin.generateAuthToken();
       console.log(token)
       
       res.cookie("jwtoken", token, {
         expires:new Date(Date.now() + 25892000000),
         httpOnly:true,
       })
       
     if(!isMatch) {
       res.status(400).json({error:" Invalid Credentials"})
     } else {
        res.json({message:" user Signed in successfully"})
     }
       
     }else {
       res.json({error:" Invalid Credentials"})
     }
     
   } catch(err) {
     console.log(err)
   }
})

module.exports = router;