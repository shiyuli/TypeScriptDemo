import { Browsers } from "./Browsers";
import { Utils } from "./utils";

/**
 * Compare two browsers, and return the faster one.
 * @param browserA
 * @param browserB
 */
function compareBrowser(browserA: Browsers.IBrowser, browserB: Browsers.IBrowser): Browsers.IBrowser {
    let fastBrowser = null;

    if (browserA.speed >= browserB.speed) {
        fastBrowser = browserA;
    } else {
        fastBrowser = browserB;
    }

    return fastBrowser;
}

function main() {
    let chrome: Browsers.Browser = new Browsers.Chrome();
    let firefox: Browsers.Browser = new Browsers.Firefox();

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

    Utils.delay(10000);
}

main();
