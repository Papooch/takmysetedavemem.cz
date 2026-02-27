<template>
  <NuxtLayout>
    <PRow
      justify="right"
      alignment="top"
    >
      <LanguageSwitcher />
    </PRow>
    <PColumn
      gap="1"
      alignment="center"
    >
      <div class="heart-container">
        <img
          src="/svg/heart.svg"
          alt="Srdce"
          height="50rem"
        >
      </div>
      <div class="pigs-container">
        <img
          src="/svg/pusaci-prasatka.svg"
          alt="Pusací Prasátka"
        >
      </div>
      <PRow
        alignment="center"
      >
        <span style="flex-grow: 1;">
          <hr>
        </span>
        <span style="flex-grow: 1;">
          <PStack
            alignment="center"
            justify="center"
          >
            <span>Ondrášek Švanda</span>
            <span>&nbsp;{{ t.misc.and }}&nbsp;</span>
            <span>Verunka Baršová</span>
          </PStack>
        </span>
        <span style="flex-grow: 1;">
          <hr>
        </span>
      </PRow>
      <div class="title-container">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 v-html="t.intro.soWellGetMarriedThenHtml" />
      </div>
    </PColumn>
    <PSpacer height="1" />
    <PColumn
      alignment="center"
      gap="0"
    >
      <div>{{ t.intro.date }}</div>
      <div>{{ t.intro.where }}</div>
      <div>{{ t.intro.time }}</div>
    </PColumn>

    <PSpacer height="2" />
    <hr width="100%">
    <PSpacer height="2" />

    <PColumn
      alignment="center"
      gap="0.5"
    >
      <PageSection
        id="schedule"
        :title="t.sections.schedule.title"
      >
        <PMultiline :rows="t.sections.schedule.contentRows" />
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection :title="t.sections.confirmation.title">
        <PMultiline :rows="t.sections.confirmation.contentRows" />
        <PSpacer :margin="1" />
        <PColumn alignment="center">
          <a :href="`/form/${t.urlSuffix}`">
            <button>
              {{ t.confirmationForm.goto }}
            </button>
          </a>
        </PColumn>
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="arrival"
        :title="t.sections.arrival.title"
        image-src="/svg/pig-car.svg"
        lottie-src="/lottie/pig-car.json"
        :image-scale="1.2"
      >
        <PMultiline :rows="t.sections.arrival.contentRows" />
      </PageSection>
      <iframe
        style=""
        src="https://mapy.com/s/horajohafe"
        width="80%"
        height="300"
        frameborder="0"
      />
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="accommodation"
        :title="t.sections.accommodation.title"
        image-src="/svg/pig-sleeping.svg"
        lottie-src="/lottie/pig-sleeping.json"
        :image-scale="1"
      >
        <PMultiline :rows="t.sections.accommodation.contentRows" />
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="dressCode"
        :title="t.sections.dressCode.title"
      >
        <PMultiline :rows="t.sections.dressCode.contentRows" />
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="gifts"
        :title="t.sections.gifts.title"
      >
        <PMultiline :rows="t.sections.gifts.contentRows" />
      </PageSection>

      <PSpacer
        height="10"
        margin="2"
      />
      <hr width="100%">
      <PSpacer height="2" />
      <PColumn
        alignment="center"
        justify="center"
        gap="0"
      >
        <div>
          {{ `Ondrášek Švanda ${t.misc.and} Verunka Baršová` }}
        </div>
        <div>©2026</div>
      </PColumn>
    </PColumn>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Translations } from "~~/i18n";

const props = defineProps<{ t: Translations }>();

useSeoMeta({
  title: props.t.intro.soWellGetMarriedThen,
});
</script>

<style scoped>
.title-container {
  text-align: center;
}

img {
  max-width: 200px;
}

.heart-container {
  margin-bottom: -20px;
  /* border: solid red 1px; */
  margin-left: 20px;
}
</style>
