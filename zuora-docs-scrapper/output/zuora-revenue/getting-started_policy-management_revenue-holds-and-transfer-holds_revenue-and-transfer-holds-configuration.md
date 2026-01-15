---
title: "Revenue and transfer holds configuration"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/revenue-and-transfer-holds-configuration"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:04.678Z"
---

# Revenue and transfer holds configuration

Learn how to configure revenue and transfer holds in Zuora Revenue, including setting up hold events and applying criteria.

Revenue holds and transfer holds are part of the policy configuration in Zuora Revenue.

## Before you begin

If you want to set up a hold that is released based on events, make sure the hold event is already created in event setup. For more information, see [Event Setup](/zuora-revenue/data-management/event-processing/event-setup)

## Set up holds

1.  Navigate to Policies > Holds and Approvals . The Revenue Holds page is displayed listing all defined revenue hold rules.
2.  To create a hold, create the New Hold icon (+) . The New Hold window is displayed.
3.  Provide detailed information about the hold and then click Save icon. The hold is created.

    | Field | Description |
    | --- | --- |
    | Name | Provide a unique name for the hold. |
    | Description | A short description of the hold. |
    | Enabled | Toggle this switch to Yes to enable the hold. |
    | Hold Type | Select the hold type:Revenue HoldTransfer Hold |
    | Hold Level | Select the level that the hold is to be applied:RCPOBLine |
    | Release Event | If the hold is to be released based on events, select the revenue release event. |
    | Schedule Type | Required for a transfer hold. Select the appropriate schedule type:RevenueAllocationBoth |
    | Start Date | The effective start date of the hold. |
    | End Date | The effective end date of the hold. |
    | Allow Manual Release | Specify whether the hold can be manually released. |
    | Allow Manual Apply | Specify whether the hold can be manually applied. |
    | Expiry Details | Specify when this hold will expire after the hold is applied to a line, for example, 3 months after the Revenue End Date. |

4.  If the hold is to be applied at the RC level or line level, in the Criteria Group section of the window, click to add a criterion line.
    1.  In the Name column, specify a name for the criteria group and then click the '+' icon .
    2.  In the Actions column, click the Apply Criteria On the cogwheel icon . The Assign Criteria window is displayed.
    3.  To add a criterion, click the '+' icon .
    4.  Select the appropriate value for the Apply Criteria On, Field Name, and Operator columns, and enter the value in the Operand column.
    5.  Enable the criterion by setting the Enabled column to Yes.
5.  After you are done, save your changes and close the window.

## What to do next

The hold is created. If the Allow Manual Apply switch is toggled to Yes , you can apply the hold in Workbench. See [Manually apply a hold](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/manually-apply-a-hold) . Alternatively, the hold can be automatically applied based on the specified criteria when the RevPro3.0 Data Collection program runs.
