var models = {
    user: require("../models/user")
};

var render = function(res, data){
    res.render('index', { 
        title: data.title, 
        headline: data.headline 
    });
};

module.exports.index = function(req, res){
    models.user.get(function(data){
        render(res, data);
    });
};