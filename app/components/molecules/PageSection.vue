<template>
  <section>
    <PColumn alignment="center">
      <h2
        :id="id ?? title"
      >
        {{ title }}
      </h2>
      <PSpacer margin="0.5" />

      <PRow
        v-if="imagePosition === 'left' "
        justify="center"
        gap="2"
      >
        <img
          v-if="imageSrc"
          :src="imageSrc"
          width="20%"
        >
        <div class="content">
          <slot />
        </div>
      </PRow>
      <PRow
        v-else
        justify="center"
        gap="2"
      >
        <div class="content">
          <slot />
        </div>
        <img
          v-if="imageSrc"
          :src="imageSrc"
          width="20%"
        >
      </PRow>
    </PColumn>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  id?: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
}>();
</script>

<style scoped>
h2 {
  justify-items: center;
}

section {
  width: 100%;
}

.content {
  width: 80%;
  text-align: left;
  /* text-align-last: center; */

}
</style>
