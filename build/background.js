chrome.runtime.onInstalled.addListener(() => {
    console.log("LinkedIn Connector extension installed.");
});

// Optionally, you can listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "START_CONNECTING") {
        console.log("Received START_CONNECTING message from content script.");
        sendResponse({ status: "Connecting started!" });
    }
});
