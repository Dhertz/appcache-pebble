Pebble.addEventListener("showConfiguration",
                     function(e) {
                     	console.log("showConfiguration");
                        Pebble.openURL("http://192.168.1.13:8000");
					 });

Pebble.addEventListener("webviewclosed",
                   function(e) {
	                   //webview closed
	                   console.log("webview closed");
                       console.log(e.response);
	                   var responseFromWebView = decodeURIComponent(e.response);
	                   var settings = JSON.parse(responseFromWebView);
	                   console.log("Sending to Pebble");
	                   Pebble.sendAppMessage(settings);
					});