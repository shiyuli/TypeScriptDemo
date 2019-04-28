interface IBrowser {
    name: string;
    speed: number;
}

function compareBrowser(browserA: IBrowser, browserB: IBrowser): IBrowser {
    let fastBrowser = null;

    if (browserA.speed >= browserB.speed) {
        fastBrowser = browserA;
    } else {
        fastBrowser = browserB;
    }

    return fastBrowser;
}

function printBrowser(browser: IBrowser) {
    console.log(
        browser.name,
        "is the fasted browser,",
        "and its speed is",
        browser.speed,
        ".");
}

function delay(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function main() {
    let browserA: IBrowser = { name: "Chrome", speed: 99 };
    let browserB: IBrowser = { name: "Firefox", speed: 90 };

    let fastBrowser = compareBrowser(browserA, browserB);
    printBrowser(fastBrowser);

    delay(10000);
}

main();
