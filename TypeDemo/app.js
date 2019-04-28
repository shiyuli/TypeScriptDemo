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
function printBrowser(browser) {
    console.log(browser.name, "is the fasted browser,", "and its speed is", browser.speed);
}
function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
function main() {
    let browserA = { name: "Chrome", speed: 99 };
    let browserB = { name: "Firefox", speed: 90 };
    let fastBrowser = compareBrowser(browserA, browserB);
    printBrowser(fastBrowser);
    delay(10000);
}
main();
//# sourceMappingURL=app.js.map