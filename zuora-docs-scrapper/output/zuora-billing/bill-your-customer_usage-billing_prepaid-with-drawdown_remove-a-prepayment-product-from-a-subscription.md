---
title: "Remove a prepayment product from a subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/remove-a-prepayment-product-from-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:21.712Z"
---

# Remove a prepayment product from a subscription

Learn how to remove a prepayment product from a subscription using the Zuora UI or REST API, including billing and credit considerations.

After you have created a prepayment subscription through Orders, you can remove a product from this subscription for your customer.

## Example

Suppose your customer purchased the following product earlier on an ad-hoc basis:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls One-Time Top-Up |  |
| Prepayment charge | Drawdown charge |
| Charge name: One-time Top-upCharge type: One-timeCharge model: Flat FeeList price: $3Prepaid UOM: Million callsPrepaid units: 1Validity period: Subscription Term | Charge name: API Calls DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

After a while, your customer wants to remove the product because of a change of business. You can do this for your customer through the Zuora UI or the REST API.

## Zuora UI

Follow the steps described in [Remove a product from a subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/remove-products-from-subscriptions/remove-a-rate-plan-using-the-zuora-ui).

## Additional considerations

-   Removal is allowed anytime during a validity period. To remove a product in the middle of a validity period, the billing periods within the validity period must all be billed. After the removal, a credit item will be generated in the next bill run to refund the subscriber based on the Credit Option you choose for the prepayment charge. However, one exception is that if a validity period of the prepayment subscription contains multiple billing periods and the credit option of the recurring prepayment charge is set to "Consumption Based", when no drawdown usage is uploaded to the validity period, you cannot remove the recurring prepayment charge from the subscription in the middle of the validity period.

-   If you want to reverse the removal, you can delete the order (the removal order), and the prepaid units will be recovered.
