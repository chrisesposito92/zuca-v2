---
title: "Fixed Amount Discount Management"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/configure-interface-settings/fixed-amount-discount-management"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:35.908Z"
---

# Fixed Amount Discount Management

Configure settings for managing fixed amount discounts, including revenue accounting and transaction generation options.

In this interface setting section, you can configure the following setting:

| Setting | Setting Option | Is this option the default value? | Generation behavior and logic |
| --- | --- | --- | --- |
| Fixed Amount Discount Revenue Accounting | Generate 0 amount in booking transaction (recommended) | No | A zero value is always generated in the booking transaction for any fixed amount discount.The Duration and Accounting Codes settings that you configure in the Discount Management interface settings do not take effect. Instead, the fixed amount discount charge’s charge date and accounting codes are always used.FixedAmount Discount Revenue Accounting The system permanently sets the Restrict SO Value Update field of a booking transaction to true when the Fixed Amount Discount Revenue Accounting setting is set to Generate 0 amount in booking transaction . |
| Generate actual value in booking transaction (will cause variances with billing) | No | The actual fixed amount discount value is generated in the booking transaction for a fixed amount discount. The expectation is that this enhancement does not support the scenario of a fixed amount discount applying on a usage charge.Note: Once thebilling scheduleis enabled, you cannot choose this option. |  |
| Generate in billing transaction | Default value | Booking transactions are not generated for fixed amount discount charges.Billing transactions are generated for fixed amount discount charges as standalone transactions. |  |
| Generate actual amount as standalone booking line | No | The actual fixed amount discount value is generated in the booking transaction for a fixed amount discount. The fixed amount discount is treated as a normal flat fee recurring charge with a negative CCV amount.Note: Once thebilling scheduleis enabled, you cannot choose this option. |  |
