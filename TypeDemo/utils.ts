import { Browsers } from "./Browsers";

export namespace Utils {
    /**
     * Delay. Instead of system("pause") that TypeScript doesn't have.
     * @param milliseconds
     */
    export function delay(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    /**
     * Print browser info to the console.
     */
    export function print(browser: Browsers.IBrowser) {
        console.log(
            browser.name,
            "is the fasted browser,",
            "and its speed is",
            browser.speed,
            ".");

        if (browser.description != null) {
            console.log(browser.description);
        }
    }
}
