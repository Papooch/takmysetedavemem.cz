<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span v-html="rendered" />
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const rendered = computed(() =>
  props.text
    // **bold**
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // [label](url or #anchor)
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href=\"$2\">$1</a>"),
);
</script>
