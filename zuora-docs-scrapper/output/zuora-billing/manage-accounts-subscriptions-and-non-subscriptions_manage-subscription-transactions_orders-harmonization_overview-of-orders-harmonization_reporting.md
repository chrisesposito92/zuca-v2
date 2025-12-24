---
title: "Reporting"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/reporting"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:27.077Z"
---

# Reporting

This article explains how Orders Harmonization impacts standard reports and how to adapt using Zuora Analytics and new reporting options.

Your existing reports on any existing data will not be impacted. Two standard reports will be impacted if you create subscriptions and amendments using Orders API or UI. See the following table:

| Before Orders Harmonization | Orders Harmonization |
| --- | --- |
| You can use the CMRR-related standard reports. | The CMRR by product standard report will be impacted as the amendment type will not consistently be populated for subscriptions created using Orders (UI and API). Zuora recommends you use Zuora Analytics instead, which supports Net MRR.The Subscription changes standard report will be impacted because the amendment type will be Composite for any new subscriptions or subscription changes created using Orders. If you rely on this report, then for any subscriptions or amendments managed post Orders, Zuora recommends you use the Order actions standard report. |
| You can rely on the rate plan, rate plan charge, and invoice item to determine, for example, all the new products added this month or all the products that have been upgraded or increased in quantity. | New reports are available for Orders which helps you to get the impact on MRR and TCB for the price or quantity changes. The Net MRR and Order TCB standard reports can be used. You can get reports on slicing order actions that happened on an account or subscription. |
| On the Exports page, the Orders Zip item is available. | On the Exports page, the Orders Zip item has been removed from the Export Data drop-down list. |

Note that the Amendment type will be "Composite" for any new subscriptions or subscription changes created through Orders. This Composite amendment will not hold any details of the subscription changes.

Also, for a subscription creation through the Subscribe and Amend UI or API, the Amendment type will be "Composite". If you want to skip generating an amendment of the Composite type for a subscription creation when using the Subscribe and Amend UI or API, configure the Skip amendment generation by subscribe setting to No in Billing Settings > Define Default Subscription and Order Settings on your tenant.
