const gamify = {

    checkAchievements(options) {

        return function(req, res, next) {
            console.log('gamify');
            let user = res.locals.user;
            // get the array of achievements
            //TO DO iterate over the array and make all the checks
            let achievements = options.achievements;
            achievements.forEach((achievement) => {
                //TO DO figure out notifications
                    let didAchieve = achievement.check(user);
                    achievement.complete = didAchieve;
            });
            res.send({ 
                // 'user': user, 
                // 'gamify': options.option1, 
                'achievements': achievements, 
                // 'notifications': notifications,
                'newToken': res.locals.newToken || null,
                'verified': res.locals.verified || null,
                // 'tokenDecoded': res.locals.tokenDecoded || null,
                'tokenError': res.locals.tokenError || null,
            });
    
        }
    
    }

} 

module.exports = gamify;