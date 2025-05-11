import { ParseEnumPipe } from "@nestjs/common";

export const ERROR_MESSAGES = {
  minLength: (val: number) => {
    return `Minimum Length required is ${val}`;
  },
  maxLength: (val: number) => {
    return `Maximum Length is ${val}`;
  },
  invalidType: (val: string) => {
    return `Only ${val} allowed`;
  },
  weakPassword: () => {
    return "Password minimum length is 8 and should Contain At-least one Capital letter, one number and one special character";
  },
  invalidEnumVal: (val: object) => {
    return `Value should be one of ${Object.values(val).join(", ")}`;
  },
  invalidPhone : ()=>{
    return `Only Egyptian mobile numbers Allowed`
  }
};
