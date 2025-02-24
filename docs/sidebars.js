import mechaApiRefSidebar from "./apis/references/sidebar"
const sidebars = {
  cometSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "comet/getting-started/quick-start",
        "comet/getting-started/form-factor",
        "comet/getting-started/using-gui",
        "comet/getting-started/connecting-to-internet",
        "comet/getting-started/things-to-do",
      ],
    },
    // {
    //   type: "category",
    //   label: "Extensions",
    //   items: [
    //     "comet/extensions/quick-start",
    //     "comet/extensions/form-factor",
    //     "comet/extensions/using-gui",
    //     "comet/extensions/connecting-to-internet",
    //   ],
    // },
    "comet/connect-to-ssh",
  ],
  hardwareSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "hardware/gettingstarted/quickstart",
        "hardware/gettingstarted/specifications",
      ],
    },
    {
      type: "category",
      label: "Connectivity",
      items: [
        "hardware/connectivity/connecting-via-ssh",
        "hardware/connectivity/via-serial-console",
        "hardware/connectivity/using-public-key-auth",
        "hardware/connectivity/using-putty-on-windows",
      ],
    },
    {
      type: "category",
      label: "Kernel",
      items: [
        "hardware/kernel/connecting-basics",
        "hardware/kernel/device-tree",
        "hardware/kernel/building-device-tree",
        "hardware/kernel/working-with-kernel",
        "hardware/kernel/build-from-source",
      ],
    },
    {
      type: "category",
      label: "Bootloader",
      items: [
        "hardware/bootloader/basics-in-bootloader",
        {
          type: "category",
          label: "Working with U-Boot",
          items: [
            "hardware/bootloader/working-with-u-boot/u-boot-commands",
            "hardware/bootloader/working-with-u-boot/mount-usb-storage",
            "hardware/bootloader/working-with-u-boot/working-with-variables",
            "hardware/bootloader/working-with-u-boot/change-boot-logo",
          ],
        },
        "hardware/bootloader/debugging-u-boot",
        "hardware/bootloader/build-from-source-bootloader",
      ],
    },
    {
      type: "category",
      label: "Peripherals",
      items: [
        "hardware/peripherals/soc",
        "hardware/peripherals/wireless",
        "hardware/peripherals/camera",
        "hardware/peripherals/audio",
        "hardware/peripherals/display",
        "hardware/peripherals/pcle",
        "hardware/peripherals/motion",
        "hardware/peripherals/rgb",
        "hardware/peripherals/rtc",
        "hardware/peripherals/security",
        "hardware/peripherals/power",
        "hardware/peripherals/ethernet",
        "hardware/peripherals/usb",
        "hardware/peripherals/gpio",
        "hardware/peripherals/mikrobus",
      ],
    },
    {
      type: "category",
      label: "Mechanicals",
      items: [
        "hardware/mechanicals/3d-drawings",
        "hardware/mechanicals/schematics",
        "hardware/mechanicals/extensions",
        "hardware/mechanicals/mounting-system",
        "hardware/mechanicals/revisions",
      ],
    },
    {
      type: "category",
      label: "Labs",
      items: [
        "hardware/labs/yocto",
        "hardware/labs/android",
        "hardware/labs/cortex-m4",
      ],
    },
  ],
  benchmarkSidebar: [
      //we need only one sidebar for all the sections that that is called benchmark
    {
      type: "category",
      label: "Benchmarks",
      items: [
        "benchmarks/mecha-comet-benchmark",
      ],
    },
  ],
  mechanixSidebar: [
    {
      type: "category",
      label: "Using the GUI",
      items: [
        "mechanix/using-the-gui/mechanix-shell",
        "mechanix/using-the-gui/settings-app",
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
  ],
  mechaCloudSidebar: [
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
