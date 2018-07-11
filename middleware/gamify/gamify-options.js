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

    ]


}

module.exports = options;