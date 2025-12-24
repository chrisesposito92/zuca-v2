---
title: "Setup fee (one-time, flat fee)"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/setup-fee-one-time-flat-fee"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:10.690Z"
---

# Setup fee (one-time, flat fee)

This task guides you through creating a one-time, flat fee charge by navigating to the rate plan, adding a new charge, and specifying necessary details such as charge name, description, and pricing model.

In a flat-fee charge model, the amount to charge is a fixed number applied to a one-time or recurring charge.

To create a one-time, flat fee charge, complete the following steps:

1.  Navigate to the rate plan that you want to edit.
2.  Within the rate plan, under One-Time Charges , click Add new .
3.  Specify the following information:

    -   Charge Name : Enter a name for the charge. For example, "Setup Fee".

    -   Description : Enter a description for the charge. This field is optional.

    -   Revenue Recognition Code : This field is displayed if your company has enabled revenue recognition fields. Select a revenue recognition code from the list.

    -   Revenue Recognition Trigger : This field is displayed if your company has enabled revenue recognition fields. Select one of the revenue recognition trigger conditions.

    -   Charge Model : Select Flat Fee Pricing from the list.

    -   List Price : Enter a price for the set-up fee. You can change the list price when you add this charge to a subscription

    -   Trigger Condition : Select a trigger condition from the list. The trigger condition determines when the charge will be applied.


4.  (Conditional): Select an accounting code for the product from the list:

    -   If you are using Zuora Finance, see Assign accounting codes for more information about using accounting codes in Zuora.


5.  (Conditional): Depending on the enabled features for integration with Zuora Revenue, configure the following options in the Revenue Accounts section.

    | Field name | Description | Feature enabled |
    | --- | --- | --- |
    | Contract Asset | Select the default accounting code for the Contract Asset account type from the drop-down list. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Contract Liability | Select the default accounting code for the Contract Liability account type from the drop-down list. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Unbilled Receivables | Select the default accounting code for the Unbilled Receivables account type from the drop-down list. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Adjustment Liability | Select the default accounting code for the Adjustment Liability account type from the drop-down list. This account is for managing SSP allocation-related liability balance. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Recognized Revenue | Select the default accounting code for the Recognized Revenue account type from the drop-down list. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Adjustment Revenue | Select the default accounting code for the Adjustment Revenue account type from the drop-down list. This account is for managing SSP allocation-related revenue recognition. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Exclude Item Booking from Revenue | Select this checkbox to exclude non-revenue-related rate plan charges and order line items from processing in Zuora Revenue. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Exclude Item Billing from Revenue | Select this checkbox to exclude non-revenue-related invoice items, invoice item adjustments, credit memo items, and debit memo items from processing in Zuora Revenue. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Revenue Recognition Timing | Use this option to select the timing for revenue recognition. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy . | Order to Revenue |
    | Revenue Amortization Method | Use this option to select the revenue amortization method. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy . | Order to Revenue |
    | Allocation Eligible | Select this checkbox to include the charge segment for Standalone Selling Price (SSP) allocation. | Zuora Revenue/Advanced Functionalities and Order to Revenue |
    | Right To Bill Flag | Select this checkbox to elect Unbill Receivables accounting for the product. The Unbill Receivables balance amount will be excluded for Contract Asset vs Contract Liability status evaluation in Zuora Revenue. | Zuora Revenue/Advanced Functionalities and Order to Revenue |
    | Product Category | Use this field to specify the product category for reporting and analytics in Zuora Revenue. | Zuora Revenue/Revenue insights and analytics and Order to Revenue |
    | Product Class | Use this field to specify the product class for reporting and analytics in Zuora Revenue. | Zuora Revenue/Revenue insights and analytics and Order to Revenue |
    | Product Family | Use this field to specify the product family for reporting and analytics in Zuora Revenue. | Zuora Revenue/Revenue insights and analytics and Order to Revenue |
    | Product Line | Use this field to specify the product line for reporting and analytics in Zuora Revenue. | Zuora Revenue/Revenue insights and analytics and Order to Revenue |

6.  Click Save to save your changes to the rate plan.
