---
title: "Unapply credit memos from invoices and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/unapply-credit-memos-from-invoices-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:59.864Z"
---

# Unapply credit memos from invoices and debit memos

Know how to unapply credit memos from invoices and debit memos

You can unapply the applied portion of credit memos from invoices and debit memos only if you have appropriate user permission. The fully applied amount from invoices and debit memos is transferred into the unapplied amount of the credit memo.

## Overview

Through the billing settings configuration, you can configure a default application rule to determine how the system unapply credit memos applications from invoices and debit memos. Zuora uses the specified application rule to automatically unapply the credit at the item level if you have not specified item-level application amounts explicitly.

Note:

When unapplying a credit memo, the total number of the credit memo's item parts must be less than or equal to 1,000. Otherwise, the operation would fail and an error message would pop up. When you see this error, you can try using the [Unapply a credit memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_UnapplyCreditMemo/) API as an alternative. Similarly, make sure that all the requirements listed in the API reference are met.

If the Proration application rule is used, when unapplying credit memos, the following quantity must be less than or equal to 15,000:

(number of invoice items + number of debit memo items) \* number of credit memo items

Otherwise, the First In First Out rule will be used instead of the Proration rule.

For steps on how to unapply credit memos from invoices and debit memos, see [here](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/unapply-credit-memos-from-invoices-and-debit-memos/procedure-unapply-credit-memos-from-invoices-and-debit-memos).
