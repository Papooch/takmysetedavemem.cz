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
            {{ t.confirmationForm.passwordPrompt }}

            <img
              src="/png/card-with-password.png"
              alt="card with password"
              class="card-image"
            >

            <input
              v-model="password"
              type="text"
              :placeholder="t.confirmationForm.passwordPlaceholder"
            >

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

const password = ref("");
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

watch(password, async (newPassword) => {
  const hashValue = await hashPassword(newPassword);
  if (allowedHashes.has(hashValue)) {
    isPasswordValid.value = true;
  }
  else {
    isPasswordValid.value = false;
  }
  hash.value = hashValue;
});

async function hashPassword(password: string): Promise<string> {
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
