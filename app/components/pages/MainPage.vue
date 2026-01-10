<template>
  <NuxtLayout>
    <PRow
      justify="right"
      alignment="top"
    >
      <LanguageSwitcher style="margin-bottom: -10rem;" />
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
        gap="1"
      >
        <PSpacer><hr></PSpacer>
        Ondášek Švanda {{ t.misc.and }} Verunka Baršová
        <PSpacer><hr></PSpacer>
      </PRow>
      <div class="title-container">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 v-html="t.intro.soWellGetMarriedThen" />
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
        :title="t.sections.schedule.title"
      >
        <p>{{ t.sections.schedule.content }}</p>
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection :title="t.sections.confirmation.title">
        <p>{{ t.sections.confirmation.content1 }}</p>
        <p>{{ t.sections.confirmation.content2 }}</p>
        <p>{{ t.sections.confirmation.content3 }}</p>
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="arrival"
        :title="t.sections.arrival.title"
        image-src="/svg/pig-walking.svg"
      >
        <p>{{ t.sections.arrival.content1 }}</p>
        <p>{{ t.sections.arrival.content2 }}</p>
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="accommodation"
        :title="t.sections.accommodation.title"
        image-position="left"
        image-src="/svg/pig-sleeping.svg"
      >
        <p>{{ t.sections.accommodation.content1 }}</p>
        <p>{{ t.sections.accommodation.content2 }}</p>
        <p>{{ t.sections.accommodation.content3 }}</p>
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
        <p>{{ t.sections.dressCode.content }}</p>
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
        <p>{{ t.sections.gifts.content }}</p>
      </PageSection>
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
