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

    <PColumn alignment="center">
      <h2 id="schedule">
        {{ t('sections.schedule') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
      <PSpacer>------</PSpacer>
      <h2 id="confirmation">
        {{ t('sections.confirmation') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
      <PSpacer>------</PSpacer>
      <h2 id="arrival">
        {{ t('sections.arrival') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
      <PSpacer>------</PSpacer>
      <h2 id="accommodation">
        {{ t('sections.accommodation') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
      <PSpacer>------</PSpacer>
      <h2 id="dressCode">
        {{ t('sections.dressCode') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
      <PSpacer>------</PSpacer>
      <h2 id="gifts">
        {{ t('sections.gifts') }}
      </h2>
      <div> {{ t('misc.toBeAdded') }} </div>
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
