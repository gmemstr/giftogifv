var host = "http://i.imgur.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] + "v"};
    },
    {
        urls: [
        "http://i.imgur.com/*.gif"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);