---
title: "Revenue holds and transfer holds"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:35.266Z"
---

# Revenue holds and transfer holds

Learn about revenue and transfer holds in Zuora Revenue, including their types, levels, release, and expiry processes.

The purpose of holds is to prevent revenue release and/or revenue recognition when data discrepancies occur. When a hold is applied, the revenue user with appropriate privileges must intervene and take action accordingly.

## Hold type

In Zuora Revenue, two types of holds are supported:

-   Revenue hold: The revenue hold is to prevent future revenue release. This type of hold can be applied after the revenue is partially released. When the revenue hold is applied, it will be applied to both revenue and allocation.
-   Transfer hold: The transfer hold is to prevent the revenue schedules from being posted to the upstream system. This type of hold can be applied after the revenue is partially recognized. When the transfer hold is applied, future revenue recognition will not be allowed. A transfer hold can be applied to a specific schedule type. It can be applied for revenue, allocation, or both.

## Hold level

Holds can be applied at the following levels:

-   RC level When the hold is applied at the RC level, a line or lines in the revenue contract that satisfies the criteria in the hold setup, it restricted from revenue release and/or revenue recognition based on the setup.
-   POB level When the hold is applied at the POB level, all lines in the POB are restricted from revenue release and/or revenue recognition. In the setup for a POB level hold, you don’t need to specify the criteria to identify the eligible POBs. The POB level hold is applied to eligible POBs by using the Assign Holds tab in the POB assignment advanced rules. For more information about POB assignment rules, see [Define POB assignment rules](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules) .
-   Line level When the hold is applied at the line level, the lines that satisfy the criteria in the hold setup are restricted from revenue release and/or revenue recognition. When line-level hold is applied then all the lines in the POB has a hold applied in default.

## Hold release

When you set up a hold in Zuora Revenue, you must specify how the hold can be released. You can allow the hold to be manually released by toggling the Allow Manual Release switch to Yes . If a hold cannot be manually released, you must specify the release event.

To release a hold based on events, the hold event data must be uploaded to Zuora Revenue. Then, the RevPro3.0 Event Release program can be started to process the data to release the selected holds. After a hold is processed, it will never be applied again.

## Hold expiry

After a hold is applied to a line, POB, or RC, it can expire after a specified time period based on the hold setup. The RevPro3.0 Immediate POB Release program can be started to release the holds that have expired.

## Related articles

For information about how to set up holds in Zuora Revenue, see [Set up holds](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/set-up-holds) .

For information about how to apply a hold, see [Manually apply a hold](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/manually-apply-a-hold) .

For information about how to review the hold in Workbench, see [Review holds in Workbench](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/review-holds-in-workbench) .

For information about how to release a hold placed on a line, POB, or RC, see [Manually release a hold](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/manually-release-a-hold) .
