chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id,
        },
        func: function() {
            window.scroll(window.scrollX, 0)
        },
    })
})
