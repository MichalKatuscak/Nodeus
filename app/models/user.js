var mysql = require("../mysql").connection;

var User = {
    get: function(callback){
        mysql.query("SELECT 'Nadpis webu pro přihlášení' AS headline, 'Titulek' AS title", function (error, rows, fields) {
            callback(rows[0]);
        });
    }
};

module.exports = User;