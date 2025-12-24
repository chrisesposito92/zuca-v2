---
title: "Charge details view"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscriptions-details-through-the-reinvented-ui/charge-details-view"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:21.301Z"
---

# Charge details view

This topic explains how how to view and understand charge details by expanding the charge table and reviewing various fields such as charge number, name, description, and pricing information.

To view charge details, you can click the down arrow ![Image: icon-expand-list](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/90bc37c0-5ef5-4c1e-b2e5-4a276b883b52?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwYmMzN2MwLTVlZjUtNGMxZS1iMmU1LTRhMjc2Yjg4M2I1MiIsImV4cCI6MTc2NjYzOTg5OSwianRpIjoiNmUyNjRmZGUwYThmNGM0OWE0NjUwYjRlMzcyNDkyMTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.q8Kxd9S7upt9sBLY_MiTf7s_XHv4WOiuMf9-YMJvyO8) before the charge name to expand a table that lists all charge details.

The table lists the following charge details. For different charge models, the charge details are different.

| Field group | Field and description |
| --- | --- |
| Name | Charge Number: Displays the unique identifier for the charge. For example, C-00000001 .Charge Name: Displays the name of the charge.Description: Displays the description of the charge.Accounting code: Displays the accounting code.Charge Definition: Displays the charge definition number and link. This field is only available if the Attribute-based Pricing feature is enabled. |
| Charge Amount | Charge Model: Displays the charge model.Price: Displays the charge price. For the Overage Pricing charges, the Overage Price field displays instead.Quantity: Displays the quantity for the charge. The total price is obtained by multiplying this quantity by the price. For the Delivery Pricing charges, the Number Of Deliveries field displays instead.UOM: Displays the Customize Units of Measure. For the Delivery Pricing charges, the Delivery Frequency field displays instead.Total: Displays the total charge.List Price Base: Displays the specific period in which the price is used. |
| Timing & Frequency Of Charge | Trigger Condition: Displays the trigger condition.End Date: Displays the charge end date.Billing Period: Displays the billing period.Billing Timing: Displays the billing timing.Billing Day: Displays the billing day.Billing Period Alignment: Displays the billing period alignment setting. |
| Finance | Revenue Recognition Rule: Displays the revenue recognition rule.Revenue Recognition Code: Displays the revenue recognition code.Revenue Recognition Trigger: Displays the revenue recognition trigger.Exclude Item Booking from Revenue: Displays whether non-revenue related rate plan charges and order line items are excluded from syncing to Revenue.Exclude Item Billing from Revenue: Displays whether non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items are excluded from syncing to Revenue. |
| Price Change On Subscription Renewal | Price Change to Apply: Displays how the charge price is changed when renewal. For more information, see Automated Price Change (Uplift) for Renewed Subscriptions.You can click the edit icon  to edit this information if the subscription is not canceled and expired. |
