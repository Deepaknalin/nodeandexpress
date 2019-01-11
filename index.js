//do all import

var express = require('express')
var ejs = require('ejs')
var bp = require('body-parser')


//initilaize the express app
var app = express()


//set view engine app

app.set('view engine','ejs')

//set the folder where all view will present

app.set('views', __dirname + '/template')

app.use(bp.json())

var urlencodeparser = bp.urlencoded({extended:false})

app.get("/",function(req,res){
    res.send("Hello from Express")

})

app.get("/about",function(req,res){
    res.render('about')

})

app.get("/home",function(req,res){
    res.render('home')

})

app.post("/about",urlencodeparser,  function(req,res){
    console.log(req.body)
    res.send("Recieved Information :" + JSON.stringify(req.body))
    

})

app.get('/contact/:name',function(req,res){
    console.log("Get in touvh with :" + req.params.name)
    console.log(req.body)
    var profileData = {
        "name":req.params.name,
        "location": req.body.location,
        "time": req.body.time

    }
    //res.send("recieved data")
    console.log(profileData)
    res.render('profile',{
                        name:req.params.name,
                        profile:req.body

    })

})

app.listen(1234)