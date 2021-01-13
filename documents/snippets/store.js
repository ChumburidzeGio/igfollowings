/**
 *
 * @param scanId
 */
function storeScanId(scanId) {
    chrome.storage.local.set({'scanId': scanId});
    console.log(":::: saved scanId: " + scanId);
}

function loadScanId(callback) {
    chrome.storage.local.get(['scanId'], callback);   // inline: function(data) {scanId = data.scanId;});
}