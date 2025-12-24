---
title: "Attribute-Based Pricing in the Rating processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/rating-processor/attribute-based-pricing-in-the-rating-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:59.940Z"
---

# Attribute-Based Pricing in the Rating processor

Attribute-Based Pricing (ABP) in Mediation allows for dynamic pricing based on specific attributes, ensuring accurate charge calculations and integration into billing processes.

The Rating processor in Mediation supports Attribute-Based Pricing (ABP), as defined in the Pricing Catalog.

Note: This feature is currently in the Early Availability phase. Please contact your Zuora account representative to enable this feature.

In the mediation layer, usage events are ingested with essential details such as the charge number, subscription number, attributes, and event date. These events are then processed by the Rating processor, which validates the subscription and charge information, checks alignment with the catalog’s attribute-based pricing configuration, and applies the defined rules to calculate the appropriate charge. Once the charge is determined, the operator returns accurate pricing information. If validations fail, error messages are displayed. All successfully rated usage flows downstream into the billing system, where it is integrated into invoicing and revenue processes.

Configuration considerations:

-   Charge Type: Only Usage-based charges are supported. Recurring charges and One time charges types are not supported.

-   Effective Date: Ensure that the charge's Effective Date precedes the Event Date. You can configure the Effective Date within the product catalog.

-   Rating Operator Configuration: Ensure that you provide both the Subscription Number and Charge Number values. These are required to correctly associate the charge during rating.

-   Attributes: You must ensure that every attribute that is defined for the charge in the product catalog is included in the data loader file.


## Example for attribute-based pricing

A telecom provider defines a usage-based charge in Zuora’s Pricing Catalog for mobile data consumption. The charge is configured with attribute-based pricing (ABP) using attributes such as Region and Network Type to differentiate pricing tiers. The charge’s Effective Date is set to January 1, 2025.

When a customer uses 2GB of mobile data on February 10, 2025, the mediation layer ingests a usage event with the following details:

-   Subscription Number: S-100045

-   Charge Number: C-200078

-   Event Date: February 10, 2025

-   Attributes: Region = “US-West”, Network Type = “5G”, Usage Quantity = 2GB


The Rating processor meter component processes the event as follows:

-   Validates that both the subscription number and charge number exist.

-   Checks that the event date (Feb 10, 2025) occurs after the effective date (Jan 1, 2025).

-   Matches the required attributes (Region and Network Type) with the catalog’s attribute-based pricing configuration.

-   Applies the correct pricing rule for 2GB usage on 5G for the US-West region.


Since all validations pass, the operator returns the rated charge amount. This value is then passed to Zuora Billing, where it is included in the customer’s next invoice.

If an attribute such as Network Type was missing from the event file, the Rating processor returns an error message, preventing the charge from being applied until corrected.

## Event-level minimum and maximum behaviour

While using Dynamic Pricing, minimum and maximum amounts are applied per usage event. Each record is rated independently, and the result is tied to the tier’s configured limits. The system does not consolidate usage for the entire billing period before applying the minimum and maximum limits. This behavior can lead to higher-than-expected charges if multiple records trigger tier-level minimums or maximums. If the catalog configuration has the minimum and maximum defined, then the minimum and maximum amounts are applied per usage event.

Example:

| Tier | From | To | Unit Price | Min Amount | Max Amount |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 100 | 11.4 | 114 | 1026 |
| 2 | 101 | 200 | 10.2 | 1242 | 2976 |
| 3 | 201+ | - | 9.0 | 3270 | 4080 |

Output

| Record # | Quantity | Raw Calculation | Tier Application | Billed Value | Cumulative Qty |
| --- | --- | --- | --- | --- | --- |
| 1 | 7 | 7 × 11.4 = 79.8 | Below Tier 1 min (114) | 114 | 7 |
| 2 | 33 | 33 × 11.4 = 376.2 | Within Tier 1 bounds | 376.2 | 40 |
| 3 | 55 | 55 × 11.4 = 627.0 | Within Tier 1 bounds | 627.0 | 95 |
| 4 | 8 | (5 × 11.4 = 57.0) + (3 × 10.2 = 30.6) = 87.6 | Below Tier 2 min (1242) | 1242 | 103 |

As the example shows, the system applies min/max values per record, not per billing period. Multiple records can each be lifted to their tier minimums, causing totals to exceed a single period-level minimum. No retroactive adjustment occurs when usage moves into a higher tier.
