---
title: "FV Calculation category"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/profiles/fv-calculation-category"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:05.396Z"
---

# FV Calculation category

Configure FV Calculation profiles to manage revenue allocation parameters, including allocation currency and SSP range considerations.

Use the FV Calculation profiles to configure the parameters that are related to revenue allocation, such as the allocation currency for multi-currency revenue contracts and whether to perform allocation for the lines within SSP range.

## Alloc Within FV Trans

The ALLOC\_WITHIN\_FV\_TRANS profile determines whether the allocation is to be performed for a revenue contract when the selling price of all its lines falls within the SSP range.

When this profile is toggled to Yes , the allocation will be performed for the revenue contract even if the selling price of all its lines falls within the SSP range.

## Eitf FV Date

The EITF\_FV\_DATE profile specifies the date to be used as the date to determine the fair value. You can set the system level value of this profile to one of the following dates:

-   Contract Date
-   Invoice Date
-   SO Book Date

## POB Allocation

The POB\_ALLOCATION profile determines whether allocation can be performed at the POB level.

When this profile is toggled to Yes , POB level allocation is enabled.
