"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeDelay = fakeDelay;
function fakeDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=fakeDelay.js.map