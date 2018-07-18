let button = document.querySelector('#btn');
//==========

//const repoURL = document.querySelector("#repoUrl").val;
//const hostedUrl = document.querySelector("#hostedUrl").val;
//const UserId = document.querySelector("#UserId").val;
//=============



button.onclick = function (evt) {
    // input.value = "CLICKED";
    // console.log(input.value);
    const titleString = document.querySelector("#title").value;
    const bodyString = document.querySelector("#body").value;
    console.log(titleString, bodyString);

    chrome.tabs.captureVisibleTab(function (screenshotUrl) {

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
        fetch("http://localhost:3002/tests", {
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify({
                title: titleString,
                body: bodyString,
                author: "5b4d48485eb48e152418ad5b",
                project: "5b46b0d74328af3ba0641e64"
            })
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