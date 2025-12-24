---
title: "Rate aggregated or individual usage"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/rate-aggregated-or-individual-usage"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:34.435Z"
---

# Rate aggregated or individual usage

When rating usage charges, you can choose whether to calculate a price for usage records in a billing period or for each usage record.

Note:

This feature is in Limited Availability. You can enable the feature through the self-service interface for Feature Management.

To access this feature, click your username at the top right and navigate to Billing > Define Billing Rules, then change the Round and determine a price for usage records individually when rating usage charges? setting. This setting is set to No by default.

-   If you keep this billing rule to its default option No, the price is calculated for usage records in a billing period.
-   If you set this billing rule to Yes, the price is calculated for each usage record.
    -   This option allows you to show each usage record and its charge as a separate line item in the Usage Detail section of the invoice. You can also view the charge amount for each usage record in the Amount field of the exported Processed Usage data source. Because the charge is rounded for each usage record, rather than once for the group total, the resulting totals might be affected. The potential difference will be larger in cases where a customer has a large number of usage records.

## Example Scenario

Suppose you provide the following rate plan:

-   UOM: Each
-   Billing Period: Month
-   Billing Day: Subscription Start Day
-   Rating Group: By Usage Start Day
-   Price Table:

| Tier | From | To | List Price | Price Format |
| --- | --- | --- | --- | --- |
| 1 | 0 | 10 | $1 | Per Unit |
| 2 | 10.1 | - | $0.9 | Per Unit |

Later, two usage records are uploaded:

| Records | Start Date | Quantity |
| --- | --- | --- |
| Record 1 | 1/1/2018 | 8 |
| Record 2 | 1/1/2018 | 5 |

The following sections describe how to calculate charge amount based on two typical charge models: volume pricing and tired pricing charge models.

## Calculating charge amount with volume pricing charge model

This example shows you how to calculate usage charges on volume pricing based when different options of Round and determine a price for usage records individually when rating usage charges? billing rule is selected.

If this billing rule is set to No:

1.  Calculate the total quantity on the same usage start date. The total quantity on 1/1/2018 is 13.
2.  Calculate charge amount on the same usage start date. Charge amount on 1/1/2018 is 11.7 = 13\*0.9.

If this billing rule is set to Yes:

1.  Calculate the total quantity on the same usage start date. The total quantity on 1/1/2018 is 13.
2.  Check the price table. The total quantity falls into Tier 2.
3.  Calculate charge amount for each usage record:
    -   Record 1: 7.2 = 8\*0.9
    -   Record 2: 4.5 = 5\*0.9
4.  Calculate charge amount on the same usage start date. The charge amount on 1/1/2018 is 11.7.

## Calculating charge amount with tiered pricing charge model

This example shows you how to calculate usage charges on tiered pricing based when different options of Round and determine a price for usage records individually when rating usage charges? billing rule is selected.

If this billing rule is set to No:

1.  Calculate the total quantity on the same usage start date. The total quantity on 1/1/2018 is 13.
2.  Calculate charge amount on the same usage start date. Charge amount on 1/1/2018 is 12.7 = 10\*1+3\*0.9.

If this billing rule is set to Yes:

1.  Calculate charge amount for each usage record:
    -   Record 1: 8 = 8\*1
    -   Record 2: 4.7 = 2\*1+3\*0.9
2.  Calculate charge amount on the same usage start date. The charge amount on 1/1/2018 is 12.7.

## Considerations

This setting is not effective on charges with the following charge models. In these cases, the rule will be ignored and the rating amount will still be computed by rating group, for example, by billing period.

-   Tiered pricing with on-demand usage rating
-   Flat fee pricing
-   Overage pricing (Rolling Window and Rollover)
-   Tiered with overage pricing
