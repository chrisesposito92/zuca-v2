---
title: "Update the trigger dates for subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/update-the-trigger-dates-for-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:01.958Z"
---

# Update the trigger dates for subscriptions

This article explains how to update trigger dates for subscription charges based on specific conditions and actions.

You can update the trigger dates of the charges belonging to a subscription by changing the trigger dates of this subscription if the trigger condition of the charges is set to `Upon Contract Effective` , `Service Activation` , or `Customer Acceptance` . This operation only functions for the charges that are added through the Create Subscription action. But, this operation does not impact the charges that are added through Add Product action. In the latter case, you need to specify the trigger condition to `Upon Specific Date` , and then specify a billing trigger date.

Note:

Note the following:

-   You cannot perform this operation if a subscription has already been on version 2 or above.

-   If a charge in the subscription has already been billed, the trigger date upon which the charge is triggered cannot be updated.

-   You cannot update the trigger dates through the Update Terms and Conditions action.
