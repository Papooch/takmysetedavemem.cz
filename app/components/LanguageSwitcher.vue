<template>
  <div>
    <button
      v-if="locale !== 'cz'"
      @click="setLocale('cz')"
    >
      Česky
    </button>
    <button
      v-if="locale !== 'en'"
      @click="setLocale('en')"
    >
      English
    </button>
  </div>
</template>

<script setup lang="ts">
const { setLocale, locale } = useI18n();
const route = useRoute();

// Detect language from URL parameter if supplied
onMounted(() => {
  if (route.query.lang === "cz" || route.query.lang === "en") {
    setLocale(route.query.lang);
  }
});
</script>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #444444;
  font-family: "JustAnotherHand", cursive;
  padding: 0.2rem 0.5rem;
}
</style>
