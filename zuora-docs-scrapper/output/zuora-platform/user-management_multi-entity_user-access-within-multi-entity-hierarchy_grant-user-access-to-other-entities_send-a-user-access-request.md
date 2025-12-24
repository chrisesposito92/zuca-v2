---
title: "Send a user access request"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/user-access-within-multi-entity-hierarchy/grant-user-access-to-other-entities/send-a-user-access-request"
product: "zuora-platform"
scraped_at: "2025-12-24T05:18:18.497Z"
---

# Send a user access request

Learn how to send a user access request from the entity.

You must send the user access request from the entity in which the user is created.

1.  Log in as the administrator of the entity. This entity administrator must have the permission to access the entity that the user wants to access.
2.  Navigate to the entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity#concept-pwmj5n5e__section-243).
3.  Click your username at the top right and navigate to Administrator > Manage Users.
4.  On the All Users page, click the user first name or last name.
5.  On the user page, click Request/Show Access to other Entities.
6.  On the Request/Show Access to other Entities dialog, select the check box next to the entity that the user wants to access. The administrator can only request a user access to the entities they have permission to access. Those entities that the administrator does not have permission to access are grayed out.
7.  Click save.

    To send user access requests from the REST API, see [Send user access requests](https://www.zuora.com/developer/api-references/older-api/operation/PUT_SendUserAccessRequests).
