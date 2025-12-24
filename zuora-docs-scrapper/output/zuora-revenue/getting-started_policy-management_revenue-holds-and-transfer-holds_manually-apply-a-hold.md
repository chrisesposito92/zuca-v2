---
title: "Manually apply a hold"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/manually-apply-a-hold"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:40.225Z"
---

# Manually apply a hold

Learn how to manually apply holds to revenue contracts, including individual lines, POBs, or entire contracts, using the Revenue Contract Detail page.

You can manually apply a hold by toggling the Allow Manual Apply hold setting to Yes . You can manually apply a hold to a specific revenue contract on the Revenue Contract Detail page or apply a hold in a batch action.

## Manually apply a hold to a specific revenue contract

Complete the following steps to apply a hold to a specific revenue contract manually:

1.  Navigate to Workbench > Revenue Contracts.
2.  Search for the target revenue contract.
3.  In the search result, hover the mouse over the target line and click the View Revenue Contract icon . The Revenue Contract Detail page gets displayed.
4.  To open the menu options available at the contract level, on the Contacts/Orders tab, click the three dot menu and then click Revenue Management > Apply/Release Holds.
5.  To apply a hold to the whole contract, complete the following steps:
    1.  In the Hold Level field, select RC. The Hold Name drop-down list gets automatically populated based on your selection.
    2.  To apply a hold to all lines in the contract, select the appropriate hold for the Hold Name field.
    3.  Provide comments in the Comments field, and click Apply Hold. The hold gets applied to all the lines in the RC.
6.  To apply the same hold to more than one POB or line in this contract, complete the following steps:
    1.  In the Hold Level field, select POB or Line. The Hold Name drop-down list gets automatically populated based on your selection.
    2.  Select the appropriate hold for the Hold Name field, and provide comments in the Comments field.
    3.  (Optional): To filter the target POBs or lines within the contract, click Search. The Filters window opens for you to specify the search criteria. After the filters are all set, click Apply Filters. The Filters window gets closed.
    4.  Click Update Data. The corresponding POBs or lines are listed.
    5.  Select the checkbox for the POB or line and click Apply Hold. The hold gets applied to the selected POBs or lines.
7.  To apply a hold to an individual POB or line, complete the following steps:
    1.  Locate the line on the Contracts/Orders tab.
    2.  Hover the mouse over the line, click the three dot icon in the Actions column, and then click Line Actions > Holds - Apply.
    3.  In the Apply Hold window, select the appropriate hold for the Hold field and provide comments in the Comments field.
    4.  Click Apply.

## Manually apply a hold in batch

Complete the following steps to create holds in a batch:

1.  Navigate to Workbench > Manage Mass Actions.
2.  Add a batch by clicking the New Batch icon (+) . The New Batch window opens.
3.  On the Batch Details tab, provide the following information about the batch:
    1.  Specify a unique name for the batch in the Name field.
    2.  In the Action On field, select Transactions or RC.
    3.  In the Action Type field, select Apply Hold.
    4.  In the Holds field, choose the name of the hold to be applied.
    5.  In the Comments field, provide the necessary description.
    6.  Complete other fields on this tab as required.
4.  Click the save icon. The batch gets created.
5.  Click the Filters tab to specify the search criteria for filtering out the target transaction lines or revenue contracts.
6.  Close the New Batch window.
7.  On the Batches page, hover the mouse over the batch line and click the Query Data icon . After identifying the transaction lines or revenue contracts, the batch status changes from NEW to Data Identified.
8.  Hover the mouse over the batch line and click the Review Data icon . The Review Data window gets displayed, listing all the identified transactions or revenue contracts.
9.  Use the Include for Apply Hold column to include or exclude a line for the current operation by toggling it to Yes or No.
10.  To apply the hold to all the selected lines, click Apply Hold.
