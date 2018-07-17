const options = {

    option1: true,

    achievements : [
        {
            name: "First Login",
            check: (user) => user.logins.length > 0,
            message: "Thanks for joining TestThisFor.Me! You earned your first badge!"
        },
        {
            name: "Five Logins",
            check: (user) => user.logins.length >= 5,
            message: "You earned a new badge: Repeat Customer"
        },
        {
            name: "Ten Logins",
            check: (user) => user.logins.length >= 10,
            message: "You earned a new badge: You Can Checkout Anytime You Like"
        },
        {
            name: "First Project",
            check: (user) => user.projects.length > 0,
            message: "Welcome to the crowdsourced QA revolution"
        },
        {
            name: "Five Projects",
            check: (user) => user.projects.length >= 5,
            message: "Yeah, you've posted 5 projects now. I guess you could say things are getting pretty serious"
        },
        {
            name: "First Test",
            check: (user) => user.projects.length > 0,
            message: "It is more blessed to give than to receive"
        },
        {
            name: "Five Projects",
            check: (user) => user.projects.length >= 5,
            message: "Yeah, you've posted 5 projects now. I guess you could say things are getting pretty serious"
        }

    ]


}

module.exports = options;