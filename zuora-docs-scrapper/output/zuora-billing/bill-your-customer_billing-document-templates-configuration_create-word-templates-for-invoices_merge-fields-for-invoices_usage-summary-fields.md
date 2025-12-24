---
title: "Usage Summary Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/usage-summary-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:30.824Z"
---

# Usage Summary Fields

This topic provides details on various usage summary fields, including account information, charge details, and service periods, with examples for clarity.

| Merge Field | Notes | Sort Order |
| --- | --- | --- |
| UsageSummary.AccountName | The account name of the subscription ownerExample: Super Subscription Emporium |  |
| UsageSummary.AccountNumber | The account number of the subscription ownerExample: A000842911This field cannot be translated. |  |
| UsageSummary.AmountWithoutTax | Type: NumberExample: $10.00 |  |
| UsageSummary.ChargeDescription | Charge Description from the subscriptionExample: Usage Fee |  |
| UsageSummary.ChargeModel | Example: Per Unit Pricing |  |
| UsageSummary.ChargeName | Charge Name from the subscriptionExample: Best Product Ever - Gold Edition: Usage Fees |  |
| UsageSummary.ChargeNumber | Charge ID from subscriptionExample: C-000006This field cannot be translated. | 4 |
| UsageSummary.ExtendedPrice | Type: NumberExample: $10.80 |  |
| UsageSummary.IncludedQuantity | Type: NumberExample: 19 |  |
| UsageSummary.ListPrice | Example: Tier / From / To / List Price / Price Format 1 / 1 / 15 / 15.30 / Flat Fee 2 / 16 / 18 / 35.00 / Flat Fee |  |
| UsageSummary.OverageQuantity | Type: NumberExample: 0 |  |
| UsageSummary.ProductDescription | Example: Includes so many features |  |
| UsageSummary.ProductName | Example: Best Product Ever | 3 |
| UsageSummary.ProductSKU | Example: SKU-18412This field cannot be translated. |  |
| UsageSummary.Quantity | Type: NumberExample: 2 |  |
| UsageSummary.RatePlanDescription | Example: Gold Edition includes all features from the Silver Edition |  |
| UsageSummary.RateDetail | Usage charge data such as units consumed, price per unit and the total charge amount. The format depends on the pricing charge model of the usage charge.For amounts, the format, such as decimal places, is determined by the setting of the currency. |  |
| UsageSummary.RatePlanName | Example: Best Product Ever - Gold Edition |  |
| UsageSummary.ServicePeriod | The date rangeExample: 01/01/2009-01/31/2009 | 2 |
| UsageSummary.ServiceStartDate | Type: DateExample: 01/01/2009 |  |
| UsageSummary.ServiceEndDate | Type: DateExample: 01/31/2009 |  |
| UsageSummary.SubscriptionNotes | Example: Notes about the Subscription |  |
| UsageSummary.SubscriptionNumber | Example: 82419391339-ABCThis field cannot be translated. | 1 |
| UsageSummary.TaxAmount | Subtotal of taxes associated with the usage summary.Example: $0.80Note:Only available to users of Zuora Tax. |  |
| UsageSummary.UOM | Example: Custom Objects |  |
| UsageSummary.UOMDisplayedAs | UOM Display NameExample: Custom Objects |  |
| UsageSummary.UsagePeriod | The type of periodExample: Month |  |
