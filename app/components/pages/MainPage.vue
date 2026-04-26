<template>
  <NuxtLayout>
    <button
      class="mobile-menu-toggle"
      type="button"
      :aria-expanded="isMobileMenuOpen"
      aria-controls="mobile-sections-menu"
      aria-label="Open sections menu"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    >
      ☰
    </button>

    <div
      v-if="isMobileMenuOpen"
      class="mobile-menu-overlay"
      @click.self="isMobileMenuOpen = false"
    >
      <nav
        id="mobile-sections-menu"
        class="mobile-menu-panel"
      >
        <ul class="mobile-menu-list">
          <li
            v-for="section in menuSections"
            :key="`mobile-${section.id}`"
            class="mobile-menu-item"
          >
            <a
              :href="`#${section.id}`"
              @click="isMobileMenuOpen = false"
            >
              {{ section.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <section class="hero">
      <PRow
        justify="right"
        alignment="top"
      >
        <LanguageSwitcher />
      </PRow>

      <div class="hero-center">
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
          <PRow alignment="center">
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

        <PColumn
          class="hero-date"
          alignment="center"
          gap="0"
        >
          <div>{{ t.intro.date }}</div>
          <div>{{ t.intro.where }}</div>
          <div>{{ t.intro.time }}</div>
        </PColumn>
      </div>
    </section>

    <div class="top-bar">
      <nav class="sections-menu">
        <ul class="sections-menu-list">
          <li
            v-for="section in menuSections"
            :key="section.id"
            class="sections-menu-item"
          >
            <a :href="`#${section.id}`">{{ section.label }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <PSpacer height="2" />

    <PColumn
      alignment="center"
      gap="0.5"
    >
      <PageSection
        id="introduction"
        :title="t.sections.introduction.title"
      >
        <PMultiline :rows="t.sections.introduction.contentRows" />
      </PageSection>
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />

      <!-- Work in progress info -->
      <div>
        <div
          style="
            position: relative;
            padding: 0rem 0.5rem;
            border: solid black 1.2mm;
            border-radius: 5px;
            background-color: #fffdf4;
          "
        >
          <b>{{ t.misc.websiteUnderConstruction }}</b>
        </div>
        <img
          style="
            position: relative;
            margin-top: -3rem;
            padding-left: 5rem;
            z-index: -5;
          "
          src="/svg/pig-password.svg"
        >
      </div>
      <p>{{ t.misc.websiteUnderConstructionText }}</p>

      <PSpacer margin="2" />

      <!-- Main content -->

      <ScheduleSection
        id="schedule"
        :t="t"
      />
      <PSpacer
        height="1"
        width="20%"
        margin="2"
      />
      <PageSection
        id="confirmation"
        :title="t.sections.confirmation.title"
      >
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
        id="witnesses"
        :title="t.sections.witnesses.title"
      >
        <PMultiline :rows="t.sections.witnesses.contentRows" />
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
import ScheduleSection from "../molecules/ScheduleSection.vue";
import type { Translations } from "~~/i18n";

const props = defineProps<{ t: Translations }>();
const isMobileMenuOpen = ref(false);

const menuSections = computed(() => [
  { id: "introduction", label: props.t.sections.introduction.title },
  { id: "schedule", label: props.t.sections.schedule.title },
  { id: "confirmation", label: props.t.sections.confirmation.title },
  { id: "arrival", label: props.t.sections.arrival.title },
  { id: "accommodation", label: props.t.sections.accommodation.title },
  { id: "dressCode", label: props.t.sections.dressCode.title },
  { id: "witnesses", label: props.t.sections.witnesses.title },
  { id: "gifts", label: props.t.sections.gifts.title },
]);

useHead({
  script: [
    {
      key: "remove-initial-hash",
      innerHTML: `
        try {
          const navEntries = performance.getEntriesByType("navigation");
          const navType = navEntries.length > 0 ? navEntries[0].type : "";
          const isReload = navType === "reload";

          if (isReload && window.location.hash) {
            const cleanUrl = window.location.pathname + window.location.search;
            window.history.replaceState(null, "", cleanUrl);
            window.scrollTo(0, 0);
          }
        }
        catch (_error) {
          // noop: never let this helper block page rendering
        }
      `,
    },
  ],
});

useSeoMeta({
  title: props.t.intro.soWellGetMarriedThen,
});
</script>

<style scoped>
.hero {
  min-height: calc(100svh - 3rem);
  display: flex;
  flex-direction: column;
}

.hero-center {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-date {
  margin-top: 1rem;
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -0.25rem;
  min-height: 3rem;
  background-color: #fffdf4;
  padding: 0.5rem 0;
}

@supports (width: 100vi) {
  .top-bar {
    width: 90vi;
    margin-left: calc(50% - 45vi);
  }
}

.mobile-menu-toggle {
  display: none;
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 120;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #fffdf4;
  color: #444444;
  font-size: 1.2rem;
  line-height: 1;
  padding: 0.35rem 0.55rem;
  cursor: pointer;
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 110;
  background-color: rgba(0, 0, 0, 0.2);
}

.mobile-menu-panel {
  width: min(90vw, 360px);
  margin: 3.2rem 0 0 0.75rem;
  background-color: #fffdf4;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
}

.mobile-menu-list {
  list-style: none;
}

.mobile-menu-item + .mobile-menu-item {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.mobile-menu-item a {
  display: block;
  padding: 0.45rem 0;
  color: #444444;
  text-decoration: none;
}

.mobile-menu-item a:hover {
  text-decoration: underline;
}

.sections-menu {
  width: 100%;
  overflow-x: auto;
  padding: 0 1rem;
  text-align: center;
}

.sections-menu-list {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 0;
  white-space: nowrap;
  border-bottom: 1px solid black;
  padding-bottom: 0.2rem;
}

.sections-menu-item {
  display: inline-flex;
  align-items: center;
}

.sections-menu-item + .sections-menu-item::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 0.8rem;
  background-color: black;
  margin: 0 0.35rem;
}

.sections-menu-item a {
  font-size: inherit;
  color: inherit;
  color: #444444;
  text-decoration: none;
}

.sections-menu-item a:hover {
  text-decoration: underline;
}

:deep(h2[id]) {
  scroll-margin-top: 3.5rem;
}

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

@media (max-width: 768px) {
  .top-bar {
    display: none;
  }

  .mobile-menu-toggle {
    display: inline-block;
  }

  .hero {
    min-height: 100svh;
  }

  :deep(h2[id]) {
    scroll-margin-top: 1rem;
  }
}
</style>
