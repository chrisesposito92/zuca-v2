---
title: "Company initiated cancellations due to subscription fees non-payment"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-cancellation-with-refund-and-write-off/company-initiated-cancellations-due-to-subscription-fees-non-payment"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:10.543Z"
---

# Company initiated cancellations due to subscription fees non-payment

This task topic explains how to handle company-initiated cancellations due to non-payment of subscription fees, including revoking access, writing off invoices, and recording revenue impacts.

Key Question: When a customer does not pay, do you write off the full amount of the invoice? Or do you collect on the portion representing services rendered?

1.  Revoke the customer’s access to the system.
2.  Write off the invoices.
3.  Record the revenue impact of the cancellation.

Depending on your tenant type, perform one of the following tasks:

-   For Orders or Orders Harmonization tenant users, you can use the new cancel & refund feature flow without specifying a refund amount to automate steps 1 and 3 as described in the following options 1 and 2. For more information, see [Cancel subscriptions and refund end customers automatically](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscription-cancelation-and-refunding-the-end-customers-automatically---examples). A negative invoice or credit memo is generated after the cancellation is completed. Then you can apply the negative invoice or credit memo to the original invoice to reduce its balance to 0.

-   For [Subscribe and Amend](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend) users, follow the steps described in the following options 1 and 2.
