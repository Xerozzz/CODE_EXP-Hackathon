//Load express library
var express = require('express');

//Create an instance of express
var app = express();
var api = require('../model/api.js');

//Usage of body-parser to parse HTTP POST Data
var bodyParser = require('body-parser')
var urlendcodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json()) //Parse application/json
app.use(urlendcodedParser) //Parse application/x-www-form-urlencoded

//API calls
//To return user information
app.get('/api/user/:username',function (req,res){
    var username = req.params.username
    api.getUser(username, function(err,result){
        if (!err){
            res.send(result)
        }
        else{
            res.status(500).send("Some Error")
        }
    })
})

//To return counsellor information
app.get('/api/counsellor/:username',function (req,res){
    var username = req.params.username
    api.getUser(username, function(err,result){
        if (!err){
            res.send(result)
        }
        else{
            res.status(500).send("Some Error")
        }
    })
})

//To add a new user
app.post('api/user',function(req,res){
    var username = req.body.username
    var fullname = req.body.fullname
    var password = req.body.password

    api.newUser(username,fullname,password,function(err,result){
        if(!err){
            console.log(result)
            res.send(result + ' record inserted')
        }
        else{
            res.send(err.statusCode)
        }
    })
})

//To add a new counsellor
app.post('api/counsellor',function(req,res){
    var username = req.body.username
    var fullname = req.body.fullname
    var password = req.body.password
    var organization = req.body.organization

    api.newCounsellor(username,fullname,password,organization,function(err,result){
        if(!err){
            console.log(result)
            res.send(result + ' record inserted')
        }
        else{
            res.send(err.statusCode)
        }
    })
})

//Adding Notes
app.post('api/notes',function(req,res){
    var userid = req.body.userid
    var content = req.body.content
    api.newCounsellor(userid,content,function(err,result){
        if(!err){
            console.log(result)
            res.send(result + ' record inserted')
        }
        else{
            res.send(err.statusCode)
        }
    })
})

module.exports = app