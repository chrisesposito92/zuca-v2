---
title: "Group usage or invoice item summary and subtotals"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/grouping-and-subtotal-functions-in-nested-tables/group-usage-or-invoice-item-summary-and-subtotals"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:48.471Z"
---

# Group usage or invoice item summary and subtotals

Configure tables to display summaries of grouped usage charges or invoice items with totals, without requiring an inner table.

You can configure your table to display only a summary of grouped usage charges or invoice items with totals. An inner table is not required to configure a summary table.

In the following example, the generated invoice displays a summary of charges grouped by billing code and totals of UOM quantities:

![Example Invoice Displaying Only a Summary of Grouped Usage Data with Subtotals](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a5d933dc-657e-4d93-88fb-ad3aaae12a52?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE1ZDkzM2RjLTY1N2UtNGQ5My04OGZiLWFkM2FhYWUxMmE1MiIsImV4cCI6MTc2NjY0MTg0NiwianRpIjoiYzI2NDU5OWE2MGEyNDk0YThiMzFmMTIzZjZjMGFmZDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TbBENlrdnkZv__aiZFgKhM-IKVB5LslTWvPJZe2J4mg)

Modify the original Usage Details table to look like the following table:

| [ROW 1] | Usage Details |  |
| --- | --- | --- |
| [ROW 2] | Billing Code | Amount |
| [ROW 3: Outer Table] | «TableStart:Usage» «NestedTable:GroupColumn Usage.BillingCode__c» «NestedTable:ValueColumn Usage.Quantity» BillingCode: «Usage.BillingCode__c»Totals: «Usage.Quantity»«TableEnd:Usage» |  |
