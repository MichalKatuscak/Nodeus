# Nodeus
Základní struktura a moduly pro JavaScriptovou aplikaci na serveru


<h2>Z čeho všeho je to složené?</h2>
<h3>Express</h3>
http://expressjs.com/

Minimalistický framework, který zjednodušuje základní možnosti Node.JS.
<pre lang="php">
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Ahoj světe!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Stránka běží na http://%s:%s', host, port);
});
</pre>

<h3>React</h3>
https://facebook.github.io/react/

Knihovna pro šablony (M<strong>V</strong>C) od Facebooku. Pomocí UI kompoment vytvoříte strukturu webu.

<h3>Express-react-views</h3>
https://github.com/reactjs/express-react-views

Intergruje React šablony do Express frameworku díky těmhle 3 řádkům:
<pre lang="php">
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
</pre>

<h3>MySQL</h3>
https://github.com/felixge/node-mysql/

Díky této knihovně lze komunikovat s MySQL serverem.
<pre lang="php">
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('SELECT 1 + 1 as result', function(err, rows) {
  console.log("Result: " + rows[0].result);
});
</pre>

<h2>Struktura</h2>
<pre>
/app
    /controllers
    /models
    /views
/public
    /css
    /img
    ...
app.js
package.json
</pre>



<h2>MVC</h2>
<h3>Model</h3>
Model pracuje s daty (například z MySQL):
<em>/app/models/page.js</em>
<pre lang="php">
var mysql = require("../mysql").connection;

var Page = {
    get: function(callback){
        mysql.query("SELECT 'Nadpis webu' AS headline, 'Titulek' AS title", function (error, rows, fields) {
            callback(rows[0]);
        });
    }
};

module.exports = Page;
</pre>

V controlleru s ním lze pracovat po nahrání přes <em>require</em>
<pre lang="php">
var models = {
    page: require("../models/page")
};
models.page.get(function(data){...});
</pre>

<h2>Controller</h2>
Který se použije se rozhoduje v <em>app.js</em>
<pre lang="php">
app.get('/', require('./app/controllers').index);
</pre>

<em>/app/controllers/index.js</em>
<pre lang="php">
var models = {
    page: require("../models/page")
};

var render = function(res, data){
    res.render('index', { 
        title: data.title, 
        headline: data.headline 
    });
};

module.exports.index = function(req, res){
    models.page.get(function(data){
        render(res, data);
    });
};
</pre>

<h3>View</h3>
V controlleru je řečeno, která šablona se zavolá:
<pre lang="php">
    res.render('index', { 
        title: data.title, 
        headline: data.headline 
    });
</pre>

<em>/app/view/index.jsx</em>
<pre lang="php">
var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <h1>{this.props.headline}</h1>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;
</pre>

##Instalace
Pro instalaci stačí pouze nainstalovat Node.js moduly (v package.json jsou definované):
<pre>
npm install
</pre>

##Spustění
Ve složce, kde se nachází <em>app.js</em> stačí spustit příkaz:
<pre>
node app.js
</pre>

