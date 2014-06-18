var toggleShelf = function(state) {
    chrome.downloads.setShelfEnabled(state);
    if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
    }
};

chrome.commands.onCommand.addListener(function(command) {
    if (command === 'hide-downloads-bar') {
        toggleShelf(false);
        setTimeout(function() {
            toggleShelf(true);
        }, 0);
    }
});