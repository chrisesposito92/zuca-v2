---
title: "MJE upload"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/manual-journal-entries/mje-upload"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:15.724Z"
---

# MJE upload

Learn how to create and upload Manual Journal Entries (MJE) to Zuora Revenue, including configuration requirements and field specifications.

After MJE approval rules are defined in Zuora Revenue and the related accounting segments are enabled in the accounting setup, you can create and upload the MJE to Zuora Revenue.

## Before you begin

-   Ensure that MJE related configuration is set up appropriately based on your business needs. For example, at least one MJE approval rule is created and related accounting segments are enabled. For more information, see MJE setups.

-   Be familiar with the related fields of the journal entry. Some fields are mandatory no matter whether you will upload JE lines in a local file or on the UI directly. For details, see the section below.

-   To use the new Manual JE page ( Workbench > Journals ) for uploading JE lines, Zuora Revenue 37.008.00.00 or a later version is required. Besides, unified authentication must be enabled for the Zuora Revenue instance. Otherwise, you have to use the previous UI page ( File Upload > Manual JE ) for uploading JE lines.

-   There are different ways to upload JE lines to Zuora Revenue. If you want to upload them in a local file, be aware of the following security requirement: wiki.page{path: "/Template:System/Boilerplate/Revenue", heading: "2", section: "CSV Injection"}


## Fields related to JE lines

No matter whether you manually enter the JE lines in the UI or in a local file, you can specify the following fields for the journal entries.

| Field | Description |
| --- | --- |
| JE Set NO | An integer that indicates a pair of JE lines. Two JE lines must exist for the same JE set. One is for specifying the debit amount and the other for the credit amount. |
| Account Type | The account type into which the journal entry falls. For example, Contract Liability or Revenue. |
| Currency | The transaction currency that is used for the amount specified on the JE line. |
| Debit Amount | The debit amount. Either Debit Amount or Credit Amount field is mandatory for a JE line. The sum of debit amount must be equal to the sum of credit amount within the same JE set. |
| Credit Amount | The credit amount. The sum of credit amount must be equal to the sum of debit amount within the same JE set. |
| Account Code | The account code that is used to classify financial activities and balances within the general ledger. For example, ​​100-101-103-104-105-106. |
| Ex Rate Date | The date to be used to derive the exchange rate. |
| F Ex Rate | The functional exchange rate, which is the exchange rate from the transaction currency to the functional currency. |
| G Ex Rate | The reporting exchange rate, which is the exchange rate from the functional currency to the reporting currency. |
| Start Date | The start date of the journal entry. This field is used for waterfall journal entries. |
| End Date | The end date of the journal entry. This field is used for waterfall journal entries. |
| Sales Order Num | The number of the sales order line to which the journal entry is linked. |
| Sales Order Line ID | The ID of the sales order line to which the journal entry is linked. |
| RC ID | The ID of the revenue contract to which the journal entry is linked. |
| Unbilled Flag | The flag that indicates whether the JE linked to revenue contract impacts the unbilled portion of the revenue. Valid values are Yes and No. |
| Right to Bill Flag | The flag that indicates whether the JE linked to revenue contract impacts the unbilled AR account. Valid values are Yes and No. |
| Reversal Flag | The flag that indicates whether the journal entry is to be reversed in the reversal period specified in the JE header section.If it is set to No for the journal entry, it means it is the waterfall journal entry and Start Date and End Date fields must be specified on the JE lines. |
| Cost or VC Type | Indicates whether the journal entry is for costs or variable considerations. |
| Type Name | The name of cost type or VC type. |
| Description | A brief description of the journal entry for reference purposes. |
| Reference | Reference columns that are defined by the MJE_RC_LINE_FIELD_MAP lookup. The specified values on the journal entry will be copied to the corresponding columns in the RC line table. |

## Procedure ( 37.008.00.00 or Later)

