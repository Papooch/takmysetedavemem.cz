export const cz = {
  urlSuffix: "", // empty

  intro: {
    soWellGetMarriedThen: "Tak my se teda vemem, no...",
    soWellGetMarriedThenHtml: "Tak&nbsp;my&nbsp;se&nbsp;teda vemem,&nbsp;no...",
    date: "v sobotu 11. července 2026",
    where: "na Chatě Babí lom",
    time: "Někdy dopoledne",
  },

  sections: {
    introduction: {
      title: "Vítejte",
      contentRows: [
        "Naši milí svatebčané, vítejte na našem svatebním webu!",
        "Je nám velkou ctí pozvat vás na naši svatbu, která přichází po téměř 11 letech našeho vztahu - ano, dali jsme si na čas, ale lepší někdy než nikdy.",
        "Těšíme se, že s námi oslavíte tento výjimečný den plný prasátek, roztomilých chvil a dobrého jídla - co víc si v letní den přát?",
        "Na této stránce byste měli nalézt všechny důležité informace. Prosíme vás především o [potvrzení účasti](#confirmation). Pokud by vám nicméně nebylo cokoliv jasné, obraťte se přímo na nás, nebo v blízkosti svatby na naše [svědky](#witnesses).",
        "Budeme se těšit!",
        "Verunka a  Ondrášek",
      ],
    },
    schedule: {
      title: "Harmonogram",
      note: "Bude doplněn, předběžně to ale vypadá takto:",
      content: {
        guestArrival: "Trousení hostů",
        ceremony: "Obřad\n(to proč jsme tu my)",
        lunch: "Oběd formou rautu\n(to proč jste tu vy)",
        cake: "Káva a dortíček",
        quiz: "Svatební kvíz",
        barbecue: "Grilování",
        band: "Příjezd živé kapely a první tanec",
        lateRefreshments: "Pozdní občerstvení",
        end: "Konec oficiálního programu, ale zábava bude pokračovat až do rána",
      },
    },
    confirmation: {
      title: "Potvrzení účasti",
      contentRows: [
        "Prosíme, vypište počet osob a jednotlivá jména těch, jejichž účast potvrzujete.",
        "Kapacita chaty je poměrně omezená, proto +1, které nebyly uvedeny na obálce pozvánky, bohužel nejsou možné. Děkujeme za pochopení.",
      ],
    },
    arrival: {
      title: "Příjezd a doprava",
      contentRows: [
        "Na svatbu bude zejména pro hosty z Brna v sobotu zajištěna doprava - budeme se snažit co nejvíce eliminovat počet aut a současně všem umožnit požití alkoholu I odvoz ze svatby tak bude zajištěn.",
        "Příjezd vlastním vozidlem bude umožněn pouze hostům, kteří mají zařízeno spinkání přímo na chatěnce. Pokud pojedete autem, zde je mapka, jak se tam dostat:",
      ],
    },
    accommodation: {
      title: "Spinkání",
      contentRows: [
        "Na chatěnce je bohužel omezený počet místeček na spinkání, proto byla v rámci ubytování dána přednost těm, kteří nebydlí přímo v Brně či blízkém okolí, potažmo těm, kteří nám budou svatbu pomáhat chystat a uklízet. ",
        "Rodinní příslušníci jsou v drtivé většině přímo z Brna, případně těm, kteří bydlí o něco dál, bude přístřeší poskytnuto rodinou.",
        "To, zda pro vás máme ubytování zajištěno, (ne)bylo uvedeno na pozvánce.",
      ],
    },
    dressCode: {
      title: "Šatěnky a tak",
      contentRows: [
        "Při výběru róby berte, prosíme, na vědomí, že celý den strávíme na chatě v lese.",
        "Muži, můžete s klidem nechat kravaty i motýlky doma, tolik formálnosti nevyžadujeme. Ženy, podpatky berte jen pokud rády kypříte trávník, jinak je nedoporučujeme.",
        "Barvičky necháme na vás, hlavně ať se cítíte dobře.",
      ],
    },
    witnesses: {
      title: "Svědkové",
      contentRows: [
        "Svědčit nám budou naši drazí sourozenci - **Dalča** a **Monča**. Pokud budete mít nějaké dotazy během svatebního dne nebo budete potřebovat řešit cokoliv ohledně organizace (např. že pro nás máte nějaké překvapeníčko) či jiných detailů, obracejte se, prosíme, přímo na ně.",
        "Kontakty doplníme.",
      ],
    },
    gifts: {
      title: "Dárečky",
      contentRows: [
        "Největším dárečkem je pro nás samozřejmě vaše účast. Ale kromě vás máme rádi i penízky. A rádi bychom zase vyrazili poznávat svět.",
      ],
    },
  },

  confirmationForm: {
    goto: "Přejít k potvrzení",
    noscript: "Pro pokračování je potřeba povolit JavaScript.",

    passwordPrompt: "Zadejte heslo z lístku v obálce s pozvánkou",
    passwordPlaceholder: "Heslo",
    passwordIsCorrect: "Heslo je správné, můžete pokračovat.",
    passwordIsIncorrect: "Heslo není správné...",

    title: "Potvrzení účasti",

    alreadySubmitted: "Už jste nám své potvrzení poslali, ale můžete ho samozřejmě kdykoliv aktualizovat, pokud se něco změní. Stačí odeslat formulář se stejným jménem.",

    fields: {
      name: "Jméno a příjmení nebo jiný identifikátor",
      numberOfPeople: "Počet osob (včetně vás), které potvrzujete. Jména dalších osob nám prosím napište do pole pro zprávu na konci.",
      contact: "Kontakt (e-mail nebo telefon), kde vám můžeme dát vědět v případě potřeby",
      preferredDrink: "Preferovaný nápoj (abychom věděli, co připravit)",
      preferredDrinkOptions: {
        wine: "🍷 Vínečko",
        beer: "🍺 Pivečko",
        sliwovitz: "🥃 Slivovice",
        cocktail: "🍹 Koktejly",
        softDrink: "🥤 Nealko",
      },
      sleepover: "Chci přespávat na chatěnce",
      sleepoverOptions: {
        friday: "🛏️ Jen z pátku na sobotu",
        saturday: "🛏️ Jen ze soboty na neděli",
        both: "🛏️🛏️ Oba dva dny",
        none: "❌ Nebudu přespávat",
      },
      message: "Pokud byste nám rádi něco řekli nebo popřáli, případně pokud máte nějaké alergie nebo jiné preference, o kterých bychom měli vědět, dejte nám prosím vědět zde. Také nám prosím sdělte jména dalších osob, které potvrzujete.",
    },
  },

  misc: {
    submit: "Odeslat",
    continue: "Pokračovat",
    and: "a",
    toBeAdded: "... bude doplněno ...",
    backToHome: "Zpět na úvod",
    websiteUnderConstruction: "Stránka ve výstavbě",
    websiteUnderConstructionText: "Naše svatební stránka je stále ve výstavbě. Většina informací je již aktuální, ale časem se tu budou objevovat další prasátka a důležité detaily, tak se sem čas od času podívejte.",
  },
};
