---
title: "Update prepayment product in  subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/update-prepayment-product-in-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:56.082Z"
---

# Update prepayment product in subscription

Learn how to manage and update prepayment charges in subscription products, including increasing prepaid units and understanding update restrictions.

After you have created a prepayment subscription through Orders, you can update prepayment charges in the existing subscription for your customers.

## Example

Suppose your customer has subscribed to the following product for 12 months:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls Monthly Prepayment Plan |  |
| Prepayment charge | Drawdown charge |
| Charge name: Monthly PlanCharge type: RecurringCharge model: Flat FeeList price: $20/Billing periodBilling period: MonthPrepaid UOM: Million callsPrepaid units: 10Validity period: Month | Charge name: DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

After a while, your customer wants to increase the prepaid units from 10 to 20 because of increased businesses. You can do this for your customer through the Zuora UI or a REST API.

## Additional considerations

-   Only list price and prepaid quantity of prepayment charges can be updated. The prepaid quantity must be a positive number.

-   An update is only allowed at the beginning of a validity period. For example, a prepayment charge in the original 12-month subscription has 4 quarterly validity periods:

    -   01/01/2022-03/31/2022

    -   04/01/2022-05/31/2022

    -   06/01/2022-09/30/2022

    -   10/01/2022-12/31/2022


You can only update this prepayment charge on 01/01/2022, 04/01/2022, 06/01/2022, or 10/01/2022.
