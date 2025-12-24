---
title: "Manage mass actions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/manage-mass-actions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:08.360Z"
---

# Manage mass actions

Learn how to manage mass actions in Zuora Revenue by applying common operations to multiple lines in a batch.

In Zuora Revenue, use the mass action to apply a common operation to multiple lines in one batch. To accomplish this, you create a batch, choose one action from the supported ones, and specify a filter to pick up the target lines to which the action should be applied.

## Supported Mass Actions

The following mass actions are supported in Zuora Revenue for Zuora Revenue users and Order to Revenue Tenants.

| Action On | Action Type | Description |
| --- | --- | --- |
| Accounting | Amortization Schedules | Defer and release the amortization line (contractual revenue or cost) in the current period. This action applies only to the released lines. |
| Update Schedule | Update the accounting segments of unposted schedules for the POB line based on the schedule type. |  |
| Performance Obligations | Defer Cost | Defer the cost release for the POB. This action is applicable only when the cost release does not follow the POB release. |
| Defer Revenue | Defer revenue of the POB. |  |
| Release Cost | Release cost for the POB. |  |
| Release Revenue | Release revenue for the POB. |  |
| Update POB | Update the derived POB name. |  |
| RC | Apply Hold | Apply RC-level revenue hold or revenue hold. |
| Close RC | Close revenue contracts. |  |
| Open RC | Open revenue contracts that are closed. |  |
| Re-allocate | Reallocate revenue contracts. |  |
| Release Hold | Release the RC-level hold. |  |
| Unfreeze RC | Unfreeze revenue contracts. |  |
| Transaction | Apply Hold | Apply revenue hold or transfer hold to transaction lines. |
| Release Hold | Release the hold applied to transaction lines. |  |
| Update Allocation Eligible Flag | Update the Allocation Eligible Flag of transaction lines. |  |
| Update Attributes | Update the attribute values of transaction lines only if the attribute is editable. |  |
| Update SSP Price/Percent | Update the SSP Price or SSP Percent for transaction lines. |  |

## Procedure

1.  Navigate to Workbench > Manage Mass Actions. The Batches page lists all the previous batches.
2.  To create a mass action, click the New Batch icon (+) . The New Batch window gets displayed.
3.  On the Batch Details tab, complete the following steps. For the Action On and Action Type fields, refer to the table in the section.
    1.  Enter a unique name for the mass action in the Name field.
    2.  Select the target object from the Action On drop-down list.
    3.  Choose the appropriate action from the Action Type list depending on the selected object.
    4.  If there is more than one revenue book configured in the system, use the Book list to specify where to look up the target object lines.
        1.  Depending on the selected action type, provide other information in appropriate fields that are displayed in the UI.

            For example, if you update the business unit code under account details for a contractual revenue, specify the Old and New Values in the Account Details field. The following screenshot shows updating accounting segments of unposted schedules for the POB line based on the schedule type. If you have chosen the option, 'Update Schedules' in the 'Action type' field, you can choose one among the following options:

            -   Posted Schedule: Updates only posted schedules that were posted schedules that were update earlier.

            -   Unposted Schedules: Updates only the unposted schedules that were updated earlier.

            -   Posted and Unposted Schedules: Updates both posted and unposted schedules that were update earlier.


            ![Edit batch - Manage Mass Actions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/edefdb3f-7d10-40ff-a1ed-8d4870f923e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkZWZkYjNmLTdkMTAtNDBmZi1hMWVkLThkNDg3MGY5MjNlOSIsImV4cCI6MTc2NjYzNjcwNiwianRpIjoiOTJjNzNmODliZTI3NDYwYjhkMmVhMTczNzVkZTJmNDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.N9pn6Z_ZHyp3IQ8q2YdQHBc74V4_EStuJRy5uvNc93E)

    5.  Leave your comments in the Comments field for this mass action.
4.  Click the save icon. The batch gets created.
5.  Click the Filters tab in the same window to set the criteria for the system to identify the target object lines.
    1.  Click the '+' icon to add a line.
    2.  Use the Seq column to specify the sequence in which the filter should be applied. The following screenshot shows a filter that identifies three revenue contracts based on their IDs and a particular PO. For information on the usage of IN operator in filters, see the community post titled "[How does the operator IN in a batch filter work](https://community.zuora.com/communities/community-home/digestviewer/viewthread?GroupId=229&MessageKey=e88e2472-1811-44a3-a905-6e4f54a96fe0)".

        ![New Batch](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/25fde9de-9ad2-4461-8901-aef4716cb971?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI1ZmRlOWRlLTlhZDItNDQ2MS04OTAxLWFlZjQ3MTZjYjk3MSIsImV4cCI6MTc2NjYzNjcwNiwianRpIjoiZDRhYTQ2MDYyNmYzNDVjNGI0MzY4MGQwODMxZjI5M2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.XoVxsu3e99M0yKYYTTkAxNk1VOXU13e1KNU7M_ot05I)

        Note: Use the AND, OR condition if you want to combine multiple conditions within the same query.

6.  Click the save icon and close the window. On the Batches page, the batch status is NEW.
7.  On the Batches page, hover the mouse over the batch line that you created and click the Query Data icon. The system will apply the filter to identify the target lines. After data is identified, the batch status is changed to Data Identified.
8.  Click the Review Data icon to review the identified lines in the Review Data window.
9.  To exclude any particular line from the mass action, hover over the line and then click the 'X' icon. The following screenshot applies to the update schedule action.

    ![Update Schedules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c27884af-6664-406e-9a09-23e1f5431901?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyNzg4NGFmLTY2NjQtNDA2ZS05YTA5LTIzZTFmNTQzMTkwMSIsImV4cCI6MTc2NjYzNjcwNiwianRpIjoiNzlhNGQzMDcwNGU5NGM4ZGI0NmY4MTY4ZDRjMjQwMDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.aiSoN2XCLOZkVS-f1aIHhnEB2fa_A9eDGvn_902SqvY)

10.  To trigger the mass action for the identified lines, click the action button in the Review Data window. The actual button name might vary depending on the action. It is the same as the Action Type name that you selected in Step 3.

After the mass action is completed, the batch status changes to Action Completed.
