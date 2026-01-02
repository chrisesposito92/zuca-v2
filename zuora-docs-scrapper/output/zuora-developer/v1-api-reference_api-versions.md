---
title: "Introduction to Zuora API Versions"
url: "https://developer.zuora.com/v1-api-reference/api-versions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:15:44.636Z"
---

#

Introduction to Zuora API Versions

The v1 API are version controlled. Versioning ensures that the v1 API changes are backward compatible. Zuora uses a major and minor version nomenclature to manage changes. By specifying a version in a REST request or setting the tenant-level API version, you can get expected responses regardless of future changes to the API.

##

Major Version

The major version number of the v1 API appears in the endpoint. In this API reference, only the **v1** major version is available. For example, `POST https://rest.zuora.com/v1/subscriptions`.

##

Minor Version

Zuora’s minor API versioning gives system administrators and developers centralized control over how API requests are processed in their tenants. As the Zuora API evolves, new versions introduce additional features, improvements, or behavior changes that may not be fully compatible with older integrations.

The API reference only showcases the parameters, fields, and behaviors available for the latest API minor version. In other words, all the documented parameters and fields in each operation are the ones you can use or get with the latest API version enabled or specified. The version is in the format of `YYYY-MM-DD`, for example, `2024-05-20`. The legacy numbered versions such as `196.0` are still supported for backward compatibility, but are no longer available for new integrations.

If no version is specified in the request header and the tenant is never upgraded, Zuora uses the minimum version (`186.0`) by default.

The supported minor versions are not consecutive. You can use the following versions to override the default version (`186.0`):

-   187.0
-   188.0
-   189.0
-   196.0
-   206.0
-   207.0
-   211.0
-   214.0
-   215.0
-   216.0
-   223.0
-   224.0
-   230.0
-   239.0
-   256.0
-   257.0
-   309.0
-   314.0
-   315.0
-   329.0
-   330.0
-   336.0
-   337.0
-   338.0
-   341.0
-   2024-05-20
-   2025-08-12

Not all versions include backward-incompatible changes. To understand all backward incompatible changes, see [API upgrades](https://developer.zuora.com/v1-api-reference/api-upgrades/).

###

Scope of the API version

The `Zuora-Version` header is only supported for the v1 API. It is not applicable to the API calls outside of the [v1 API Reference](https://developer.zuora.com/v1-api-reference/api/overview/).

###

Upgrade or rollback your tenant version

The [API Versioning](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/API_Versioning) admin setting allows each tenant to lock in a specific API version. This setting determines the default behavior for all API requests made to that tenant. At the same time, developers can override this tenant-level setting on a per-request basis by including a `Zuora-Version` header in API calls.

Upgrading the API version changes the default way Zuora interprets and responds to API requests in a tenant. Once the default API version is upgraded at the tenant level, any request sent without a `Zuora-Version` header is automatically processed under this default version.

For example, if a tenant is upgraded to version `2025-08-12` but a request explicitly includes `Zuora-Version: 230.0`, this request will be handled as version `230.0`. Other requests are automatically processed under the `2025-08-12` version. In this way, developers can continue using older behavior for certain calls while progressively introducing new behaviors in others.

Zuora also provides the option to roll back a previous API version if issues are discovered after an upgrade. The **Roll Back** button allows you to restore your tenant to its previous version. In the case that you have upgraded multiple times and have multiple previous versions, the rollback operation will roll back to only your last version and cannot be repeated infinitely.

Excercise caution before upgrading or rolling back as some changes cannot be reverted in case of multiple upgrade and rollback operations.

For example, you're currently on `2024-05-20`, and the latest version is `2025-08-12`. You can roll back to `186.0`. But from `186.0`, you can only upgrade to the latest version, `2025-08-12`, and cannot upgrade to the previous version, `2024-05-20`.

Before committing to an upgrade, you should review and incorporate any backward-incompatible changes that might affect your integration. For a list of all backward-incompatible changes between versions, see [API upgrades](https://developer.zuora.com/v1-api-reference/api-upgrades/).
We recommend that you always keep up-to-date with the latest API version to take advantage of the latest Zuora capabilities. For instructions about upgrading the API version, see [API upgrade guide](https://developer.zuora.com/v1-api-reference/api-upgrade-guide/).
