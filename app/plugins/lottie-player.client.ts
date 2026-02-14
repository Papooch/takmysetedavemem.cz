// See https://www.npmjs.com/package/@lottiefiles/lottie-player
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    import("@lottiefiles/lottie-player");
  }
});
