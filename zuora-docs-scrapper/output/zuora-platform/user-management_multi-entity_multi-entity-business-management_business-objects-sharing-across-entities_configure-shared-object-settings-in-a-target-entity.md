---
title: "Configure shared object settings in a target entity"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/configure-shared-object-settings-in-a-target-entity"
product: "zuora-platform"
scraped_at: "2026-02-20T17:46:54.959Z"
---

# Configure shared object settings in a target entity

Learn how to configure shared object settings in a target entity.

By default, all the entities do not accept any shared objects from the other entities. You must enable the acceptance of the objects that you want to receive in the target entities.

Beware of enabling acceptance. Zuora strongly recommends that you do not switch back to not accepting the shared objects.

Currently, you only need to configure the shared object settings for accounting periods sharing. For products sharing, the target entities automatically receive all the data of the shared products.

To sync the accounting period, you must Create a New Accounting Period on the source entity. The earliest transaction/subscription start date in the target entity should be later than the start date of the first accounting period in the source entity.

To enable the acceptance of the shared objects from the Zuora UI:

1.  Log in as an administrator of the target entity.
2.  Navigate to the target entity from the [entity switcher](/zuora-platform/user-management/multi-entity/overview-of-multi-entity).
3.  Click your username at the top right and navigate to Administration > Manage Entity Sharing Settings .
4.  On the Manage Entity Sharing Settings page, select the Auto Accept radio button next to the object that you want to accept.

After you enabled the acceptance of the shared objects, all the shared objects in the source entity are automatically synchronized to the target entity.
