<template>
  <NuxtLayout>
    <PRow
      justify="left"
      alignment="top"
    >
      <BackToHomeButton :t="t" />
    </PRow>
    <PColumn>
      <PageSection :title="t.confirmationForm.title">
        <form :action="`/form/${hash}`">
          <PColumn
            alignment="center"
            gap="1"
          >
            <input
              v-model="password"
              style="border: solid black 1.2mm; border-radius: 5px; padding: 0rem 0rem; padding: 0rem 0.5rem;"
              name="password"
              type="text"
              :placeholder="t.confirmationForm.passwordPlaceholder"
              @focus="lottiePlay"
              @blur="password == '' && lottieReverse()"
            >

            <div style="margin-top: -4.5rem; z-index: -1; padding-left: 5rem;">
              <div
                v-if="imageSrc || lottieSrc"
                class="img-wrapper"
              >
                <noscript v-if="lottieSrc">
                  <img v-if="imageSrc" class="image" :src="imageSrc" />
                </noscript>

                <!-- Show fallback image while lottie is loading -->
                <img
                  v-if="imageSrc && lottieSrc && !isLottieLoaded"
                  class="image"
                  :src="imageSrc"
                >

                <lottie-player
                  v-if="lottieSrc"
                  ref="lottiePlayer"
                  :src="lottieSrc"
                  speed="2"
                  class="image lottie-animation"
                  :style="{ display: isLottieLoaded ? 'block' : 'none' }"
                  @load="isLottieLoaded = true"
                />
                <img
                  v-else-if="imageSrc"
                  class="image"
                  :src="imageSrc"
                >
              </div>
            </div>

            <button
              type="submit"
              :disabled="!isPasswordValid"
            >
              {{ t.misc.continue }}
            </button>
            <noscript>{{ t.confirmationForm.noscript }}</noscript>
            <p>
              {{ infoText }}
            </p>

            {{ t.confirmationForm.passwordPrompt }}

            <img
              src="/png/card-with-password.png"
              alt="card with password"
              class="card-image"
            >
          </PColumn>
        </form>
      </PageSection>
    </PColumn>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Translations } from "~~/i18n";
import BackToHomeButton from "../BackToHomeButton.vue";

const props = defineProps<{ t: Translations }>();

const imageSrc = "/svg/pig-password.svg";
const lottieSrc = "/lottie/pig-password.json";

const isLottieLoaded = ref(false);

const _password = ref("");
const password = computed({
  get: () => _password.value.trim(),
  set: (value: string) => {
    _password.value = value.trim();
  },
});
const isPasswordValid = ref(false);
const hash = ref("");

const infoText = computed(() => {
  if (password.value === "") {
    return "";
  }
  return isPasswordValid.value
    ? props.t.confirmationForm.passwordIsCorrect
    : props.t.confirmationForm.passwordIsIncorrect;
});

const allowedHashes = new Set([
  "1444758d", // "cz"
  "4d84dd5d", // "cz, sleeping"
  "f1ce1f45", // "en, sleeping"
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lottiePlayer = ref(null as any);
function lottiePlay() {
  lottiePlayer.value.setDirection(1);
  lottiePlayer.value.play();
}
function lottieReverse() {
  lottiePlayer.value.setDirection(-1);
  lottiePlayer.value.play();
}

watch(password, (newPassword) => {
  if (newPassword === "") {
    lottieReverse();
  }
  else {
    lottiePlay();
  }

  const hashValue = hashPassword(newPassword);
  if (allowedHashes.has(hashValue)) {
    isPasswordValid.value = true;
  }
  else {
    isPasswordValid.value = false;
  }
  hash.value = hashValue;
});

function hashPassword(password: string): string {
  let h = 0;
  for (let c = password.length; c--;) {
    h += password.charCodeAt(c);
    h += h << 10;
    h ^= h >> 6;
  }
  h += h << 3;
  h ^= h >> 11;
  return (((h + (h << 15)) & 4294967295) >>> 0).toString(16);
}

useSeoMeta({
  title: props.t.confirmationForm.title,
});
</script>

<style scoped>
.card-image {
  width: 40%;
  transform: perspective(500px) rotateY(-20deg) rotateX(10deg);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
}
</style>
