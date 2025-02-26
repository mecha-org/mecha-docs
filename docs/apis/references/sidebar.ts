import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/references/mecha-cloud-apis",
    },
    {
      type: "category",
      label: "Machines",
      items: [
        {
          type: "doc",
          id: "apis/references/update-machine",
          label: "Update machine details",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/references/machine-telemetry",
          label: "Add or update machine telemetry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-machine-logs-streams",
          label: "Fetch machine logs stream data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-machine-logs",
          label: "Fetch machine logs data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/export-machine-logs",
          label: "Export machine logs data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-machine-metrics",
          label: "Fetch machine metrics data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-machines",
          label: "Fetch machines list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-machine-details",
          label: "Fetch machine details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/check-alias-in-use",
          label: "Check alias is already used or not",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/remove-machine",
          label: "Remove machine",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Machine certificates",
      items: [
        {
          type: "doc",
          id: "apis/references/re-issue-certificate",
          label: "Re-Issue certificate",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-previously-signed-certificates",
          label: "Fetch previously signed certificates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/get-certificate",
          label: "Fetch active certificate details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/download-certificate",
          label: "Download certificate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/download-ca-bundle",
          label: "Download CA-Bundle certificates",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Machine Tags",
      items: [
        {
          type: "doc",
          id: "apis/references/get-machine-tags",
          label: "Fetch machine tags list",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Machine provision requests",
      items: [
        {
          type: "doc",
          id: "apis/references/get-status",
          label: "Fetch machine provision request status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/add-machine-provision-request",
          label: "Add machine provision request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Networking",
      items: [
        {
          type: "doc",
          id: "apis/references/get-network-by-network-id",
          label: "Fetch network details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/update-network",
          label: "Update network",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/references/delete-network",
          label: "Delete network",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/references/set-network-as-default",
          label: "Set default network",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/references/get-networks",
          label: "Fetch list of networks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/add-network",
          label: "Add network",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/enable-node",
          label: "Enable network",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-network-nodes",
          label: "Fetch network nodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/get-network-node",
          label: "Fetch network node details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/delete-network-node",
          label: "Delete network node",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/references/generate-ipv-4-address",
          label: "Generate IPv4 address",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SSH",
      items: [
        {
          type: "doc",
          id: "apis/references/issue-ssh-certificate",
          label: "Issue SSH certificate",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "App services",
      items: [
        {
          type: "doc",
          id: "apis/references/get-app-service-by-app-id",
          label: "Fetch app service details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/update-app-service",
          label: "Update app service details",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/references/delete-app-service",
          label: "Delete app service",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apis/references/get-app-services",
          label: "Get app services",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/add-app-service",
          label: "Add app service",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/references/get-app-service-by-machine-id-or-alias",
          label: "Fetch machine's app services",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/check-app-services-dns-name",
          label: "Check DNS name in use for app services",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/references/check-app-services-name",
          label: "Check app name in use for app services",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "grafana-integration",
      items: [
        {
          type: "doc",
          id: "apis/references/get-sso-token",
          label: "Get SSO token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
