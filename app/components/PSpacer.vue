<template>
  <div
    class="p-spacer"
    :style="{ width: appendRemAsDefault(width), height: appendRemAsDefault(height), margin: appendRemAsDefault(margin) }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { appendRemAsDefault } from "~/utils/append-rem-as-default";

interface Props {
  width?: string | number;
  height?: string | number;
  margin?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  width: "auto",
  height: "auto",
  margin: "0",
});

const { width, height, margin } = toRefs(props);
</script>

<style scoped>
.p-spacer {
    flex: 1;
}
</style>
