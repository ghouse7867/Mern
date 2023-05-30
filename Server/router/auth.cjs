const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../db/conn.cjs');
const authenticate = require("../middleware/authenticate.cjs");

const User = require('../model/userSchema.cjs')

// router.get('/', (req, res)=>{
//   res.send('Hello World from Replit router');
// });

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
      console.log(userLogin)
     if(userLogin) {
       const isMatch = await bcrypt.compare(password, userLogin.password);
       
       //token
      const token = await userLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
         expires:new Date(Date.now() + 3600000),
         httpOnly:true,
         secure: true,
        sameSite: 'none',
       });
   
     if(!isMatch) {
       res.status(400).json({error :" Invalid Credentials try again"})
      res.cookie("jwtoken", token, {
         expires:new Date(Date.now() + 1),
         httpOnly:true,
         secure: true,
        sameSite: 'none',
       });
       
     } else {
        res.json({message:" user Signed in successfully"})
     }
       
     }else {
       res.json({ error :" Invalid Credentials"})
       
     }
     
   } catch(err) {
     console.log(err)
   }
});
//==================================================
router.get('/about',authenticate, (req, res)=>{
  console.log("hello iam from about")
  res.send(req.rootUser);
});
//====================================================
router.get('/getdata',authenticate, (req, res)=>{
  console.log("hello iam from getdata")
  res.send(req.rootUser);
});
// ===================================================

router.post('/contact',authenticate,async (req, res)=>{
       try{
         const {name,email,phone,message} = req.body;
         if(!name||!email||!phone||!message){
           console.log("error in contact form")
           console.log(req.body)
           return res.status(400).json({
         message:"please fill the contact form"
       })
        } else {
           console.log("sucess")
        }
         
         const userContact = await User.findOne({_id:req.userID});
         
          if(userContact) {
            const userMessage = await userContact.addMessage(name,email,phone,message)
            await userContact.save();
            res.status(201).json({message:"user contact and message successfully saved"})
          }else {
            console.log("failed")
          }
         
       } catch(error){
         console.log(error)
       }
});
//Logout page
router.get('/logout', async (req, res) => {
  try {
    console.log("hello iam from logout");

    // Clear the cookie from the browser
    const token = req.cookies.jwtoken;
    console.log(token);

    res.cookie("jwtoken", token, {
         expires:new Date(Date.now() + 1),
         httpOnly:true,
         secure: true,
        sameSite: 'none',
       });

    // Send a response or redirect to the desired page
    res.status(200).send(req.rootUser);

    console.log("jwtoken deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;