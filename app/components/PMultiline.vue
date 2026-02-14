<template>
  <component
    :is="component"
    v-for="(row, index) in rows"
    :key="index"
    :row="row"
    :style="index < rows.length - 1 ? { marginBottom: `${gap}rem` } : {}"
  >
    {{ row }}
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
