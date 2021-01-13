/****************************************************
 * SNIPPETS
 *
 *
 ****************************************************/

/**  TAB ACTIVATED - may use somehow */
/*
 chrome.tabs.onActivated.addListener(function(activeInfo) {
 chrome.tabs.get(activeInfo.tabId, function(tab){
 console.log('>>> TAB ACTIVATED: ' + tab.url);
 });
 });*/

/**  SNIPPETS: after navigation to solution  */
/*chrome.webNavigation.onCompleted.addListener(function(details) {
 if(details.frameId === 0) {
 chrome.tabs.executeScript(details.tabId, {"file": "content.js"});
 }
 });*/

/**  EXAMPLE: message to active tab tabs[0].id  */
/*
 chrome.tabs.query({active: true}, function(tabs) {
 chrome.tabs.sendMessage(tabs[0].id, {action: "scanStepFinished", type: "followers",
 viewer: viewer, followers: followers, followings: null, reciprocal: null},
 function(response) { });
 });*/

/** page inject experiment */
/*
 var div = document.createElement('div');
 div.style.position = 'fixed';
 div.style.top = 0;
 div.style.right = 0;
 div.textContent = 'Injected!';
 document.body.appendChild(div);
 */

/** Manuals on script injections */
/*
 http://kaczor.io/articles/injecting-content-with-chrome-extension/
 https://developer.chrome.com/extensions/background_pages
 https://developer.chrome.com/extensions/manifest/web_accessible_resources
 https://bugs.chromium.org/p/chromium/issues/detail?id=30756  (workaround for not injecting in local resources)
 https://developer.chrome.com/extensions/extension#method-getViews
 */

/** Called when the user clicks on the browser action
 seen in other plugin */
/*
 chrome.browserAction.onClicked.addListener(function(tab) {
 if (!tab.url.match("https://twitter.com/following")) {
 chrome.tabs.create({
 "url": "https://twitter.com/following",
 "selected": true
 });
 chrome.tabs.executeScript(null, {
 file: "jquery.js"
 });
 chrome.tabs.executeScript(null, {
 file: "unfollowunfollowers.js"
 });
 } else {
 chrome.tabs.executeScript(null, {
 file: "jquery.js"
 });
 chrome.tabs.executeScript(null, {
 file: "unfollowunfollowers.js"
 });
 }
 });*/

/** page inject experiment */
/*
 var div = document.createElement('div');
 div.style.position = 'fixed';
 div.style.top = 0;
 div.style.right = 0;
 div.textContent = 'Injected!';
 document.body.appendChild(div);
 */

/** throw exception */
/*throw {
    name:        "System Error",
    level:       "Show Stopper",
    message:     "Error detected. Please contact the system administrator.",
    htmlMessage: "Error detected. Please contact the <a href=\"mailto:sysadmin@acme-widgets.com\">system administrator</a>.",
    toString:    function(){return this.name + ": " + this.message;}
};*/

/** manifest permissions */
//"*://*/*",
//"https://*/*",
//"storage",
//"tabs",
//"alarms",
//"notifications"

//"web_accessible_resources": [
//    "js/dashboard.js"
//    "/dashboard.html"
//]

//"browser_action": {
//    "default_title": "nFollowers",
//    "default_icon": "/img/logo.png",
//    "default_popup": "popup.html"
//},

/** pure JS new element */
/*var table = document.createElement("table");
 var thead = document.createElement("thead");
 var tr = document.createElement("tr");
 var th0 = document.createElement("th");
 var t0 = document.createTextNode("№");*/