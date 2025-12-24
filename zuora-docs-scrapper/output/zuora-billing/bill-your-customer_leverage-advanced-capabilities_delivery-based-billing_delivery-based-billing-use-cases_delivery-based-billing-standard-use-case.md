---
title: "Delivery-based Billing standard use case"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/delivery-based-billing-standard-use-case"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:09.704Z"
---

# Delivery-based Billing standard use case

Learn how to apply a percentage discount and delivery adjustment to a delivery pricing charge, including steps to create a product catalog, rate plan, and generate invoices.

You can apply a percentage discount and delivery adjustment to a delivery pricing charge. To apply the percentage discount to a delivery pricing charge, you must select the Reflect Discount in Apply To Charge Net Amount checkbox in a charge to reflect the net amount of the delivery pricing charge. The net amount of a delivery pricing charge equals the list price of the delivery pricing charge minus the discount amount.

The following diagram shows an example of calculating the net amount for each billing period.

![Delivery-based billing discount use case](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a0fa9093-9ada-47ed-915e-d17be68b43f8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwZmE5MDkzLTlhZGEtNDdlZC05MTVlLWQxN2JlNjhiNDNmOCIsImV4cCI6MTc2NjY1MTk0NywianRpIjoiZGQwY2Y5ZjFjODY2NGFiZWE1YzVjNWYzYWQ2MzI2YjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pMTgzhw-GrrObZ6DQDILzd-VojRiiFpSHLQsALqXDeA)

To apply a percentage discount to a delivery pricing charge and reflect the net amount of the delivery pricing charge, perform the following steps:

1.  Create a product catalog and rate plan .
2.  Create a delivery pricing charge in the rate plan with the following information:

    -   List price: $5

    -   Delivery Schedule:: every Sunday

    -   Billing Period: Specific Weeks are 4

    -   Billing Day: Specific Day of Week is Sunday


3.  Create a percentage discount charge in the same rate plan, and apply this discount to the preceding delivery pricing charge:

    -   In the Charge Amount section, specify the following fields:

        -   Charge Model: Discount-Percentage

        -   Discount Percentage: 50%

        -   Apply Discount To: All charges in the rate plan

        -   Recurring

        -   Include the following product charges: the preceding delivery pricing charge

        -   Reflect Discount in Apply To Charge Net Amount: Check this checkbox.

    -   In the Finance > Revenue Accounting section, select the following checkboxes:

        -   Exclude Item Booking from Revenue

        -   Exclude Item Billing from Revenue


4.  Create an order to subscribe to the rate plan .

    -   Term Setting: Termed

    -   Subscription Start Date: 07/31/2023

    -   Subscription End Date: 10/30/2023

    -   Current Term: 3 months


5.  Create bill run to generate an invoice for the subscription.
6.  (Optional) Create a delivery adjustment for the subscription. The delivery adjustment is created for handling end-customer complaints.

    -   Start Date: 08/06/2023.

    -   End Date: leave it empty. Without specifying the End Date , one delivery adjustment is created with the delivery adjustment date is also 08/06/2023.


7.  (Optional) Enable Order to Revenue for revenue recognition.

You can view the results listed in the following table:

| Result | Detail |
| --- | --- |
| Subscriptions and Orders | In the Included Products section on the subscription details page, when you expand the discount charge, the following fields indicate your corresponding settings in the charge of the product catalog:Reflect Discount In Net AmountIf you are an Order to Revenue or Billing-Revenue Integration customer, when you expand the discount charge, you will also see the following settings in the Revenue Accounting section.Exclude Item Booking from RevenueExclude Item Billing from Revenue |
| Invoices and Invoice Items | After you click the discount amount of an invoice item in the Invoice Details section on the charge details page, the following fields indicate your corresponding settings in the charge of the product catalog:Reflect Discount In Net AmountExclude Item Billing From RevenueThe Total amount of an invoice item is the net amount of the delivery pricing charge after the discount for a billing period.The Total amount of the invoice is the total net amount of the delivery pricing charge of the subscription. |
| Delivery Adjustment | The adjustment Amount reflects the net amount after the percentage discount per delivery and uses the same rounding rules as Order to Revenue booking metrics. The adjustment amount is a negative amount. |
| Credit Memo and Debit Memo | If you create a delivery adjustment, the credit memo Amount reflects the net amount after the percentage discount.If you cancel the delivery adjustment, the debit memo Amount reflects the net amount after the percentage discount. |
| Order to Revenue | The net amount after the percentage discount is propagated to the revenue. |

Take the first billing period BP1 from 7/31 to 8/28, that is the first 4 weeks, as an example:

-   After the invoice is generated, an invoice item is generated for the delivery pricing charge during this billing period BP1. The amount of the invoice item is $20 = $5 (list price)\*4(weeks), the discount is -$10 = -$5(list price)\*50%(percentage discount)\*4(weeks), and the net amount ( Total ) of the invoice item is $10 = $20 - $10.


-   After a delivery adjustment is created on the first Sunday, 8/6. Since the net amount after the discount for each Sunday is $2.5, the delivery adjustment is generated as - $2.5. Meanwhile, a credit memo of $2.5 is generated for the creation of the delivery adjustment.
