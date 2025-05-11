"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_MESSAGES = void 0;
exports.ERROR_MESSAGES = {
    minLength: (val) => {
        return `Minimum Length required is ${val}`;
    },
    maxLength: (val) => {
        return `Maximum Length is ${val}`;
    },
    invalidType: (val) => {
        return `Only ${val} allowed`;
    },
    weakPassword: () => {
        return "Password minimum length is 8 and should Contain At-least one Capital letter, one number and one special character";
    },
    invalidEnumVal: (val) => {
        return `Value should be one of ${Object.values(val).join(", ")}`;
    },
    invalidPhone: () => {
        return `Only Egyptian mobile numbers Allowed`;
    }
};
//# sourceMappingURL=errorMessages.js.map