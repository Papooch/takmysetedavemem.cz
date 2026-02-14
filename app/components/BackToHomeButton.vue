<template>
  <div>
    <a :href="`/${t.urlSuffix}`">
      <button>
        {{ t.misc.backToHome }}
      </button>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Translations } from "~~/i18n";

defineProps<{
  t: Translations;
}>();
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
