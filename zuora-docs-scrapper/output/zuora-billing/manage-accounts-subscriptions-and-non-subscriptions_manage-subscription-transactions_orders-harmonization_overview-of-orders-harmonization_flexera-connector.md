---
title: "Flexera Connector"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/flexera-connector"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:32.410Z"
---

# Flexera Connector

This topic explains how to update your Flexera integration to use the Order Action object when utilizing Orders APIs or Orders UI.

If you use the Flexera connector and start using `Orders` APIs or Orders UI, you need to change the integration to the Order Action object. ​ ​
| Previous Behaviors | Orders Harmonization |
| --- | --- |
| The Flexera integration relies on the amendment types to manage any change in entitlements. | If you use only the Subscribe and Amend APIs to create subscriptions, your Flexera integration will continue to work. However, if your subscriptions or subscription changes are created through Orders APIs or Orders UI, your integration needs to be updated to use the Order Action object instead of the Amendment object. |
