---
title: "Communication profile management at the subscription-level"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/communication-profile-management/communication-profile-management-at-the-subscription-level"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:20.268Z"
---

# Communication profile management at the subscription-level

Manage communication profiles at the subscription level for flexibility and precision, ensuring consistent billing and customer-facing documents.

You can assign and manage the communication profile at the subscription-level for increased flexibility and precision based on each subscription’s requirements. You can reset or clear the communication profile for ongoing subscription management tasks including renewals, terms and conditions (T&C), profile updates, and ownership transfers to reflect the subscription changes dynamically.

Billing documents (Invoices and Credit Memos) generated from a subscription inherit the subscription-level communication profile. This is to ensure consistency across billing and customer-facing documents tied to that subscription.

When creating subscription-level invoices, the system follows the billing rule setting as explained in Copy billing attributes from accounts to billing documents when no attributes are specified on subscriptions . This ensures that the account-level attributes are copied into the subscription-level invoice as specified by the billing configuration and creating consistency in how attributes are inherited.

If a credit memo or debit memo is created from an invoice that has a communication profile, it automatically inherits that communication profile from the invoice.

Note:

You cannot delete a communication profile if any subscription is referring to it; you can only deactivate such a communication profile.
