"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils;
(function (Utils) {
    /**
     * Delay. Instead of system("pause") that TypeScript doesn't have.
     * @param milliseconds
     */
    function delay(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    Utils.delay = delay;
    /**
     * Print browser info to the console.
     */
    function print(browser) {
        console.log(browser.name, "is the fasted browser,", "and its speed is", browser.speed, ".");
        if (browser.description != null) {
            console.log(browser.description);
        }
    }
    Utils.print = print;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map