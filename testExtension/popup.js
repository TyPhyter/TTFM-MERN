let button = document.querySelector('#btn');
//==========
const title = document.querySelector("#title").val;
const body = document.querySelector("#body").val;
const repoURL = document.querySelector("#repoUrl").val;
const hostedUrl = document.querySelector("#hostedUrl").val;
const UserId = document.querySelector("#UserId").val;
//=============



button.onclick = function (evt) {
    // input.value = "CLICKED";
    // console.log(input.value);

    chrome.tabs.captureVisibleTab(function(screenshotUrl) {
       
        chrome.extension.getBackgroundPage().console.log('foo');
        chrome.extension.getBackgroundPage().console.log(screenshotUrl);

        let screenShotResult = document.querySelector('#scrnshot');

        screenShotResult.src = screenshotUrl;
        screenShotResult.style.width = '300px';
        screenShotResult.style.visibility = 'visible';

    });

    console.log("button has been clicked.");
   //========================================
    
  (extensionPost)=>{
      fetch('localhost:3001/tests',
          {
              method: "POST",
              body: {
                  title: req.body.title,
                  body: req.body.body,
                  score: req.body.score,
                  authorDisplayName: req.body.authorDisplayName,
                  authorGithubName: req.body.authorGithubName,
                  authorAvatarUrl: req.body.authorAvatarUrl,
                  ProjectId: req.body.ProjectId,
                  UserId: req.body.UserId
              }
              
      })
          .then(function (response) {
              return response.json();
          })
          .then(function (myJson) {
              console.log(myJson);
          });
      }
   

    



}