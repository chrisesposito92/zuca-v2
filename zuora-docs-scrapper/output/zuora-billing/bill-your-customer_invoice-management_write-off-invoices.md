---
title: "Write off invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/write-off-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:41.137Z"
---

# Write off invoices

Learn how to write off unpaid or partially paid invoices when they are deemed uncollectible, and understand the scenarios and limitations involved in the process.

Occasionally, you might want to write off unpaid invoices or partially paid invoices when you are sure that the invoice balance is uncollectible.

For example, your end customers who receive an invoice might fail to pay the invoice timely. After attempting to collect payment to settle this invoice for a certain period (for example, 90 days past due), you might want to declare the invoice as bad debt. At this point, you might want to write off the unpaid invoice to reduce the account receivable balance.

To learn about the common use cases of invoice write-off, see [Invoice write-off use cases](/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoice-write-off-use-cases).

Note:

You can write off invoices only if you have Invoice Settlement enabled.

By writing off an invoice, a credit memo is created and applied to the invoice. The generated credit memo items and credit memo taxation items are applied to the corresponding invoice items and invoice taxation items respectively. If an invoice is written off, the balance of each invoice item and invoice taxation item must be zero after the write-off.

You can write off invoices in any of the following situations:

-   An invoice is never settled by any transactions such as payments or credit memos.

-   An invoice is partially settled by some transactions. For example, any payments or credit memos are applied to an invoice. In this case, only the unsettled part of the invoice can be written off.


The following table lists the specific invoice write-off scenarios:

| Invoice | Invoice item | Credit memo item created | Credit memo created |
| --- | --- | --- | --- |
| Invoice with a non-zero balance | Invoice item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo with a non-zero balance |
| Invoice item: with a non-zero balanceCorresponding taxation item: with zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with zero balance |  |  |
| Invoice item: with zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with zero balanceCorresponding taxation item: with a non-zero balance |  |  |
| Invoice item: with zero balanceCorresponding taxation item: with zero balance | Credit memo item: with zero balanceCorresponding taxation item: with zero balance |  |  |
| Invoice with zero balance | Invoice item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo with zero balance |
| Invoice item: with zero balanceCorresponding taxation item: with zero balance | Credit memo item: with zero balanceCorresponding taxation item: with zero balance | Credit memo with zero balance |  |

You can only write off invoices in Posted status. If any exception occurs during invoice write-off, the operation will roll back.

You can write off invoices through the Zuora UI or REST API, even in a closed accounting period. See [Write off invoices from the UI](/zuora-billing/bill-your-customer/invoice-management/write-off-invoices/invoices-write-off-from-the-ui) and [PUT Write off invoice](https://www.zuora.com/developer/api-references/api/operation/PUT_WriteOffInvoice) for more information.

Whether you can write off the invoices that have the total amount of zero depends on the option of the Create credit memos mirroring invoice items billing rule.

-   For zero-amount invoices composed of all zero-amount invoices items and taxation items, they can be written off only if the billing rule is set to Yes .

-   For zero-amount invoices composed of positive and negative invoices items or taxation items, they can be written off no matter which option the billing rule is set to. The specific credit memo creation during the invoice write-off might be different according to the option set for the billing rule.


After you write off an invoice, Zuora sets some taxation item fields of generated credit memo items by copying values from the corresponding invoice taxation items. There is no tax calculation involved in the process. The values of the following taxation item fields are copied:

-   `taxRate`
-   `exemptAmount`
-   `taxRateType`

Since there is no tax vendor call for the credit memo generated from the write-off, in case you need to adjust the taxation item on the write-off credit memo, you can use the following methods as a workaround:

1.  Unapply, or cancel, or unpost the generated credit memo(or)Unapply the generated credit memo and then write off the credit memo.

2.  Then, create the standalone credit memo and apply it to the invoice.


However, the credit memo application item level may not be an exact match to the standalone credit memo item.

For example,

If you create a standalone credit memo taxation item of $2, it cannot be directly applied to an invoice item taxation item of $2.

This is because of the following reasons:

-   You can apply a credit memo to an invoice or a taxation item only if they both have positive balances.
-   The invoice item/taxation item can be settled upon payment unapply/partially applied time, not the credit memo applied time.

## Limitations

You cannot write off invoices in any of the following situations:

-   The balance of an invoice has been changed before Invoice Settlement is enabled. For example, before Invoice Settlement is enabled, any credit balance adjustments, invoice item adjustments, or invoice adjustments have been applied to an invoice.

-   An invoice contains more than 2,000 items in total, including invoice items, discount items, and taxation items. If the limit is reached during invoice write-off, perform the following steps:

    1.  Create a credit memo from a set of invoice items in the invoice. The number of affected items must be less than 1,000.
    2.  Apply the credit memo to the invoice by specifying the invoice items, which the credit memo items are applied to.
    3.  Repeat step 1 and step 2 to offset the remaining invoice items.
