---
title: "Overview of Revenue Contract Detail page"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/overview-of-revenue-contract-detail-page"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:47.398Z"
---

# Overview of Revenue Contract Detail page

The Revenue Contract Detail page offers a detailed view of revenue contracts, including contract value, transaction price, and billing information, along with various operational features and tabs for comprehensive data analysis.

The Revenue Contract Detail page provides a comprehensive view of the revenue contract.

![Waterfall_2524.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/57621cc1-143e-4641-8b68-421458bcd453?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3NjIxY2MxLTE0M2UtNDY0MS04YjY4LTQyMTQ1OGJjZDQ1MyIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiOTA1ZWYwYzc0MWNiNDc5ZGFhYzY1NjhkYTQ4ZGFmZDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9YSJGkC4OXrZunYbGxH5bYg02Xg378iYonYBEpT2eVQ)

## Header section

When the DISPLAY\_WB\_HDR\_SECTION profile is toggled to Yes in system settings, the header section is displayed in the upper half of the page. Use the upper section on this page to get a summary of the revenue contract, including the following information:

-   Group By Val : The grouping criteria based on which the transaction lines are collected and grouped together to form a revenue contract.

-   Created Date | Version : The date when the contract is created and the version of the latest contract.

-   Book : The accounting book in which the RC is associated.

-   Contract Value : The value of the contract.

-   Transaction Price : Total value of the contract that includes variable consideration, if any.

-   Billings : The value that has been billed for the contract.

-   Revenue To Date : Revenue that is released until the current open period.

-   Contract Asset : The value that has been recognized but has not been billed.

-   Contract Liability : The value that has been billed but has not been recognized.

-   Unreleased Revenue : Revenue that has not been released.

-   Future Scheduled Revenue : The contract value of the future period for which the schedule is created.


You can perform the following operations on the contract in the upper section:

-   Click Notes/Attachment ![button-attachment.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a39e2b09-8264-49cd-8b9d-602b19f1e347?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEzOWUyYjA5LTgyNjQtNDljZC04YjlkLTYwMmIxOWYxZTM0NyIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiMmFiYTE0YjVjOGFlNDVjMTg5MjYwNmYxYzVlYzBjYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uhGcOXW9cl0itn1Z1K2pxEkTXk49Y66vKoFUbUQRfzA) to attach files that are related to the RC, POB, or transaction lines.

-   Click Approvals/Holds ![button-holds.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ec76e010-1e89-46c3-b16c-dc2012f31a4f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVjNzZlMDEwLTFlODktNDZjMy1iMTZjLWRjMjAxMmYzMWE0ZiIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiZmYxYzc3OTI0NThkNDQ0OGFhZGQ3MTM4Y2YxODU5ZTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-RtHVJvfYkzibOuA7pQXUoWiR7cJeriQygsSXXGYzlE) to open the Holds and Approvals window where you view the approver and approval status, release holds, or apply holds to the contract.


The lower half of the Revenue Contract Detail page contains different tabs to display the revenue contract data from different aspects. You can also take various actions on the contract by clicking the menu icon on the Contracts/Orders tab.

## Overview tab

This tab provides high-level information about the revenue contract, including the following parameters:

-   Contract Value: The value of the contract.
-   Booked Value: The initial value of the contract when it is booked with the customer.

-   Billing: The billing value of the contract.

-   Contra AR: The amount that is specified as Contra AR.

-   Billings Backlog: The backlog amount that has to be billed.

-   Price Adjustment: The adjustment amount that is associated with the contract if any.

-   Revenue To Date: The revenue that is released to date.

-   Impairment: The amount that lies as an impairment when the RC line is canceled after part of it or fully is recognized.

-   COGS Released: The cost of goods sold that is recognized.

-   COGS Capitalized: The capitalized costs that are not expensed in the period when they are incurred but are recognized over a period of time.

-   Margin: The margin of profit that is set on the RC in percentage.

-   Other Cost Released: Other costs that are released related to the RC.

-   Other Cost Capitalized: Other costs that are capitalized related to the RC.

-   \# of RORD Lines : The number of RORD lines associated with the RC.

-   Hold Revenue: A switch that indicates whether the revenue hold is applied for the RC.

-   Hold Transfer: A switch that indicates whether there is a hold on the transfer of the unreleased contract value.

-   xxTransferred: A switch that indicates whether the RC has been transferred.


## Contracts/Orders tab

This tab displays all the data that is input to Zuora Revenue about contracts and orders, such as extended selling price, extended allocatable price, and revenue start and end date.

