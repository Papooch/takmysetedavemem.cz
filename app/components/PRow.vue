<template>
  <div
    :class="rowClass"
    :style="{ gap: appendRemAsDefault(gap), width: appendRemAsDefault(width) }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import { appendRemAsDefault } from "~/utils/append-rem-as-default";

interface Props {
  alignment?: "top" | "center" | "bottom";
  justify?: "left" | "center" | "right";
  gap?: string | number;
  width?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
});

const { gap, width } = toRefs(props);

const rowClass = computed(() => {
  return {
    "align-top": props.alignment === "top",
    "align-center": props.alignment === "center",
    "align-bottom": props.alignment === "bottom",
    "justify-left": props.justify === "left",
    "justify-center": props.justify === "center",
    "justify-right": props.justify === "right",
  };
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.align-top {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}

.align-bottom {
  align-items: flex-end;
}

.justify-left {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-right {
  justify-content: flex-end;
}
</style>
