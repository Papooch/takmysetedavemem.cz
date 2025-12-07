// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  ssr: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/main.css",
  ],
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  i18n: {
    defaultLocale: "cz",
    langDir: "locales",
    locales: [
      { code: "cz", file: "cz.ts", name: "Čeština" },
      { code: "en", file: "en.ts", name: "English" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
      fallbackLocale: "cz",
    },
    strategy: "no_prefix",
  },
});
