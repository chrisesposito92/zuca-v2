---
title: "Subscriptions cancelation with different refunds - Examples"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation-and-refund-end-customers-automatically/subscriptions-cancelation-with-different-refunds---examples"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:08.314Z"
---

# Subscriptions cancelation with different refunds - Examples

This document provides examples and guidelines for canceling subscriptions with refunds, including prerequisites and limitations.

For examples of canceling a subscription with different refunds based on the same calculated credit memo, see Examples of canceling a subscription and refunding the end customers automatically .

## Notes and limitations

Note the following behaviors and limitations when you cancel a subscription with a refund:

-   Credit Memo, Payment, and Refund custom fields are not supported. If you have any required Credit Memo, Payment, and Refund custom fields, please do not follow the process described in this article; use the existing cancel subscription , payment , and refund process separately.

-   Through the Zuora UI, you can only cancel a subscription with a refund from the reinvented subscription details page of an active subscription.

-   The API request will not return errors if the refunds or invoice write-offs fail. But details of each transaction will be returned in the response body.

-   In scenarios where multiple payments need to be refunded, Zuora will refund the payments one by one instead of refunding the same amount to payment evenly. The order of refund is determined by the invoice date and invoice balance. Zuora will refund the payment in the latest invoice first. If the invoice dates are the same, Zuora will refund the payment in the invoice with a higher balance first.

-   Only electronic payments can be refunded automatically. External payments are not supported for now.

-   When refunding a subscription that is not invoiced separately, if you do not enable the Invoice Item Settlement feature, you will encounter the following error during the cancel and refund process: "Cancellation/Refund failed because of the following reason: Invoice is linked to multiple subscriptions. Cancellation was not processed."


## Prerequisites

Before canceling a subscription with a refund, ensure that the following requirements are met:

-   The Orders feature must have been enabled.

-   The Invoice Settlement feature must have been enabled to access write-off settings.

-   For UI users:

    -   Enable Order UI is checked in Billing Settings > Default Subscription and Order Setting .

    -   The reinvented subscription details page is enabled. See View details of subscriptions through the reinvented UI .

-   Invoices and payments must be issued first. For example, the bill run and payment have been created.
