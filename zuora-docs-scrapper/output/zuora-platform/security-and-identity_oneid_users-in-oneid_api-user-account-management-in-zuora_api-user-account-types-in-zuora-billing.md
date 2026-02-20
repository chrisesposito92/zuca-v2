---
title: "API User Account Types in Zuora Billing"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/users-in-oneid/api-user-account-management-in-zuora/api-user-account-types-in-zuora-billing"
product: "zuora-platform"
scraped_at: "2026-02-20T17:42:44.941Z"
---

# API User Account Types in Zuora Billing

This document categorizes API user account types in Zuora Billing, detailing their platform permissions and migration compatibility with OneID.

This section categorizes the various types of API user accounts in Zuora Billing. It outlines their platform permissions and migration compatibility, providing clarity on which accounts can be migrated to OneID.

Note:

-   Migrating API user accounts from your Zuora Revenue tenant to OneID will have no impact. These accounts will continue to function regardless of whether they are migrated to Zuora OneID.

-   Ensure API write access is enabled and UI access is disabled for all your API or service accounts.


| API User Account Type | Platform Permissions | Migration Compatibility |
| --- | --- | --- |
| API user accounts with OAuth client credentials | API write access & UI access both checked | No impact. These API user accounts can be migrated to OneID and centrally managed there. Existing OAuth tokens will remain functional, and you can also generate new OAuth tokens after the migration to OneID. After migration, these user accounts can access the Billing tenants exclusively through OneID. |
| API user accounts with OAuth client credentials | API write access checked & UI access unchecked | Not compatible. Zuora recommends this API user configuration, and OneID restricts the migration. These API accounts will continue to function indefinitely and can still be managed at the local tenant level. |
| API user accounts with basic auth credentials | API write access & UI access both checked | Not compatible. Do not migrate these accounts, as basic auth expires post-migration after the grace period. |
| API user accounts with basic auth credentials | API write access checked & UI access unchecked | Not compatible. Zuora recommends this API user configuration, and OneID restricts the migration. These API accounts will continue to function indefinitely and can still be managed at the local tenant level. |
