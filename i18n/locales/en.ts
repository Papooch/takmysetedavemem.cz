import type { Translations } from "..";

export const en: Translations = {
  urlSuffix: "en",

  intro: {
    soWellGetMarriedThen: "So we'll get married then...",
    soWellGetMarriedThenHtml: "So&nbsp;we'll&nbsp;get married&nbsp;then...",
    date: "on Saturday, July 11, 2026",
    where: "at Chata Babí lom",
    time: "Sometime in the morning",
  },

  sections: {
    schedule: {
      title: "Schedule",
      contentRows: [
        "Will be added, but tentatively it looks like this:",
        "11:00 - Ceremony",
        "13:00 - Lunch buffet",
        "15:00 - Coffee and cakes, free entertainment",
        "17:00 - Barbecue",
        "18:00 - Arrival of live band and first dance",
        "21:00 - Late refreshments",
        "22:00 - End of official program, but the party will continue until morning, unless we start shouting like in the forest :)",
      ],
    },
    confirmation: {
      title: "Confirmation of Attendance",
      contentRows: [
        "Please list the number of people and individual names of those whose attendance you are confirming.",
        "The cottage capacity is quite limited, therefore +1s that were not listed on the invitation envelope are unfortunately not possible. Thank you for understanding.",
        "We love children, but if you could arrange for childcare, you might enjoy the wedding with us a bit more?",
      ],
    },
    arrival: {
      title: "Arrival and Transport",
      contentRows: [
        "Transport will be provided for the wedding, especially for guests from Brno on Saturday - we will try to minimize the number of cars as much as possible while allowing everyone to consume alcohol. Return transport from the wedding will also be provided.",
        "Arrival by personal vehicle will only be allowed for guests who have arranged to sleep directly at the cottage. If you're coming by car, here's a map of how to get there:",
      ],
    },
    accommodation: {
      title: "Sleeping Over",
      contentRows: [
        "There is unfortunately a limited number of sleeping spots at the cottage, so accommodation priority was given to those who don't live directly in Brno or the nearby area, or those who will help us prepare and clean up the wedding.",
        "Family members are mostly from Brno, or those who live a bit further will be provided shelter by family.",
        "Whether we have accommodation arranged for you was (not) indicated on the invitation.",
      ],
    },
    dressCode: {
      title: "Dress Code",
      contentRows: [
        "When choosing your outfit, please keep in mind that we'll spend the whole day in the forest. Men, feel free to leave ties and bow ties at home, we don't require that much formality. Women, only wear heels if you enjoy aerating the lawn, otherwise we don't recommend them. We'll leave the colours up to you, just make sure you feel comfortable.",
      ],
    },
    gifts: {
      title: "Gifts",
      contentRows: [
        "The greatest gift is of course your attendance. But besides you, we also like money. And we'd love to explore the world again.",
      ],
    },
  },

  confirmationForm: {
    goto: "Go to Confirmation",
    noscript: "To continue, you need to enable JavaScript.",

    passwordPrompt: "Enter the password from the card in the invitation envelope",
    passwordPlaceholder: "Password",
    passwordIsCorrect: "The password is correct, you can continue.",
    passwordIsIncorrect: "The password is not correct...",

    title: "Confirmation of Attendance",
    nameLabel: "First and Last Name",

    nothingHereYet: "The form is not ready yet, but at least you know you have the correct password :)",
  },

  misc: {
    submit: "Submit",
    continue: "Continue",
    and: "and",
    toBeAdded: "... will be added ...",
    backToHome: "Back to Home",
  },
};
