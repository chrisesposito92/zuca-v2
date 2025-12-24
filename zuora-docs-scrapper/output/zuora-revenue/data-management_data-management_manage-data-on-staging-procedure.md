---
title: "Manage data on Staging: Procedure"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-management/manage-data-on-staging-procedure"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:13.261Z"
---

# Manage data on Staging: Procedure

Learn how to manage data on Staging.

Open the [Revenue Stage](/zuora-revenue/data-management/data-management#concept-5x3j9iyy__title-4282) tab.

1.  On the Revenue Stage tab, take one of the following steps depending on the type of data that you want to manage:

    -   To manage transaction lines, click Action On > Transaction Stage.

    -   To manage stage events, click Action On > Event Stage.

    -   To manage consumption usage data, click Action On > Stage Consumption.


2.  Define the basic information for the current action by specifying the following fields.

    | Field | Description |
    | --- | --- |
    | Name | Specify a descriptive name of the action. |
    | Action Type | Select the type of action to indicate whether this action is to update or delete the data. |
    | Book | Select the book with which the target transaction lines or stage events are associated. |
    | Org | Select the organization with which the target transaction lines or stage events are associated. |
    | Transaction Type | Select the type of the target transaction lines. This field is applicable only if you want to update or delete transaction lines. |
    | Event Name | Select the name of the event. This field is applicable only if you want to update or delete revenue events. |
    | Errors Only | Toggle the switch to indicate whether to take action on transaction lines with validation errors only. This field is applicable only if you want to update or delete transaction lines. |
    | Reason | Provide the reason for the action. |

3.  In the Filters section, specify the criteria for the system to filter the target transaction lines or stage events for the current action.

    Note:

    If more than one row is specified, the AND logic is applied to the binding filter criteria.

    If many values need to be input for a field, you can upload the values in a single-column file by clicking the Upload File icon instead of manually typing them in the UI.

4.  After the filter criteria are ready, click Next to proceed. The next step varies depending on whether you are deleting or updating data.
5.  If you are deleting data, proceed to Step 7 to review the action details.
6.  If you are updating data, complete the following steps:
    1.  In the Target Fields field, choose the target fields to be updated. You can choose up to five fields to update in one action.
    2.  In the Dimension Fields field, choose the dimension fields based on which you want to update the target fields. The system will examine the dimension field values on the filtered transaction lines or stage events in Step 4 to determine the desired update action further. Up to three dimension fields can be selected.
    3.  Click OK . The Field Update section is displayed.
    4.  In the table at the bottom, specify the values for both dimension fields and target fields.

        Note:

        -   Values specified for dimension fields work as a "where" condition, which is used to identify the target lines to be updated. The target fields will be updated to the values specified in the table for the lines that have the matching dimension field values.
        -   Blank (null values) can be used for both dimension fields and target fields. You can update blank fields with a new value or clear the value from an existing field. However, the row with all the fields as blank in this table will be ignored. A value is required for at least one field on a specific row.

        ![bulk-update-example.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d13be5b1-0bc6-40a9-9ed6-5884b8b5220a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQxM2JlNWIxLTBiYzYtNDBhOS05ZWQ2LTU4ODRiOGI1MjIwYSIsImV4cCI6MTc2NjYzNjgzMSwianRpIjoiZTZlNmM4ODVmOTczNGNjMjk2ZjdmYjQ2YjdlNTg2OTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TzeFg1CqkHY-ww03NucSA4anrxEZ81NnNNJLqJtLNoI)

        As indicated in the above graphic, among the filtered transaction lines in Step 4, the update action happens in sequence as follows:

        1.  The Transaction Currency field is updated to USD for the line whose Business Unit is Digital, ATR30 value is US, and Customer Name is ABC. The Cost Currency is updated to USD as well.

        2.  The Transaction Currency field is updated to CAD for the line whose Business Unit is Digital, ATR30 value is CA, and Customer Name is XYZ. The Cost Currency is updated to null.

        3.  The Transaction Currency field is updated to EUR for the line whose Business Unit is Gaming, ATR30 value is EU, and Customer Name is ABC. The Cost Currency is updated to EUR as well.


7.  Click Next and then click Submit for Review in the pop-up window for confirmation. It might take some time for the system to process the request and display the identified transaction lines or stage events for review.
8.  Review the details of the target action. If there are many records, you can export the data to a CSV file locally.
9.  Click Update or Delete to complete the action.
