---
title: "Edit credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/edit-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:17.561Z"
---

# Edit credit and debit memos

Edit a credit or debit memo after creation from the Zuora UI and REST API

You can edit a credit or debit memo after creation from the Zuora UI and REST API. You can edit credit or debit memos only if you have the Billing user permission. See [Billing Roles](/zuora-platform/system-management/administrator-settings/user-roles/billing-roles) for more information.

## Overview

Currently, Zuora supports updating tax-exclusive memo items, but does not support updating tax-inclusive memo items

If the amount of a memo item is updated, the tax will be recalculated in the following conditions:

-   The memo is created from a product rate plan charge and you use Avalara to calculate the tax.

-   The memo is created from an invoice and you use Avalara or Zuora Tax to calculate the tax.


To know how to edit credit and debit memos through the Zuora UI and API, refer to these topics:

-   [Edit credit memos and debit memos through the Zuora UI](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/edit-credit-and-debit-memos/edit-credit-memos-and-debit-memos-through-the-zuora-ui)

-   [Edit credit and debit memos through the API](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/edit-credit-and-debit-memos/edit-credit-and-debit-memos-through-the-api)
