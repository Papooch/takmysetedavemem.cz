<template>
  <NuxtLayout>
    <PRow
      justify="left"
      alignment="top"
    >
      <BackToHomeButton :t="t" />
    </PRow>
    <PColumn>
      <PageSection
        :title="t.confirmationForm.title"
      >
        <p>{{ t.confirmationForm.nothingHereYet }}</p>
      </PageSection>
    </PColumn>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Translations } from "~~/i18n";

const props = defineProps<{
  t: Translations;
  sleeping: boolean;
}>();

useSeoMeta({
  title: props.t.confirmationForm.title,
});
</script>
