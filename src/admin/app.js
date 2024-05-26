const config = {
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
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config: {
    theme: {
      colors: {
        primary100: '#e6f7e6',
        primary200: '#b3e6b3',
        primary500: '#198d05',  // Custom primary color
        primary600: '#177d04',
        primary700: '#136604',
      },

    },

    locales: ['en'],
    translations : {
            en: {
              'app.components.LeftMenu.navbrand.title': 'KAFOCA Dashboard',
               'app.components.HomePage.welcome.again': 'Welcome back to KAFOCA Dashboard!',
            },
    },

  },
  bootstrap () {},
};
