---
title: "Add prepayment product in subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/add-prepayment-product-in-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:48.565Z"
---

# Add prepayment product in subscription

Learn how to manage prepayment product charges by adding recurring or one-time charges to existing subscriptions, including configuration and additional considerations.

After you have created a prepayment subscription through Orders, if your customer is interested in purchasing more prepaid units, you can add additional prepayment products to the customer's existing subscription. You can add recurring prepayment charges or one-time prepayment charges to subscriptions anytime.

## Example

Suppose you have configured an API Calls One-time Top-up rate plan in your API Calls Prepayment Service product as shown below:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls One-Time Top-Up |  |
| Prepayment charge | Drawdown charge |
| Charge name: One-time Top-upCharge type: One-timeCharge model: Flat FeeList price: $3Prepaid UOM: Million callsPrepaid units: 1Validity period: Month | Charge name: API Calls DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

Your customer who has already subscribed to a 12-month plan wants to use more of your API because of new business for the coming month. You can do this by adding the above one-time rate plan to your customer's existing subscription.

## Configuration

You can add a recurring prepayment charge to a standard period subscription or to a subscription containing a partial period. In such instances:

-   The Start Date of the newly added fund is the Effective Date of the charge.

-   No proration exists for the first partial validity period, which means the charge amount of the first partial validity period should be the same as that of an entire validity period.

-   Recurring prepayment charges cannot be added to a shrunk subscription term.


Standard period subscription

For a recurring prepayment charge to be added to a standard period subscription at any time, you must configure the following fields:

-   Select Term Start Day from the `Billing Day` list.

-   Select Align to Term Start from the `Billing Period Alignment` list.


If you use the "CRUD: Create a product rate plan charge" REST API or the "Create ()" SOAP API to create recurring prepayment charges, make sure to set the `BillCycleType` field to TermStartDay and the `BillingPeriodAlignment` field to AlignToTermStart in the request body.

Subscription containing a partial period

For a recurring prepayment charge to be added to a subscription containing a partial period at any time, you must configure the following fields:

-   Select Term End Day from the `Billing Day` list.

-   Select Align to Term End from the `Billing Period Alignment` list.


If you use the "CRUD: Create a product rate plan charge" REST API or the "Create ()" SOAP API to create recurring prepayment charges, make sure to set the `BillCycleType` field to TermEndDay and the `BillingPeriodAlignment` field to AlignToTermEnd in the request body.

One-time prepayment charge

Adding a one-time prepayment charge is allowed anytime during a validity period. The prepaid units in this newly added one-time charge will be valid from the charge effective date to the end of the current validity period.

## Additional considerations

-   If the newly added prepayment charge has the same Prepaid UOM with any existing prepayment charge in the subscription, the new prepayment charge must have the same validity period as the existing prepayment charge.

-   Within a validity period, when the drawdown usage exceeds the existing prepaid balance, the overage usage record will not be displayed in the Transaction Records list in the Prepayment Balance section. If the prepaid balance fund is topped up with new prepayment charges, the overage item will not be immediately drawn down from the top-ups until the next bill run. Upon bill run, the overage item will be re-drawn down from the top-up balance appropriately.

-   Note the following options are also available for non-prepaid recurring charges:

    -   Billing Day: Term Start Day and Term End Day

    -   Billing Period Alignment: Align to Term End


You must follow the rules below when using the above options;

-   The Term End Day option of the Billing Day field must be coupled with the Align to Term End option of the Billing Period Alignment field.

-   For prepaid charges, the Term Start Day option of the Billing Day field must be coupled with the existing Align to Term Start option of the Billing Period Alignment field.

-   For non-prepaid recurring charges:

    -   If Billing Day is set to Term Start Day, Billing Period Alignment must be Align to Term Start.

    -   If Billing Day is set to Term End Day, Billing Period Alignment can be set to other values.
