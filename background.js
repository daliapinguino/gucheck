chrome.tabs.onActivated.addListener( function(info) {
    var tabId    = info.tabId,
        windowId = info.windowId;
});
chrome.tabs.onActiveChanged.addListener( function(tabId, info) {
    tabId        = tabId;         // For comparison
    var windowId = info.windowId;
});

