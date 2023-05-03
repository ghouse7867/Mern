const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const authrouter = require('./router/auth.cjs');
const app = express();
app.use(cookieParser());
require('./db/conn.cjs');

app.use(express.json());

app.use(authrouter)
                
// const User = require('./model/userSchema.cjs')

//======================================
middleware = (req, res, next) => {
   console.log('middleware');
  next();
}
//========================================

app.get('/', (req, res)=>{
  res.send('Hello World from Replit');
});
app.get('/aboutme', middleware, (req, res)=>{
  res.send('Hello World from AboutMe');
});

//=========================================
app.listen(3001, ()=> {
  console.log(`running on 3000`)
})



// mongodb+srv://moidghouse:<password>@cluster0.py7b6cn.mongodb.net/?retryWrites=true&w=majority