---
title: "Specify the discount scope"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/specify-the-discount-scope"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:19.273Z"
---

# Specify the discount scope

Explains how to specify the scope of a discount charge, detailing the discount level, type of applied charges, and application specifics.

The following table explains the scope of a discount charge in terms of the discount level, type of applied charges, and application details. For step-by-step instructions, see Specify the scope for discount charges to be applied .

|  | Description | Example |  |
| --- | --- | --- | --- |
| Discount level | Rate plan level discount | Apply a discount charge to a specific rate plan. At the rate plan level, the discount charge is bundled with other charges within that rate plan, and the discount is applied to the charges in the rate plan only. | Offer a 100$ discount to all regular charges in the same product rate plan as the discount charge. |
| Subscription level discount | Apply a discount charge to a specific subscription and all charges contained in that subscription for a period of time. | Offer a promotion where the first 5 months are discounted for a 12-month subscription. |  |
| Account level discount | Apply a discount charge to all the regular charges contained in the account (across all subscriptions).Note:Orders or Order Metrics does not support account-level discounts. See Known limitations in Orders and Order Metrics for more information.The Billing - Revenue Integration feature does not support account-level discounts. | Provide a VIP customer with a 15% discount off all purchases. |  |
| Type of applied charges | Select the type of charges that should be discounted at any discount level. | Offer discounts to one-time setup fees only: select the One-Time check box and clear the Recurring and Usage check boxes. |  |
| Application details | Specify specific product rate plans and product rate plan charges that a discount charge is applied to. The application details about discount charges are distinct at different discount levels. Even "All charges in the subscription" is selected, the discount will only be applied to the specific product rate plan charges, rather than all charges in the subscription. | Offer discounts to one specific or multiple regular charges in one product rate plan. |  |
| Allow apply to billing period partially | Enable the Enhanced Discount feature to allow discounting a regular charge for a partial period that is shorter than its billing period. For more information, see Manage Enhanced Discount . | The option is compatible with the following discount configurations:Discount level :Rate plan level discountSubscription level discountType of applied chargesOne-TimeRecurring |  |
