<template>
  <div
    :class="columnClass"
    :style="{ gap: appendRemAsDefault(gap), height: appendRemAsDefault(height) }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import { appendRemAsDefault } from "~/utils/append-rem-as-default";

interface Props {
  alignment?: "left" | "center" | "right";
  gap?: string | number;
  height?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  height: "100%",
});

const { gap, height } = toRefs(props);

const columnClass = computed(() => {
  return {
    "align-left": props.alignment === "left",
    "align-center": props.alignment === "center",
    "align-right": props.alignment === "right",
  };
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.align-left {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}

.align-right {
  align-items: flex-end;
}
</style>
