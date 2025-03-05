import mechaApiRefSidebar from "./apis/references/sidebar"
const sidebars = {
  mctkSidebar: [
    "mctk/intro",
    "mctk/introduction",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "mctk/gettingstarted/setup",
        "mctk/gettingstarted/first-app",
      ],
    },
    // "mctk/concepts",
  ],
  cometSidebar: [
    "comet/intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "comet/getting-started/quick-start",
        "comet/getting-started/form-factor",
        "comet/getting-started/using-gui",
      ],
    },
    {
      type: "category",
      label: "Access via network",
      collapsed: false,
      items: [
        "comet/network-access/find-ip-address",
        "comet/network-access/connect-via-ssh",
        "comet/network-access/share-files-with-scp",
        "comet/network-access/screen-share-with-vnc",
        // "comet/network-access/share-files-with-kde-connect",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Development",
      items: [
        "comet/development/c-cpp/install",
        "comet/development/go/install",
        "comet/development/java/install",
        "comet/development/nodejs/install",
        {
          type: "category",
          collapsed: true,
          label: "Python",
          items: [
            "comet/development/python/install",
            "comet/development/python/setting-up-pyenv",
          ]
        },
        "comet/development/ruby/install",
        "comet/development/rust/install",            
      ]
    },
    {
      type: "category",
      collapsed: false,
      label: "Machine Learning",
      items: [
        "comet/machine-learning/intro",
        "comet/machine-learning/running-tensorflow",
        "comet/machine-learning/installing-coral",
        "comet/machine-learning/on-device-llm",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Networking",
      items: [
        "comet/networking/ethernet-to-wireless",
        "comet/networking/wireless-to-ethernet",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Emulation",
      items: [
        "comet/emulation/windows",
        "comet/emulation/linux",
        "comet/emulation/dosbox",
      ],
    },
  ],
  mechanixSidebar: [
    "mechanix/intro",
    {
      type: "category",
      label: "Using the GUI",
      items: [
        "mechanix/using-the-gui/mechanix-shell",
        "mechanix/using-the-gui/launcher",
        "mechanix/using-the-gui/keyboard",
        "mechanix/using-the-gui/settings-app",
        "mechanix/using-the-gui/file-manager",
        "mechanix/using-the-gui/camera",
      ],
    },
    {
      type: "category",
      label: "Functions",
      items: [
        "mechanix/functions/wayland",
        "mechanix/functions/network-manager",
        "mechanix/functions/bluetooth",
        "mechanix/functions/video",
        "mechanix/functions/audio",
        "mechanix/functions/key-store",
      ],
    },
    {
      type: "category",
      label: "Installing Apps",
      items: [
        "mechanix/installing-apps/package-manager",
        "mechanix/installing-apps/using-flatpak",
        "mechanix/installing-apps/using-snap",
        "mechanix/installing-apps/adding-source",
      ],
    },
    {
      type: "category",
      label: "Services",
      items: [
        "mechanix/services/system/server",
        "mechanix/services/system/client",
        "mechanix/services/desktop/server",
        "mechanix/services/desktop/client",
      ],
    },
  ],
  mechaCloudSidebar: [
    "mecha-cloud/intro",
    {
      type: "category",
      label: "Console",
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [
            "mecha-cloud/tutorials/create-an-account",
            "mecha-cloud/tutorials/secure-your-account-with-2fa",
            "mecha-cloud/tutorials/add-your-first-machine",
            "mecha-cloud/tutorials/create-a-new-virtual-network",
            "mecha-cloud/tutorials/enable-networking-for-your-machine",
            "mecha-cloud/tutorials/securely-accessing-a-device-via-ssh",
            "mecha-cloud/tutorials/monitoring-metrics-and-logs",
          ],
        },
        {
          type: "category",
          label: "How-to Guides",
          items: [
            "mecha-cloud/how-to/account-management",
            "mecha-cloud/how-to/generate-api-keys",
            "mecha-cloud/how-to/update-machine-information",
            "mecha-cloud/how-to/machine-certificate-management",
            "mecha-cloud/how-to/query-metrics-on-grafana",
            "mecha-cloud/how-to/query-logs-on-grafana",
            "mecha-cloud/how-to/delete-network-from-console",
          ],
        },
        {
          type: "category",
          label: "References",
          items: [
            "mecha-cloud/references/2fa-trouble-shooting",
            "mecha-cloud/references/application-api-keys",
            "mecha-cloud/references/byok-with-networking",
            "mecha-cloud/references/monitoring-and-analysing-metrics",
            "mecha-cloud/references/monitoring-and-analysing-logs",
          ],
        },
        {
          type: "category",
          label: "Explanations",
          items: [
            "mecha-cloud/explainations/importance-and-functionality",
            "mecha-cloud/explainations/understanding-log-streams",
            "mecha-cloud/explainations/types-of-logs",
            "mecha-cloud/explainations/understanding-the-lgtm",
            "mecha-cloud/explainations/open-telemetry",
            "mecha-cloud/explainations/overview-of-networking",
            "mecha-cloud/explainations/networking-component",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Mecha Agent",
      items: [
        "mecha-cloud/mecha-agent/overview",
        {
          type: "category",
          label: "Services",
          items: [
            "mecha-cloud/mecha-agent/services/provisioning",
            "mecha-cloud/mecha-agent/services/messaging",
            "mecha-cloud/mecha-agent/services/machine-status",
            "mecha-cloud/mecha-agent/services/settings",
            "mecha-cloud/mecha-agent/services/networking",
            "mecha-cloud/mecha-agent/services/telemetry",
          ],
        },
      ],
    },
    "mecha-cloud/status-page",
  ],
  // mechaApiSidebar: [
  //   {
  //     type: "category",
  //     label: "Console API",
  //     items: [
  //       {
  //         type: "category",
  //         label: "References",
  //         items: [
  //           "apis/references/add-network",
  //         ],
  //       },
  //     ],
  //   },
  //   // "apis/references",
  // ],
  mechaApiSidebar: [
    // {
    "apis/first-request",
    "apis/api-authentication",
    {
      type: "category",
      label: "How-to Guides",
      collapsible: true,
      collapsed: true,
      items: [
        "apis/how-to-guides/prov-machine",
        "apis/how-to-guides/machine-logs-metrics",
        "apis/how-to-guides/add-virtual-ip",
        "apis/how-to-guides/generate-grafana-sso"
      ],
    },

    // start APIS
    // {
    //   type: "doc",
    //   id: "apis/references/mecha-cloud-apis",
    // },
    ... mechaApiRefSidebar,

    
    // },
    
  ],
};

export default sidebars;