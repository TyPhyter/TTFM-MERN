# ttfm-mern API Docs
A brief rundown of the routes in our API

## Routes

### User
---
* POST '/users'
  * to create a new user account
  * expects body:
```javascript
    {
        "email" : "emailas@string.com"
        "pass" : "passString"
    }
    // returns the user object,
```

* POST '/users/login'
  * to login with email/pass
  * expects body:
```javascript
    {
        "email" : "emailas@string.com"
        "pass" : "passString"
    }
    // returns the user object,
```

* POST '/users/github'
  * to create a new Github user account OR login with Github account
  * expects body:
```javascript
    {
        //all returned by OAuth.io
        "githubID" = "123456", //a string
        "githubName" = "Users actual name";
        "githubAlias" = "DisplayName";
        "avatarUrl" = "https://avatarlink.com"
    }
    // returns the user object,
```


* GET '/users/:id?'
  * '/users' returns all users
  * '/users/5e4tc324dfj' returns user with id 5e4tc324dfj ( all ids are MongoDB ObjectIds )
  


### Project
---
* POST '/projects'
  * to create a new project
  * expects body:
```javascript
    {
        "title" : "titleString"
        "body" : "bodyString",
        "repoUrl" : "http://repoUrl.com",
        "hostedUrl" : "http://hostedUrl.com",
        "author" : "5e4tc324dfj" // MongoDB ObjectId, who the project belongs to
    }
    // returns the project object
```

* GET '/projects/:id?'
  * '/projects' returns all projects
  * '/projects/5e4tc324dfj' returns project with id 5e4tc324dfj

* GET '/projects/user/:id'
  * '/projects/user/5e4tc324dfj' returns all projects by user with id 5e4tc324dfj

### Test
---
* POST '/tests'
  * to create a new test
  * expects body:
```javascript
    {
        "title" : "titleString",
        "body" : "bodyString",
        "author" : "5e4tc324dfj" //who the test belongs to
        "ProjectId" : "5e4tc324dabc" //the project the test is for
    }
    //returns the test object
```

* GET '/tests/:id?'
  * '/tests' returns all tests
  * '/tests/5e4tc324dfj' returns test with id "5e4tc324dfj"

* GET '/tests/project/:id'
  * '/tests/project/"5e4tc324dfj"' returns all tests associated with PROJECT with id "5e4tc324dfj"

* GET '/tests/user/:id'
  * '/tests/user/"5e4tc324dfj"' returns all tests associated with USER with id "5e4tc324dfj"

# Some Notes

* Authentication: As of right now, every request is being routed through our JSON Web Token authentication middleware. You will notice "tokenErrors" on some of these responses, but all of the routes should still provide the information you request. Keeping this in mind, I recommend that you store the 'authentication state' of the app in your app component state, but set it to always true (after logging in) for now. Then in the future, if a response comes back as unauthenticated (i.e. has a token error, you can change the state to false and trigger a login page.

* On the same note, requests are also being routed through our gamification middleware, and you should notice some achievements on the user objects and a 'notifications' array on the responses from the user create/login routes. Take a look at these, I'm hoping once we get everything else in place we can implement some front-end interaction when a response comes back that an achievement has been, well, achieved.