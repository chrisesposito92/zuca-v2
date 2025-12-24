---
title: "Communication profile management at the standalone invoice-level"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/communication-profile-management/communication-profile-management-at-the-standalone-invoice-level"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:25.363Z"
---

# Communication profile management at the standalone invoice-level

Manage communication profiles at the standalone invoice level, allowing for customized messaging and consistent attribute inheritance.

When creating a standalone invoice, you can assign and manage a specific communication profile directly at the invoice level. This allows you to customize the messaging on a per-invoice basis.

When creating standalone invoices, the system follows the billing rule setting as explained in Copy billing attributes from accounts to standalone invoices when no attributes are specified on standalone invoices . This ensures that the account-level attributes are copied into the standalone invoice as specified by the billing configuration and creating consistency in how attributes are inherited.

Note:

You cannot delete a communication profile if any standalone invoice is referring to it. However, you can deactivate the communication profile.
