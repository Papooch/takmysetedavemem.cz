<template>
  <div
    class="p-spacer"
    :style="{ width: appendRemAsDefault(width), height: appendRemAsDefault(height) }"
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
}

const props = withDefaults(defineProps<Props>(), {
  width: "auto",
  height: "auto",
});

const { width, height } = toRefs(props);
</script>

<style scoped>
.p-spacer {
    flex: 1;
}
</style>
