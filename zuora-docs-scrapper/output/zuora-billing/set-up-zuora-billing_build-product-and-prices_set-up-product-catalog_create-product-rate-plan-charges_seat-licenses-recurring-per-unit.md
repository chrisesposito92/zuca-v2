---
title: "Seat licenses (recurring, per unit)"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/seat-licenses-recurring-per-unit"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:18.249Z"
---

# Seat licenses (recurring, per unit)

This task guides you through setting up a monthly recurring charge using the per unit pricing charge model, where the total charge is calculated by multiplying the per unit price by the quantity.

Recurring charges can be billed on a monthly, quarterly, semi-annual, or annual basis. This example explains how to set up a monthly recurring charge using the per unit pricing charge model. In this type of charge model, the total amount to charge will equal the per unit price multiplied by the total number of units (quantity).

To set up a recurring per-unit charge, complete the following steps:

1.  Navigate to the rate plan that you want to edit.
2.  Within the rate plan, under Recurring Charges/Period , click Add new .
3.  Enter the following information to create a new recurring, per-unit charge:

    -   Charge Name : Enter a name for the charge. For example, you might call this "Ultimately Screen Capture Monthly."

    -   Description : Enter a description for the charge. This field is optional

    -   Revenue Recognition Code : This field is displayed if your company has enabled revenue recognition fields. Select a revenue recognition code from the list.

    -   Revenue Recognition Trigger : This field is displayed if your company has enabled revenue recognition fields. Select a revenue recognition trigger condition.

    -   Charge Model : Select Flat Fee Pricing from the list.

    -   List Price : Enter the price for the recurring charge. You can change the list price later, if necessary, when you add this charge to a subscription.

    -   List Price Base : Choose Billing Period , Month , and Week .

        -   The Month option sets the list price based on a month charge. For example, if the list price is $100, the invoice for a 12-month period is $1200.

        -   The Billing Period option sets the list price based on the billing period. For example, if the list price is $1200, the invoice for a 12-month period is $1200.

        -   The Week option sets the list price based on a weekly charge. For example, if the list price is $100, the invoice for a 12-week period is $1200.
            Note: The Week option is in Limited Availability . If you wish to access this enhancement, submit a request at [Zuora Global Support](http://support.zuora.com/). We can help you evaluate if early adoption is right for you.

    -   Trigger Condition : Select a trigger condition from the list. The trigger condition determines when the charge will be applied.

    -   End Date : Select an end date option from the list. The end date option determines when the charge ends after the charge starts billing.

    -   Billing Period : The frequency with which the charge repeats. You can configure these options under Define Billing Periods.
        Note: The Subscription Term option allows you to choose the entire subscription term as the billing period. The List Price Base must be set to Month or Week . See Recurring Charges for Different Initial and Renewal Subscriptions for more information.

    -   Billing Day : Determines when the specific charge is billed. You can configure these options under Define Billing Periods.
        Note: Selecting the Default from Customer Account option overrides the bill cycle day specified for the customer. For example, if you select the fifth of the month for the billing date, this charge will be billed every month on the fifth of the month, for all customers who have purchased this product. See Product Catalog Dates: Product Rate Plan Charge Date Attributes for more information about these settings.

    -   Billing Timing : Select In Advance or In Arrears .

    -   Billing Period Alignment : Select a value from the list.


4.  (Optional): Select an accounting code for the product from the list.
5.  (Optional): Depending on the enabled features for integration with Zuora Revenue, configure the following options in the Revenue Accounting section.

    | Field name | Description | Feature enabled |
    | --- | --- | --- |
    | Reflect Discount in Apply To Charge Net Amount | Select this checkbox to calculate the charge net amount after the percentage discount and make the charge net amount reflected downstream, such as subscriptions, invoices, delivery adjustments, and credit memos.Note:If you apply percentage discounts to delivery pricing charges, you must select the following checkboxes:Reflect Discount in Apply To Charge Net AmountExclude Item Booking from RevenueExclude Item Billing from Revenue | Order to Revenue |
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
