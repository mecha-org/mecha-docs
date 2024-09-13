const sidebars = {
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
      ],   
    },
    
  ],
};

export default sidebars;