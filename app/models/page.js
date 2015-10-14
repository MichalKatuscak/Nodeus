var mysql = require("../mysql").connection;
var mongodb = require("../mongodb").connection;

var Page = {
    get: function(callback){
        mongodb.insert("uzivatele", [{uzivatel:1}, {uzivatel:2}, {uzivatel:3}]);
        mysql.query("SELECT 'Nadpis webu' AS headline, 'Titulek' AS title", function (error, rows, fields) {
            callback(rows[0]);
        });
    }
};

module.exports = Page;