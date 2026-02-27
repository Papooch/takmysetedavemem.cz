<template>
  <section>
    <PColumn alignment="center">
      <h2 :id="id ?? title">
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
        <div
          v-if="imageSrc || lottieSrc"
          class="img-wrapper"
        >
          <noscript v-if="lottieSrc">
            <img v-if="imageSrc" class="image" :src="imageSrc" />
          </noscript>

          <lottie-player
            v-if="lottieSrc"
            :src="lottieSrc"
            autoplay
            loop
            speed="0.8"
            class="image lottie-animation"
          />
          <img
            v-else-if="imageSrc"
            class="image"
            :src="imageSrc"
          >
        </div>
      </PStack>
    </PColumn>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  id?: string;
  imageSrc?: string;
  lottieSrc?: string;
  imageScale?: number;
  imagePosition?: "left" | "right";
}>();

const scale = computed(() => props.imageScale ?? 1);
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

image {
  width: 100%;
}

.img-wrapper {
  width: calc(30% * v-bind(scale));
}

@media (max-width: 768px) {
  .img-wrapper {
    width: calc(40% * v-bind(scale));
  }
}
</style>
