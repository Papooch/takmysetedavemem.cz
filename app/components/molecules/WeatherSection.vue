<template>
  <div class="weather-widget">
    <div v-if="pending" class="weather-status">…</div>
    <div v-else-if="error" class="weather-status">⚠️</div>
    <PStack v-else-if="weather" alignment="center" gap="1">
      <div
        v-for="(date, i) in weather.daily.time.slice(0, daysToWedding)"
        :key="date"
        class="weather-day"
        :class="{ 'is-wedding-day': date === '2026-07-11' }"
      >
        <span class="day-name">{{ dayName(date) }}</span>
        <img :src="wmoIcon(weather.hourly.weather_code[i * 24 + 12]!)" class="day-icon" alt="" />
        <span class="day-high">{{ Math.round(weather.daily.temperature_2m_max[i]!) }}°</span>
        <span class="day-low">{{ Math.round(weather.daily.temperature_2m_min[i]!) }}°</span>
        <img src="/svg/heart.svg" class="wedding-marker" :style="{ visibility: date === '2026-07-11' ? 'visible' : 'hidden' }" alt="" />
      </div>
    </PStack>
  </div>
</template>

<script setup lang="ts">
import type { Translations } from '~~/i18n';

interface OpenMeteoResponse {
  hourly: {
    weather_code: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

const props = defineProps<{ t: Translations }>();

const weddingDay = new Date('2026-07-11T00:00:00+02:00');
const daysToWedding = Math.ceil((weddingDay.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) + 2;

const { data: weather, pending, error } = useFetch<OpenMeteoResponse>(
  'https://api.open-meteo.com/v1/forecast',
  {
    query: {
      latitude: 49.29,
      longitude: 16.58,
      hourly: 'weather_code',
      daily: 'temperature_2m_max,temperature_2m_min',
      timezone: 'Europe/Prague',
      forecast_days: daysToWedding,
    },
  }
);

const locale = props.t.sections.weather.linkLocale === 'cs' ? 'cs-CZ' : 'en-US';

function dayName(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(locale, { weekday: 'short' });
}

function wmoIcon(code: number): string {
  if (code === 0) return '/svg/weather-clear-day.svg';
  if (code <= 2) return '/svg/weather-partly-cloudy-day.svg';
  if (code === 3) return '/svg/weather-overcast.svg';
  if (code <= 49) return '/svg/weather-fog-day.svg';
  if (code <= 55) return '/svg/weather-drizzle.svg';
  if (code <= 65) return '/svg/weather-rain.svg';
  if (code <= 77) return '/svg/weather-snow.svg';
  if (code <= 82) return '/svg/weather-partly-cloudy-day-rain.svg';
  if (code <= 86) return '/svg/weather-partly-cloudy-day-snow.svg';
  return '/svg/weather-thunderstorms-rain.svg';
}
</script>

<style scoped>
.weather-widget {
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  border-radius: 0.5rem;
}

.weather-day {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 0.15rem;
  padding: 0.35rem 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .weather-day {
    flex: unset;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 0.75rem;
  }
}

.day-name {
  text-transform: capitalize;
}

.day-icon {
  width: 3.5rem;
  height: 3.5rem;
}

.is-wedding-day {
  border-color: #c93032;
  border-width: 3px;
  border-style: dotted;
}

.wedding-marker {
  width: 1.2rem;
  height: 1.2rem;
}

.day-high {
  color: #c93032;
  font-weight: bold;
}

.day-low {
  color: #2e71f2;
}

.weather-status {
  padding: 1rem 0;
  text-align: center;
}
</style>
