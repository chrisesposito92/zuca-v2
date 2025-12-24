---
title: "Subscription transactions management"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:17:42.879Z"
---

# Subscription transactions management

This article explains how to manage subscription transactions, including creating, amending, and canceling subscriptions, and understand the accessibility of different tenant types to subscription functions.

Zuora Subscriptions allow your customers to subscribe to your products or services that have recurring charges. For example, flat fee per month, quarterly per unit charge, or usage-based charges. Subscription charges can also include one-time charges, for example, an activation fee. Once a subscription has been created, you can make amendments to the subscriptions, and you can also cancel it.

Based on your organization's implementation status, you may use one of the tenant types listed in the following table to manage your subscriptions. All tenant types can access functions listed in the Common subscription information section. The following table also shows you the accessibility of each tenant type to functions listed in the Subscribe and Amend and Orders sections.

| Tenant Type | Organization's implementation status | Access to functions listed in the Subscribe and Amend section | Access to functions listed in the Orders section |
| --- | --- | --- | --- |
| Orders | For organizations onboarded after 2018 | No | Yes |
| Order Harmonization | For Subscribe and Amend organizations enabled the Orders Harmonization feature to access the Orders feature | Yes | Yes |
| Subscribe and Amend | For organizations onboarded before 2018 | Yes | No |

The guide provides different subscription information based on the Orders , Orders Harmonization , Subscribe and Amend tenants, and common subscription information across these three tenant types. Zuora also allows you to manage non-subscription transactions through Order Line Items. The Order Line Items can be associated with your existing subscriptions.
