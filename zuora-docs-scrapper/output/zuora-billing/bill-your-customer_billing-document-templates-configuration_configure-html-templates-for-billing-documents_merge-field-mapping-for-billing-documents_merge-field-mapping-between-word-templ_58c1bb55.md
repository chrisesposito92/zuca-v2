---
title: "Subscription fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-mapping-for-billing-documents/merge-field-mapping-between-word-templates-and-html-templates-for-invoices/subscription-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:06.622Z"
---

# Subscription fields

This reference provides a mapping of subscription fields between Word and HTML invoice templates, and guidance on building a subscription table using the HTML component in the template editor.

To build a subscription table in the HTML template editor, you can use the HTML component. For more information, see Configure HTML codes in HTML invoice templates .

The following table lists the mapping for Subscription fields in Word invoice templates and HTML invoice templates.

| Merge field in Word templates | Equivalent in HTML templates |
| --- | --- |
| Subscription.Autorenew | InvoiceItem.Subscription.Autorenew |
| Subscription.AmountWithoutTax | {{#Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} {{_Group\|Sum(ChargeAmount)}} {{/Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} |
| Subscription.ExtendedPrice | {{#Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} {{#Wp_Eval}}{{_Group\|Sum(ChargeAmount)}} + {{_Group\|Sum(TaxAmount)}}{{/Wp_Eval}} {{/Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} |
| Subscription.Notes | InvoiceItem.Subscription.Notes |
| Subscription.Owner.BillToContact.Address1 | InvoiceItem.Subscription.Account.BillToContact.Address1 |
| Subscription.Owner.BillToContact.Address2 | InvoiceItem.Subscription.Account.BillToContact.Address2 |
| Subscription.Owner.BillToContact.City | InvoiceItem.Subscription.Account.BillToContact.City |
| Subscription.Owner.BillToContact.Country | InvoiceItem.Subscription.Account.BillToContact.Country |
| Subscription.Owner.BillToContact.County | InvoiceItem.Subscription.Account.BillToContact.County |
| Subscription.Owner.BillToContact.FirstName | InvoiceItem.Subscription.Account.BillToContact.FirstName |
| Subscription.Owner.BillToContact.LastName | InvoiceItem.Subscription.Account.BillToContact.LastName |
| Subscription.Owner.BillToContact.MobilePhone | InvoiceItem.Subscription.Account.BillToContact.MobilePhone |
| Subscription.Owner.BillToContact.PostalCode | InvoiceItem.Subscription.Account.BillToContact.PostalCode |
| Subscription.Owner.BillToContact.State | InvoiceItem.Subscription.Account.BillToContact.State |
| Subscription.Owner.BillToContact.WorkEmail | InvoiceItem.Subscription.Account.BillToContact.WorkEmail |
| Subscription.Owner.BillToContact.WorkPhone | InvoiceItem.Subscription.Account.BillToContact.WorkPhone |
| Subscription.Owner.SoldToContact.Address1 | InvoiceItem.Subscription.Account.SoldToContact.Address1 |
| Subscription.Owner.SoldToContact.Address2 | InvoiceItem.Subscription.Account.SoldToContact.Address2 |
| Subscription.Owner.SoldToContact.City | InvoiceItem.Subscription.Account.SoldToContact.City |
| Subscription.Owner.SoldToContact.Country | InvoiceItem.Subscription.Account.SoldToContact.Country |
| Subscription.Owner.SoldToContact.County | InvoiceItem.Subscription.Account.SoldToContact.County |
| Subscription.Owner.SoldToContact.FirstName | InvoiceItem.Subscription.Account.SoldToContact.FirstName |
| Subscription.Owner.SoldToContact.LastName | InvoiceItem.Subscription.Account.SoldToContact.LastName |
| Subscription.Owner.SoldToContact.MobilePhone | InvoiceItem.Subscription.Account.SoldToContact.MobilePhone |
| Subscription.Owner.SoldToContact.PostalCode | InvoiceItem.Subscription.Account.SoldToContact.PostalCode |
| Subscription.Owner.SoldToContact.State | InvoiceItem.Subscription.Account.SoldToContact.State |
| Subscription.Owner.SoldToContact.WorkEmail | InvoiceItem.Subscription.Account.SoldToContact.WorkEmail |
| Subscription.Owner.SoldToContact.WorkPhone | InvoiceItem.Subscription.Account.SoldToContact.WorkPhone |
| Subscription.Product.Description | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Description |
| Subscription.Product.Name | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.Name |
| Subscription.Product.SKU | InvoiceItem.RatePlanCharge.ProductRatePlanCharge.ProductRatePlan.Product.SKU |
| Subscription.RatePlan.Description | InvoiceItem.RatePlanCharge.RatePlan.Description |
| Subscription.RatePlan.Name | InvoiceItem.RatePlanCharge.RatePlan.Name |
| Subscription.SubscriptionNumber | InvoiceItem.Subscription.Name |
| Subscription.TaxAmount | {{#Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} {{_Group\|Sum(TaxAmount)}} {{/Invoice.InvoiceItems\|GroupBy(Subscription.Name)}} |
| Subscription.TermEndDate | InvoiceItem.Subscription.TermEndDate |
| Subscription.TermStartDate | InvoiceItem.Subscription.TermStartDate |
