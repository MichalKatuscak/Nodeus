var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/myproject';

var connection = {};

connection.insert = function (collection_name, data) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connect to Mongo");

        var collection = db.collection(collection_name);
        collection.insertMany(data, function(err, result) {
            console.log("Inserted "+result.result.n+" documents into the "+collection_name+" collection");

            db.close();
        });
    });
}

exports.connection = connection;