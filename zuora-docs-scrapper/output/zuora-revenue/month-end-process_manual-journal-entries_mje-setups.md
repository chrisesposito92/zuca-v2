---
title: "MJE setups"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/manual-journal-entries/mje-setups"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:55.922Z"
---

# MJE setups

This document outlines the necessary configurations for MJE, including enabling validations, uploading SOB information, creating approval rules, and performing interface mappings to ensure seamless integration with the general ledger.

Based on your business needs, the following configuration might be required for MJE:

-   Enable required validations by configuring the predefined MJE profiles.
-   Upload SOB ID and currency code so that this information can be automatically populated in the MJE upload template.
-   Create MJE approval rules so that approval is required to approve the MJE.
-   Perform required interface mappings for the MJE to transfer required details back to the general ledger.
-   Choose the posting method for the MJE. MJE can be posted either at the summary level or at the detail level.

Go through the sections below to complete required MJE setups as necessary.

-   [Define MJE related lookups](#concept-lehekyty__title-822)

-   [Configure MJE profiles](#concept-lehekyty__title-831)

-   [Create MJE approval rules](#concept-lehekyty__title-827)

-   [Set up accounting segments](#concept-lehekyty__title-830)

-   [Upload SOB information](#concept-lehekyty__title-831)


## Define MJE related lookups

Some lookups are the key lookups related to MJE. You must define these lookups with appropriate lookup codes and values based on your business needs. Different lookups are applicable depending on the version of Zuora Revenue that is in use. However, the UI procedure is common.

The following lookups determine the selectable options when you configure some MJE related profiles. You must first define the lookup codes and values before you configure the related profile.

| Lookup name | Description |
| --- | --- |
| APPROVAL_RULE_CURRENCY_MJE | Defines the currency to be used in the MJE approval for the Hash Total amount. The defined lookup values will be listed for your selection when you configure the APPRV_RULE_CURR profile. |
| JE_EX_RATE_TYPE | Defines whether to bypass the exchange rate validation or how to validate the exchange rate. The defined lookup values will be listed for your selection when you configure the EX_RATE_VALIDATION profile.The exchange rates can be validated against the exchange rates in the Zuora Revenue standard table, RPRO_EX_RATES. However, it requires the exchange rates to be populated into the RPRO_EX_RATES table with the minimum data points including RATE_TYPE, FROM_CURRENCY, TO_CURRENCY, START_DATE, END_DATE, and EX_RATE during Zuora Revenue implementation process. |

The following lookups determine the selectable options when you perform the MJE related UI operations:

| Lookup name | Description |
| --- | --- |
| EX_RATE_TYPE | Defines the various types of exchange rates to be used in the MJE, such as daily exchange rate or corporate exchange rate. |
| CATEGORY_CODE | Defines the various category codes to be used in the MJE. |

Optionally, use the MJE\_RC\_LINE\_FIELD\_MAP lookup to define the mapping between MJE reference columns and the RC line columns. Defining this lookup can have the following benefits:

-   When you manually upload MJE to Zuora Revenue with these reference columns, Zuora Revenue will copy values from the uploaded MJE reference columns to the corresponding columns in the RC line table. So that these MJE reference columns can be displayed in all reports.
-   If you are creating manual JE based on the LT/ST schedules after the LT/ST reclassification process completes, Zuora Revenue will copy the values from the corresponding columns in the RC line table to the MJE reference columns.

You can define up to 15 reference columns for this lookup. In the following example, the Reference 1 field value of MJE is mapped to CSTMR\_NM value (customer name) of the RC line and Reference 2 field value is mapped to SALES\_REP\_NAME value (sales rep name) of the RC line. When you define this lookup value in the Edit Lookup Definition window, remember not to use the standard ID column values (such as Sales Order Line ID, RC ID, etc.) for the Lookup Value column. Otherwise, it might cause mapping conflicts.

| 1 | Reference1 | CSTMR_NM |
| --- | --- | --- |
| 2 | Reference2 | SALES_REP_NAME |

The following lookups determine the selectable options when you configure some MJE related profiles. You must first define the lookup codes and values before you configure the related profile.

| APPROVAL_RULE_CURRENCY_MJE | Defines the currency to be used in the MJE approval for the Hash Total amount. The defined lookup values will be listed for your selection when you configure the APPRV_RULE_CURR profile. |
| --- | --- |
| JE_EX_RATE_TYPE | Defines whether to bypass the exchange rate validation or how to validate the exchange rate. The defined lookup values will be listed for your selection when you configure the EX_RATE_VALIDATION profile.The exchange rates can be validated against the exchange rates in the Zuora Revenue standard table, RPRO_EX_RATES. However, it requires the exchange rates to be populated into the RPRO_EX_RATES table with the minimum data points including RATE_TYPE, FROM_CURRENCY, TO_CURRENCY, START_DATE, END_DATE, and EX_RATE during Zuora Revenue implementation process. |

The following lookups determine the selectable options when you perform the MJE related UI operations:

| Lookup Name | Description |
| --- | --- |
| EX_RATE_TYPE | Defines the various types of exchange rates to be used in the MJE, such as daily exchange rate or corporate exchange rate. |
| CATEGORY_CODE | Defines the various category codes to be used in the MJE. |
| ACTIVITY_TYPE_CODE | Defines the activity type codes that are to be used in the journal entry. |
| CR_ACTIVITY_TYPE | Defines the various CR activity types to be used in the MJE, such as revenue activity or deferral activity. |
| DR_ACTIVITY_TYPE | Defines the various DR activity types to be used in MJE. |
| REASON_CODE | Defines the various reason codes to be used in the MJE. |

Optionally, use the MJE\_RC\_LINE\_FIELD\_MAP lookup to define the mapping between MJE reference columns and the RC line columns. Defining this lookup can have the following benefits:

-   When you manually upload MJE to Zuora Revenue with these reference columns, Zuora Revenue will copy values from the uploaded MJE reference columns to the corresponding columns in the RC line table. So that these MJE reference columns can be displayed in all reports.
-   If you are creating manual JE based on the LT/ST schedules after the LT/ST reclassification process completes, Zuora Revenue will copy the values from the corresponding columns in the RC line table to the MJE reference columns.

You can define up to 15 reference columns for this lookup. In the following example, the Reference 1 field value of MJE is mapped to CSTMR\_NM value (customer name) of the RC line and Reference 2 field value is mapped to SALES\_REP\_NAME value (sales rep name) of the RC line. When you define this lookup value in the Edit Lookup Definition window, remember not to use the standard ID column values (such as Sales Order Line ID, RC ID, etc.) for the Lookup Value column. Otherwise, it might cause mapping conflicts.

| Sequence | Lookup Code (MJE Value) | Lookup Value (RC Line Value) |
| --- | --- | --- |
| 1 | Reference1 | CSTMR_NM |
| 2 | Reference2 | SALES_REP_NAME |

Complete the following steps to define a lookup in the UI:

1.  Navigate to Setups > Application.
2.  Click the left pointing arrow icon to open the side menu and click Lookup.
3.  Search and locate the target lookup on the page.
4.  Hover the mouse over the target line and click the Edit Lookup Definitions icon .
5.  In the Edit Lookup Definition window, click the (+) icon to add a line and specify the definition.
6.  Create as many lines as needed and then click the save icon. The definitions are saved. You can close the window.

## Configure MJE Profiles

Use the predefined profiles to configure the MJE functionality at the system level in Zuora Revenue. The following profiles are specific for MJE:

-   MJE\_ENABLEDThis profile enables the MJE functionality. When this profile is toggled to Yes, you can load and transact the MJE in Zuora Revenue.

-   SOB\_VALIDATIONThis profile enables validation for the ERP set of books during MJE upload.

-   EX\_RATE\_VALIDATIONThis profile enables validation for exchange rates during MJE upload. The listed options are defined by the JE\_EX\_RATE\_TYPE lookup.

-   APPRV\_RULE\_CURRThis profile specifies the currency to be used for the Hash Total amount based on which the MJE approval rule is applied. The listed options are defined by the APPROVAL\_RULE\_CURRENCY\_MJE lookup.

-   POST\_MANUAL\_JE\_SCHEDULESThis profile enables posting of the MJE to the general ledger.

-   MJE\_SUMMARY\_TRANSFERThis profile determines whether MJE posting can be performed at the summary level.

-   ENABLE\_MJE\_REHAULThis profile is applicable only to the existing customer who is upgrading from a version earlier than 37.008.00.00. Use this profile to determine whether you want to use the previous UI page to upload MJE or the new UI page that is introduced in 37.008.00.00. If this profile is set to No, you will still use the previous UI page to upload MJE.


Complete the following steps to configure the MJE related profile:

1.  Navigate to Setups > Application.

2.  Click the left pointing arrow icon to open the side menu and click Profiles.

3.  Search and locate the target profile on the page.

4.  Hover your mouse over the target line and click the pencil icon .

5.  In the Edit Profile window, update the system level value or the lookup value based on your needs

6.  Click the save icon and close the window.


## Create MJE Approval rules

As part of the policy configuration in Zuora Revenue, you must create MJE approval rules. After that, when MJE lines are validated and then submitted for approvals, these MJE approvals are required to authorize the MJE transactions and to create necessary accounting schedules.

1.  Navigate to Policies > Holds and Approvals.
2.  Open the side menu and click Approval Rules.
3.  To add the MJE approval rule, click the New Rule icon (+) . The New Approval Rule window opens.
4.  In the Approval Rule tab, select Manual JE for the Applied On field and enter a unique name for this rule in the Name field, optionally specify other fields as needed. Click the (+) icon to add a line and click to save the changes.
5.  In the Rule Criteria tab, specify the criteria to select the JE lines that are applicable to the current approval rule. Click the (+) icon to add a line and click to save the changes. For example, the JE Head Hash Total field is greater than 0.
6.  In the Rule Approvers tab, specify the approvers or approver roles who can approve the MJE. Refer to the following table for descriptions of each column in this tab.
    Note: The Approver Role, Days Lapsed for Hierarchy, and Approval Limits columns are available only if the ENABLE\_MJE\_REHAUL profile is set to Yes.

    | Column | Description |
    | --- | --- |
    | Seq | Determines the sequence in which the approval should be given by the approver or approver role when the approval is required from more than one approver.After the first approver approves the MJE, the next one will get notified to approve it, and so on. |
    | Approver Name | The name of the approver who is eligible to approve the MJE. Either an approver name or an approver role is mandatory. |
    | Approver Role | The role of the approvers who is eligible to approve the MJE. Either an approver name or an approver role is mandatory.If an approver role is specified without a specific approver name, it means all users who have been assigned the specified role will get notifications upon MJE submission and any one of them is eligible to approve the MJE. |
    | Days Lapsed for Hierarchy | Determines the number of days that approval is pending on the current approver or approver role before it goes to the next level of approver or approver role, which is specified by the Seq column. |
    | Approval Limits | Specifies the maximum amount of the MJE that the current approver or approver role can approve.If the MJE amount exceeds the specified limit for the current approver or approver role, this approver or approver role will be skipped during the approval process. |
    | Subscribed | Indicates whether the approver has subscripted to system notifications. |

7.  (Optional): To set a currency for the specified amount limit, use the

    Currency and Rate Type lists to select the appropriate option.

    The selected currency applies to the amount limits for all approvers within the same rule. If the MJE amount is submitted in a different currency, the system will use the Currency and Rate Type options to evaluate whether the submitted MJE amount exceeds the approver's amount limit. If you do not specify these two options, the system will directly compare the submitted MJE amount with the specified limit value.

8.  Save your settings and close the window.

## Approval rule example

The following table shows an example of the MJE approval rule. No currency and rate type options are specified.

| Seq | Approver Name | Approver Role | Days lapsed for hierarchy | Approval Limits | Subscribed |
| --- | --- | --- | --- | --- | --- |
| 1 | NULL | Revenue Manager | 3 | 200,000 | Yes |
| 2 | NULL | Revenue Director | 3 | 500,000 | Yes |
| 3 | NULL | Finance Controller |  |  | Yes |

Based on the settings, if an MJE amount is less than $200,000, approval from a revenue manager is required. The system will send out notifications to all revenue managers. After one of them approves the MJE, the system will then notify all revenue directors of it. If none of the revenue managers approves it within three days, the system will notify all revenue directors on the 4th day. If any of the revenue directors approve it, it goes to the Finance Controller next.

If an MJE amount is $300,000, which is beyond the approval limit of revenue managers, approval from a revenue manager is not required. Instead, it goes directly to the revenue directors. The system will notify all revenue directors to review and approve the MJE.

## Set up accounting segments

The accounting segments that are displayed in the JE standard or waterfall upload template are determined by the accounting segments enabled in the accounting setups.

Complete the following steps to change the accounting segments that are displayed in the JE upload templates:

1.  Navigate to Setups > Application.

2.  Click the left pointing arrow icon to open the side menu and click the Accounting Setup.

3.  On the Account Setup page, toggle the Display switch to Yes for the current segment to be displayed in the JE upload template.


## Upload SOB Information

The SOB name, SOB ID, and currency code information is defined in the upstream system. If you upload this type of information to Zuora Revenue, some fields can be automatically populated for MJE upload based on the uploaded information.

Complete the following steps to upload the SOB information to Zuora Revenue:

1.  Navigate to Setups > Application > Profiles.
2.  Locate and edit the CUSTOM\_CODE\_ALLOWED profile to set the system level value to Yes.
3.  Navigate to Setups > Application > Pre/Post Processor.
4.  Enable the MJE SOB Upload procedure.
5.  Navigate to File Upload > Custom.
6.  To add a template, click the New Template icon (+) .
7.  In the New Custom Upload Template window, enter JE SOB Upload in the Name field and select CSV for the File Type field.
8.  Click the save icon. The JE SOB Upload template is created.
9.  Click the Field Mapping tab to add the following fields to the template. The SET\_OF\_BOOKS\_ID, NAME, and CURRENCY\_CODE are required fields. Other fields are optional.

    Click the Field Mapping tab to add the following fields to the template. The SET\_OF\_BOOKS\_ID, NAME, and CURRENCY\_CODE are required fields. Other fields are optional.
    | Input value label | Input value type |
    | --- | --- |
    | SET_OF_BOOKS_ID | Number |
    | NAME | Character |
    | CURRENCY_CODE | Character |
    | SHORT_NAME | Character |
    | CHART_OF_ACCOUNTS_ID | Character |
    | DAILY_TRANSLATION_RATE_TYPE | Character |
    | ACTION | Character |

10.  Click the padlock icon to freeze the template and then click the downward pointing arrow icon to download the template
11.  In the downloaded file, fill in data according to definitions in the upstream system.
12.  Hover the mouse over the JE SOB Upload template and then click the upward pointing arrow icon to upload the file.
13.  In the File Upload window, click Choose File to select the local file and then click Upload.

After the file is uploaded, the SOB ID and Currency Code fields can be automatically populated based on the SOB name when you are creating an MJE template. For more information, see [MJE upload](/zuora-revenue/month-end-process/manual-journal-entries/mje-upload).

Note:

You can update the SOB information in a future upload. To update the existing data, set the ACTION value to NULL in the future upload. To delete the existing data, set the ACTION value to DELETE.
