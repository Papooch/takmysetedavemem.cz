import type cz from "./locales/cz";

/**
 * Define the message schema based on the Czech locale file
 */
type MessageSchema = typeof cz;

declare module "vue-i18n" {
  // define the locale messages schema - automatically inferred from cz.ts
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
}

export {};
