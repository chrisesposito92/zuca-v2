---
title: "Create a product rate plan discount"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/create-a-product-rate-plan-discount"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:10.339Z"
---

# Create a product rate plan discount

Create and configure discounts to offer price reductions on charges, including one-time, recurring, or usage-based charges, with control over their application and display on invoices.

Discounts allow you to offer price reductions on charges based on fixed amounts or percentages. You can apply discounts to one-time, recurring, or usage-based charges and control how and when these discounts are triggered, calculated, and displayed on invoices.

To configure discounts:

1.  Click Discounts from the screen.
2.  Enter the following information:

    | Field | Description |
    | --- | --- |
    | Display on Invoice as | Label that appears on the customer's invoice, for example, Early Signup Discount. |
    | Description | Internal description for this discount. Not visible to the customer. |
    | Rates |  |
    | Charge Model | Choose between:Percentage: Reduces the charge by a percentage (e.g., 10%)Fixed Amount: Deducts a fixed amount (e.g., $20) |
    | Percentage | Required if the charge model is percentage-based. Example: 15% |
    | Stacked | If selected, this discount will be stacked on top of other applicable discounts, rather than overriding them. |
    | Discount Level | Determines whether the discount applies to all the charges in the subscription, account, or rate plan. |
    | Allow apply to billing period partially | Applies a partial discount if the charge does not span a full billing period. |
    | Reflect Discount in Apply-To Charge Net Amount | Applies the discount to the net amount of the charge after other adjustments. |
    | One-time / Recurring / Usage | Select the type of charge the discount applies to. You can select only one. |
    | Billing Configuration |  |
    | Trigger Condition | Defines when the discount becomes active, for example, Contract effective date. |
    | End Date | Sets when the discount should stop applying. |
    | Billing Periods | Number of billing periods the discount should apply for, such as, 3 billing periods. |
    | Billing Day | Day of the month when the discount is billed. |
    | Billing Period Alignment | Aligns the discount with the billing period of the associated charge. |
    | Billing Timing | Choose whether the discount is billed In Advance or In Arrears. |

3.  Select or enter values for any custom fields configured by your organization. These fields help capture additional metadata, such as Region, Promotion Type, and Approval ID, that may be required for reporting, integrations, or internal tracking.
4.  Click Save.
