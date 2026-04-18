<template>
  <component
    :is="component"
    v-for="(row, index) in rows"
    :key="index"
    :style="index < rows.length - 1 ? { marginBottom: `${gap}rem` } : {}"
  >
    <PMarkdown :text="row" />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  component?: string;
  gap?: string;
  rows: string[];
}>(), {
  gap: "1",
  component: "p",
});
</script>
