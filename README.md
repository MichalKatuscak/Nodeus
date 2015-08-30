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

