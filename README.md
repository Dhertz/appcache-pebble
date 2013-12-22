Appcache Example for Pebble configuration pages
=====

A quick example of how to make configuration pages available offline. The webview will only request the appcache if an internet connnection is available. If this file has not changed, the cached version of the content will be used (gotcha: if the content is changed, then the appcache version needs to be incremented). This is implemented in javascript in index.html with the ```updateready``` event.