---
title: "Create a prepayment subscription - Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-subscription/create-a-prepayment-subscription---zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:28.155Z"
---

# Create a prepayment subscription - Zuora UI

Create a prepayment subscription in Zuora to manage API usage with a monthly plan, including prepayment and drawdown charges.

You can create a prepayment subscription using the Zuora user interface.

1.  Follow the steps as described in Create a subscription.
2.  Select the desired product for this order.

    ![Create prepayment subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/39352a6c-8be4-4c84-bdd4-d8be0e22194b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM5MzUyYTZjLThiZTQtNGM4NC1iZGQ0LWQ4YmUwZTIyMTk0YiIsImV4cCI6MTc2NjY1MTM2NiwianRpIjoiYTU3MzQ5ZjFlZWJkNDUxNjkxZTkyYzZjZjVmZmVkNDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lp3BwT85sz1nfIwsfV_VZVaUpb4RT_3qcXe2PvOnlpE)

3.  Update the charges for this product if needed.

    -   For prepayment charge, you can update Price , Prepaid Quantity and Validity Period.

    -   For drawdown charge, you can update Price and Drawdown Rate.


4.  If you want to apply a 20% discount to the prepayment charge, you can create a percentage discount charge in the same rate plan, and apply this discount to the subscription.
5.  In the Charge Amount section, specify the following fields:

    -   Charge Model: Discount-Percentage

    -   Discount Percentage: 20%

    -   Apply Discount To : All charges in the rate plan

    -   Allow apply to billing period partially : You must not select this checkbox.

    -   Reflect Discount in Apply To Charge Net Amount : Select this checkbox.

    -   Recurring : Select this checkbox.

    -   Include the following product charges : You must specifically select the charges to which you want to apply the discount; otherwise, it will not take effect.


6.  In the Finance section, specify the following fields:

    -   Use discount specific accounting codes, rule and segment to manage revenue : You must not select this checkbox.

    -   In the Finance > Revenue Accounting section, select both the Exclude Item Booking from Revenue and Exclude Item Billing from Revenue checkboxes.
