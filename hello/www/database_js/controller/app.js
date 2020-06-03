//Load express library
var express = require('express');

//Load express-session
// var session = require('express-session')

//Create an instance of express
var app = express();
var api = require('../model/api.js');

var path = require("path");

//Usage of body-parser to parse HTTP POST Data
var bodyParser = require('body-parser')
var urlendcodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json()) //Parse application/json
app.use(urlendcodedParser) //Parse application/x-www-form-urlencoded

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

//API calls
app.get('/login', function(req, res){
    res.status(200).send('login.html', { root: '../' });
});

//To return user information
app.get('/api/user/:username',function (req,res){
    var username = req.body.username
    api.getUser(username, function(err,result){
        if (!err){
            if (result.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
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