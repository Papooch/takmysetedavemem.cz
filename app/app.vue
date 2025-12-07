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
        Ondřášek Švanda {{ t("misc.and") }} Verunka Baršová
        <PSpacer><hr></PSpacer>
      </PRow>
      <div class="title-container">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 v-html="t('intro.soWellGetMarriedThen')" />
      </div>
    </PColumn>
    <PSpacer height="1" />
    <PColumn
      alignment="center"
      gap="0"
    >
      <div>{{ t("intro.date") }}</div>
      <div>{{ t("intro.where") }}</div>
      <div>{{ t("intro.time") }}</div>
    </PColumn>

    <PSpacer height="2" />
    <hr width="100%">
    <PSpacer height="2" />

    <PColumn
      alignment="center"
      gap="0.5"
    >
      <PageSection
        :title="t('sections.schedule')"
      >
        {{ t('misc.toBeAdded') }}
      </PageSection>

      <PageSection :title="t('sections.confirmation')">
        {{ t('misc.toBeAdded') }}
      </PageSection>

      <PageSection
        id="arrival"
        :title="t('sections.arrival')"
        image-src="/svg/pig-walking.svg"
      >
        {{ t('misc.toBeAdded') }}
      </PageSection>

      <PageSection
        id="accommodation"
        :title="t('sections.accommodation')"
        image-position="left"
        image-src="/svg/pig-sleeping.svg"
      >
        {{ t('misc.toBeAdded') }}
      </PageSection>

      <PageSection
        id="dressCode"
        :title="t('sections.dressCode')"
      >
        {{ t('misc.toBeAdded') }}
      </PageSection>

      <PageSection
        id="gifts"
        :title="t('sections.gifts')"
      >
        {{ t('misc.toBeAdded') }}
      </PageSection>
    </PColumn>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("intro.soWellGetMarriedThen"),
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
