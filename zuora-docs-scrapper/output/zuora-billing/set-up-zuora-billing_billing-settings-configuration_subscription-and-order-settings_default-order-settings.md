---
title: "Default order settings"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/subscription-and-order-settings/default-order-settings"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:12.899Z"
---

# Default order settings

This topic outlines the default settings used during subscription creation, including options for enabling ramp deals, auto-renewal notifications, and Orders UI configurations.

The following are the default settings used during subscription creation.

| Settings | Description |
| --- | --- |
| Enable Ramp for Orders? | Enable Ramp for Orders?Yes: You will see the Ramp option in the Orders UI to make a subscription ramp deal or not when creating an order..No: Zuora will not enable the Ramp option in the Orders UI. |
| Auto-Renew by Order? | Specify whether to send the order notifications for auto-renewals of subscriptions. This setting is available only if Orders Harmonization is enabled on your tenant and it acts as a switch between the order and amendment notifications.Yes: Send the order notifications for auto-renewals of subscriptions. Yes is the default value on the tenants with Orders Harmonization enabled before Zuora Release 2022.09.R2.No: Send the amendment notifications for auto-renewals of subscriptions. No is the default value on the tenants with Orders Harmonization enabled as of or after Zuora Release 2022.09.R2. |
| Enable Order UI? | Specify whether to enable the Orders UI for your tenant. This setting is available only if Orders Harmonization is enabled on your tenant. The setting acts as a switch between the Subscribe and Amend UI and Orders UI. You can turn off the Enable Order UIYes: Enable the Orders UI. You will see the UI change to reflect Orders Harmonization without amendment options.No: the default value. You will continue to use the Subscribe and Amend UI and the Orders UI will not be enabled on your tenant. |
| Enable Order for CPQ? | Zuora Billing can separate a single charge and bill that charge independently to give you the flexibility to invoice charges independently, allowing you to improve your cash flow by immediately invoicing a charge.See Invoicing Subscriptions Separately for more information.Yes: Your CPQ org makes Orders API calls to create and manage subscriptions on the Billing side.No: the default value. Your CPQ org makes Subscribe and Amend API calls to create and manage subscriptions on the Billing side. |
