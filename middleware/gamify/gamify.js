const gamify = {

    checkAchievements(options) {

        return function(req, res, next) {
            console.log('gamify');
            let user = res.locals.user;
            // get the array of achievements
            let achievements = options.achievements;
            let notifications = [];
            for (let achievement in achievements) { 
                    console.log(user);
                    let didAchieve = achievements[achievement].check(user);
                    achievements[achievement].complete = didAchieve;
                    if(didAchieve){
                        let found = false;
                        user.achievements.forEach((userAchievement) => {
                            if(userAchievement.name === achievements[achievement].name){
                                found = true;
                            }
                        });
                        
                        if(!found) {
                            //The achievement did not exist on the user achievement array
                            //Save it to the user array, add it to the notifications object
                            user.achievements.push(achievements[achievement]);
                            notifications.push(achievements[achievement]);
                            user.save();
                        } 
                    }       

            }
            res.send({ 
                // 'user': user, 
                // 'gamify': options.option1, 
                'achievements': achievements, 
                'notifications': notifications,
                'newToken': res.locals.newToken || null,
                'verified': res.locals.verified || null,
                // 'tokenDecoded': res.locals.tokenDecoded || null,
                'tokenError': res.locals.tokenError || null,
            });
    
        }
    
    }

} 

module.exports = gamify;