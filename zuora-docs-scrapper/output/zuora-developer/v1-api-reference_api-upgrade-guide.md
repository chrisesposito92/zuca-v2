---
title: "API upgrade guide"
url: "https://developer.zuora.com/v1-api-reference/api-upgrade-guide/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:29.040Z"
---

#

API upgrade guide

This API upgrade guide explains the different types of API changes, and how to upgrade to the latest API version.

For a list of detailed backward-incompatible changes, see [API upgrades](/v1-api-reference/api-upgrades/).

For detailed backward-compatible changes, see [v1 API Changelog](../rest-api/changelog/api-changelog.md).

##

Types of API changes

The Zuora v1 API is version-controlled. Zuora uses an API minor version to manage backward-incompatible changes.

By specifying a `Zuora-Version` header in a request, you can set version-controlled parameters and get corresponding responses, regardless of future changes to the API.

A change to the API can be a backward-compatible or backward-incompatible change.

The following changes are backward-incompatible:

-   Changing the URL format in the HTTP definition
-   Removing and renaming API resources, parameters, properties, methods, or enum values
-   Replacing HTTP bindings to a resource
-   Changing the types of parameters and properties
-   Changing HTTP response status codes
-   Changing parameter validations
-   Adding new required request parameters

Typical backward-compatible changes include:

-   Adding API resources
-   Adding new supported operations to an API resource
-   Adding an HTTP binding to a resource
-   Adding optional request parameters to existing API methods
-   Adding new fields to existing API responses
-   Changing the format or length of strings, such as error messages and object identifiers
-   Adding a new enum value for a parameter

##

How to upgrade to the latest version

If you are using an older version of the API, you can upgrade to the latest version to take advantage of the latest features and enhancements. It will override the older version.

A version is introduced when we make any backward-incompatible change. The version is in the format of `YYYY-MM-DD`, for example, `2024-05-20`. The legacy versions are in the numbered format such as `196.0`, which are still supported for backward compatibility.

To upgrade your API minor version, take the following steps:

1.  Log into the UI of your Zuora sandbox environment as an administrator. Only users with the administrator role can access the setting used to manage API versions. If you have the [Multi-entity](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/Multi-entity) feature enabled, API versions are set at the entity level.
2.  In the Zuora UI, navigate to **Admin Settings** > **API versioning** to identify your current API version and the latest version on the API Version page.

    **Note**: By default, your requests are on version `186.0` unless you have used the `Zuora-Version` header to override.

3.  Check for the changes between the version you are running on and the latest version that are documented in the [API upgrades](/v1-api-reference/api-upgrades/) . For example, if you are running on version `186.0` , and the latest version is `2024-05-20` , check all the changes between `186.0` and `2024-05-20` .
4.  In your testing environment, update your code to incorporate the changes for each version incrementally.
5.  Once all backward-incompatible changes have been incorporated into the code, validate that your code works for the new version.
6.  After you have validated your changes in the testing environments, click **Upgrade** on the API Version page. Then your testing environment is upgraded to the latest version.
7.  If you want to roll back to your previous version, you can click **Roll Back** to roll back to the previous version of your tenant. In the case that you have upgraded multiple times and have multiple previous versions, the rollback operation will roll back only to your last version and cannot infinitely roll back.

    **Note**: Excercise caution before clicking the **Upgrade** or **Roll Back** button as some changes cannot be reverted to in case of multiple upgrade and rollback operations. For example, you're currently on `2024-05-20`, and the latest version is `2025-08-12`. You can roll back to `186.0`. But from `186.0`, you can only upgrade to the latest version, `2025-08-12`, and cannot upgrade to the previous version, `2024-05-20`.

8.  After you are confident to upgrade to the latest version, repeat Step 1-6 for your Production environments.
