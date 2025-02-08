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
          // sidebarCollapsible: false,
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
    algolia: {
      appId: "HZJ4XG1ZJJ", // cspell: disable-line
      apiKey: "75ca7bc62c992a3b2e7e0d86b531b333",
      indexName: "developers_mecha_so_hzj4xg1zjj_pages",
      placeholder: "Search Mecha Documentation"
    },
    image: "img/mecha-social-card.jpg",
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
          sidebarId: "cometSidebar",
          position: "left",
          label: "Mecha Comet",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "hardwareSidebar",
        //   position: "left",
        //   label: "Mecha Comet",
        // },
        {
          type: "docSidebar",
          sidebarId: "mechanixSidebar",
          position: "left",
          label: "Mechanix OS",
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
          position: "left",
          label: "Mecha Cloud",
        },
        {
          type: "docSidebar",
          sidebarId: "mctkSidebar",
          position: "left",
          label: "MCTK",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "mechaApiSidebar",
        //   position: "left",
        //   label: "API",
        // },
        {
          to: "https://mecha.so",
          label: "Website",
          position: "right",
        },
        {
          to: "https://discord.com/invite/VGrZNFPycX",
          label: "Discord",
          position: "right",
        },
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
        {
          type: "search",
          position: "left",
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Mecha Systems Inc.`,
      links: [
        {
          items: [
            { label: 'Home', to: 'https://mecha.so/' },
            { label: 'Shipping', to: 'https://mecha.so/legal/shipping' },
            { label: 'Contact', to: 'https://mecha.so/contact' },
          ],
        },
        {
          items: [
            { label: 'Privacy', href: 'https://mecha.so/legal/privacy' },
            { label: 'Terms of Use', href: 'https://mecha.so/legal/terms-of-use' },
            { label: 'Refunds', href: 'https://mecha.so/legal/refunds' },
          ],
        },
        {
          items: [
            { label: 'Code Of Conduct', href: 'https://mecha.so/legal/code-of-conduct' },
            { label: 'Media Kit', href: 'https://mecha.so/media-kit' },
            { label: 'Comet On Kickstarter', href: 'https://mecha.so/comet/notify' },
          ],
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
