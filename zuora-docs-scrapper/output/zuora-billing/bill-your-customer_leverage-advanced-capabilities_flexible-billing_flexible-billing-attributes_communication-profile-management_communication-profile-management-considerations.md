---
title: "Communication profile management considerations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/communication-profile-management/communication-profile-management-considerations"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:30.392Z"
---

# Communication profile management considerations

Considerations for managing communication profiles, including limitations on assignment and deletion across various levels such as billing accounts, subscriptions, and invoices.

-   You cannot use Data Loader to import standalone invoices or orders with a communication profile on the invoice, subscription, or order line item level.

-   In CPQ, you can only assign a communication profile at the billing account level, not at the subscription or order line item level.

-   You cannot access communication profiles at the invoice level within the HTML template.

-   Limitations in managing communication profiles:

    -   You can delete a communication profile only if it is used by accounts. When deleted, the associated accounts will be reassigned to the default communication profile.

    -   You cannot delete a communication profile if it is used by any subscriptions, order line items, invoices, or memos. Instead, you can deactivate it.
