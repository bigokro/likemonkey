// ==UserScript==
// @name          Like Monkey
// @namespace     http://cloudteam.integritas.com.br
// @description   Proof of concept for Meta Like project
// @include       http://www.facebook.com/
// @require       http://localhost:3080/socket.io/socket.io.js
// ==/UserScript==
var $$ = function ()
    {
        return document.querySelectorAll.apply(document, arguments)
    };

function waitForLibs() {
 		var likes = $$('.like_link span.default_message, .cmnt_like_link span.default_message');
		for (var like in likes) { if (likes[like].firstChild) likes[like].firstChild.nodeValue = "Like it, you big fat ape!"; }
		
		if (typeof unsafeWindow.io == 'undefined') {
			// set to check every 100 milliseconds if the libary has loaded
			window.setTimeout(waitForLibs, 100);
		} else {
			// Open a socket to a node.js process running locally
			var io = unsafeWindow.io;
			var socket = io.connect('http://localhost:3080');
			socket.on('news', function (data) {
				//console.log(data);
				alert("hello " + data['hello']);
			});	
		}
}

function loadLibs() {
        // dynamically creates a script tag
        var proto = document.createElement('script');
        proto.type = 'text/javascript';
        proto.src = 'http://localhost:3080/socket.io/socket.io.js';
		var dhead = document.getElementsByTagName('head')[0] || document.documentElement;
        dhead.insertBefore(proto, dhead.firstChild);
        waitForLibs();
}
window.addEventListener("load", loadLibs());


