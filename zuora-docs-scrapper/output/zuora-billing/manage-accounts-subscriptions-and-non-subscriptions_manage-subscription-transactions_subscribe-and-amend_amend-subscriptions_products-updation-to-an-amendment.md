---
title: "Products updation to an Amendment"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-to-an-amendment"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:37.005Z"
---

# Products updation to an Amendment

This topic explains how to update product fields in a subscription, including descriptions, revenue recognition codes, and billing alignments, while understanding the limitations for existing Subscribe and Amend customers.

Note:

Creating and amending subscriptions in the Zuora Billing UI is:

-   Only relevant for existing Subscribe and Amend customers who have not transitioned to Orders or Orders Harmonization . Any new customers will not see this UI.

-   Restricted if you are an existing Subscribe and Amend customer and have enabled Order Metrics only. See Known Limitations in Orders and Order Metrics .


## Which product fields can I update?

You can update products in a subscription with charges based on most charge models. You cannot edit one-time charges, fixed-amount discounts, or billing timing.

You can edit the following product fields:

-   Description

-   Revenue Recognition Code

-   Revenue Recognition Trigger

-   Conditional Trigger . Selections include:

    -   Upon Contract Effective

    -   Upon Service Activation

    -   Upon Customer Acceptance

    -   Upon Specific Date. When selected, you must enter a date. In view mode, the date is displayed next to the trigger condition.

-   Bill Period Alignment: This field is shown only when certain Billing Period-Billing Day combinations are selected. If editable, selections include:

    -   Align to Charge

    -   Align to Subscription Start

    -   Align to Term Start

-   Price

-   Quantity: Available for edit for Per Unit Pricing and Volume/Tiered Pricing.

-   Discount Percentage: Available for edit only for Discount-Percentage.

-   Apply Discount To: Available for edit only for Discount-Fixed Amount and Discount-Percentage.

-   Custom Field(s): (You can only edit custom fields with update product amendments created in the Zuora application or through the SOAP API. You cannot edit custom fields by creating an update product amendment using Mass Order Entry .)


These amended product updates affect only the subscription. Product Rate Plan Charges are not updated.
