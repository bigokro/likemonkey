likemonkey
==========

#### Like it, you big fat ape!

This is a proof of concept in combining a Greasemonkey (user) script with socket.io and node.js in order to modify the content of the Facebook news feed. The script only works in Firefox, so there is some ongoing effort to create a Chrome extension for this as well.

### What does it do?

The user script has two main effects on the user viewing Facebook:

- All the "Like" links have their text changed to "Like it, you big fat ape!"
- The script opens a socket to http://localhost:3080, looking for any messages under the category "news". If it receives one, it posts an alert of the message.

### Installation

# If you don't have the Greasemonkey plugin for Firefox yet, you must install it
# Install the likemonkey.user.js script, either by opening it up as a local file (after cloning this repo), or by clicking on the "Raw" link for the file here in Github.
# Open your Firefox browser to your Facebook page. You should already be seeing the Like links changed.
# Install node.js and the socket.io module on your local machine
# I set this up running on a local VM, so I was forwarding my host port 3080 to the VM's port 80. You should either set up a similar forwarding, or change the code in `likemonkey.js` to listen on 3080:

  app.listen(3080);
 
# Start up the node server:

  sudo node likemonkey.js

# Reload the Facebook page. It should now pop up an alert with the message `hello world` (of course)


Enjoy, you big fat ape!
