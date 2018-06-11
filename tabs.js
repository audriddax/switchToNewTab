chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.update(tab.id, {"active": true}, function(tab){});
})