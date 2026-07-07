<template>
  <a
    class="weatherwidget-io"
    :href="`https://forecast7.com/${props.t.sections.schedule.weatherForecast.linkLocale}/49d2916d58/lelekovice/`"
    data-label_1="Chata Babí lom"
    :data-label_2="props.t.sections.schedule.weatherForecast.text"
    data-font="Verdana"
    :data-days="dataDays"
    data-highcolor="#c93032"
    data-lowcolor="#2e71f2" >{{ props.t.sections.schedule.weatherForecast.text }} </a>
</template>

<script setup lang="ts">
import type { Translations } from '~~/i18n';


const props = defineProps<{
  t: Translations;
}>();

const weddingDay = new Date("2026-07-11T00:00:00+02:00");
const now = new Date();

const daysToWedding = Math.ceil((weddingDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + 2;
let dataDays = 5;
if (daysToWedding < 4) {
  dataDays = 3;
}


onMounted(() => {
  if (document.getElementById('weatherwidget-io-js')) {
    // Script already loaded: re-run the widget initializer directly
    (window as any).__weatherwidget_init();
  } else {
    const js = document.createElement('script');
    js.id = 'weatherwidget-io-js';
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    document.head.appendChild(js);
  }
});
</script>


<style scoped>
a.weatherwidget-io {
  max-width: 1000px;
  width: 100%;
}
</style>
