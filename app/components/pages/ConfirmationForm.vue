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
      <PColumn
        v-if="isSubmitting"
        gap="1"
        alignment="center"
      >
        <p>Odesílám formulář...</p>
        <img src="/svg/pig-computer.svg">
      </PColumn>

      <PColumn
        v-else
        gap="2"
      >
        <p v-if="hasAlreadySubmitted">
          {{ t.confirmationForm.alreadySubmitted }}
        </p>

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

useSeoMeta({
  title: props.t.confirmationForm.title + " | " + props.t.intro.soWellGetMarriedThen,
});

const formLabels = props.t.confirmationForm.fields;

const name = ref("");
const numberOfPeople = ref(1);
const contact = ref("");
const preferredDrink = ref("nealko");
const sleepover = ref(props.sleeping ? "patek,sobota" : "x");
const message = ref("");

const isFormValid = computed(() => {
  return name.value.trim() !== "" && numberOfPeople.value > 0;
});

const hasAlreadySubmitted = ref(false);
onMounted(() => {
  hasAlreadySubmitted.value = loadFormValues();
});

const isSubmitting = ref(false);

function storeFormValues() {
  const valuesToStore = {
    name: name.value,
    numberOfPeople: numberOfPeople.value,
    contact: contact.value,
    preferredDrink: preferredDrink.value,
    sleepover: sleepover.value,
    message: message.value,
  };
  localStorage.setItem("confirmationForm", JSON.stringify(valuesToStore));
  hasAlreadySubmitted.value = true;
}

function loadFormValues() {
  const savedValues = localStorage.getItem("confirmationForm");
  if (savedValues) {
    try {
      const parsedValues = JSON.parse(savedValues);
      name.value = parsedValues.name ?? "";
      numberOfPeople.value = parsedValues.numberOfPeople ?? 1;
      contact.value = parsedValues.contact ?? "";
      preferredDrink.value = parsedValues.preferredDrink ?? "nealko";
      sleepover.value = parsedValues.sleepover ?? (props.sleeping ? "patek,sobota" : "x");
      message.value = parsedValues.message ?? "";
      return true;
    }
    catch (error) {
      console.error("Error parsing saved form values:", error);
    }
  }
  return false;
}

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
    password: password.trim(),
  };

  // Use URLSearchParams to encode the form data as application/x-www-form-urlencoded
  // to bypass CORS issues with the Google Apps Script endpoint
  const formData = new URLSearchParams(body);

  try {
    const url = "https://script.google.com/macros/s/AKfycbyWfwHR2pNtCAgkEdTNSchV8lQwenpCrk9pc2VUkZWjYooBseH_GRuDF3Vtq0xKqc6JfQ/exec";
    isSubmitting.value = true;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const responseBody = await response.json() as { status: string };
    if (response.ok) {
      if (responseBody.status === "created") {
        storeFormValues();
        return alert(`Formulář byl úspěšně odeslán. Děkujeme, ${name.value}!`);
      }
      else if (responseBody.status === "updated") {
        storeFormValues();
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
  finally {
    isSubmitting.value = false;
  }
}
</script>
