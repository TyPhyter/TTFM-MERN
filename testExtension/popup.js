let button = document.querySelector('#btn');
//==========
const titleString = document.querySelector("#title").val;
const bodyString = document.querySelector("#body").val;
//const repoURL = document.querySelector("#repoUrl").val;
//const hostedUrl = document.querySelector("#hostedUrl").val;
//const UserId = document.querySelector("#UserId").val;
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
    
  const extensionPost = () => {
      fetch('http://localhost:3002/tests',
          {
              method: "POST",
              body: {
                  
              "title": "titleString",
              "body": "bodyString",
              "author": "5e4tc324dfj", 
              "project": "5e4tc324dabc" 
          
              }
              
      })
          .then(function (response) {
              return response.json();
          })
          .then(function (myJson) {
              console.log(myJson);
          });
      console.log("api fetch");
      }
   
    extensionPost();
    



}