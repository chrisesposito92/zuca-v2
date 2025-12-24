---
title: "Predefined validation rules"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/predefined-validation-rules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:16.248Z"
---

# Predefined validation rules

The predefined validation rules in Zuora Revenue ensure data quality by validating source data against specific criteria. Transactions failing validation are marked with error codes and descriptions, remaining in the Inbound section until resolved. Users can view these rules and associated error messages in the UI, but cannot edit predefined conditions.

## Introduction

The predefined stage validation rules are a set of rules that validate the source data against specific criteria. These rules help verify the data quality before it is processed in Zuora Revenue. The transactions that fail the data validation process will be marked with the identified codes and the code descriptions in the UI. Those transactions will stay in the Zuora Revenue Inbound and cannot be collected. Navigate to Data Interface > Inbound and click the Errors - Transactions tab to find the errored transactions.

Refer to [Error messages in Zuora Revenue](/zuora-revenue/advanced-revenue-operations/zuora-revenue-ui/error-messages-in-zuora-revenue) for further details on each code.

## View validation rules

You can view the validation rules and the associated error messages in the UI.

-   To view the validation rules, navigate to Setups > Stage Validation . Both predefined and customized validation rules are listed on the page. For the predefined validation rules, you cannot edit the conditions that are set up for the rule. However, you can edit the filter in the rule to filter out the transaction lines to which the validation rule should be applied.

-   To view the predefined error code and associated error message for data validation, navigate to Setups > Application > Error Setup . The predefined error codes are listed as the standard type and have the prefix of RPRO. They are not editable.


## Active stage validation error codes

The following table lists all the enabled error codes:

-   Error code: This column lists the error code of each validation rule. The transaction that fails the validation will be marked with the identified error codes in the UI.
-   Explanation: This column describes the errors in the transaction data that are identified during the data validation process.

