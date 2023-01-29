
var express = require('express');
var path = require ('path')
var cors =require('cors')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var clc = require("cli-color");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config()

var usersRouter = require('./routes/user.route');
var auth = require('./routes/auth.router')
var job=require('./routes/job.router')
var mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
var app = express();
//app.set('veiw engine', 'ejs')
mongoose.set('strictQuery', true);
const PORT =process.env.PORT||5000;
app.use(cors())
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header('Access-Control-Allow-Methods',"Get,Post,Put,Delete, Patch")
//   res.header('Access-Control-Allow-headers',"Content-Type")
// }) 

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(logger("dev")); 
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb", extended:true}));
app.use(bodyParser.json({limit: "50mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended:false }));
app.use(cookieParser());



app.use(fileUpload({
  useTempFiles: true
}))
mongoose.connect(process.env.URL,
  {
     
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      
     
  })
  .then(() => console.log(clc.bgBlue.underline(`Server running on PORT ${PORT} ...`)))
  .catch(err => console.log(err))

app.use('/',auth)
app.use('/' ,job )
app.use('/', usersRouter);

//app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
