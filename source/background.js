var host = "http://i.imgur.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] + "v"}; //i... i don't even know...
         																						 //the + "v" changes gif > gifv, so it works
    },
    {
        urls: [
            "http://i.imgur.com/*.gif" //only activate on .gif page
            						   //causes redirect loop if removed!
        ],
    },
    ["blocking"]
);
