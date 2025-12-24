---
title: "FAQs on self service migration of local user accounts to OneID"
url: "https://docs.zuora.com/en/zuora-platform/user-management/oneid/user-groups-in-oneid/migrating-existing-user-accounts-from-individual-tenants-to-oneid/faqs-on-self-service-migration-of-local-user-accounts-to-oneid"
product: "zuora-platform"
scraped_at: "2025-12-24T05:16:21.137Z"
---

# FAQs on self service migration of local user accounts to OneID

This document provides answers to common questions about migrating local user accounts to Zuora OneID, including the process, requirements, and limitations.

This article answers frequently asked questions about migrating local user accounts to Zuora OneID. If you have a question not covered here, don't hesitate to ask in the Community Group or contact Zuora Global Support .

1.  Q : Can I migrate local user accounts independently as an Organization Administrator?

    A : Absolutely. You can now migrate local user accounts to OneID independently without requiring Zuora support.

2.  Q : Do I need to create global user accounts before migrating local user accounts?

    A : No, user accounts should be created within OneID before migration. The migration process will automatically generate global user accounts within OneID.

3.  Q : Does user migration apply to both Zuora Billing and Zuora Revenue?

    A : Presently, self-service user migration is exclusive to Zuora Billing. For migrating user accounts from Zuora Revenue to OneID, please get in touch with Zuora support.

4.  Q : Can I selectively migrate users to OneID from a Zuora tenant?

    A : Certainly, you can migrate specific users to OneID for initial setup and testing purposes.

5.  Q : Should API user accounts be migrated to OneID?

    A : No, API user accounts utilizing basic authentication should remain at the local tenant level and not be migrated to OneID.

6.  Q : What about migrating Zuora support accounts to OneID?

    A : Zuora support accounts should be disregarded for migration to OneID.

7.  Q : What will be the login name for migrated users, and can it be altered?

    A : The login name for migrated users will be their normalized work email, which cannot be changed during migration. However, you can create a user with a desired username in OneID and then migrate the user's local account.

8.  Q : After migrating local user accounts to OneID, should I deactivate the local user account in the tenant?

    A : No, local user accounts will synchronize with the corresponding OneID user account following migration. Access permissions for these accounts must be managed via the OneID user account.
