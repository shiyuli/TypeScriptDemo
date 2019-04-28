"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
var Browsers;
(function (Browsers) {
    class Browser {
        constructor(name, speed) {
            this.name = name;
            this.speed = speed;
        }
        print() {
            utils_1.Utils.print(this);
        }
    }
    Browsers.Browser = Browser;
    class Chrome extends Browser {
        constructor() {
            super("Chrome", 99);
        }
    }
    Browsers.Chrome = Chrome;
    class Firefox extends Browser {
        constructor() {
            super("Firefox", 90);
        }
    }
    Browsers.Firefox = Firefox;
})(Browsers = exports.Browsers || (exports.Browsers = {}));
//# sourceMappingURL=Browsers.js.map