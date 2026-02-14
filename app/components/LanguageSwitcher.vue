<template>
  <div>
    <a href="/">
      <button
        v-if="isEn"
      >
        Česky
      </button>
    </a>
    <a href="/en">
      <button
        v-if="!isEn"
      >
        English
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isEn = computed(() => route.path.startsWith("/en"));
</script>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #444444;
  padding: 0.2rem 0.5rem;
}
</style>
