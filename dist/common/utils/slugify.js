"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._slugify = void 0;
const slugify_1 = require("slugify");
const _slugify = (name) => {
    return (0, slugify_1.default)(name, { lower: true, trim: true, replacement: '-' });
};
exports._slugify = _slugify;
//# sourceMappingURL=slugify.js.map