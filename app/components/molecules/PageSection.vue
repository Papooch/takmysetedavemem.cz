<template>
  <section>
    <PColumn alignment="center">
      <h2
        :id="id ?? title"
      >
        {{ title }}
      </h2>
      <PSpacer margin="0.5" />

      <PStack
        justify="center"
        alignment="center"
        gap="2"
        :reverse-on-small-screen="true"
      >
        <div class="content">
          <slot />
        </div>
        <img
          v-if="imageSrc"
          :src="imageSrc"
        >
      </PStack>
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
}

img {
  width: 30%;
}

@media (max-width: 768px) {
  img {
    width: 40%;
  }
}
</style>