-   You can view the data on the transaction line level , POB Level or Charge Level by using the drop-down list.
-   ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/62465725-6ef3-457e-9ddd-4e28db885d1a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyNDY1NzI1LTZlZjMtNDU3ZS05ZGRkLTRlMjhkYjg4NWQxYSIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiOTJlMTBiNDAwNWQ2NDBkYzkzYWFjNWVjZjFhZmY3YTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DplGMC91IxoyN18vFIhZfemLxBGP73TJlAIUCj3iT9E)

-   The following filters are available in this tab to help you quickly locate the transactions:

    -   Layout: Select the appropriate layout to display data.
    -   Level: Specify the level of the data to be displayed. Valid options are RC, POB, and Line & Charge. Charge is applicable for Billing to Revenue customers.
    -   Status: Select the status of the transaction. Valid options are All, Pending Release, and Released.
    -   Hold: Select the name of the hold with which the transaction is associated.

    For example, to filter out the line-level hold, select Line in the Level field, select Pending Release in the Status field and select the target hold name in the Hold field.
-   To fix a column to the side, right-click the column header and then click Fix > To the left or Fix > To the right.

-   To find the appropriate actions that you can take on the current contract, click the menu icon (three dot icon) next to the drop-down list for switching views. The actions that you can take from this menu are displayed.
-   To find the appropriate actions that you can take on each line item, click the hamburger icon. The actions that you can take from this menu are displayed.

Note:

If any action is grayed out on the menu, it means the revenue contract is not eligible for the action at the moment.

## Display custom fields and attributes

1.  Click the three-dot menu (next to the Line View drop-down list).

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e7af7e5-f4aa-4534-b92a-9dc7b506d9fb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlN2FmN2U1LWY0YWEtNDUzNC1iOTJhLTlkYzdiNTA2ZDlmYiIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiNWY3YzUwM2IxMDQzNDA5ZDhhYmM0M2JiMWUxYWJlZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KyH8clXwRk-XSbRtItXUsVRWejbSsz2PbmP39V5Vtl8)

2.  Click the System option followed by the Manage Layout option. The Manage Transactions Layouts screen will be displayed.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6e31f4bd-fa76-4751-91d2-8159b3c7b7ee?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlMzFmNGJkLWZhNzYtNDc1MS05MWQyLTgxNTliM2M3YjdlZSIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiZWQyNTMwYTRkNTJkNDM5ZWE2OGM4NWFlMDc5MWVlZTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.M0VSzHuVFEV6KLLoyC71_wmi7I2MSMbF9DZh0WEZowg)

3.  Hover the mouse over a Layout Name. The edit options for that line will appear on the right side.
4.  Click on the pencil icon. The Edit Layout - Charge layout screen will be displayed.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69a43667-bc30-42e5-a99f-fbcc642b938c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5YTQzNjY3LWJjMzAtNDJlNS1hOTlmLWZiY2M2NDJiOTM4YyIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiOTMxMDI2Zjg2ZTQ2NGFmNTg1NDI0NzBhMTMxYTE2NDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.VsPFqnz9aUVC0IUp5U6TAmWShFaw0z2bpTEoSWbSnHI)

5.  Highlight the field you want to add to the layout and click the arrow symbol. The field will get added.

You can edit the layout as explained above to add the required fields (if you are the owner) or copy it and then edit the copied layout.

## Menu options for each level

Revenue Contract Level

The Revenue Contract level menu options are organized and grouped into the following categories:

-   Allocation Management
-   Grouping Management
-   Revenue Management
-   System

| Category | Options |
| --- | --- |
| Allocation Management | Clear Manual CV, Disable, Enable, Impairment, Re-Allocate, Switch, Unfreeze - Switch, Retain, Version |
| Grouping Management | Close RC, Delink, Link, Open RC, Undo Delink, View RC Grouping Rule |
| Revenue Management | Apply/Release Holds, Edit POB, Generate Forecast, Release/Defer POB |
| System | Billing - Void, Export RC, Manage Layout, Pre-Summarize RC, Refresh Summary, Timeline |

Line Level

The Line level menu options are organized and grouped into the following categories:

-   Line Actions
-   Line Details
-   Variable Considerations