1.  Navigate to Workbench > Journals. The Journals page opens.
2.  Click Download Template to download the JE template file, which is to be used in the subsequent steps.
3.  To create a journal entry, click the New icon (+).
4.  Specify the following details for the journal entries directly in the UI. Some fields already contain the default values as applicable. The required field is indicated by a red asterisk in the UI.

    Specify the following details for the journal entries directly in the UI. Some fields already contain the default values as applicable. The required field is indicated by a red asterisk in the UI.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/730bf045-9374-4ee3-be5c-7e2cefb17823?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjczMGJmMDQ1LTkzNzQtNGVlMy1iZTVjLTdlMmNlZmIxNzgyMyIsImV4cCI6MTc2NjYzNjk1MywianRpIjoiY2U2ODk3NjI3NTI0NGUzYWFkODcyZWQ5NTA0ZDFlNzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.24KnOTWZ8ZtCWITFv280UOsjLMOTRrlgScynuLpS_48)

    | Field | Description |
    | --- | --- |
    | JE Name | A unique name of the journal entry. This field is required. |
    | Org ID | The ID of the organization for the journal entry. This field is required. |
    | Book ID | The ID of the appropriate book for the journal entry. This field is required. |
    | Posting Period | The period for posting the journal entry. This field is required. |
    | SOB Name | The name of the set of books, which is populated from the Oracle application or other ERP system. This field is required. |
    | Category Code | The category code, which is defined by the CATEGORY_CODE lookup. This field is required. |
    | Reversal Period | The period to reverse the journal entries. |
    | Functional Currency | The functional currency used for the journal entries. This field is required. |
    | Exchange Rate Type | The type of exchange rate to be used. This field is required.To use the exchange rates that are specified in the uploaded file, select User.To derive the exchange rates from the Oracle application or from the RPRO_EX_RATE table by providing the related dates in the upload file, select other options accordingly.The options on the drop-down list are defined by the EX_RATE_TYPE lookup. |
    | Accounting Method | The revenue accounting method of the journal entries. This field is required. |
    | GL Transfer | Indicates whether the journal entries are eligible for accounting transfer. By default, it is Yes. |
    | Approval Currency | The currency that is used when the journal entries are submitted for approval. The value is configured by the APPRV_RULE_CURR profile and automatically populated in the UI. |
    | Memo | Additional information as plain texts. |

5.  After all the required fields are specified, you can either upload the JE lines in a file or directly add the JE lines on the UI.
6.  To directly add the JE lines on the UI, complete the following steps:
    1.  Scroll down to the Lines tab and click the Add Two Rows icon. Two empty rows are added to the table for one set of the JE lines. One is for the debit amount and the other for the credit amount.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dd6d6aae-5ca3-4a93-84cd-3d3ca12dc60b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRkNmQ2YWFlLTVjYTMtNGE5My04NGNkLTNkM2NhMTJkYzYwYiIsImV4cCI6MTc2NjYzNjk1MywianRpIjoiMzJjMmIyMzgzNDViNDA3YWJhMWU1MmEwNjMxMTJmNmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PNb8Z1-XxuoUeIU0NMlPm1j5HD6cnbgy1c5zWDryUi8)
    2.  Manually enter the details for each JE line.

    3.  Repeat the above steps to add more sets of JE lines as needed
7.  To upload the JE lines in a CSV file, complete the following steps:
    1.  Use the file that you downloaded in Step 2 as a template to fill in the JE details in a local file.
    2.  After the local file is ready, scroll down to the Lines tab and click the Upload icon (upwards pointing arrow).
    3.  Browse to the local file and upload it. After file upload is completed, JE lines in the uploaded file are displayed in the UI.
8.  To save the JE lines as a draft, click Save on the top right side of the UI. After that, the MJE status changes to New.If you are using version 37.012.00.00 or later, the validations are initiated when you save an MJE. This will help you identify your errors and resolve them before submission for approval.

