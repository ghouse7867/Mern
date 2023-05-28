const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path:'./config.env'
})

const DB = process.env.DATABASE;
mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('connection Successfull')
}).catch((err)=>{
  console.log(err + 'err connection Failed');
});