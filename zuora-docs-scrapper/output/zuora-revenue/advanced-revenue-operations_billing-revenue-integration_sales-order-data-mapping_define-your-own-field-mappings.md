---
title: "Define your own field mappings"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/sales-order-data-mapping/define-your-own-field-mappings"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:00.041Z"
---

# Define your own field mappings

This reference provides information on custom-mapping Zuora Billing objects extracted in Data Sync to Zuora Revenue fields.

All Zuora Billing objects that are extracted during Data Sync are available for custom data mappings. Refer to exported Data Sync objects to learn which Zuora Billing objects you can customize the mappings to Zuora Revenue fields.

For example, you can define custom mappings for all fields, including standard fields and custom fields, on the Contact object. They should only be mapped to ATR1 - ATR60 in Zuora Revenue. The following table lists the FirstName and LastName field mappings as typical examples:

| Zuora Billing Field | Zuora Revenue Staging Field Name | Input Value Type | Description |
| --- | --- | --- | --- |
| RatePlanCharge.BillToContact.FirstName | Any attribute from 1 to 60 (ATR1 - ATR60) | Character | The first name of the specified Bill To Contact for a rate plan charge. |
| RatePlanCharge.BillToContact.LastName | Any attribute from 1 to 60 (ATR1 - ATR60) | Character | The last name of the specified Bill To Contact for a rate plan charge. |
| RatePlanCharge.SoldToContact.FirstName | Any attribute from 1 to 60 (ATR1 - ATR60) | Character | The first name of the specified Sold To Contact for a rate plan charge. |
| RatePlanCharge.SoldToContact.LastName | Any attribute from 1 to 60 (ATR1 - ATR60) | Character | The last name of the specified Sold To Contact for a rate plan charge. |

Note that fields of the following Zuora Billing objects cannot be used in all field mapping templates:

-   CreditBalanceAdjustment

-   RatePlanChargeTier

-   Order

-   OrderAction

-   ExchangeRate

-   RampInterval

-   RampSubscriptionLink
