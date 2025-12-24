---
title: "Case II: Invoice owner transfer"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/use-cases-of-invoice-and-memo-association/case-ii-invoice-owner-transfer"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:55.662Z"
---

# Case II: Invoice owner transfer

Invoice owner transfer

Invoice owner transfers do not affect the association between an invoice and the corresponding credit memo created from the invoice.

For example, your end customer subscribes to an annual service from January 1, 2021 to December 31, 2021, and an invoice named INV-001 is generated for the account named A-001. After the invoice is generated, your customer wants to change the invoice owner, so you transfer the invoice owner to the account named A-002 for future charges.

The key information of this invoice is as follows:

| Invoice item | amount | processingType | serviceStartDate | serviceEndDate |
| --- | --- | --- | --- | --- |
| Invoice item 1 | $1200 | Charge | 2021-01-01 | 2021-12-31 |

Later, your customer cancels the subscription on July 1, 2021, so you create a credit memo to provide corresponding credit for the account named A-002. The key information of the credit memo is as follows.

| Credit memo item | amount | processingType | serviceStartDate | serviceEndDate | sourceItemId | sourceItemType | creditFromItemId | creditFromItemSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | $600 | Charge | 2021-07-01 | 2021-12-31 | ID of RatePlanCharge | SubscriptionComponent | ID of Invoice item 1 | InvoiceItem |