The Line level menu options are organized and grouped into the following categories:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e6a013f9-a6da-44ed-842a-cb9c05188847?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2YTAxM2Y5LWE2ZGEtNDRlZC04NDJhLWNiOWMwNTE4ODg0NyIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiMDE4NDU3OTMyMjM5NDQ5MjgzOTAxMDFmYjA2MDE1ZWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Yzqzk4_ww8T8eQapBuHlznTCUhfEh_zAIqgHjIZOKAE)

| Category | Options |
| --- | --- |
| Line Actions | Copy, Delink, Edit, Holds - Apply, ReleaseMove - Existing POB, New POB |
| Line Details | Billings, Consumption History, Cost Elements, Financing, History, Journal Entries, Price Change Orders, POB Policies, Reduction, Orders, Revenue Holds, SSP Details, Switch Leading Line, View, Waterfall |
| Variable Considerations | Apply, Expire, Transaction Pricing, VC Actions History |

POB Level

The POB level menu options are organized and grouped into the following categories:

-   POB Actions
-   POB Details

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/84b631b8-fa94-4cde-ba94-cafbe3395cc9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg0YjYzMWI4LWZhOTQtNGNkZS1iYTk0LWNhZmJlMzM5NWNjOSIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiYTYyMmM0YmE4ZTYzNDAwMGFiMTA3ZTIwNTVlZWM0ZTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WRHt-hOMwiJd16k7ZRNh4fOAUAXQ2wsd2tX69pyEhNA)

| Category | Options |
| --- | --- |
| POB Actions | Change, Delink, Edit, Generate Forecast, Holds - Apply, Holds - Release, Link, Release/Defer |
| POB Details | Billings, Cost Elements, Financing, Journal Entries, POB Policies, Price Change Orders, Reduction Orders, Revenue Actions, History, Revenue Holds, Waterfall |

-   View Dependencies option is available in the POB Template under POB Policies.

-   All the VC Actions are not available in POB Level.


Charge Level

The menu options for Charge level applicable for billing to revenue customers has been organized and grouped into the following categories:

-   Charge Actions
-   Charge Details

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/37ffddbd-7fc3-4454-ae72-6a737d00f7bb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM3ZmZkZGJkLTdmYzMtNDQ1NC1hZTcyLTZhNzM3ZDAwZjdiYiIsImV4cCI6MTc2NjYzNzE2NCwianRpIjoiOTM4ODdjZDA5NTcyNDFmNDk4YzZjZThmYmFjNjIwNjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FBZD16rB9YOFZIFdG-IaBvlLFuzGvQ13lDF0hXCWPW4)

| Category | Options |
| --- | --- |
| Charge Actions | Delink, Holds - Apply, Holds - Release, Link |
| Charge Details | Billings, Cost Elements, History, Journal Entries, Revenue Holds, Waterfall |

## Billings tab

This tab displays all the billing information that is input to Zuora Revenue for this revenue contract, such as invoice related details.

## Cost Elements tab

This tab lists the details of all cost types that are associated with the revenue contact along with the released and capitalized costs.

## Waterfall tab

Use this tab to view different types of waterfall data in different types of currencies either on POB level or on the transaction line level. You can also choose different layouts or templates for the waterfall data. Waterfall data can also be displayed based on actual data, forecast data, or both.

## Journal Entries tab

This tab displays all the credits and debits by the accounting period. The credit and debit amounts in each journal entry are shown in transactional, functional, and reporting currencies. You can also see whether the journal entry has been transferred to GL. Click Show Detail to find more about each journal entry.

## Carves Analysis tab

This tab provides a summary of allocation and carves for each transaction line in the revenue contract, such as Cumulative Allocation Amount, Cumulative Carves Amount, and Impairment Retrieve Amount of the revenue contract.

## Revenue Summary tab

This tab displays the revenue summary of billings, revenue, contract liability, contract asset, cost, and commission by period. You can perform a revenue comparison operation if multiple books are associated with the revenue contract.

## Reduction Orders tab

This tab lists the details of the reduction order lines that are associated with the revenue contact.

## Contract Modification tab

This tab displays the information of contract modifications that occur to the revenue contract, such as the contract modification rule that is triggered, the period when the contract modification occurs, and the allocation treatment.

## Timeline window

This window lists all the manual changes that happen to the revenue contract in each accounting period. You can see who makes the change, when it happens, and what the changes are. The listed records are by default sorted by period name in descending order. You can sort the timeline view by using any of the columns.

Note:

The Timeline tab is available as Timeline window option at the contract level on the Contracts/Orders tab. Open the action menu at the contract level and then click System > Timeline .

## Price Change Orders tab

This tab lists the details of the price order lines that are related to the revenue contract.
