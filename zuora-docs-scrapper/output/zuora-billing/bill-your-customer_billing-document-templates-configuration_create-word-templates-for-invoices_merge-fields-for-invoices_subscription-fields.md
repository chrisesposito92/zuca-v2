---
title: "Subscription Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/subscription-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:28.391Z"
---

# Subscription Fields

This reference details various subscription fields, including merge fields, descriptions, and sort orders, with examples for each.

| Merge Field | Description | Sort Order |
| --- | --- | --- |
| Subscription.Autorenew | Example: true |  |
| Subscription.AmountWithoutTax | Example: $754.00 |  |
| Subscription.ExtendedPrice | Total charge including taxesExample: $766.80 |  |
| Subscription.Notes | Example: Notes about the Subscription |  |
| Subscription.Owner.BillToContact.Address1 | Subscription Owner's Bill To Contact street addressExample: 678 Evergreen Terrace |  |
| Subscription.Owner.BillToContact.Address2 | Subscription Owner's Bill To Contact second address lineExample: Suite 100 |  |
| Subscription.Owner.BillToContact.City | Subscription Owner's Bill To Contact city of residenceExample: Paris |  |
| Subscription.Owner.BillToContact.Country | Subscription Owner's Bill To Contact country of residenceExample: France |  |
| Subscription.Owner.BillToContact.County | Subscription Owner's Bill To Contact county of residenceExample: MadisonOnly available to users of Zuora Tax. |  |
| Subscription.Owner.BillToContact.FirstName | Subscription Owner's Bill To Contact first nameExample: Stewart |  |
| Subscription.Owner.BillToContact.LastName | Subscription Owner's Bill To Contact last nameExample: Griffin |  |
| Subscription.Owner.BillToContact.MobilePhone | Subscription Owner's Bill To Contact phone numberExample: 1-555-123-4567 |  |
| Subscription.Owner.BillToContact.PostalCode | Subscription Owner's Bill To Contact postal codeExample: 86441 |  |
| Subscription.Owner.BillToContact.State | Subscription Owner's Bill To Contact state of residenceExample: California |  |
| Subscription.Owner.BillToContact.WorkEmail | Subscription Owner's Bill To Contact work emailExample: Tyler@TestEmail.com |  |
| Subscription.Owner.BillToContact.WorkPhone | Subscription Owner's Bill To Contact work phoneExample: 1-232-415-9876 |  |
| Subscription.Owner.SoldToContact.Address1 | Subscription Owner's Sold To Contact street addressExample: 677 Maple Drive |  |
| Subscription.Owner.SoldToContact.Address2 | Subscription Owner's Sold To Contact second address lineExample: Suite 100 |  |
| Subscription.Owner.SoldToContact.City | Subscription Owner's Sold To Contact city of residenceExample: Chicago |  |
| Subscription.Owner.SoldToContact.Country | Subscription Owner's Sold To Contact country of residenceExample: United States |  |
| Subscription.Owner.SoldToContact.County | Subscription Owner's Sold To Contact county of residenceExample: OneidaOnly available to users of Zuora Tax. |  |
| Subscription.Owner.SoldToContact.FirstName | Subscription Owner's Sold To Contact first nameExample: Hilliary |  |
| Subscription.Owner.SoldToContact.LastName | Subscription Owner's Sold To Contact last nameExample: Brown |  |
| Subscription.Owner.SoldToContact.MobilePhone | Subscription Owner's Sold To Contact mobile phone numberExample: 1-555-123-4567 |  |
| Subscription.Owner.SoldToContact.PostalCode | Subscription Owner's Sold To Contact postal codeExample: 94941 |  |
| Subscription.Owner.SoldToContact.State | Subscription Owner's Sold To Contact state of residenceExample: New York |  |
| Subscription.Owner.SoldToContact.WorkEmail | Subscription Owner's Sold To Contact work emailExample: Tomas@TestCompanycom |  |
| Subscription.Owner.SoldToContact.WorkPhone | Subscription Owner's Sold To Contact work phoneExample: 1-232-415-9876 |  |
| Subscription.Product.Description | Example: Includes so many features |  |
| Subscription.Product.Name | Example: Best Product Ever | 2 |
| Subscription.Product.SKU | Example: SKU-18412This field cannot be translated. |  |
| Subscription.RatePlan.Description | Example: Gold Edition includes all features from the Silver Edition |  |
| Subscription.RatePlan.Name | Example: Best Product Ever - Gold Edition | 3 |
| Subscription.SubscriptionNumber | Example: 82419391339-ABCThis field cannot be translated. | 1 |
| Subscription.TaxAmount | Subtotal of taxes associated with the Subscription or Rateplan.Example: $12.80Note:Only available with Zuora Tax Engine. |  |
| Subscription.TermEndDate | Type: DateExample: 12/31/2009 |  |
| Subscription.TermStartDate | Type: DateExample: 01/01/2009 |  |
