---
title: "Apply a fixed-amount discount charge to multiple regular charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/discounts-processing-in-mrr-metrics/apply-a-fixed-amount-discount-charge-to-multiple-regular-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:17.850Z"
---

# Apply a fixed-amount discount charge to multiple regular charges

This task outlines the process for applying a fixed-amount discount charge to multiple regular charges, detailing the sequence and conditions for prioritizing charges in the MRR calculation.

In the MRR calculation, if a fixed-amount discount charge can be applied to more than one regular charge, the sequence below is applied to decide which charge to apply first.

1.  Order by charge types: Recurring regular charges get the discount first; One-time regular charges get the discount next; Usage regular charges are not supported in the MRR calculation.
2.  If the regular charges have the same charge type, order them by the charge number from the lowest to the highest.
3.  If a regular charge has more than one charge segments to apply the discounts, order them by start dates: The discount is applied to the earliest charge segment first, then the second earliest, and so on.

See the examples below:

-   Apply an account level fixed-amount discount charge to multiple subscriptions
-   Apply a subscription level fixed-amount discount charge to multiple regular charges

-   MRR calculation aligns its calculation period with the calendar month rather than the Billing Period as in Invoicing. Also, the Billing Cycle Day of a subscription is not taken into account when calculating MRR.
-   MRR is applicable to recurring charges only, and TCV is applicable to both one-time and recurring charges. If a subscription includes any usage charge, the metrics calculation will ignore the usage charge and calculate metrics only for the one-time and recurring charges.
-   The purpose of MRR is revenue prediction and contract value measuring. Therefore, to enable MRR calculation, when applying fixed-amount discounts to regular charges, the discount must be distributed evenly and applied as a recurring charge. The Invoicing allocates fixed-amount discounts differently because of a different business intention, which is to collect a payment, so it takes an eager allocation model. See the following example: Suppose you are going to apply a $500 quarterly discount charge to a monthly recurring regular charge. During a Bill Run, $300 will be applied to the first month, $200 to the second month and $0 to the third month. In the MRR calculation, the discount is applied as a monthly recurring discount charge of $166.667/month.

    Figure 1. ![Difference in Applying Discounts](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8d84f3bd-2ed6-4cd5-982b-a8eec67dba33?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhkODRmM2JkLTJlZDYtNGNkNS05ODJiLWE4ZWVjNjdkYmEzMyIsImV4cCI6MTc2NjYzOTcxNSwianRpIjoiMmNiYjViYzVmYjVjNDgwNmIzN2U1MGFlNjg0YmEwMmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.do9DyVM8GG8678psCGpa4MCDaJ0TF-RWw0H07GTECA0)


The following sections describe the calculation of Gross MRR, Discount MRR, and Net MRR in both the charge and subscription levels.
