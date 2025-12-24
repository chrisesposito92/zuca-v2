---
title: "Communication profile management at the order line item-level"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/communication-profile-management/communication-profile-management-at-the-order-line-item-level"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:22.611Z"
---

# Communication profile management at the order line item-level

Manage communication profiles at the order line item level to ensure precision and consistency, with inheritance from account settings and update capabilities based on item state.

You can manage communication profiles with enhanced precision at the individual line-item with an order based on each line item’s distinct requirements.

If you have not explicitly assigned a communication profile to an OLI, it inherits the communication profile from the account. This ensures that all OLIs contain relevant communication settings and maintain consistency with existing conventions for billing attributes.

You can update the communication profile for a sales OLI when its state (that is, the itemState field) is Executing, Booked, or SentToBilling. You can’t update when its state is 'Complete' or 'Canceled'.

Invoices and credit memos generated based on OLIs inherit the OLI-level communication profile. This is to ensure that these documents align with the OLI’s communication preferences rather than the higher-level default settings.

Note: You cannot delete a communication profile if any OLI is referring to it. However, you can deactivate the communication profile.
