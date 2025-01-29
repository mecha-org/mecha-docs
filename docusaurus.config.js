// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mecha Documentation",
  tagline: "Build computing in the real world",
  favicon: "img/logo.png",

  // Set the production URL of your site here
  url: "https://developers.mecha.so",
  baseUrl: "/",

  organizationName: "Mecha Systems",
  projectName: "Mecha Docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        theme: {
          customCss: require.resolve("./src/css/theme.css"),
        },
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          path: "docs",
          sidebarPath: require.resolve("./docs/sidebars.js"),
          docItemComponent: "@theme/ApiItem",  // Added property
        },
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "console-api",
        docsPluginId: "default",
        config: {
          mechaConsole: {
            specPath: "static/apis/mechaApis.yaml",
            outputDir: "docs/apis/references",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: [["docusaurus-theme-openapi-docs", {}]],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Mecha",
        src: "img/logo.svg",
        srcDark: "img/logo-white.svg",
        className: "Mecha-logo",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "hardwareSidebar",
          position: "right",
          label: "Mecha Comet",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "mechanixSidebar",
        //   position: "left",
        //   label: "Mechanix OS",
        // },
        {
          type: "docSidebar",
          sidebarId: "mechaCloudSidebar",
          position: "right",
          label: "Mecha Cloud",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "mechaApiSidebar",
        //   position: "left",
        //   label: "API",
        // },
        {
          to: "https://forum.mecha.so",
          label: "Forum",
          position: "right",
        },
        {
          to: "https://github.com/mecha-org/mecha-docs",
          label: "Github",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
