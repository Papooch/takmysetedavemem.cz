<template>
  <div
    :class="stackClass"
    :style="{ gap: appendRemAsDefault(gap), width: appendRemAsDefault(width) }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";
import { appendRemAsDefault } from "~/utils/append-rem-as-default";

interface Props {
  alignment?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
  gap?: string | number;
  width?: string | number;
  breakpoint?: string;
  reverseOnSmallScreen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
  breakpoint: "768px",
});

const { gap, width } = toRefs(props);

const stackClass = computed(() => {
  return {
    "align-start": props.alignment === "start",
    "align-center": props.alignment === "center",
    "align-end": props.alignment === "end",
    "justify-start": props.justify === "start",
    "justify-center": props.justify === "center",
    "justify-end": props.justify === "end",
    "reverse": props.reverseOnSmallScreen,
  };
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  width: 100%;
}

/* Switch to column on mobile */
@media (max-width: 768px) {
  div {
    flex-direction: column;
  }

  div.reverse {
    flex-direction: column-reverse;
  }
}

.align-start {
  align-items: flex-start;
}

.align-center {
  align-items: center;
}

.align-end {
  align-items: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}
</style>
