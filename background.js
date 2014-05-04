chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {cancel: true}; },
        {urls: ['*://*.videoplaza.tv/*','*://*.adocean.pl/*']},
        ['blocking']);