

const backToHome = {
  type: "ref",
  id: "intro",
  label: "<- Back to home",
  className: "menu__backlink",
  customProps: {
    sidebar_is_backlink: true,
    sidebar_icon: "back-arrow",
  },
};

module.exports = {
  main: [
    {
      type: "doc",
      id: "intro",
      label: "Overview",
      customProps: {
        icon: "home",
      },
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "gettingstarted/quickstart",
        "gettingstarted/specifications",
      ],   
    },
  ],

};
