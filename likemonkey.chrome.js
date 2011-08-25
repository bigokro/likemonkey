// Chrome extension version of the Like Monkey script
var $$ = function ()
    {
        return document.querySelectorAll.apply(document, arguments)
    };

function likeMonkey() {
    var likes = $$('.like_link span.default_message, .cmnt_like_link span.default_message');
    for (var like in likes) { if (likes[like].firstChild) likes[like].firstChild.nodeValue = "Like it, you big fat ape!"; }
    
    if (typeof io == 'undefined') {
	// set to check every 100 milliseconds if the libary has loaded
	window.setTimeout(likeMonkey, 100);
    } else {
	// Open a socket to a node.js process running locally
	var socket = io.connect('http://localhost:3080');
	socket.on('news', function (data) {
	    //console.log(data);
	    alert("hello " + data['hello']);
	});	
    }
}

window.addEventListener("load", likeMonkey());


