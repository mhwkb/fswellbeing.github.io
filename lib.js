
//var storedIdString = "";

function reqListener(iEvent){
    var responseObject = JSON.parse(this.responseText);
    console.log("responseObject.pushed_at = " + responseObject.pushed_at);
    console.log("iEvent.target.idString = " + iEvent.target.idString);
    pushedAtString = responseObject.pushed_at;
    pushedAtString = pushedAtString.substr(0, pushedAtString.indexOf('T'))
    document.getElementById(iEvent.target.idString).innerHTML = pushedAtString
}

function requestSender(iUrlString, iIdString){
    var request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);
    request.idString = iIdString
    request.open("GET", iUrlString);
    request.send();
}


//https://api.github.com/repos/SunyataZero/buddhist-well-being-prototype-4


