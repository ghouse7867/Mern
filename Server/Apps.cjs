const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const authrouter = require('./router/auth.cjs');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cookieParser());
require('./db/conn.cjs');

const express = require('express');
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://main--resilient-piroshki-b8cc71.netlify.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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
app.listen(PORT, ()=> {
  console.log(`running on ${PORT}`)
})



// mongodb+srv://moidghouse:<password>@cluster0.py7b6cn.mongodb.net/?retryWrites=true&w=majority