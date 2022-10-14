const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter.js')
const port = process.env.port || 5500;

const app = express();

// db connect

mongoose.connect ('mongodb://localhost:27017/studentsdata',{useNewUrlParser: true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection")});
db.once('open',()=>{console.log("Connected")});
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.use('/Login',userRouter)



app.get("/",(req, res, next)=>{
    res.json({
        message: "congrats it work"
    });
});


// error handling

app.use((req, res, next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error)
});

// catch-all error handling
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

app.listen(port)


module.exports = app;