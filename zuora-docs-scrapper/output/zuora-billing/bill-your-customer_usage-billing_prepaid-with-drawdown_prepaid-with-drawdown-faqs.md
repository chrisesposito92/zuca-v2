---
title: "Prepaid with Drawdown FAQs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepaid-with-drawdown-faqs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:00.055Z"
---

# Prepaid with Drawdown FAQs

Answers to frequently asked questions about the Prepaid with Drawdown feature, including support for customer hierarchy, subscription management, billing options, and currency-based drawdown adjustments.

-   Does Prepaid with Drawdown support customer hierarchy?

    Yes, the customer account hierarchy is supported, and usage rollup.

-   Does Prepaid with Drawdown support the ability to suspend subscriptions, resume subscriptions, or transfer subscription owners?

    No. Suspend a subscription, Resume a subscription, and Change the owner of a subscription order actions are not yet supported.

-   Do I have to bill the validity period before removing the product, canceling the subscription of the product, or shrinking the term of the subscription?

    Yes. The billing periods within the validity period must all be billed first. After the order action, a credit item will be generated in the next bill run to refund the subscriber based on the Credit Option you choose for the prepayment charge.

-   I cannot find the newly added billing day options, that is, term start and term end day in a rate plan charge. How can I use the options?

    Navigate to Billing settings > Define Billing Periods > Customize Billing Day , and select Term Start Day and Term End Day check boxes. After the preceding configuration is complete, you can find and select the Term Start Day and Term End Day options from the Billing Day list in the Timing and Frequency of Charge section when you are on the detail page of a rate plan charge.

-   Why are prepayment charges not prorated?

    Because the prepayment charge is a purchase of the entitlement, which is based on quantity, that is, the number of prepaid units, not on time. Regardless of the proration billing rules for recurring charges, prepayment charges cannot be prorated.

-   Which Billing Cycle Day option is recommended for me to use prepayment charges?

    You are recommended to use Term Start Day and Term End Day as the billing cycle day. If you use Default from Customer Account as the billing cycle day, the billing period may not match the validity period because the validity period will always start from a subscription's term start day.

    Likewise, you are not recommended to use Charge Trigger Day as the billing cycle day. It is crucial to avoid situations where two validity periods are associated with the same billing period. This is because a single invoice item will be generated for a single charge segment per billing period, and this item may not be detailed enough to show the invoice amount due for each of the validity periods. Your customers might get confused when this happens.

    For instance, if a prepayment charge starts on October 1st with a monthly billing period and a monthly validity period, and the billing cycle day is set to Charge Trigger Day: October 1st. Then you shrink the subscription term to end on October 15th and then renew the subscription for two months.

    The validity periods and billing periods for the prepayment charge will be as in the following diagram: ![Two validity periods are associated with one billing period](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69b8e4ee-8792-46dc-ade5-4b3027ea9428?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5YjhlNGVlLTg3OTItNDZkYy1hZGU1LTRiMzAyN2VhOTQyOCIsImV4cCI6MTc2NjY1MTMzOCwianRpIjoiYWZiZDdhODkzZmZjNDhjNzljM2NhYmNjYTQ5NzZiYjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TwyPdcGNIdPao1_bAHaFfVqlnd9d-AfiLqXd1k2PvwA)

    Because the billing cycle day is set to the Charge Trigger Date, charge segment 2’s Billing Cycle Day remains the 1st day of a month. In charge segment 2 of the renewed subscription, both validity period 2 and validity period 3 are associated with billing period 3. In this case, Bill Run will report an error to prevent an invoice item from being generated for billing period 3.

    Because the potential item has to show the combined amount for both partial validity period 2 and partial validity period 3, customers can not tell the amount due for each validity period respectively from the invoice item. Therefore, the best practice is to use Term Start Day and Term End Day as the billing cycle day.

-   Can I use Order Harmonization for Prepaid with Drawdown?

    Yes. With Orders Harmonization, you can leverage Orders after migration. If Orders Harmonization is enabled, navigate to Billing setting > Define Default Subscription and Order Settings , and select Yes from the Auto-Renew by order? list by clicking Edit in the upper right of the Default Subscription Settings section for Prepaid with Drawdown subscriptions.

    If both Orders Harmonization and Zuora CPQ are enabled, navigate to Billing settings > Define Default Subscription and Order Settings, and select Yes from the Enable Order for CPQ? list by clicking Edit in the upper right of the Default Subscription Settings section for Prepaid with Drawdown subscriptions.

-   How does the currency-based Prepaid with Drawdown feature align the accumulated drawdown amount with the total billing amount when rounding causes inconsistency?

    The usage charge is rated by aggregating the relevant usage records at the end of a billing period and then applying the charge model to convert the uploaded units into monies owed (the total billing amount).

    However, the currency-based drawdown requires converting the uploaded units into money (the drawdown amount) whenever a usage record is uploaded. When the various drawdown amounts during a billing period are accumulated, if rounding is involved in either the converting or accumulating, there could be inconsistencies between the total drawdown amount and the total billing amount.

    The currency-based Prepaid with Drawdown feature automatically adjusts the drawdown amount for the last usage recording during a billing period to ensure that the total drawdown amount equals the total billing amount. The following example shows how this works.

    In this example, suppose no decimal place is supported and the rounding rule is round down. Suppose you have a drawdown charge to bill and there are two usage records, for this charge and the unit price is JP¥0.3 per unit, as shown in the following table:

    | Usage record | Quantity | Unit price | Amount (before rounding) | Rating amount (rounded for draw down) | Cumulative drawdown | Billing period total quantity | Billing period total amount (before rounding) | Billing period total amount (rounded) |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | U1 | 54825 | 0.3 | 16447.5 | 16447 | 16447 | 54825 | 16447.5 | 16447 |
    | U2 | 27686 | 0.3 | 8305.8 | 8305 | Original: 24752, Adjusted: 24753 | 82511 | 24753.3 | 24753 |

    For the first usage record U1, the quantity is 54825 and the drawdown amount before rounding is 16447.5. After rounding, the drawdown amount for U1 is JP¥ 16447. For the second usage record, U2, the quantity is 27686, and the drawdown amount before rounding is 8305.8. After rounding, the drawdown amount for U2 is JP¥ 8305. The cumulative drawdown amount is 16447+8305 = JP¥ 24752.

    However, when calculating the total billing amount for the billing period, the total quantity is aggregated first as 54825 + 27686 = 82511. The total billing amount before rounding is 82511 \* 0.3 = 24753.3. After rounding, the total billing amount is JP¥ 24753.

    As you can see, the cumulative drawdown amount and the total billing amount are inconsistent. To resolve this consistency, the system will automatically adjust the last cumulative drawdown amount to 24753 to align the total drawdown amount with the total billing amount. Therefore, you can see the adjusted cumulative drawdown amount is 24753.
