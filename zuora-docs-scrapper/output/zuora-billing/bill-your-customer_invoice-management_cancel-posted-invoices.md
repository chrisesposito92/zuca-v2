---
title: "Cancel posted invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/cancel-posted-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:40.403Z"
---

# Cancel posted invoices

Learn how to cancel the most recent posted invoice on an account in Zuora by following a series of steps.

You can cancel only the most recent invoice on an account.

1.  Log in to the Zuora application and navigate to Billing > Invoices .
2.  On the invoice list view, find the target invoice and open the invoice detail page by clicking the invoice number. You can quickly find your invoices by searching on the following invoice fields:

    -   Account Name
    -   Account Number
    -   Invoice Number
    -   Run Number

3.  On the invoice detail page, click the three vertical dots icon to display more applicable actions and then click Cancel Post .
4.  Confirm your action in the pop-up dialog. This operation will unpost the invoice and change its status to Draft. You can prevent an unpost operation by configuring the 'Do not allow unposting invoices and memos if their revenue is already recognized in a closed accounting period' accounting rule. The default value of this rule is set to No. For more information, see Configure Accounting Rules.
5.  To cancel the invoice, click the three vertical dots icon again and then click Cancel Invoice .

If your bill run is canceled, you cannot do a mass cancel post of invoices.

For more information, see Delete incorrect invoices.
