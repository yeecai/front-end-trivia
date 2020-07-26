This is a note for reading the article in the link below


Web Workers

An object using a contructor, runs a .js file at a worker thread,  in another global context which is different from 'window',  so you can't directly manipulate the DOM, but a large number of items, like WebSockets, indexedDB etc. can be available. Workers communicate via a system of messages,  like 'postMessage()'.  Workers can spawn new workers within the same origin.


Except dedicated workers:
- Shared workers: can be used by multiple scripts running in different windows, iFrames, etc., same domain. Little more complex- scripts must communicate via an active port.
- ServiceWorkers, act as proxy servers between websites and the browser and the network, allow access to push notifications and background sync
- Chrome Workers ...
- Audio workers ...


[Web Workers concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)



Q: "workers may use XHR for network I/O, with the exception that the responseXML and channel attributes on XHR always return null", why, and what does it mean?

A: to be discovered
