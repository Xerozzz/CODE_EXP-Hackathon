var db = require('./databaseConfig.js');
var database = {
    //Insert functions here

    //Check if user login info is correct
    getUser: function (username, callback) {
        var conn = db.getConnection()
        conn.connect(function (err) {
            //Error from connection detected
            if (err) {
                console.log(err);
                return callback(err,null);
            }
            //Connection successful
            else {
                console.log("Connected!");
                var sql = 'SELECT * FROM users WHERE username = ?';
                //Array of values to replace the ? placeholder
                conn.query(sql, [username], function (err, result) {
                    conn.end();
                    //If error is detected, we return a callback function with an error and null results
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    //If no error, result retrieved successfully and return a callback with null error and a result
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
     //Check if counsellor login info is correct
     getCounsellor: function (username, callback) {
        var conn = db.getConnection()
        conn.connect(function (err) {
            //Error from connection detected
            if (err) {
                console.log(err);
                return callback(err,null);
            }
            //Connection successful
            else {
                console.log("Connected!");
                var sql = 'SELECT * FROM counsellors WHERE username = ?';
                //Array of values to replace the ? placeholder
                conn.query(sql, [username], function (err, result) {
                    conn.end();
                    //If error is detected, we return a callback function with an error and null results
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    //If no error, result retrieved successfully and return a callback with null error and a result
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    //Adding a new user
    newUser: function(username,fullname,password,callback){
        var conn = db.getConnection()
        conn.connect(function (err){
            if (err){
                console.log(err)
            }
            else{
                console.log("Connected!")
                var sql = "Insert into users(username,fullname,password) values(?,?,?)"
                conn.query(sql,[username,fullname,password], function (err,result){
                    conn.end()
                    if (err){
                        console.log(err)
                        return callback (err,null)
                    }
                    else {
                        console.log(result.affectedRows);
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    },
    //Adding a new counsellor
    newCounsellor: function(username,fullname,password,organization,callback){
        var conn = db.getConnection()
        conn.connect(function (err){
            if (err){
                console.log(err)
            }
            else{
                console.log("Connected!")
                var sql = "Insert into counsellors(username,fullname,password,organization,) values(?,?,?,?)"
                conn.query(sql,[username,fullname,password,organization], function (err,result){
                    conn.end()
                    if (err){
                        console.log(err)
                        return callback (err,null)
                    }
                    else {
                        console.log(result.affectedRows);
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    },
    //Adding a new counsellor
    newCounsellor: function(userid,content,callback){
        var conn = db.getConnection()
        conn.connect(function (err){
            if (err){
                console.log(err)
            }
            else{
                console.log("Connected!")
                var sql = "Insert into notes(userid,content) values(?,?)"
                conn.query(sql,[userid,content], function (err,result){
                    conn.end()
                    if (err){
                        console.log(err)
                        return callback (err,null)
                    }
                    else {
                        console.log(result.affectedRows);
                        return callback(null,result.affectedRows)
                    }
                })
            }
        })
    }
}

module.exports = database