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