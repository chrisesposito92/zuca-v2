---
title: "Use cases of invoice and memo association"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/use-cases-of-invoice-and-memo-association"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:50.352Z"
---

# Use cases of invoice and memo association

Invoice and memo association use cases

With the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature, you can use the Retrieve a credit memo item or List credit memo items operation to retrieve the association between invoices and credit memos. This article describes some common use cases for the association between invoices and credit memos, mainly indicating the `creditFromItemId` and `creditFromItemSourceType` fields.

For use cases, see these topics:

-   [Case I: Canceling a subscription](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/use-cases-of-invoice-and-memo-association/case-i-canceling-a-subscription)

-   [Case II: Invoice owner transfer](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/use-cases-of-invoice-and-memo-association/case-ii-invoice-owner-transfer)


## Known limitations

The association between invoices and credit memos has the following limitations:

-   The values of the `creditFromItemId` and `creditFromItemSourceType` fields are `null` for the credit memos that were created before Zuora Billing Release 305, July 2021.

-   In the scenario of cancelling a subscription and then splitting the corresponding invoice, the value of the `creditFromItemId` field refers to the invoice item of the original invoice which has been split. The original invoice has been cancelled due to invoice splitting.

-   In the scenario of splitting an invoice and then cancelling the corresponding subscription, the value of the `creditFromItemId` field refers to an invoice item in a split invoice. The split invoice is generally the one that has the greater sequence number.
