const gamify = {

    checkAchievements(options) {

        return function(req, res, next) {
            let user = res.locals.user;
            // get the array of achievements
            //TO DO iterate over the array and make all the checks
            let achievements = options.achievements;
            let notifications = [];
            achievements.forEach((achievement) => {
                if(!achievement.complete){
                    let didAchieve = achievement.check(user);
                    achievement.complete = didAchieve;
                    if (didAchieve) notifications.push(achievement.notification);
                }
            });
            res.send({ 'user': user, 'gamify': options.option1, 'achievements': achievements, notifications: notifications });
    
        }
    
    }

} 

module.exports = gamify;