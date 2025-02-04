// script.js
const message = location.host.replace('www.', '') + " is temporarily unavailable";
document.title = message;
document.querySelector('meta[name="description"]').setAttribute("content", message);
document.querySelector('#title').textContent = message + ".";
