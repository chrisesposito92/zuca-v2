---
title: "Case I: Canceling a subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/use-cases-of-invoice-and-memo-association/case-i-canceling-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:53.396Z"
---

# Case I: Canceling a subscription

Canceling a subscription

Your end customer subscribes to an annual service from January 1, 2021 to December 31, 2021, and an invoice named INV-001 is generated. Later, your customer cancels the subscription on July 1, 2021, so you have to provide corresponding credit for your customer.

The key information of invoice INV-001 is as follows:

| Invoice item | amount | processingType | serviceStartDate | serviceEndDate |
| --- | --- | --- | --- | --- |
| Invoice item 1 | $1200 | Charge | 2021-01-01 | 2021-12-31 |

If your customer cancels the subscription on July 1, 2021, so you use the billing engine to generate a credit memo named CM-001 to provide corresponding credit for your customer. The source type of this credit memo is `API` or `BillRun` and its source ID is `null` . The key information of credit memo CM-001 is as follows.

| Credit memo item | amount | processingType | serviceStartDate | serviceEndDate | sourceItemId | sourceItemType | creditFromItemId | creditFromItemSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | $600 | Charge | 2021-07-01 | 2021-12-31 | ID of RatePlanCharge | SubscriptionComponent | ID of Invoice item 1 | InvoiceItem |

Due to a service dispute, you want to create a standalone credit memo named CM-002 from invoice INV-001. The source type of this credit memo is `Invoice`, and its source ID is the ID of invoice INV-001. The key information of credit memo CM-003 is as follows.

| Credit memo item | amount | processingType | serviceStartDate | serviceEndDate | sourceItemId | sourceItemType | creditFromItemId | creditFromItemSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | $15 | Charge | 2021-07-01 | 2021-12-31 | ID of RatePlanCharge | SubscriptionComponent | ID of Invoice item 1 | InvoiceItem |

Later, you want to create a standalone credit memo from the corresponding product rate plan charge for providing ad-hoc credit for your customer. The source type of this credit memo is`AdhocFromPrpc`, and its source ID is the ID of the product rate plan charge. The key information of credit memo CM-003 is as follows.

| Credit memo item | amount | processingType | serviceStartDate | serviceEndDate | sourceItemId | sourceItemType | creditFromItemId | creditFromItemSource |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | $100 | Charge | 2021-07-01 | 2021-12-31 | ID of RatePlanCharge | SubscriptionComponent | null | null |
