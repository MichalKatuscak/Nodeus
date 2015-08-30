var express = require('express');
var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./app/controllers').index);

app.use(express.static('public'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Stránka běží na http://%s:%s', host, port);
});