9.  (Optional): To review the waterfall or JE schedules based on the MJE draft, use the Waterfall or Entries tab.

10.  To submit the MJE draft for approval, click Submit. If you are using a version prior to 37.012.00.00, the system will perform validations on the JE details upon submission. If any validation issue is identified, the MJE status changes to Error. The problematic lines will be highlighted in the UI.

11.  To fix the validation issue, edit the JE details, save your changes and then click Submit again.

After the MJE is submitted with no validation issues, the MJE status will change from New to Approval Pending.

## Procedure (prior to 37.008.00.00)

If the version of Zuora Revenue is prior to 37.008.00.00, complete the following steps to upload MJE to Zuora Revenue:

1.  Navigate to File Upload > Manual JE.

2.  To create an MJE, complete the following steps:

3.  On the Manual JE page, click the add icon (+) to add a journal entry.

4.  In the New Manual JE window, provide detailed information about the journal entry.

    | Field | Description |
    | --- | --- |
    | Name | A unique name of the journal entry. |
    | Book | The appropriate book for the journal entry. |
    | Period Name | The accounting period for the journal entry. |
    | Ex Rate Type | The type of exchange rate to be used.To provide the exchange rates in the upload file, select User.To derive the exchange rates from the Oracle application or from the RPRO_EX_RATE table by providing the related dates in the upload file, select other options accordingly.The options on the drop-down list are defined by the EX_RATE_TYPE lookup. |
    | SOB Name | The name of the set of books, which is populated from the Oracle application or other ERP system. For more information, see . |
    | Currency Code | The currency code, which is populated based on your selection of SOB Name. |
    | Category Code | The category code, which is defined by the CATEGORY_CODE lookup. |
    | Reversal Period | The period to reverse the JEs. The field is applicable only when Standard is selected for the MJE Type filed. |
    | Accounting Method | The revenue accounting method of JE. |
    | SOB ID | The ID of the set of books in the Oracle application or other ERP system. |
    | MJE Type | The type of MJE.Standard: The current open period or the specified period is used to create the new manual JE. Based on this template, debit and credit entries are created as different line entries, and the schedules are not ratable.Waterfall: The revenue start date, revenue end date, and the duration are provided and considered for schedules. Based on this template, a single line entry is created for both credit and debit entries, and the schedules are ratable. |

    Click the save icon. The manual JE is created and its status is displayed as New.

5.  To download the JE upload template, click Download Waterfall Template or Download JE Standard Template depending on the MJE type that you selected in the previous step.
6.  Fill in the data in the downloaded CSV file and save your changes in the local file.
7.  To upload the JE, hover the mouse over the JE line that you created in Step 2, and click the upload icon.
8.  The selected file is listed in the Uploaded Files section with more details. After the status of the uploaded file changes to Successfully Uploaded, the status of the JE line changes from New to Validated.

    Note: If an error occurs during the upload, the status of the JE line changes to Error. You must fix the error and then click the Validate icon (eye icon) .

    .

9.  To submit the MJE for approval, hover the mouse over the JE line in the Manual JE Entries section and click the Submit Approval icon (check mark)


You can review the JE summary and the approval information anytime. To do it, hover the mouse over the JE line and then click the JE Details icon

-   Review the summary in the JE Summary tab.
-   Review the errors reported during the MJE upload and validation in the Errors tab. If necessary, fix the errors and upload MJE again.
-   Review the approval information and related MJE approval rules in the Approvals tab.
-   Use the Manage JE Schedules tab to see the created manual journal schedules.

## What to do next

Before the MJE is approved, you can still do the following things:

-   Delete it after the MJE batch is created, after the MJE file is uploaded, or after the MJE data is validated.
-   Cancel the MJE approval request when the approval status is Pending.

Note:

Only the user who created the MJE batch has permission to delete it.

After MJE is uploaded and submitted to be approved, the approver must log into Zuora Revenue to review the MJE and then approve or reject it. For more information, see Approve or reject MJE .
