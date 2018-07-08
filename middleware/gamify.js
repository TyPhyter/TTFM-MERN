module.exports = function(options) {
    return function(req, res, next) {
        console.log('gamify', options.option1);
        res.gamified = true;
        res.send({ 'gamify': options.option1 });
    }
}