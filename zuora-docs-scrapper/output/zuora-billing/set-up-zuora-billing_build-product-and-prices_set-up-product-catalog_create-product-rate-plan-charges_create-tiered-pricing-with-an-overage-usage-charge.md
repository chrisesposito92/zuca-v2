---
title: "Create tiered pricing with an overage usage charge"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/create-tiered-pricing-with-an-overage-usage-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:22.741Z"
---

# Create tiered pricing with an overage usage charge

Learn how to set up a usage charge with tiered pricing and overage by following these steps.

To set up a usage charge with tiered pricing and overage, complete the following steps:

1.  Navigate to the rate plan that you want to edit.
2.  Within the rate plan, under Usage Charges/UOM , click add new .
3.  Complete the following fields to create a new usage charge with a tiered with overage pricing charge model:

    -   Charge Name : Enter a name for the charge.

    -   Description : Enter a description for the charge. This field is optional.

    -   Revenue Recognition Code : This field is displayed if your company has enabled revenue recognition fields. Select a revenue recognition code from the list.

    -   Revenue Recognition Trigger : This field is displayed if your company has enabled revenue recognition fields. Select a revenue recognition trigger condition.

    -   Charge Model : Select Tiered Pricing from the list. This causes additional fields to appear on the page.

    -   UOM : The unit of measure (UOM) for the usage charge. The units of measure are defined by your company.

    -   Rating Group : Select a rating group from the list. Usage is rated based on the rating group. This field is displayed only when you select the per unit, volume pricing, or tiered pricing charge model in the Charge Model field. See Rating Usages by Groups for more information.

    -   Price Table : Enter the pricing for each tier, as well as the overage price to charge if there is an overage.

    -   Trigger Condition : Select a trigger condition from the list. The trigger condition determines when the charge will be applied.

    -   End Date : Select an end date option from the list. The end date option determines when the charge ends after the charge starts billing.

    -   Billing Period : The frequency with which the charge repeats. Select a billing period from the list. You can configure these options under Define Billing Periods.

    -   Billing Day : Determines when the specific charge is billed. You can configure these options under Define Billing Periods.
        Note: Selecting Default from Customer Account for the billing day is a common practice. For example, if you select the fifth of the month for the billing date, this charge will be billed on the fifth of the month every month for all customers who have purchased this product. This setting overrides the bill cycle day specified for the customer. See Product Catalog Dates: Product Rate Plan Charge Date Attributes for more information about these dates.

    -   Billing Period Alignment : Select a value from the list.

    -   Smoothing Model : Select a smoothing model from the drop-down list to allow your customers to roll over their usage. This is an optional field. See Overage Smoothing Charge Model for more information.


4.  (Optional): Enter an accounting code for the product.
5.  (Optional): Depending on the enabled features for integration with Zuora Revenue, configure the following options in the Revenue Accounting section.

    | Field name | Description | Feature enabled |
    | --- | --- | --- |
    | Exclude Item Booking from Revenue | Select this checkbox to exclude non-revenue-related rate plan charges and order line items from syncing to Zuora Revenue. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Exclude Item Billing from Revenue | Select this checkbox to exclude non-revenue-related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Revenue Recognition Timing | Use this option to select the timing for revenue recognition. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy . | Order to Revenue |
    | Revenue Amortization Method | Use this option to select the revenue amortization method. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy . | Order to Revenue |
    | Allocation Eligible | Select this checkbox to include the charge segment for revenue allocation. | Additional Revenue Fields |
    | Right To Bill Flag | Use this checkbox to specify how to perform the accounting during revenue recognition. | Additional Revenue Fields |
    | Product Category | Use this field to specify the product category for integration with Zuora Revenue. | Additional Revenue Fields |
    | Product Class | Use this field to specify the product class for integration with Zuora Revenue. | Additional Revenue Fields |
    | Product Family | Use this field to specify the product family for integration with Zuora Revenue. | Additional Revenue Fields |
    | Product Line | Use this field to specify the product line for integration with Zuora Revenue. | Additional Revenue Fields |

6.  Click Save to save your changes to the rate plan.
