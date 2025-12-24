---
title: "Create a decision table"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/decision-table/create-a-decision-table"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:43.714Z"
---

# Create a decision table

Learn how to create a decision table.

1.  Navigate to in the left navigation menu.
2.  Click Create Logic and then click Create from Blank.
3.  In the displayed Create New Logic dialog, complete the following information:

    -   Type: Select Decision Table.

    -   Name: Enter the decision table name. The name must be unique across all custom logics.

    -   Object: Select the related object.

    -   Effective Start Date: Specify the date and time when this decision table becomes effective.

    -   Effective End Date: Specify the date and time when this decision table becomes ineffective.

    -   Description: Enter the decision table description.


4.  Click Create. The decision table editor opens.
5.  Edit conditions in the editor:
    1.  Select a field from the condition field dropdown list. Available fields vary depending on the object you selected in step 3. For more information, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).
    2.  Specify the operator and value for the field you selected.
    3.  (Optional) Click the + icon in any of the condition columns and repeat steps a and b to add more conditions as needed.
6.  Edit results in the editor:
    1.  Select a field from the result field dropdown list. Available fields vary depending on the object you selected in step 3. For more information, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).
    2.  Specify the operator and value for the field you selected.
    3.  (Optional) Click the + icon in any of the result columns and repeat steps a and b to add more results as needed.
7.  (Optional) Add new rows in the table:
    1.  Click Add Row.
    2.  Specify the operator and value for each condition and result column.
    3.  Repeat steps a and b to add more rows as needed.
8.  Click Activate to create a decision table and activate it immediately. Alternatively, click Save to create a draft decision table.
