---
title: "Overview of Billing Transactions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-billing-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:12:52.450Z"
---

# Overview of Billing Transactions

Billing transactions document changes in billing items and adjustments, and are integral to data queries.

Billing transactions capture important changes on Invoice Item, Credit Memo Item, Debit Memo Item, and Invoice Item Adjustment when a billing document is generated. The Billing Transaction object is available in the data source and data query. Billing transactions do not support un-posting and deleting operations.

There are more than 50 fields in the Billing Transaction object.

While generating a billing transaction, if the following condition is met, the billing transaction is considered as a standalone transaction without an originating billing transaction:

-   If the transaction type is `Credit Memo`

-   If the rate plan charge is set with the `Exclude Item Booking from Revenue` field as `Yes` , the booking record is not recorded in the booking transaction.

-   Order to revenue supports the calculated charge model as billing-based revenue recognition. The rate plan charge with a calculated change model will be a standalone billing transaction.

-   For instances where the subscription/rate plan charge is deleted, but the invoice items/memo items are not deleted, all the billing items will be treated as standalone billing transactions.
