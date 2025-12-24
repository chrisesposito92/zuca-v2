---
title: "Communication profile management"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/communication-profile-management"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:17.555Z"
---

# Communication profile management

Manage communication profiles at various levels for enhanced flexibility in billing and notifications.

You can now configure a specified communication profile at the subscription, order line item, and stand-alone invoice levels, providing more flexibility.

The system allows for the addition of communication profiles at a more granular level. Billing documents generated from subscriptions or Order Line Items (OLI) inherit their communication profile from the subscription or order line item itself. The notification system also supports communication profiles for specific levels within the same account. If a subscription uses a different communication profile, invoices, or credit memos generated from it are grouped accordingly.

Let's consider this scenario: You have an account, and you use the default profile for your customers. In the notification event configuration page, you have multiple communication profiles set up. You have created another profile named 'Enterprise template'. When you create a new subscription, in the billing and payment section, the default communication profile is used from the account. You can choose the newly created 'Enterprise template' and proceed with defining a recurring charge (For example, monthly). In the Order Line Item page, you can specify billing attributes including the specific communication profile. When you open the same subscription and navigate to the billing payment section, you can see the communication profile is set to 'Enterprise template' instead of the default one.
