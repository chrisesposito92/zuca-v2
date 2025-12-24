---
title: "Purpose of credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:36.721Z"
---

# Purpose of credit and debit memos

Credit memos and debit memos are used to manage invoices and account balances.

You can create credit memos to reduce invoices and account balances, and create debit memos to increase the amount customers owe you.

The credit memos and debit memos can be issued in the following ways:

-   Create a credit or debit memo from an invoice

-   Create a credit or debit memo from charges

-   Generate credit memos by bill run


You can create memos from invoices or charges only if you have the user permission.

For information on how to create a credit or debit memo from an invoice, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-credit-or-debit-memo-from-an-invoice).

For information on how to create a standalone credit or debit memo from charges, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/purpose-of-credit-and-debit-memos/create-a-standalone-credit-or-debit-memo-from-charges).

## Generate a credit memo by bill run

Follow the steps in Creating Bill Runs . Zuora automatically generates credit memos during the bill runs for negative charges based on your invoice and credit memo generation rule . The number of credit memos that are generated during the bill run is displayed on the bill run detail page.

## Generate a credit memo by using the API

The following API operations could automatically generate credit memos for negative charges based on your invoice and credit memo generation rule:

-   [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) (The runBilling field and write-off field must be set to true and if there is an open balance)

-   [Create an order asynchronously](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateOrderAsynchronously/) (The `runBilling` field must be set to `true`)

-   [Generate billing documents by account ID](https://developer.zuora.com/v1-api-reference/api/operation/POST_GenerateBillingDocuments/)


## Notes

When you create a credit or debit memo for usage charges, the quantity must be a positive value. If you leave it empty on the Zuora UI, it will be set to 1 as the default value.
