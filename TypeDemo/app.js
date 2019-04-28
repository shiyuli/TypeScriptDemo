"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Browsers_1 = require("./Browsers");
const utils_1 = require("./utils");
/**
 * Compare two browsers, and return the faster one.
 * @param browserA
 * @param browserB
 */
function compareBrowser(browserA, browserB) {
    let fastBrowser = null;
    if (browserA.speed >= browserB.speed) {
        fastBrowser = browserA;
    }
    else {
        fastBrowser = browserB;
    }
    return fastBrowser;
}
function main() {
    let chrome = new Browsers_1.Browsers.Chrome();
    let firefox = new Browsers_1.Browsers.Firefox();
    let fastBrowser = compareBrowser(chrome, firefox);
    fastBrowser.print();
    //let chromeI: IBrowser = {
    //    name: "Chrome", speed: 99, print: null
    //};
    //let firefoxI: IBrowser = {
    //    name: "Firefox", speed: 90, print: null
    //};
    //let fastBrowserI = compareBrowser(chromeI, firefoxI);
    //print(fastBrowserI);
    utils_1.Utils.delay(10000);
}
main();
//# sourceMappingURL=app.js.map