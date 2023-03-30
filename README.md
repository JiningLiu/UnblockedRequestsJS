# UnblockedRequestsJS

### The client package for UnblockedRequests, allowing you to make unblocked network requests in JavaScript by using unblocked servers

🚫 This branch contains development versions of UnblockedRequestsJS.

⚠️ This repo is for the UnblockedRequests JavaScript package.

## How does it work?

UnblockedRequests is a proxy server, and there's 2 parts to it: the client and the server. The client is a JavaScript library that you can use in your browser, and the server is a Node.js server that you can run on your own hardware. The client library will make requests to the server, and the server will make requests to the original server, and then send the response back to the client. The fetch API is used to make the requests on the server and a series of security measures are implemented to prevent abuse. You can run the server on any hardware with Node.js, which means if you have a small number of requests, you can run it on an old Android phone using Termux.

## How can I execute JS code that needs to make blocked requests?

The UnblockedRequests server app can't execute JS code sent by the client, but I'm already working on UnblockedJSExec, which allows you to execute JS code without it getting blocked using similar methods as UnlockedRequests. This service will be available as beta by the end of 2023.

## How can I use it?

As of right now, UnblockedRequests is still in early development and closed beta, but a public beta is expected by the end of July 2023.
