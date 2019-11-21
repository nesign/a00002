const $ = require('jquery');
const jQuery = $;
const bootstrap = require('bootstrap');

document.addEventListener('invite', (event) => {
  const invite = event.detail;
  if (invite) {
    // Loaded invite
  }
}, false);

document.addEventListener('guest', (event) => {
  const guest = event.detail;
  if (guest) {
    // Loaded guest
  }
}, false);