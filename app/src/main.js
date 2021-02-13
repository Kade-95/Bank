const { Base, AppLibrary, Compression } = require("./kedio/browser");
window.base = new Base(window);
base.appLibrary = new AppLibrary();
base.compressor = new Compression();

const Utils = require('./utils');

window.utilities = new Utils();
window.screen700 = window.matchMedia("(min-width: 700px)");
window.screen500 = window.matchMedia("(min-width: 500px)");
window.screen400 = window.matchMedia("(min-width: 400px)");

function init() {
    utilities.connect({ method: 'GET', url: `ping/${utilities.userType()}`, body: {} })
        .then(res => {
            utilities.render('dashboard');
            utilities.getUnResolved();
            let notifier = setInterval(utilities.getUnResolved, 1000 * 60);
        })
        .catch(error => {
            utilities.render('login');
        });
}

document.addEventListener("DOMContentLoaded", event => {
    init();
});