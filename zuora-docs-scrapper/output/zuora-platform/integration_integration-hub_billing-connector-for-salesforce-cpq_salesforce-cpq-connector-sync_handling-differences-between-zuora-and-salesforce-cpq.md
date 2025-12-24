---
title: "Handling differences between Zuora and Salesforce CPQ"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/handling-differences-between-zuora-and-salesforce-cpq"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:18.962Z"
---

# Handling differences between Zuora and Salesforce CPQ

This topic provides guidance on managing differences between Zuora and Salesforce CPQ, focusing on pricing, proration, and subscription handling to ensure alignment during OTR implementations.

This topic explains how to handle differences between the systems and recommends best practices to align the systems for an OTR implementation.

## Pricing

Salesforce's default pricing method is for the entire term, not as per the billing period, like in Zuora. To handle this difference, the connector configures the \`list price base\` in Zuora's subscription to \`per specific months\`. For more information, see [Advanced configuration and Data management](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/advanced-configuration-and-data-management#concept-9845__SynchronizesubscriptionsbasedonSalesforcequotingprocess).

## Impact

-   The system only supports full-month subscriptions since Zuora does not support quoting odd numbers of days or incomplete months using the list price base. This condition also applies when a new product is added mid-term, where customers would like to co-term with the initial contract, leading to incomplete months. In this case, the connector creates a new subscription.
-   The charges per specific month, based on the list price, must align with full billing periods. When proration occurs, it does not guarantee that the total billed amount for the specific month charge across multiple invoices sums to the total price. See Specific Months List Price for more information.
-   As a result, the connector defaults to configuring the bill cycle day for recurring charges to \`Charge Trigger Day,\` which will have invoicing implications.

## Recommended alternative

You can build a customization in Salesforce to send the price per billing period. This will allow the system to better handle mid-term amendments, and the connector supports specifying the subscription term in days in case of incomplete billing periods. See [Prices based on custom logic](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/advanced-configuration-and-data-management#concept-9845__Pricesbasedoncustomlogic).

To send in prices based on custom logic, create a custom field on the subscription object in Salesforce to store the custom price. You can map this field to a field called \`price\` in the connector mapping configuration on the subscription flexible field mapping to override the default mapping.

Salesforce one-time charges can be renewed at the time of contract renewal. This creates a new subscription in the new term in Salesforce. However, Zuora's one-time charges are not renewable. Alternatively, as an asset object, it is not subscription-based and is created as an Order Line Item (OLI) in Zuora. These assets can also be renewed/amended just like a subscription-based product. On renewal of assets, the connector creates a brand new OLI.

## One-Time charges vs Order Line Items

One-time charges in Salesforce can be renewed at the time of contract renewal. This creates a new subscription in the new term in Salesforce. However, Zuora's one-time charges are not renewable. Alternatively, as an asset object, it is not subscription-based and is created as OLI in Zuora. These assets can also be renewed/amended just like a subscription-based product. On renewal of assets, the connector creates a brand new OLI.

## Salesforce CPQ and Zuora Proration

Understanding the fundamental differences in proration logic between Salesforce CPQ and Zuora is essential for maintaining accurate quote-to-invoice alignment.

In this example, the price per billing period is sent to Zuora instead of the price for the entire subscription term, as mentioned in the [recommended alternative](#concept-9376__Recommendedalternative).

| Subscription start date | 05/23/19 |
| --- | --- |
| Subscription end date | 09/30/19 |
| Total price for the entire term of 12 months | $12,000 |
| Total number of days in the term | 131 days |
| Subscription term on product2 | 12 months |
| Salesforce CPQ setting | Calendar Monthly + Daily |
| Zuora Setting | When prorating a month, assume 30 days in a month or use actual days. Use the actual number of days when prorating periods greater than a month. |

| Salesforce prorated price | Salesforce proration logic | Zuora Prorated Price | Zuora Proration Logic | Notes |
| --- | --- | --- | --- | --- |
| $4,290.32 | 05/23/19 through 05/31/19 = (9/31)days06/01/19 through 08/31/19 = 3 months09/01/19 through 09/30/19 = (30/30)daysProrate multiplier = (3 + (9 / 31 + 30 /30)) / 12 = 0.3575Prorated list price = $4,290.32 | $4,290.32 | Total_amount = Price_per_month * [ Number_of_full_months + (Prorated_days/Actual_number_of_days_of_the_prorated_month) ]$1000 * [4 + (9/31)] | Trigger dates = subscription start datePrice per billing period = $1000Billing period = MonthlyBill Cycle Day = Default from Customer AccountIn this case, it is configured for the first of the month.Billing Period Alignment = Align to Charge |

## Why does this work

-   The number of days calculation matches in SFDC and Zuora.
-   It uses the actual number of days in the first and last month of the term (28/29/30/31).
-   Charge segment calculation works similarly to Zuora's when Billing Cycle Day is equal to the first of the month.

## Supported use cases

| Criteria | Does proration match? | Notes |
| --- | --- | --- |
| BP = month | Yes | Matches for quarterly, annual, or any other combination of billing periods. |
| The trigger condition is not the subscription start date in Salesforce, and all 3 trigger dates are different | No | In this case, the effective billing term is not the subscription term in SFDC. If the trigger condition is the customer acceptance date, which is 10 days after the term start date, then the effective days in the subscription are always less. |
| Bill Cycle Day is not `Default from customer account` | No | The charge segment price calculation changes between the systems, causing variation.Salesforce, by default, assumes the first of each month is the start of a new segment, and there is no option to change this. |
| Increase in quantity mid-term | Yes | In some cases, there might be a mismatch in the second or third digit after the decimal due to differences in rounding |
| Decrease in quantity | Yes |  |
| Incomplete beginning and ending months in the term | Yes |  |
| Cancelling products mid-term | Yes | In some cases, there might be a mismatch in the second or third digit after the decimal due to differences in rounding |

## When does this work

-   All your invoicing is processed on the first day of the month.
-   The effective invoicing period is the same as the subscription term; that is, the subscription term in Salesforce is the period during which you invoice your customer in Zuora. This is determined by the \`Timing and Frequency of Charge\` parameters.

Note:

This is the closest proration match option, but it does not guarantee a 100% match for all combinations of product catalog, proration settings, and subscription cases and should be considered on a case-by-case basis.
