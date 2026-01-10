<template>
  <div>
    <button
      v-if="isEn"
      @click="$router.push('/')"
    >
      Česky
    </button>
    <button
      v-if="!isEn"
      @click="$router.push('/en')"
    >
      English
    </button>
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
