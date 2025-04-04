import mechaApiRefSidebar from "./apis/references/sidebar";
const sidebars = {
  mctkSidebar: [
    "mctk/intro",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      items: ["mctk/gettingstarted/setup", "mctk/gettingstarted/first-app"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Guides",
      items: [
        "mctk/guides/setting-up-application-root",
        "mctk/guides/writing-a-component",
        "mctk/guides/handling-input-events",
      ],
    },
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
          ],
        },
        "comet/development/ruby/install",
        "comet/development/rust/install",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Working with IO",
      items: ["comet/working-with-io/pin-diagram"],
    },
    // {
    //   type: "category",
      //   collapsed: false,
      //   label: "Machine Learning",
      //   items: [
      //     "comet/machine-learning/intro",
      //     "comet/machine-learning/running-tensorflow",
      //     "comet/machine-learning/installing-coral",
      //     "comet/machine-learning/on-device-llm",
      //   ],
      // },
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
        "comet/emulation/dosbox",
        "comet/emulation/windows",
        "comet/emulation/android",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Extensions",
      items: [
        "comet/extensions/io-breakout",
        "comet/extensions/gamepad",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Resources",
      items: [
        "comet/resources/datasheets",
        {
          type: "category",
          collapsed: true,
          label: "Mechanical Files",
          items: [
            "comet/resources/mechanical-files/mecha-comet",
            "comet/resources/mechanical-files/comet-extensions"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Benchmarks",
      items: [
        "benchmarks/mecha-comet-benchmark",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Advanced",
      items: [
        {
          type: "category",
          label: "Serial Console",
          items: ["comet/advanced/serial-console/using-debug-uart-cable"],
        },
        {
          type: "category",
          label: "Bootloader",
          items: [
            "comet/advanced/bootloader/introduction-to-bootloader",
            "comet/advanced/bootloader/uboot-ums",
            "comet/advanced/bootloader/uboot-variable",
            "comet/advanced/bootloader/working-with-usb",
            "comet/advanced/bootloader/changing-boot-logo",
            "comet/advanced/bootloader/building-uboot-from-source",
          ],
        },
        {
          type: "category",
          label: "Linux kernel",
          items: [
            "comet/advanced/linux-kernel/building-linux-kernel",
            "comet/advanced/linux-kernel/customise-device-tree",
          ],
        },
        {
          type: "category",
          label: "Buiding Rootfs",
          items: [
            "comet/advanced/building-debian-rootfs/using-mecha-make",
            "comet/advanced/building-debian-rootfs/build-rootfs-manually",
            "comet/advanced/building-debian-rootfs/flash-rootfs",
          ],
        },
      ],
    },
  ],
  mechanixSidebar: [
    "mechanix/intro",
    {
      type: "category",
      collapsed: false,
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
    // {
    //   type: "category",
    //   label: "Functions",
    //   items: [
    //     "mechanix/functions/wayland",
    //     "mechanix/functions/network-manager",
    //     "mechanix/functions/bluetooth",
    //     "mechanix/functions/video",
    //     "mechanix/functions/audio",
    //     "mechanix/functions/key-store",
    //   ],
    // },
    {
      type: "category",
      collapsed: false,
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
      collapsed: false,
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
            "mecha-cloud/explanations/importance-and-functionality",
            "mecha-cloud/explanations/understanding-log-streams",
            "mecha-cloud/explanations/types-of-logs",
            "mecha-cloud/explanations/understanding-the-lgtm",
            "mecha-cloud/explanations/open-telemetry",
            "mecha-cloud/explanations/overview-of-networking",
            "mecha-cloud/explanations/networking-component",
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
        "apis/how-to-guides/generate-grafana-sso",
      ],
    },

    // start APIS
    // {
    //   type: "doc",
    //   id: "apis/references/mecha-cloud-apis",
    // },
    ...mechaApiRefSidebar,

    // },
  ],
};

export default sidebars;
