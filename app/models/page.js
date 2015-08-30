var mysql = require("../mysql").connection;

var Page = {
    get: function(callback){
        mysql.query("SELECT 'Nadpis webu' AS headline, 'Titulek' AS title", function (error, rows, fields) {
            callback(rows[0]);
        });
    }
};

module.exports = Page;