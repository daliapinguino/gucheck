// var app = chrome.runtime.getBackgroundPage();
function hello() {
    chrome.tabs.executeScript({
        file: 'content.js'
    });
}

document.getElementById('clickme').addEventListener('click', hello);