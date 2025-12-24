---
title: "SSP determination based on SO line group"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing_1/ssp-determination-based-on-so-line-group"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:46.911Z"
---

# SSP determination based on SO line group

Learn how SSP determination in Zuora Revenue is enhanced by integrating with Zuora Billing, allowing for SSP values to be derived from multiple SO lines, including regular and discount charges.

In Zuora Billing scenarios, a percentage discount charge can be created after the regular charge is created. In Zuora Revenue, both the regular charge and the percentage discount charge are collected as individual sales order lines. However, the percentage discount charge line has an impact on the allocation of the revenue contract that contains the regular charge line. The allocatable value of the discount charge line determines whether the original regular charge line is within the SSP range or not, which has a significant impact on allocation.

## Overview

To support this scenario, you can enable the Billing - Revenue Integration feature by setting the ZBILLING\_INTEGRATION profile to Yes in Zuora Billing.

When the integration is enabled, SSP determination in Zuora Revenue is improved to derive SSP values based on a group of multiple SO lines. After the regular charge line is collected in Zuora Revenue as the original SO line, the discount charge can be collected as a separate SO line with being associated with the original SO line. Then, the net value between the original SO line and the associated discount SO line is considered for comparison to determine whether the original SO line is within the SSP range.

If the original SO line is eligible for allocation, the SSP derivation at the SO line level still follows the same processing logic when the integration is disabled. The SSP value for the discount charge line will be set to 0 during SSP allocation. For more information about SSP at the line level, see [SSP setupNo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/revenue/E\_Advanced\_revenue\_operation/topics/ssp\_setup.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/E_Advanced_revenue_operation/topics/ssp_setup.dita).

The SSP\_WITHIN\_FV\_GRP\_BY\_COL profile is also introduced in Zuora Revenue to support this scenario. You can use this profile to specify the name of the field or the combination of fields with concatenated values, which will be used to associate the discount charge line with the original regular charge line. The value from the profile SEGMENT\_DELIMITER used to concatenate the field specified.

## Example

In the following example, both the regular charge and the discount charge are collected in Zuora Revenue as SO transaction type. The SSP\_WITHIN\_FV\_GRP\_BY\_COL profile is set to be Parent Charge. So, when the C-00002 discount charge line is collected in Zuora Revenue, it is associated with the C-00001 regular charge line based on the Parent Charge field value. The discount charge line provides a discount of $120 for the original regular charge line.

| Billing Charge Type | Zuora Revenue Transaction Type | Charge# | Parent Charge | List Price | Contractual Value |
| --- | --- | --- | --- | --- | --- |
| Regular | SO | C-00001 |  | $1400 | $1200 |
| Discount -10% | SO | C-00002 | C-00001 |  | -$120 |

When SSP is to be determined and validated within the defined SSP range, the contractual values of all the associated lines are considered for the regular charge line to derive the net contractual value. In this example, the net contractual value is $1080, which equals $1200 minus $120.

The following SSP range is uploaded to Zuora Revenue, which is based on the percentage of list price.

| Stratification Group | Below % | Mid Point | Above % |
| --- | --- | --- | --- |
| License | 70 | 85 | 100 |

Then, Zuora Revenue can derive the price range as follows. The regular charge line in this example is within the SSP range.

| Charge # | Net Contractual Value | Below Price | Midpoint Price | Above Price |
| --- | --- | --- | --- | --- |
| C-00001 | $1080 | $980 | $1190 | $1400 |

Then, if the SO line is determined to be eligible for allocation, only the regular charge line will participate in the SSP allocation. The SSP value of the discount charge line will be set to 0. For more information about SSP allocation for the regular SO line, see [SSP setupNo Content found for /db/organizations/zuora/repositories/prod-sitemap/content/documents/external\_publications/revenue/E\_Advanced\_revenue\_operation/topics/ssp\_setup.dita](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/E_Advanced_revenue_operation/topics/ssp_setup.dita).
