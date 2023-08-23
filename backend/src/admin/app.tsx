export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    theme: {
      dark: {
        colors: {
          primary100: "#669f66",
          primary200: "#5effc3",
          primary500: "#2f6846",
          buttonPrimary500: "#0b2f0b",
          primary600: "#00bd77",
          buttonPrimary600: "#ffbd77",
          primary700: "#008755",
        },
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Tafe Gippslandsssss",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
