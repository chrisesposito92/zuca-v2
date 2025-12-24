---
title: "VC allocation"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-allocation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:03.996Z"
---

# VC allocation

Learn how to configure VC allocation in Zuora Revenue to automatically determine allocation triggers and identify appropriate lines for participation, with options for RC level or line-level allocation.

If you configure VC allocation in Zuora Revenue, it can automatically determine whether allocation should be triggered for the VC lines. If an allocation is to be performed, Zuora Revenue can also identify the appropriate lines to participate in the allocation.

Before you configure VC allocation in Zuora Revenue, it is important to understand the processing logic of VC allocation in Zuora Revenue. It can help you make configuration decisions for VC allocation. VC allocation can be done either at the RC level or at the line level depending on your configuration.

## RC Level Allocation

For an RC level allocation, Zuora Revenue performs the 2-step derivation when an RC has one or more VC lines coming in:

1.  Compare the RC level TP% with the line-level TP% for each individual line.

    -   If the TP% of all individual lines (normal lines and VC lines) are within the overall RC level TP% range, no allocation is performed.

    -   If the TP% of one or more lines is not within the RC range, Zuora Revenue will exclude all VC lines from allocation and proceed to Step 2 derivation.

2.  Check whether the TP% of all the remaining lines is within the RC level TP% range after all VC lines are excluded from allocation.

    -   If the TP% of all the remaining lines is within the RC level TP% range, an allocation will be performed with all VC lines excluded.

    -   If the TP% of one or more lines is still not within the RC level TP% range, the allocation will be performed with all lines included.


-   The line-level TP% is calculated based on the following formula:

Ext Sell Price or Allocatable Price / Ext SSP Price

-   The RC level TP% is calculated based on the following formula. Note that the lines whose CV\_ELIGIBLE\_FLAG value is set to No are NOT included in the calculation. Those lines are excluded for the 2-step derivation.

Total Sell Price or Total Allocatable Price / Total Ext SSP Price

## Line-level allocation

For line-level allocation, 2-step derivation will not be performed. Instead, Zuora Revenue checks whether the transaction price of the VC line is within the SSP range at the line level.

-   If the transaction price of the VC line is within the SSP range, no allocation will be performed for this VC line.

-   If the transaction price of the VC line is not within the SSP range, an allocation will be performed for this VC line.


The VC\_CHK\_REV\_PRD profile also has an impact on the line-level VC allocation. This profile determines whether the VC line that does not participate in allocation during the Initial Contract timeline should be reassessed for allocation that is performed for changes that occur to any line during Contract Revision timelines. Possible values for this profile are as follows:

-   Never Re-Assess: This VC line will never be reassessed for allocation during Contract Revision timelines.

-   Re-Assess when Retrospective: The VC line will be reassessed for allocation if the retrospective change occurs during Contract Revision timelines.

-   Re-Assess if VC line is not fully satisfied: The VC line will be reassessed for allocation if the VC line is not fully satisfied during Contract Revision timelines.


Note:

During Contract Revision timelines, if a new VC line is added to the revenue contract, this VC line will always be considered for the allocation that is triggered for any changes.

## Configure VC allocation in Zuora Revenue

To configure VC allocation in Zuora Revenue, set up the following profiles and lookups by using the side menu on the Setups/Application page.

| Name | Description | System-level value |
| --- | --- | --- |
| SYS_CHK_NOT_WITHIN_VC | Use this profile to enable Zuora Revenue for VC allocation. | truefalse |
| ALLOC_WITHIN_FV_TRANS | Use this profile to enable Zuora Revenue to perform allocation on the lines that are within the SSP range. | YesNo |
| VC_ELIGIBILITY_CHK_MTD | Use this profile to specify whether the VC allocation should be done either at the RC level or at the line level. | RC Level RangeLine Level SSP RangeNote: Those values are defined by the VC_ELIGIBILITY_CHK_MTD lookup. |
| VC_CHK_REV_PRD | Applicable to line level VC allocation.Use this profile to specify whether the VC line that is excluded from earlier allocation should be re-assessed for allocation when changes to other lines occur in an RC. | Never Re-AssessRe-Assess if VC line is not fully satisfiedRe-Assess when RetrospectiveNote: Those values are defined by the EX_VC_REASSES_METHOD lookup. |
| RC_LEVEL_SSP_RANGE | Set this lookup to specify the SSP range at the RC level | N/ANote: Specify the SSP range for the RC_LEVEL_SSP_RANGE lookup. |
