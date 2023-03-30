'use strict';

class UnblockedRequests {
    constructor(hostUrl) {
        this.hostUrl = hostUrl;
        if (!this.hostUrl.endsWith('/')) {
            this.hostUrl += '/';
        }
    }

    async get(url, customHeaders, timeout) {
        const headers = customHeaders || new Headers();

        let loaded = false;

        if (timeout != null) {
            setTimeout(() => {
                if (!loaded) {
                    console.error('Request timed out');
                    alert('Request timed out');
                    location.reload();
                }
            }, timeout);
        }

        headers.append('ngrok-skip-browser-warning', '1');
        const response = await fetch(this.hostUrl + url, {
            method: 'get',
            headers: headers,
        });
        const json = await response.json();

        loaded = true;

        return json;
    }
}

export { UnblockedRequests };