| Error code | Explanation |
| --- | --- |
| RPRO-00001 | The transaction line is not processed as the "Tran Type" value is not valid |
| RPRO-00002 | The transaction line is not processed due to invalid CV Eligible Flag value |
| RPRO-00003 | The transaction line is not processed due to missing Customer Name |
| RPRO-00006 | The transaction line is not processed due to missing Line Item Number |
| RPRO-0007 | The transaction line is not processed due to missing Invoice Qty |
| RPRO-0008 | The transaction line is not processed due to invalid LT Contract Liability |
| RPRO-0009 | The transaction line is not processed due to invalid currency code or invalid rounding on Ext List Price/Ext Sell Price |
| RPRO-00011 | The transaction line is not processed due to invalid Functional Ex Rate |
| RPRO-00012 | The transaction line is not processed due to invalid Global Ex Rate |
| RPRO-00013 | The transaction line is not processed as the revenue end date is before the revenue start date |
| RPRO-00014 | The credit memo is not processed due to missing start date |
| RPRO-00015 | The transaction line is not processed due to an invalid start date |
| RPRO-00016 | The transaction line is not processed due to an invalid end date |
| RPRO-00018 | The transaction line is not processed due to missing start date |
| RPRO-00020 | The transaction line is not processed due to invalid Deferred Segments |
| RPRO-00021 | The transaction line is not processed due to missing deferred segments |
| RPRO-00022 | The transaction line is not processed due to invalid Revenue Segments |
| RPRO-00023 | The transaction line is not processed due to missing revenue segments |
| RPRO-00030 | The RORD line is not processed due to missing Orig SO Line ID |
| RPRO-00035 | The transaction line is not processed due to missing invoice number |
| RPRO-00036 | The transaction line is not processed due to missing Invoice Line ID |
| RPRO-00039 | The transaction line is not processed due to invalid Cost Def Segments |
| RPRO-00040 | The transaction line is not processed due to missing Cost Def Segments |
| RPRO-00041 | The transaction line is not processed due to invalid Cost Rev Segments |
| RPRO-00042 | The transaction line is not processed due to missing Cost Rev Segments |
| RPRO-00043 | The transaction line is not processed due to invalid cost Functional Ex Rate |
| RPRO-00044 | The transaction line is not processed due to invalid Cost Global Ex Rate |
| RPRO-00045 | The transaction line is not processed due to invalid currency code or invalid rounding of the cost amount |
| RPRO-00046 | The transaction line is not processed due to invalid credit rule |
| RPRO-00047 | The credit memo line is not processed due to invalid credit rule on standalone CM |
| RPRO-00048 | The CST line is not processed due to invalid Cost type name |
| RPRO-00049 | The transaction line is not processed due to invalid Unbill Flag value |
| RPRO-00050 | The transaction line is not processed due to invalid term |
| RPRO-00051 | The transaction line is not processed due to missing Customer Number |
| RPRO-00052 | The transaction line is not processed due to invalid FV Eligible Flag value |
| RPRO-00053 | The transaction line is not processed due to invalid SOB ID |
| RPRO-00058 | The RORD line is not processed due to invalid Ext Sell Price |
| RPRO-00059 | The transaction line is not processed due to missing Ext Sell Price |
| RPRO-00061 | The transaction line is not processed due to invalid Rev Offset Segments |
| RPRO-00062 | The transaction line is not processed due to invalid Def Offset Segments |
| RPRO-00063 | The credit memo is not processed due to missing end date |
| RPRO-00066 | The transaction line is not processed due to invalid contract modification date |
| RPRO-00067 | The transaction line is not processed due to invalid exchange rate |
| RPRO-00068 | The transaction line is not processed due to invalid duration |
| RPRO-00069 | The transaction line is not processed due to invalid FV date |
| RPRO-00072 | The transaction line is not processed due to missing Order Quantity |
| RPRO-00075 | The transaction line is not processed as the specified start/end date does not match the specified duration |
| RPRO-00076 | The transaction is not processed due to missing F Ex Rate and/or G Ex rate |
| RPRO-00077 | The SO update line is not processed due to exchange rate mismatch between the SO update line and the SO line in the system |
| RPRO-00078 | The INV line is not processed due to the incorrect signage. The signage of the INV and the signage of the associated SO must be the same |
| RPRO-00079 | The SO update line is not processed due to CV Eligible Flag mismatch between the SO update line and the SO line in the system |
| RPRO-00082 | The RORD line is not processed due to currency mismatch between the RORD and the SO in the system |
| RPRO-00353 | The RORD line is not processed as the RORD start date and/or end date conflicts with the associated SO line |
| RPRO-00356 | The RORD line is not processed due to manual actions on the SO line |
| RPRO-00357 | The RORD line is not processed as the Ext Sell Price on the RORD is greater than the Net Sell Price on the associated SO line |
| RPRO-10000 | The transaction is not processed as the same SO Line ID is already processed in a different org |

## Deprecated validation codes

The following table lists all the enabled error codes:

| Error code | Description |
| --- | --- |
| RPRO-00003 | The Customer Name field is blank. |
| RPRO-00006 | The Line Item Num field is blank. |
| RPRO-00010 | The Functional Currency Field contains an invalid currency code. Check the currency setup in the Setups > Application > Currency to find the correct currency code to use. |
| RPRO-00016 | The End Date is earlier than December 31, 1947. |
| RPRO-00017 | The Start Date value is greater than the End Date value on the transaction line. The start date must be earlier than the end date. |
| RPRO-00019 | The Standalone flag is not specified for the CM transaction lines. |
| RPRO-00024 | The Contract Number is blank. |
| RPRO-00025 | The Contract Line ID is not available in Zuora Revenue. |
| RPRO-00026 | The Contract Line ID field is blank. |
| RPRO-00053 | The Set of Book Id field is blank. |
| RPRO-00056 | The specified Impairment Type value is invalid. Valid values for this field are CONTRACT IMPAIRMENT, NEW POB, R AND R WITHIN SSP or blank. |
| RPRO-00057 | The Original SO Line ID field is not specified for the reduction order (RORD) transaction lines. This field requires a value for the RORD line to be associated with a sales order line. |
| RPRO-00064 | The SO line with the specified SO Line ID on the invoice line does not exist in the system. Check the SO Lind ID field of the invoice line and ensure that the value is correct. |
| RPRO-00065 | The CT Line ID field is not available for the SO transaction lines in Zuora Revenue |
| RPRO-00073 | When Functional and Transaction Currency are different, the Functional Ex Rate should not be blank |
| RPRO-00074 | When Cost and Functional Currency are different, the Cost Functional Ex Rate should not be blank |
