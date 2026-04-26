<template>
  <PageSection
    :id="id"
    :title="t.sections.schedule.title"
  >
    <div
      v-if="t.sections.schedule.note"
      class="schedule-note"
    >
      <PMarkdown :text="t.sections.schedule.note" />
    </div>
    <div class="schedule-list">
      <div
        v-for="item in items"
        :key="item.time"
        class="schedule-item"
      >
        <div class="schedule-row">
          <div
            class="schedule-img-col"
            :style="{
              width: 7 * maxImageScale + 'rem',
              minWidth: 7 * maxImageScale + 'rem',
              maxWidth: 7 * maxImageScale + 'rem',
            }"
          >
            <img
              v-if="item.image"
              :src="item.image"
              class="schedule-pig-large"
              :style="{
                height: 4.5 * (item.imageScale ?? 1) + 'rem',
                maxHeight: 4.5 * (item.imageScale ?? 1) + 'rem',
              }"
              alt=""
            >
          </div>
          <div class="schedule-right-col">
            <div class="schedule-time">
              {{ item.time }}
            </div>
            <div class="schedule-text">
              <PMarkdown :text="item.text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import PageSection from "./PageSection.vue";
import PMarkdown from "../PMarkdown.vue";
import type { Translations } from "~~/i18n";

const props = defineProps<{
  t: Translations;
  id?: string;
}>();

const scheduleContent = props.t.sections.schedule.content;

// This array is language-independent and can be extended with images later
const items = [
  {
    time: "10:30",
    text: scheduleContent.guestArrival,
    image: "/svg/pig-welcome.svg",
    imageScale: 1.2,
  },
  {
    time: "11:30",
    text: scheduleContent.ceremony,
    image: "/svg/pig-rings.svg",
    imageScale: 0.8,
  },
  {
    time: "13:00",
    text: scheduleContent.lunch,
    image: "/svg/pig-plate.svg",
    imageScale: 0.8,
  },
  {
    time: "15:00",
    text: scheduleContent.cake,
    image: "/svg/pig-cake.svg",
    imageScale: 1.1,
  },
  {
    time: "15:00",
    text: scheduleContent.flower,
    // image: "/svg/pig-flower.svg",
    // imageScale: 1.1,
  },
  {
    time: "16:00",
    text: scheduleContent.quiz,
    image: undefined,
  },
  {
    time: "17:00",
    text: scheduleContent.barbecue,
    image: "/svg/pig-grill.svg",
    imageScale: 1.5,
  },
  {
    time: "18:00",
    text: scheduleContent.band,
    image: "/svg/pig-dance.svg",
    imageScale: 1.2,
  },
  {
    time: "21:00",
    text: scheduleContent.lateRefreshments,
    image: undefined,
  },
  {
    time: "22:00",
    text: scheduleContent.end,
    image: "/svg/pig-sleeping.svg",
    imageScale: 1.1,
  },
];
// Compute the maximum imageScale for all items (default 1)
const maxImageScale = Math.max(...items.map(i => i.imageScale ?? 1));
</script>

<style scoped>
.schedule-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.schedule-item {
  width: 100%;
  /* border: 1px solid red; */
}

.schedule-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
}

.schedule-img-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: visible;
}

.schedule-right-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 0%;
  min-width: 0;
}

.schedule-pig-large {
  height: 4.5rem;
  max-height: 4.5rem;
  width: auto;
  object-fit: contain;
  display: block;
}

.schedule-right-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.schedule-time {
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0.2em;
}

.schedule-text {
  font-size: 1.1em;
  text-align: left;
  word-break: break-word;
}
/* Make the schedule section wider, matching the work in progress info section */
/* Switch to column on mobile */
@media (max-width: 768px) {

  .schedule-row {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .schedule-img-col {
    width: 100%;
    min-width: 0;
    max-width: none;
    justify-content: center;
    margin-bottom: 0.2rem;
  }
  .schedule-right-col {
    width: 100%;
    align-items: center;
  }
  .schedule-text {
    text-align: center;
  }
}
</style>
