---
title: "API Versioning"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/api-versioning"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:10.261Z"
---

# API Versioning

The API Versioning setting allows administrators to manage the version for API requests made to your tenant.

Zuora's API versioning gives system administrators and developers centralized control over how API requests are processed in their tenants. As the Zuora API evolves, new versions introduce additional features, improvements, or behavior changes that may not be fully compatible with older integrations.

The API Versioning admin setting allows each tenant to lock in a specific API version. This setting determines the default behavior for all API requests made to that tenant. At the same time, developers can override this tenant-level setting on a per-request basis by including a `Zuora-Version` header in API calls.

Before upgrading to the latest version, you should review and incorporate any backward-incompatible changes that might affect your integration. Upgrading the API version changes the default way Zuora interprets and responds to API requests in a tenant. Once the default API version is upgraded at the tenant level, any request sent without a `Zuora-Version` header is automatically processed under this default version.

The Roll Back button allows you to restore your tenant to its previous version. In the case that you have upgraded multiple times and have multiple previous versions, the rollback operation will roll back to only your last version and cannot be repeated infinitely.

Zuora recommends that you upgrade to the latest API version to take advantage of the latest Zuora capabilities.

See the following Developer Center pages for more information:

-   For a general introduction to API versions, see [Introduction of API versions](https://developer.zuora.com/v1-api-reference/api-versions/).

-   For instructions on upgrading to the latest version, see [API upgrade guide](https://developer.zuora.com/v1-api-reference/api-upgrade-guide/).

-   For detailed backward-incompatible changes, see [API upgrades](https://developer.zuora.com/v1-api-reference/api-upgrades/).
