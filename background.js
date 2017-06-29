chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        code: 'window.scroll(window.scrollX, 0)',
    })
})
