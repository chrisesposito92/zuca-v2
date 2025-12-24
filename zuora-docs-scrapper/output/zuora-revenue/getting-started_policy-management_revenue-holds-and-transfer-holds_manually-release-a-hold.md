---
title: "Manually release a hold"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/manually-release-a-hold"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:45.614Z"
---

# Manually release a hold

Learn how to manually release holds on revenue contracts, either individually or in batches, using the Workbench interface.

If a hold is created with the Allow Manual Release switch toggled to Yes , you can manually release a hold. You can release one or more holds applied to one revenue contract on the Revenue Contract Detail page as instructed in [Review holds for an individual RC](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/review-holds-in-workbench) .

Releasing holds on more than one revenue contract can be time-consuming. Therefore, use the methods below to release the holds for multiple revenue contracts.

## Manually release holds from a central point

Complete the following steps to release a revenue hold placed on a revenue contract, POB, or line:

1.  Navigate to Workbench > Holds. The Holds page gets displayed. The pending holds are displayed by default.
2.  From the Hold Level list, select the level at which the hold is applied.
3.  (Optional): Click the Toggle Row Filter icon to filter out data in a specific column.
4.  Locate the target hold and hover the mouse over the row.
5.  To approve the hold, click the Approve (check mark) icon.
6.  In the Approval Comments window, select the appropriate release reason, provide comments, and click OK. The pending hold is released, and it gets displayed on the released hold list.

## Manually release holds in a batch

Complete the following steps to release holds in a batch:

1.  Navigate to Workbench > Manage Mass Actions.
2.  Click the New Batch (+) icon . The New Batch page gets displayed.
3.  In the Batch Details tab, provide the following information about the batch:
    1.  Specify a unique name for the batch in the Name field.
    2.  In the Action On field, select Transactions or RC.
    3.  In the Action Type field, select Release Hold.
    4.  In the Holds field, select the name of the hold to be released.
    5.  In the Comments field, provide the necessary description.
    6.  Complete other fields in the Batch Details tab as required.
4.  Click the save icon. The batch gets created.
5.  Click the Filters tab to filter out the eligible transaction lines or revenue contracts.
6.  Close the New Batch window.
7.  On the Batches page, hover the mouse over the batch line and click the Query Data icon . After transactions with specific holds are identified, the batch status changes from NEW to Data Identified.
8.  Hover the mouse over the batch line and click the Review Data icon . The Review Data window gets displayed.
9.  (Optional): Use the Include for Release Hold column to include or exclude a line for the current operation by toggling it to Yes or No.
10.  Click Release Hold.
