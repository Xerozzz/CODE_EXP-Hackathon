//Loads MySQL Library
var mysql = require('mysql');

//Object with functions
var dbconnect = {
    //Define connection settings for mysql database
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",           //Replace this with the username you set
            password: "578813",     //Replace this with the password you set
            database: "code_exp"    
        });     
        return conn;
    }
};

module.exports = dbconnect