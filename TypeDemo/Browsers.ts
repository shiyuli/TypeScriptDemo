import { Utils } from "./utils";

export namespace Browsers {
    interface IPrintable {
        /**
         * Print browser info to the console.
         */
        print();
    }

    /**
     * interface Browser
     */
    export interface IBrowser extends IPrintable {
        name: string;
        speed: number;
        description?: string;
    }

    export class Browser implements IBrowser {
        description?: string;
        constructor(public name: string, public speed: number) {
        }

        print() {
            Utils.print(this);
        }
    }

    export class Chrome extends Browser {
        constructor() {
            super("Chrome", 99);
        }
    }

    export class Firefox extends Browser {
        constructor() {
            super("Firefox", 90);
        }
    }
}
