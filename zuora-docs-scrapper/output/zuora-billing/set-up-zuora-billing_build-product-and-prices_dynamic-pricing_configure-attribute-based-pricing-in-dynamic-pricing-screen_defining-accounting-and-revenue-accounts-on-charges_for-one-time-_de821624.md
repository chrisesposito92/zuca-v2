---
title: "For one-time and flat-fee"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen/defining-accounting-and-revenue-accounts-on-charges/for-one-time-and-flat-fee"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:57.725Z"
---

# For one-time and flat-fee

Learn how to assign accounting codes for one-time or flat-fee products to track and recognize revenue effectively, including configuration options for Zuora Revenue integration.

For one-time or flat-fee products, you can assign accounting codes that help track and recognize revenue appropriately.

-   (Conditional): Select an accounting code for the product from the list

-   If you have Zuora Revenue enabled, you can also configure the Zuora Revenue accounting codes in the RevPro Accounts panel.

-   If you are using Zuora Finance, see Assign accounting codes for more information about using accounting codes in Zuora.

-   Depending on the enabled features for integration with Zuora Revenue, configure the following options in the Revenue Accounts section.

    | Field name | Description | Feature enabled |
    | --- | --- | --- |
    | Contract Asset | Select the default accounting code for the Contract Asset account type from the drop-down list. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Contract Liability | Select the default accounting code for the Contract Liability account type from the drop-down list. |  |
    | Unbilled Receivables | Select the default accounting code for the Unbilled Receivables account type from the drop-down list. |  |
    | Adjustment Liability | Select the default accounting code for the Adjustment Liability account type from the drop-down list. This account is for managing SSP allocation-related liability balance. |  |
    | Recognized Revenue | Select the default accounting code for the Recognized Revenue account type from the drop-down list. |  |
    | Adjustment Revenue | Select the default accounting code for the Adjustment Revenue account type from the drop-down list. This account is for managing SSP allocation-related revenue recognition. |  |
    | Exclude Item Booking from Revenue | Select this checkbox to exclude non-revenue-related rate plan charges and order line items from processing in Zuora Revenue. |  |
    | Exclude Item Billing from Revenue | Select this checkbox to exclude non-revenue-related invoice items, invoice item adjustments, credit memo items, and debit memo items from processing in Zuora Revenue. |  |
    | Revenue Recognition Timing | Use this option to select the timing for revenue recognition. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy. | Order to Revenue |
    | Revenue Amortization Method | Use this option to select the revenue amortization method. The available options depend on the revenue recognition policy configuration. For more information, see Configure revenue recognition policy. |  |
    | Allocation Eligible | Select this checkbox to include the charge segment for Standalone Selling Price (SSP) allocation. | Zuora Revenue/Revenue insights and analytics and Order to Revenue |
    | Right To Bill Flag | Select this checkbox to elect Unbill Receivables accounting for the product. The Unbill Receivables balance amount will be excluded for Contract Asset vs Contract Liability status evaluation in Zuora Revenue. |  |
    | Product Category | Use this field to specify the product category for reporting and analytics in Zuora Revenue. |  |
    | Product Class | Use this field to specify the product class for reporting and analytics in Zuora Revenue. |  |
    | Product Family | Use this field to specify the product family for reporting and analytics in Zuora Revenue. |  |
    | Product Line | Use this field to specify the product line for reporting and analytics in Zuora Revenue. |  |
