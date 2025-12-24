---
title: "Use cases of Invoice Item Settlement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/invoice-item-settlement/use-cases-of-invoice-item-settlement"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:00.727Z"
---

# Use cases of Invoice Item Settlement

Here are some common use cases of the [Invoice Item Settlement](/zuora-billing/bill-your-customer/invoice-settlement/invoice-item-settlement/overview-of-invoice-item-settlement) feature.

The implementation of the use cases mentioned in this article is similar to that in the following scenarios:

-   You apply payments to debit memos.

-   You apply credit memos to invoices or debit memos.


Note:

To apply the payments and refunds at the line-item level, you must have Invoice Item Settlement enabled. Invoice Item Settlement must be used with other [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) features, including Unapplied Payments and Credit and Debit memos. Invoice Item Settlement is available for Enterprise and Nine editions by default. If your Zuora edition is Growth, you must purchase this feature.

## Case I: Apply payments to one-time professional fees first

You have one payment to apply to one invoice. The invoice contains two invoice items, one for the one-time professional fee and the other for the annual recurring fee. You want to apply the payment to the setup fee first and then to the annual recurring fee.

For example:

| Invoice/Item | Amount | Balance | Expected balance after payment | Payment amount to apply |
| --- | --- | --- | --- | --- |
| Invoice item 1 (professional fee) | $20 | $20 | $0 | $20 |
| Invoice item 2 (annual recurring fee) | $100 | $100 | $50 | $50 |
| Total | $120 | $120 | $50 | $70 |
| Invoice with the total amount of $120 | Payment with the total amount of $70 |  |  |  |

In this case, call the [Get invoice items](https://developer.zuora.com/v1-api-reference/api/operation/GET_InvoiceItems/) operation to retrieve the balance of each invoice item. Then, call the [Apply payment](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ApplyPayment/) operation to apply the specific amount of the payment to the balances of corresponding invoice items.

## Case II: Apply payments to taxation items first

You have one payment to apply to one taxable invoice. The invoice contains one invoice item and one taxation item. You want to apply the payment to the taxation item first and then to the invoice.

For example:

| Invoice/Item | Amount | Balance | Expected balance after payment | Payment amount to apply |
| --- | --- | --- | --- | --- |
| Invoice item 1 | $200 | $200 | $150 | $50 |
| Invoice taxation item 1 | $20 | $20 | $0 | $20 |
| Total | $220 | $220 | $150 | $70 |
| Invoice with the total amount of $220 | Payment with the total amount of $70 |  |  |  |

In this case, call the [Get invoice items](https://developer.zuora.com/v1-api-reference/api/operation/GET_InvoiceItems/) operation to retrieve the balance of the invoice item and that of the taxation item. Then, call the [Apply payment](https://www.zuora.com/developer/api-references/api/operation/PUT_ApplyPayment) operation to apply the specific amount of the payment to the taxation item first and then the invoice item.

If an invoice item has more taxation items than returned, you can use the [Get taxation items of invoice item](https://www.zuora.com/developer/api-references/api/operation/GET_TaxationItemsOfInvoiceItem) operation to retrieve the additional taxation items iteratively.

## Case III: Apply payments to tax-exclusive invoices with discounts

You have one payment to apply to one tax-exclusive invoice with discounts. The invoice contains one invoice item, one discount item, and their corresponding taxation items. You want to apply the payment to the taxation items first and then to the invoice item.

For example:

| Invoice/Item | Amount | Balance | Expected balance after payment | Payment amount to apply |
| --- | --- | --- | --- | --- |
| Invoice item 1 | $100 | $90 | $29 | $61 |
| Invoice taxation item 1 | $10 | $10 | $0 | $9 |
| Discount item | $-10 | $0 | $0 | $0 |
| Discount taxation item | $-1 | $-1 | $-1 | $0 |
| Total | $99 | $99 | $29 | $70 |
| Invoice with the total amount of $99 | Payment with the total amount of $70 |  |  |  |

In this case, call the [Get invoice items](https://www.zuora.com/developer/api-references/api/operation/GET_InvoiceItems) operation to retrieve the balance of the invoice items, invoice taxation items, discount items, and discount taxation items. Then, call the [Apply payment](https://www.zuora.com/developer/api-references/api/operation/PUT_ApplyPayment) operation to apply the specific amount of the payment to the taxation item first and then the invoice item.
