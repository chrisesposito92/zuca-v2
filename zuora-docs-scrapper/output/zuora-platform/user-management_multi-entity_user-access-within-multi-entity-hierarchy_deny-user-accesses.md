---
title: "Deny user accesses"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/user-access-within-multi-entity-hierarchy/deny-user-accesses"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:22.891Z"
---

# Deny user accesses

This task guides you through the process of denying user access to an entity.

You may need to deny user accesses in the following scenarios:

-   Deny user access requests from other entities

-   Deny accesses for users who already have permission to access the entity


To deny a user access to an entity from the Zuora UI:

1.  Log in as the entity administrator.
2.  Navigate to the entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity#concept-pwmj5n5e__section-243) .
3.  Click your username at the top right and navigate to Administrator > Manage Users .
4.  On the All Users page, click the user first name or last name.
5.  On the user page, click Deny Access .
6.  Click Yes on the pop-up window.

To deny a user access from REST API, see [Deny user access](https://developer.zuora.com/v1-api-reference/older-api/operation/PUT_DenyUserAccess/).

This user remains in the user list in the entity even if the access request is denied. You can [give the user access](/zuora-platform/user-management/multi-entity/user-access-within-multi-entity-hierarchy/grant-user-access-to-other-entities)later.
