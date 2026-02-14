<template>
  <NuxtLayout>
    <PRow
      justify="left"
      alignment="top"
    >
      <BackToHomeButton :t="t" />
    </PRow>
    <PageSection
      :title="t.confirmationForm.title"
    >
      <PColumn>
        <form
          @submit.prevent="submitForm"
        >
          <PColumn gap="1">
            <label>
              {{ formLabels.name }}
              <br>
              <input
                v-model="name"
                type="text"
                name="name"
                placeholder="Prasátko Pepina"
              >
            </label>

            <label>
              {{ formLabels.contact }}
              <br>
              <input
                v-model="contact"
                type="text"
                name="contact"
              >
            </label>

            <label>
              {{ formLabels.numberOfPeople }}
              <br>
              <input
                v-model="numberOfPeople"
                type="number"
                name="numberOfPeople"
              >
            </label>

            <label v-if="sleeping">
              {{ formLabels.sleepover }}
              <br>
              <select
                v-model="sleepover"
                name="sleepover"
              >
                <option value="patek,sobota">{{ formLabels.sleepoverOptions.both }}</option>
                <option value="patek">{{ formLabels.sleepoverOptions.friday }}</option>
                <option value="sobota">{{ formLabels.sleepoverOptions.saturday }}</option>
                <option value="ne">{{ formLabels.sleepoverOptions.none }}</option>
              </select>
            </label>

            <label>
              {{ formLabels.preferredDrink }}
              <br>
              <select
                v-model="preferredDrink"
                name="preferredDrink"
              >
                <option value="vino">{{ formLabels.preferredDrinkOptions.wine }}</option>
                <option value="pivo">{{ formLabels.preferredDrinkOptions.beer }}</option>
                <option value="tvrdej">{{ formLabels.preferredDrinkOptions.sliwovitz }}</option>
                <option value="cocktail">{{ formLabels.preferredDrinkOptions.cocktail }}</option>
                <option value="nealko">{{ formLabels.preferredDrinkOptions.softDrink }}</option>
              </select>
            </label>

            <label>
              {{ formLabels.message }}
              <br>
              <textarea
                v-model="message"
                name="message"
                rows="4"
                style="width: 100%;"
              />
            </label>

            <PRow
              justify="center"
              alignment="center"
            >
              <button
                type="submit"
                :disabled="!isFormValid"
              >
                {{ t.misc.submit }}
              </button>
            </PRow>
          </PColumn>
        </form>
      </PColumn>
    </PageSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Translations } from "~~/i18n";

const props = defineProps<{
  t: Translations;
  sleeping: boolean;
}>();

const formLabels = props.t.confirmationForm.fields;

const name = ref("");
const numberOfPeople = ref(1);
const contact = ref("");
const preferredDrink = ref("");
const sleepover = ref(props.sleeping ? "patek,sobota" : "x");
const message = ref("");

const isFormValid = computed(() => {
  return name.value.trim() !== "" && numberOfPeople.value > 0;
});

useSeoMeta({
  title: props.t.confirmationForm.title + " | " + props.t.intro.soWellGetMarriedThen,
});

async function submitForm() {
  const params = new URLSearchParams(window.location.search);
  const password = params.get("password") || "";

  const body = {
    name: name.value,
    contact: contact.value,
    personCount: numberOfPeople.value.toString(),
    sleeping: sleepover.value,
    drink: preferredDrink.value,
    message: message.value,
    password: password,
  };

  // Use URLSearchParams to encode the form data as application/x-www-form-urlencoded
  // to bypass CORS issues with the Google Apps Script endpoint
  const formData = new URLSearchParams(body);

  try {
    const url = "https://script.google.com/macros/s/AKfycbyWfwHR2pNtCAgkEdTNSchV8lQwenpCrk9pc2VUkZWjYooBseH_GRuDF3Vtq0xKqc6JfQ/exec";
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const responseBody = await response.json() as { status: string };
    if (response.ok) {
      if (responseBody.status === "created") {
        return alert(`Formulář byl úspěšně odeslán. Děkujeme, ${name.value}!`);
      }
      else if (responseBody.status === "updated") {
        return alert(`Zaznamené odpovědi pro jméno "${name.value}" byly aktualizovány. Děkujeme!`);
      }
      else if (responseBody.status === "wrong_password") {
        return alert("Dobrý pokus, ale bez hesla to nepůjde! Vrať se zpět a zadej správné heslo");
      }

      console.error("Unexpected response status:", responseBody);
      alert("Omlouváme se, ale při odesílání formuláře došlo k chybě. Zkuste to prosím znovu později!");
    }
  }
  catch (error) {
    console.error("Error submitting form:", error);
    alert("Omlouváme se, ale při odesílání formuláře došlo k chybě. Zkuste to prosím znovu později.");
  }
}
</script>
