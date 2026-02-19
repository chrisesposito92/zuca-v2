---
title: "Cancel the subscription on the date of write-off"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-cancellation-with-refund-and-write-off/cancel-the-subscription-on-the-date-of-write-off"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:33.059Z"
---

# Cancel the subscription on the date of write-off

This task topic explains how to cancel a subscription on the date of write-off, a process suitable for companies with varying collection periods, and manage the financial implications using invoice adjustments or settlements.

Use this option when your company has long collections period prior to write-off, such as in most B2B companies. There is a need to differentiate between services delivered, but unpaid and services not delivered. This option is a 2-step process. Use this option when your company has a short collections period prior to write-off, such as in most B2C companies.

In this option, the subscription is canceled using the date of the write-off. This approach is more complex to implement, but provides an option to partially write-off an invoice. Additionally, the subscription terms will reflect the true subscription terms.

For companies with relatively small numbers of large invoices, each invoice is managed individually, and collection times are often long. These companies might not want to write off the entirety of an invoice as the value of delivered, but unpaid services might be significant enough to warrant further collection efforts.

1.  Perform a subscription cancellation that is effective on the day of the write-off.
2.  Revoke the customer’s access to the subscribed product/service immediately. In the next bill run, the Zuora application creates a negative invoice that reflects the undelivered portion of service. This negative invoice is used to offset any undelivered revenue in the initial invoice.
3.  Transfer the negative invoice to the credit balance. This increases the balance of this invoice to $0.
4.  Apply the credit balance to the outstanding invoice. This step can be automated using payment runs.

Once you have completed the above steps, the original invoice will still have an unpaid balance equal to the value of the service already delivered to the customer.

Example: A customer purchases 1-year of service for the period of Jan 1 – Dec 31 for $365,000. By April 16, this invoice is still unpaid and the decision is made to cancel the service for this customer.

-   The effective date of the cancellation must be April 16.

-   The customer's access to the system is revoked immediately.

-   The negative invoice created will be for -$260,000 for the period April 16 – Dec 31.

-   After transferring this amount to credit balance and applying it to the original invoice, the original invoice will have a $105,000 balance remaining to represent the service delivered for the period Jan 1 - April 15.


Writing off the remaining balance on the invoice is the second step in the process. This can be done immediately following step 1 or at some later date once all collection efforts have been exhausted.

You can use either the Invoice Settlement or Invoice Item Adjustment feature to implement the write-off.

Note:

The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the Invoice Settlement feature, see Invoice Settlement Enablement and Checklist Guide for more information. After Invoice Settlement is enabled, the Invoice Item Adjustment feature will be deprecated for your tenant.

Perform one of the following actions to complete the cancellation process:

-   If you have the Invoice Item Adjustment feature enabled, you can create an invoice item adjustment for each line of the invoice to reduce the balance on the invoice to zero. The effective date on the adjustments must be today. For more information, see [Invoice Item Adjustment](https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-item-adjustments/overview-of-invoice-item-adjustments).

-   If you have the Invoice Settlement feature enabled, you can directly write off the invoice.
