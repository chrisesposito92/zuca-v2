---
title: "REST API Migration of Subscribe and Amend"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/orders-migration-guidance/rest-api-migration-of-subscribe-and-amend"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:42.411Z"
---

# REST API Migration of Subscribe and Amend

This topic provides guidance on migrating from Subscribe and Amend REST APIs to the Orders API, including replacements and tutorials.

If you want to migrate your integrations using the REST calls listed in Subscribe and Amend APIs to Migrate to use the Orders API instead, see the following table for the Orders replacements for the Subscribe and Amend REST APIs and the migration tutorials:

| Function | Orders Replacements |
| --- | --- |
| Create a subscriptionPreviously, you would use one of the following API functions:Create subscriptionSubscribeCreate account | Use the Create order operation instead.See Create a Subscription for migration guidance. |
| Renew a subscriptionPreviously, you would use one of the following API functions:Amend | Use the Create order or Renew subscription operation instead.See Renew a Subscription for migration guidance. |
| Cancel a subscriptionPreviously, you would use one of the following API functions:Amend | Use the Create order or Cancel subscription operation instead.See Cancel a Subscription for migration guidance. |
| Add, update, or remove products in a subscriptionChange the terms and conditions of a subscriptionTransfer ownership of a subscriptionPreviously, you would use one of the following API functions:Update subscriptionAmend | Use the Create order operation instead.See Orders Tutorials for migration guidance. |
| Suspend and resume a subscriptionPreviously, you would use the following API functions:Amend | Use the Create order , or Suspend subscription and Resume subscription operations instead.See Orders Tutorials for migration guidance. |
| Update custom fields of a subscriptionPreviously, you would use one of the following API functions:Update subscriptionAmend | Use the Update subscription custom fields operation instead. |
| Preview a subscriptionPreviously, you would use the Preview subscription operation. | Use the Preview order operation instead. |
