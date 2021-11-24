chrome.runtime.sendMessage({todo:"ShowPage"})

chrome.runtime.onMessage.addListener(function (request,render, sendResponse) {
    if(request.todo =="addValue"){
        var valueAdd = "HCE" + request.valueChange;
        $("#stable_apis").text(valueAdd)
    }
})