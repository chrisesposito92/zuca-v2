---
title: "Company initiated cancellations due to subscription fees non-payment"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/cancel-subscriptions-with-refund-and-write-off/company-initiated-cancellations-due-to-subscription-fees-non-payment"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:19.076Z"
---

# Company initiated cancellations due to subscription fees non-payment

This topic explains how to handle company-initiated cancellations due to non-payment of subscription fees, including revoking access, writing off invoices, and recording revenue impacts.

Key Question: When a customer does not pay, do you write off the full amount of the invoice? Or do you collect on the portion representing services rendered?

Company-initiated cancelations are typically triggered by non-payment of subscription fees. Once you have deemed an invoice to be uncollectible, perform the following steps to cancel the subscription:

1.  Revoke the customer’s access to the system.
2.  Write off the invoices.
3.  Record the revenue impact of the cancellation.

Depending on your tenant type, perform one of the following tasks:

-   For Orders or Orders Harmonization tenant users, you can use the new cancel & refund feature flow without specifying a refund amount to automate steps 1 and 3 as described in the following options 1 and 2. For more information, see Cancel subscriptions and refund end customers automatically . A negative invoice or credit memo is generated after the cancellation is completed. Then you can apply the negative invoice or credit memo to the original invoice to reduce its balance to 0.

-   For Subscribe and Amend users, follow the steps described in the following options 1 and 2.
