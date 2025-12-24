---
title: "Usage Lines (Items) Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/usage-lines-items-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:33.773Z"
---

# Usage Lines (Items) Fields

Zuora supports customizable invoice templates with multi-level nested tables for usage items, allowing grouping and subtotaling by merge or custom fields.

Zuora supports multi-level nested tables within the usage items table.

You can customize your invoice templates to display usage items in nested tables. In nested tables, you can group and subtotal complex usage items by any supported merge fields or custom fields. For more information, see [Grouping and Subtotal Functions in Nested Tables](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables).

Note:

Advanced custom fields cannot be used with Word Template. Similarly, custom fields created using Object Manage cannot be utilized with Mail Merge Template.

| Merge Field | Description | Sort Order |
| --- | --- | --- |
| Usage.ChargeAccountingCode | Example: A2411-UsageFees |  |
| Usage.ChargeDescription | Usage Description FieldExample: Objects: Krusty Burger Special | 4 |
| Usage.ChargeName | Charge Name from the subscriptionExample: Best Product Ever - Gold Edition: Usage Fees |  |
| Usage.ChargeNumber | Charge ID from subscriptionExample: C-000006This field cannot be translated. | 2 |
| Usage.Date | Type: DateExample: 01/16/2009 | 3 |
| Usage.ProductChargeDescription | Charge Description from the subscriptionExample: Usage Fee |  |
| Usage.ProductDescription | Example: Includes so many features |  |
| Usage.ProductName | Example: Best Product Ever |  |
| Usage.ProductSKU | Example: SKU-18412This field cannot be translated. |  |
| Usage.Quantity | Example: 2 |  |
| Usage.RatePlanDescription | Example: Gold Edition includes all features from the Silver Edition |  |
| Usage.RatePlanName | Example: Best Product Ever - Gold Edition |  |
| Usage.RatingAmount | If you are using the individual usage rating feature, use this optional field to display the usage rating amount on a line-by-line basis in the Usage Details section of the Invoice PDF. |  |
| Usage.RevenueRecognitionCode | Example: Revenue |  |
| Usage.SubscriptionNotes | Example: Notes about the Subscription |  |
| Usage.SubscriptionNumber | Example: 82419391339-ABCThis field cannot be translated. | 1 |
| Usage.UOM | Example: Custom Objects |  |
| Usage.UOMDisplayedAs | UOM Display NameExample: Custom Objects |  |
| Usage.AccountNumber | Account Number of the usage recordExample: A000842911 |  |
