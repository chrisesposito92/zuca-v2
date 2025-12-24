---
title: "Timeline for contract modification"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/timeline-for-contract-modification"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:33.741Z"
---

# Timeline for contract modification

The timeline of the contract change plays an important role in determining the treatment for a contract. In Zuora Revenue, there are two types of contract timelines that you need to set up based on the time when changes occur to a revenue contract.

-   Initial Contract Timeline
-   Revision Timeline

The following graphic shows the Contract Modification Timeline section that you need to configure on the Contract Modification page. To open the Contract Modification page, click Contract Modifications under the Policies section from the Zuora Revenue main menu.

![cmod-timeline.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d1b57371-6d9b-4cf4-bc92-438a0928827e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQxYjU3MzcxLTZkOWItNGNmNC1iYzkyLTQzOGEwOTI4ODI3ZSIsImV4cCI6MTc2NjYzNzIxMiwianRpIjoiMzIwNDlkZTk2MWRmNDY2NGFiMTUwZTIxMTk3MDAwY2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.M8P8TpgxiagnAPqhVg3Ek8NpOKnZhB4H_4e7lsRWczA)

## Initial contract timeline

The initial contract timeline refers to the revenue contract creation period or quarter. Changes that occur to the contract during the revenue contract creation period or quarter are always considered as Initial based on your timeline configuration. The revenue recognized is adjusted to reflect the changes to the transaction price. The fair value of the transaction line is derived based on your configuration.

## Initial contract timeline fields

When you configure the initial contract timeline on the Zuora Revenue UI, some fields are required for the configuration. For detailed description of each required field, refer to the following table.

| Field | Values | Description |
| --- | --- | --- |
| Duration Type | RC Creation PeriodRC Creation Qtr | Specifies whether to use the RC creation period or quarter as the start of Initial Contract Timeline.Note: RC creation period or quarter refers to the open accounting period or quarter when the revenue contract is created in Zuora Revenue.For example, a revenue contract is created in Zuora Revenue on 1/1/2018. If RC Creation Period is selected for Duration Type, the duration of the Initial Contract Timeline ends on the last date of the period based on the accounting calendar set up in Zuora Revenue. If RC Creation Quarter is selected for Duration Type, the duration of the Initial Contract Timeline ends on the last date of the quarter based on the accounting calendar set up in Zuora Revenue. |
| Duration | An integer | Usually used when RC Creation Period is selected for Duration Type to specify the additional periods that follow the RC Creation Period as part of the Initial Contract Timeline.For example, RC Creation Period is selected for Duration Type and Duration is set to 2. If a revenue contract is created in Zuora Revenue on 1/1/2018, the Initial Contract Timeline ends on the last date of the March period.If RC Creation Qtr is selected for Duration Type, Duration is set to 2, and a revenue contract is created in Zuora Revenue on 1/1/2018, the Initial Contract Timeline ends on the last date of the May period based on the calendar. |
| Derive SSP/RSSP Date | Min. SO Book DateMin. Invoice DateLine SO Book Date | Specifies the date that Zuora Revenue uses for each transaction line in its comparison to SSP batch effective dates.Min. SO Book Date: Zuora Revenue sets the SSP date for all transaction lines in the revenue contract to the earliest sales order book date in the contract.Min. Invoice Date: Zuora Revenue sets the SSP date for all transaction lines in the revenue contract to the earliest invoice date in the contract. Before invoicing, Zuora Revenue will perform initial allocations based on the earliest sales order book date.Line SO Book Date: Zuora Revenue sets the SSP date for each transaction line in the revenue contract based on the sales order book date of that line. |

## Revision timeline fields

When you configure the revision timeline on the Zuora Revenue UI, two fields are required for the configuration. For a detailed description of each required field, refer to the following table.

