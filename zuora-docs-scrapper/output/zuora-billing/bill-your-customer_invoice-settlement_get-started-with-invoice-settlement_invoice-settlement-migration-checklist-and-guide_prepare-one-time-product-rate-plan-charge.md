---
title: "Prepare one-time product rate plan charge"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/prepare-one-time-product-rate-plan-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:53.398Z"
---

# Prepare one-time product rate plan charge

This reference provides information on the preparation of a one-time product rate plan charge.

If negative invoices or outstanding credit balance exist before the Invoice Settlement enablement, create or update a one-time product rate plan charge within two days before the data migration is triggered. The charge is used to create credit memos from credit balance. The one-time product rate plan charge is not taxable.

| Field | Field Value Remarks |
| --- | --- |
| Charge name | The charge name must be in the format of "Special one time charge for migration - CurrencyCode".For example, Special one time charge for migration - USD . |
| Charge model | The charge model must be Flat Fee Pricing. |
| Charge amount | The charge amount must be a value of less than 0. For example, -10. |
| Effective period of the corresponding product and product rate plan | The effective start date must be the first day of this year, and the effective end date must be the last day of this year. |
| Accounting code | Any valid accounting code, which will be used as Deferred Revenue for credit memos created during the migration. |
| Taxable | Do not select this field. This special one-time charge is not taxable. |
| Revenue Recognition | If Z-Revenue is turned on, the revenue recognition rule for this particular one-time product should be set as unlimited. The Revenue Schedule for Credit Memos generated through the Account Credit Balance won't be included in the Revenue Detail Report. To prevent duplicates, it is essential to exclude this since negative invoices were moved to the Account Credit Balance. |
