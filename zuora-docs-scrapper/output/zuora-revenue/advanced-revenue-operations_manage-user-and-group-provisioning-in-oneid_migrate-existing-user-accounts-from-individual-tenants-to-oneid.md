---
title: "Migrate existing user accounts from individual tenants to OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid/migrate-existing-user-accounts-from-individual-tenants-to-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:46.803Z"
---

# Migrate existing user accounts from individual tenants to OneID

Migrate local user accounts to OneID to streamline access across multiple tenants, ensuring roles and permissions are preserved.

Zuora OneID commonly uses local user accounts that are limited to a specific tenant. In comparison, OneID global user accounts provide access to multiple tenants. The transition to global accounts simplifies access management, allowing you to navigate multiple tenants with just one OneID global account.

## Benefits of transitioning local user accounts

Transitioning authentication to a global scale can be done smoothly by migrating local user accounts to OneID, ensuring the preservation of roles and permissions. This process ensures you can retain access permissions in your respective tenants as users. Once the migration is done, users can log in to OneID and keep their original permissions, which are editable on the platform.

Note:

Local tenants may have duplicate user entries when assigning access through OneID if accounts aren't migrated. It is strongly recommended to migrate during onboarding to prevent duplication.

## User account migration

New user provisioning involves either assigning users to groups or granting them direct access to tenants, allowing them to enter the corresponding tenant environment.

Follow these steps to convert local user accounts to global status in OneID.

1.  Access the Admin console in OneID.
2.  Navigate to the Users module.
3.  Click on the Import Local User button.
4.  Select the tenant from the provided dropdown menu.
5.  Choose the local user accounts to migrate from the available user list.

## Post-migration process

Once migration is complete, activate the OneID accounts of users. Users can easily see their current tenant access on the MyApps page without needing extra group assignments or tenant access grants from OneID.

## FAQs on self-service migration of local user accounts to OneID

This article answers frequently asked questions about migrating local user accounts to Zuora OneID. If you have a question not covered here, don't hesitate to ask in the [Community](https://community.zuora.com/home?CommunityKey=97a86af4-c370-4d23-a12b-296d4d7a1bcd&_ga=2.133956302.176980731.1693150186-663368165.1681877703&_gl=1*1ugnzti*_ga*NjYzMzY4MTY1LjE2ODE4Nzc3MDM.*_ga_MY8CQ650DH*MTY5MzIzMDQyOS41MC4xLjE2OTMyMzM2OTIuMjUuMC4w) Group or contact [Zuora Global Support](https://www.zuora.com/ace/?_ga=2.172625635.176980731.1693150186-663368165.1681877703&_gl=1*zhq3y9*_ga*NjYzMzY4MTY1LjE2ODE4Nzc3MDM.*_ga_MY8CQ650DH*MTY5MzIzMDQyOS41MC4xLjE2OTMyMzI4ODcuNTEuMC4w).

Q: Can I migrate local user accounts independently as an Organization Administrator?

A: Absolutely. You can now migrate local user accounts to OneID independently without requiring Zuora support.

Q: Do I need to create global user accounts before migrating local user accounts?

A: No, user accounts should be created within OneID before migration. The migration process will automatically generate global user accounts within OneID.

Q: Does user migration apply to both Zuora Billing and Zuora Revenue?

A: Presently, self-service user migration is exclusive to Zuora Billing. For migrating user accounts from Zuora Revenue to OneID, please get in touch with Zuora support.

Q: Can I selectively migrate users to OneID from a Zuora tenant?

A: Certainly, you can migrate specific users to OneID for initial setup and testing purposes.

Q: Should API user accounts be migrated to OneID?

A: No, API user accounts utilizing basic authentication should remain at the local tenant level and not be migrated to OneID.

Q: What about migrating Zuora support accounts to OneID?

A: Zuora support accounts should be disregarded for migration to OneID.

Q: What will be the login name for migrated users, and can it be altered?

A: The login name for migrated users will be their normalized work email, which cannot be changed during migration. However, you can create a user with a desired username in OneID and then migrate the user's local account.

Q: After migrating local user accounts to OneID, should I deactivate the local user account in the tenant?

A: No, local user accounts will synchronize with the corresponding OneID user account following migration. Access permissions for these accounts must be managed via the OneID user account.
