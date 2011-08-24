// ==UserScript==
// @name          Like Monkey
// @namespace     http://cloudteam.integritas.com.br
// @description   Proof of concept for Meta Like project
// @include       http://www.facebook.com/
// ==/UserScript==
var $$ = function ()
    {
        return document.querySelectorAll.apply(document, arguments)
    }
function waitForLibs() {
    if (typeof $$ == 'undefined') {
        // set to check every 100 milliseconds if the libary has loaded
		//alert('not yet');
        window.setTimeout(waitForLibs, 30000);
	}
    else {
        // call the rest of your code
		var likes = $$('.like_link span.default_message, .cmnt_like_link span.default_message');
		for (var like in likes) { if (likes[like].firstChild) likes[like].firstChild.nodeValue = "Like it, you big fat ape!"; }
		
		if (typeof io == 'undefined') {
			// set to check every 100 milliseconds if the libary has loaded
			//alert('not yet');
			window.setTimeout(waitForLibs, 30000);
		} else {
			// Open a socket to a node.js process running locally
			var socket = io.connect('http://localhost');
			socket.on('news', function (data) {
				console.log(data);
				//socket.emit('my other event', { my: 'data' });
			});	
		}
	}
}

function loadLibs() {
        // dynamically creates a script tag
        var proto = document.createElement('script');
        proto.type = 'text/javascript';
        proto.src = 'http://jwebsocket.googlecode.com/svn-history/r1437/trunk/jWebSocketClient/web/res/js/socket.io/socket.io.js';
        document.getElementsByTagName('head')[0].appendChild(proto);
        waitForLibs();
}
window.addEventListener('load', loadLibs(), false);


