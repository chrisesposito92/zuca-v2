---
title: "API user account management in Zuora"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/users-in-oneid/api-user-account-management-in-zuora"
product: "zuora-platform"
scraped_at: "2026-02-20T17:43:02.139Z"
---

# API user account management in Zuora

This document outlines the management of API user or service accounts in Zuora, detailing their setup, migration to OneID, and authentication methods. It emphasizes API user accounts and OAuth token configurations.

## API User Account Management

This section details the processes involved in managing API user accounts within Zuora. It includes guidance on creating new API users, generating OAuth client credentials, and resetting passwords for these accounts.

-   Creating new API users in Billing: After fully transitioning to Zuora OneID, you can still create new API accounts at the local tenant level. The only type of user accounts you can create in Billing will be API user accounts. You can assign only platform roles configured for API users, with API write access enabled and no UI access.

-   Creating new OAuth client credentials: Generate OAuth tokens for new or existing users under the billing tenant. OAuth tokens are valid indefinitely and can be regenerated as needed without impact.

-   Resetting password for API accounts: You can reset the password for your API user accounts managed at the local tenant level. The password reset page will allow you to set a new password regularly to meet compliance requirements for your API accounts.


## Important Considerations

-   Access management: After migration, all configurations for API/service accounts migrated to OneID must be managed exclusively through OneID. For accounts that are not migrated, access can still be managed at the local tenant level.
-   Accidental migration of Basic Auth users: If these users are mistakenly migrated, credentials will become invalid.
-   OAuth token management: OAuth tokens can be renewed and managed in Billing without impacting active operations. Always verify the setup to ensure it remains functional.
