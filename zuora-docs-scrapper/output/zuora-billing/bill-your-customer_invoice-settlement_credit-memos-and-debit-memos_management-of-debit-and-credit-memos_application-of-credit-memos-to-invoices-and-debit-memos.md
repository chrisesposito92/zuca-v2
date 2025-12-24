---
title: "Application of credit memos to invoices and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/application-of-credit-memos-to-invoices-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:54.742Z"
---

# Application of credit memos to invoices and debit memos

After you have posted a credit memo, you can fully or partially apply the credit memo to one or more invoices and debit memos.

You can apply credit memos to invoices or debit memos only if you have the user permission.

## Overview

Through the billing settings configuration, you can configure a default application rule to determine how the system allocates credit memos applications to invoices and debit memos. Zuora uses the specified application rule to automatically allocate the credit at the item level if you have not specified item-level application amounts explicitly.

When a credit memo is applied, the total number of invoices and debit memos that the credit memo will apply to must be less than or equal to 1,000.

If the Proration application rule is used, when applying credit memos, each credit memo item will be split into parts and these parts will be applied to the debit memo items in proportion. To prevent reaching the system limit for handling application items, ensure that the following quantity must be less than or equal to 15,000:

(number of invoice items + number of debit memo items) \* number of credit memo items

Otherwise, the First In First Out rule will be used instead of the Proration rule.

For information on the steps to apply credit memos to invoices and debit memos, refer to [Procedure](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/application-of-credit-memos-to-invoices-and-debit-memos/apply-credit-memos-and-debit-memos-through-zuora-ui).

To apply a credit memo through the Zuora REST API, see [PUT Apply Credit Memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ApplyCreditMemo/).
