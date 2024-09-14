// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mecha Documentation",
  tagline: "Build computing in the real world",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mecha Systems", // Usually your GitHub org/user name.
  projectName: "Mecha Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/theme.css")],
        },
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          path: "docs",
          sidebarPath: "./docs/sidebars.js",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "Saleor",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
          className: "saleor-logo",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "hardwareSidebar",
            position: "left",
            label: "Comet-M",
          },
          {
            type: "docSidebar",
            sidebarId: "mechanixSidebar",
            position: "left",
            label: "Mechanix OS",
          },
          {
            type: "docSidebar",
            sidebarId: "mechaCloudSidebar",
            position: "left",
            label: "Mecha Cloud",
          },
          {
            to: "https://github.com/saleor/saleor-docs/issues/new",
            label: "Github",
            position: "right",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
