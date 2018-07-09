const gamify = {

    checkProgress(options) {

        return function(req, res, next) {
            let user = res.locals.user;
            let checkAchievement1 = options.achievement1;
            let didAchieve1 = checkAchievement1(user);
            console.log('gamify', options.option1);
            console.log('Achievement 1', didAchieve1);
            res.gamified = true;
            res.send({ 'gamify': options.option1, 'achievement1': didAchieve1 });
    
        }
    
    }

} 

module.exports = gamify;