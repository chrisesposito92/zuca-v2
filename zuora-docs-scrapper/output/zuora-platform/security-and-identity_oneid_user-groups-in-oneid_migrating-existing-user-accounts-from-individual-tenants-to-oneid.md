---
title: "Migrating existing user accounts from individual tenants to OneID"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-groups-in-oneid/migrating-existing-user-accounts-from-individual-tenants-to-oneid"
product: "zuora-platform"
scraped_at: "2026-02-20T17:43:41.480Z"
---

# Migrating existing user accounts from individual tenants to OneID

Migrate local user accounts to OneID for streamlined access across multiple tenants, preserving roles and permissions.

Zuora OneID commonly uses local user accounts that are limited to a specific tenant. In comparison, OneID global user accounts provide access to multiple tenants. The transition to global accounts simplifies access management, allowing you to navigate multiple tenants with just one OneID global account.

## Benefits of transitioning local user accounts to OneID

Transitioning authentication to a global scale can be done smoothly by migrating local user accounts to OneID, ensuring the preservation of roles and permissions. This process ensures you can retain access permissions in your respective tenants as users. Once the migration is done, users can log in to OneID and keep their original permissions, which are editable on the platform.

Note:

Local tenants may have duplicate user entries when assigning access through OneID if accounts aren't migrated. It is strongly recommended to migrate during onboarding to prevent duplication. For example, If a new OneID user account is created without migrating the existing local user account first, a duplicate user account with the username "abc+1234@zuora.com" will be created in the local tenant when the local user account with the username "abc@zuora.com" in tenant ID 1234 is migrated.
