---
title: "Manage an accounting code"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/finance-settings/define-your-chart-of-accounts/manage-an-accounting-code"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:22.264Z"
---

# Manage an accounting code

Learn how to create, edit, and delete accounting codes within the Chart of Accounts, ensuring proper management and assignment to transactions.

1.  To create an accounting code perform the following steps:
    You can create an accounting code from the Chart of Accounts page. An accounting code cannot be deleted after creation.
    1.  Click your user avatar at the top right and then click Finance. The Finance Settings page opens.
    2.  Click Manage Chart of Accounts. The Chart of Accounts page opens.
    3.  Click New Accounting Code.
    4.  Specify the fields as necessary and then click Create Accounting Code. The following fields are required.

        -   Name: The name must be unique within the selected type. After the accounting code is used in a transaction, the name cannot be changed.
        -   Type: Select one from the dropdown list, which is populated with a standard set of high-level accounting codes.

        Note:

        You can create multiple accounting codes for Accounts Receivable (AR) under Chart of Accounts if you have Invoice Item Settlement enabled.

        You cannot set a blank value to the Accounts Receivable accounting code, even when the disallow blank accounting rule is set to 'No'.

2.  To edit an accounting code:, perform the following steps:

    1.  Open the Chart of Accounts page and click Edit in the Actions column.

        You can also activate or deactivate an accounting code using the Actions column.

        You cannot deactivate an accounting code that is assigned to one or more transaction types. For more information about assigning accounting codes to transaction types, see Assign accounting codes


    Note:

    When you deactivate an accounting code, ensure that you remove the accounting code from the following:

    -   All Product Rate Plan Charge(PRPC)
    -   Finance Settings > Configure Accounting Codes - check for all transaction types
    -   Finance Settings > Manage Non-Subscription Items and Standalone Orders

3.  To delete an accounting code, perform the following steps:
    1.  Click Delete in the Actions column.

        You must have the Delete Unused Accounting Code Finance permission in order to delete an accounting code. You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.

        You can also delete an accounting code using the SOAP API. See AccountingCode for more information.


Having tailored the chart of accounts to your satisfaction, the next steps are:

-   Assign accounting codes from the chart of accounts to the appropriate transactions. For more information, see Assign accounting codes .
-   Use accounting codes with all your transactions for an entire accounting period (or retroactively apply them to transactions in an open period).

Now, you'll have the data you need to close the accounting period and export your summary revenue data.