| Field | Values | Description |
| --- | --- | --- |
| Duration Type | RC Modified PeriodRC Modified Qtr | Specifies whether to use the accounting period or quarter as the duration of Revision Timeline. The first Revision Timeline starts from the end of the Initial Contract Timeline.For example, RC Creation Quarter is selected for the Duration Type of Initial Contract Timeline and the Duration is set to 0. RC Modified Quarter is selected for the Duration Type of Revision Time. If the revenue contract is created in January 2018, the Initial Contract Timeline is Q1 of 2018. Any changes to the contract that occur by 3/31/2018 are considered as part of the original contract. The first Revision Timeline is Q2 of 2018. |
| Derive SSP/RSSP Date | Line Level SSP DateUse Initial Contract MethodLine Level Contract Modification DateRC Level Contract Modification DateLine SO Book DateRevision Period Date | Specifies the date that Zuora Revenue uses for each transaction line in its comparison to SSP batch effective dates.Line Level SSP Date: Zuora Revenue sets the SSP date for each transaction line in the revenue contract based on its SSP date. For existing transaction lines in the revenue contract, Zuora Revenue keeps the SSP Date that is assigned from the Initial Contract Timeline. For new transaction lines, Zuora Revenue sets the SSP date to the first day of Revision Timeline.Use Initial Contract Method: Zuora Revenue sets the SSP date for each transaction line in the revenue contract based on the same method that is used during the Initial Contract Timeline. For existing transaction lines in the revenue contract, Zuora Revenue keeps the SSP Date that is assigned from the Initial Contract Timeline. For new transaction lines, Zuora Revenue sets the SSP Date based on the Derive SSP/RSSP Date method used in the Initial Contract Timeline.Line Level Contract Modification Date: If CT_MOD_DATE is provided for the transaction line, Zuora Revenue sets the SSP date to the CT_MOD_DATE value for the line; otherwise, Zuora Revenue sets the SSP date to the first day of the Revision Timeline (RC Modified Period or RC Modified Quarter).RC Level Contract Modification Date: If CT_MOD_DATE is provided for the line that triggers contract modification, Zuora Revenue sets the SSP date to the CT_MOD_DATE value for all transaction lines. If there are multiple lines that trigger contract modification, Zuora Revenue sets the SSP allocation date to the earliest CT_MOD_DATE of the line. If no CT_MOD_DATE is provided, Zuora Revenue sets the SSP date to the first day of the Revision Timeline (RC Modified Period or RC Modified Quarter).Line SO Book Date: Zuora Revenue sets the SSP date for each transaction line in the revenue contract based on the sales order book date of that line.Revision Period Date: Zuora Revenue sets the SSP date to the first day of the Revision Timeline (RC Modified Period or RC Modified Quarter). |

## Contract Timeline Period Name in Workbench

The Duration Type values specified on this Contract Modification page determine the Contract Timeline Period Name field in the Overview tab of the Revenue Contract Detail page.

For example, the Duration Type settings on the Contract Modification page are as follows:

-   Initial Contract Timeline: Duration Type = RC Creation Qtr
-   Revision Timeline: Duration Type = RC Modified Qtr

The accounting calendar is configured as follows in Zuora Revenue. The fiscal year starts in January and ends in December. Each quarter has three periods.

## Revision timeline

After the initial contract timeline ends, the contract modification rules that you set up in Zuora Revenue are triggered for any changes that occur to the contract during the revision timelines. The revision timeline can be your accounting period or quarter. Any changes that occur in the same period or quarter are considered together to derive the final treatment. If the treatment for the period or quarter is both retrospective and prospective, the final treatment is retrospective if the system level value of the ENABLE\_RETRO\_PROSPECTIVE profile value is set to No.

## Contract Timeline Period Name in Workbench

The Duration Type values specified on this Contract Modification page determine the Contract Timeline Period Name field in the Overview tab of the Revenue Contract Detail page.

For example, the Duration Type settings on the Contract Modification page are as follows:

-   Initial Contract Timeline: Duration Type = RC Creation Qtr

-   Revision Timeline: Duration Type = RC Modified Qtr


The accounting calendar is configured as follows in Zuora Revenue. The fiscal year starts in January and ends in December. Each quarter has three periods.

![accounting-calendar.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d4fd399c-42bd-4a1b-af0d-8d99c45d14db?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0ZmQzOTljLTQyYmQtNGExYi1hZjBkLThkOTljNDVkMTRkYiIsImV4cCI6MTc2NjYzNzIxMiwianRpIjoiMWVmNjliM2FmNGY0NDZhYTkzNmVmNDZiNGE4ZWFkMzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1x8r6f0WYF7AjYfpxI4rNwdPrkSdoXfoIkNsnilx1X8)

If a revenue contract is created in January, it is still in the initial contract timeline. The last period of the initial contract timeline (Quarter #1) is March, which is displayed as Contract Timeline Period Name in the Overview tab of the Revenue Contract Detail page. If this revenue contract is modified in April, which is in the revision timeline (Quarter #2). The Last Contract Mod Period field displays June because June is the last period of the second quarter.
