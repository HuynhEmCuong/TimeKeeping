chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    if( request.todo =="ShowPage"){
        chrome.tabs.query({active:true, currentWindow:true},function (tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});




