---
title: "Specify the scope for discount charges to be applied"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-discount-charges/specify-the-scope-for-discount-charges-to-be-applied"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:51.231Z"
---

# Specify the scope for discount charges to be applied

Learn how to specify the scope for applying discount charges by selecting the appropriate level and types of charges.

To specify the scope for a discount charge to be applied, complete the following steps when creating the discount charge:

1.  From the Apply Discount To list, select one of the following levels at which you want to apply the discount. By default, The All charges in the rate plan option is selected.

    -   All charges in the rate plan

    -   All charges in the subscription

    -   All charges in the account


2.  Select the types of charges that you want to apply the discount to. For example, if you want to apply the discount charge only to the one-time charges, select the One-Time checkbox, and clear the Recurring and Usage checkboxes. By default, the three checkboxes are all selected.

    -   If you select All charges in the rate plan , in the Include the following product charges area, select specific regular charges from the current product rate plan. By default, no charges are selected in the area, which indicates that the discount charge applies to all charges in the product rate plan. After you select specific charges, the discount will be applied to only those charges rather than all charges in the rate plan.

        -   Optional. Select Allow apply to billing period partially to enable the Enhanced Discount feature, allowing discounting a regular charge for a partial period that is shorter than its billing period. If selected, you can only select One-Time or Recurring checkbox. For more information, see Manage Enhanced Discount .

    -   If you select All charges in the subscription , specify application details in the Include the following product charges area. You can select regular charges from any product and product rate plan. By default, no charges are selected in the area, which indicates that the discount charge applies to all charges in the subscription. After you select specific charges, the discount will be applied only to those charges rather than all charges in the subscription.

        1.  Optional. Select Allow apply to billing period partially to enable the Enhanced Discount feature, allowing discounting a regular charge for a partial period that is shorter than its billing period. If selected, you can only select One-Time or Recurring checkbox. For more information, see Manage Enhanced Discount .

        2.  From the Product list, select a product that includes the specific charges to which you want to apply the discount charge.

        3.  From the Rate Plan list, select a product rate plan that includes the specific charges.

        4.  Select specific charges to which you want to apply the discount charge.

        5.  Click Add . The rate plan of the selected charge is displayed above the Include the following product charges area.

    -   If you select All charges in the account , no more action is required.
