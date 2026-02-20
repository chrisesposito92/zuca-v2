---
title: "Troubleshoot error messages in Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-ui/troubleshoot-error-messages-in-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:54.355Z"
---

# Troubleshoot error messages in Zuora Revenue

Zuora Revenue provides error codes and messages to identify and resolve issues. This document offers detailed explanations and corrective actions for each error message.

Zuora Revenue displays error codes with messages to help you find the root cause and fix the errors. The following content provides you with a detailed explanation and corrective action for each error message.

RPRO-00002 - The transaction line is not processed due to invalid CV Eligible Flag value

This error occurs when the flag value does not meet the requirements. Valid values for CV Eligible Flag are Y, N or blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactons in the source system to ensure the CV Eligible Flag is populated correctlyRe-send the transactions to ZR |

RPRO-00003 - The transaction line is not processed due to missing Customer Name

This error occurs when the Customer Name is not specified in the transaction. Customer Name is a required field.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure Customer Name is populatedRe-send the transactions to ZR |

RPRO-00006 - The transaction line is not processed due to missing Line Item Number

This error occurs when the Line Item Number is not specified in the transaction. Line Item Number is a required field.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure Line Item Number is populatedRe-send the transactions to ZR |

RPRO-00007 - The transaction line is not processed due to missing Invoice Qty

This error occurs when the Invoice Qty is not specified in the transaction. Invoice Qty is a required field for the following Line Types: INV, CM, CM-C, CM-R and CM-RO.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the billing transactions in the source system to ensure Invoice Qty is populatedRe-send the transactions to ZR |

RPRO-00008 - The transaction line is not processed due to invalid LT Contract Liability segment

This error occurs when the LT Contract Liability segment field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the Account Type tab to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing Segments | Correct the transactions in the source system to ensure the LT Contract Liability segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid Segment |  |

RPRO-00009 - The transaction line is not processed due to invalid currency code or invalid rounding on Ext List Price/Ext Sell Price

This error occurs when one of the following conditions is met:

For the currency issues:

| Scenario | Recommended solution |
| --- | --- |
| Misspelled currency code | Correct the currency code in the source systemDelete the errored transactions from the inbound dataResend the transactions to ZR |
| New currency code | Add the currency code in the systemRe-collect the transactionsNote: See Configure currency format for the setup. |

For the rounding issues:

| Scenario | Recommended Solution |
| --- | --- |
| Incorrect decimal points sent from the source system | Correct the rounding in the source systemDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Incorrect rounding set up in the system | Adjust the rounding in the systemRe-collect the transactionsNote: See Configure currency format for the setup. |

RPRO-00011- The transaction line is not processed due to invalid Functional Ex Rate

If the Transaction Currency and the Functional Currency are the same, the Functional Ex Rate must be 1. This error occurs when the Functional Ex Rate does not equal to 1.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Functional Ex Rate from the source system | Correct the transactions in the source system to ensure the Functional Ex Rate is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Either Transaction Currency or Functional Currency is not correct | Correct the transaction in the source system to ensure correct currency code is populatedDelete the errored transactions line from the inbound dataResend the transactions to ZR |

RPRO-00012- The transaction line is not processed due to invalid Global Ex Rate

This error occurs when the Global Ex Rate does not equal to 1. Note that, if the Functional Currency and the Reporting Currency are the same, the Global Ex Rate must be 1. The Reporting Currency is set up under Setups > Application > Profile and search profile REPORTING\_CURRENCY .

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Global Ex Rate from the source system | Correct the transactions in the source system to ensure the Global Ex Rate is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Incorrect Functional Currency from the source system | Correct the transactions in the source system to ensure the Functional Currency is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00014 - The credit memo is not processed due to missing start date

This error occurs when the Start Date is missing on the credit memo for this specific credit rule. When you enable this validation rule, the Start date is required if the credit memo has a Fixed Duration Credit Rule . See Credit Memo Transactions for additional information on credit rules.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Credit Rule | Correct the transactions in the source system to ensure the Credit Rule is populated correctly. Valid values for Credit Rule are P, L, F or blank.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Missing Start Date on the credit memo | Correct the transactions in the source system to ensure the Start Date is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00015- The transaction line is not processed due to invalid start date

This error occurs when the Start Date is earlier than the year 1947. Note that, the start date of the transaction line cannot be earlier than the year 1947.

| Recommended solution |
| --- |
| Correct the transaction in the source system to ensure the dates are populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00016- The transaction line is not processed due to invalid end date

The end date of the transaction line cannot be earlier than the year 1947. This error occurs when the End Date is earlier than the year 1947.

| Recommended solution |
| --- |
| Correct the transactions in the source system to ensure the dates are populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00018- The transaction line is not processed due to missing start date

This error occurs when the Start Date is missing on the transaction. When DURATION is specified on the transaction, the system calculates the End Date based on the Start Date plus Duration .

| Data Requirements |
| --- |
| Start Date is always requiredIf Duration is specified on the transaction, End Date is not needed. The system calculates the End Date based on the Start Date plus Duration .If both Start Date and End Date are specified on the transaction, Duration is not needed. The system calculates the Duration based on the dates.If Start Date , End Date and Duration are all specified on the transaction, the system ignores the specified End Date and calculates the End Date based on the Start Date plus Duration . |

| Recommended solution |
| --- |
| For the impacted transaction,Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the dates are populated correctlyRe-send the transactions to ZR |

RPRO-00020 - The transaction line is not processed due to invalid Deferred Segments

This error occurs when the Deferred Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the Account Type tab to view the Accounting Segments format.

| Scenario | Recommended Solution |
| --- | --- |
| Missing Segments | Correct the transactions in the source system to ensure the Deferred Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid Segment delimiters ( e.g.comma, colon or vertical bar) |  |

RPRO-00021 - The transaction line is not processed due to missing deferred segments

Deferred Segments are required for all transaction types, except CST transactions. This error occurs when the Deferred Segments field is blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Deferred Segments are populatedRe-send the transactions to ZR |

RPRO-00022 - The transaction line is not processed due to invalid Revenue Segments

This error occurs when the Revenue Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the tab Account Type to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing segments | Correct the transactions in the source system to ensure the Revenue Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid segment delimiters (e.g. comma, colon or vertical bar) |  |

RPRO-00023 - The transaction line is not processed due to missing revenue segments

This error occurs when the Revenue Segments field is blank. Revenue Segments are required for all transaction types, except CST transactions.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Revenue Segments are populatedRe-send the transactions to ZR |

RPRO-00030 -The RORD line is not processed due to missing Orig SO Line ID

This error occurs when the Orig SO Line ID is blank. Orig SO Line ID is required for RORD transactions..

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure Orig SO Line ID is populatedRe-send the transactions to ZR |

RPRO-00035 - The transaction line is not processed due to missing invoice number

This error occurs when the Invoice Number is blank. Invoice Number is required for all billing transactions, including transaction types: INV, CM, CM-C, CM-R and CM-RO.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Invoice Number is populatedRe-send the transactions to ZR |

RPRO-00036 - The transaction line is not processed due to missing Invoice Line ID

This error occurs when the Invoice Line ID is blank. Invoice Line ID is required for all billing transactions, including transaction types: INV, CM, CM-C, CM-R and CM-RO.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Invoice Line ID is populatedRe-send the transactions to ZR |

RPRO-00039 - The transaction line is not processed due to invalid Cost Def Segments

This error occurs when the Cost Def Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the Account Type tab to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing segments | Correct the transactions in the source system to ensure the Cost Def Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid segment delimiters (e.g. comma, colon or vertical bar) |  |

RPRO-00040 -The transaction line is not processed due to missing Cost Def Segments

This error occurs when the Cost Def Segments are blank. Cost Def Segments are required for CST lines.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Cost Def Segments are populatedRe-send the transactions to ZR |

RPRO-00041 - The transaction line is not processed due to invalid Cost Rev Segments

This error occurs when the Cost Rev Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the Account Type tab to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing segments | Correct the transactions in the source system to ensure the Cost Rev Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid segment delimiters (e.g. comma, colon or vertical bar) |  |

RPRO-00042 - The transaction line is not processed due to missing Cost Rev Segments

This error occurs when the Cost Rev Segments are blank. Cost Rev Segments are required for CST lines.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the Cost Rev Segments are populatedRe-send the transactions to ZR |

RPRO-00043 - The transaction line is not processed due to invalid cost Functional Ex Rate

This error occurs when the Cost Func Ex Rate does not equal to 1. If the Cost Currency and the Functional Currency are the same, the Cost Func Ex Rate must be 1.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Cost Func Ex Rate from the source system | Correct the transactions in the source system to ensure the Cost Func Ex Rate is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Incorrect Cost Currency from the source system | Correct the transaction in the source system to ensure correct currency code is populatedDelete the errored transactions line from the inbound dataResend the transactions to ZR |

RPRO-00044 - The transaction line is not processed due to invalid Cost Global Ex Rate

This error occurs when the Cost Global Ex Rate does not equal to 1. If the Functional Currency and the Reporting Currency are the same currency, the Cost Global Ex Rate must be 1.

Reporting Currency is set up under profile REPORTING\_CURRENCY . Navigate to Setups > Application > Profile to view the setup.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Cost Global Ex Rate from the source system | Correct the transactions in the source system to ensure the Cost Global Ex Rate is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Incorrect Functional Currency from the source system | Correct the transactions in the source system to ensure the Functional Currency is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00045 - The transaction line is not processed due to invalid currency code or invalid rounding on Cost Amount

This error occurs when one of the following conditions is met:

For the currency issues:

| Scenario | Recommended solution |
| --- | --- |
| Misspelled currency code | Correct the currency code in the source systemDelete the errored transactions from the inbound dataResend the transactions to ZR |
| New currency code | Add the currency code in the systemRe-collect the transactionsNote: See Configure currency format for the setup |

For the rounding issues:

| Scenario | Recommended solution |
| --- | --- |
| Incorrect decimal points sent from the source system | Correct the rounding in the source systemDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Incorrect rounding set up in the system | Adjust the rounding in the systemRe-collect the transactionsNote: See Configure currency format for the setup |

RPRO-00046- The transaction line is not processed due to invalid credit rule

This error occurs when the Credit Rule value does not meet the requirements. Valid values for Credit Rule are P, L, F or blank.

| Credit Rules | Glossary |
| --- | --- |
| P | Prorate |
| L | Last in first out |
| F | Fixed Duration |

If the Credit Rule is not specified on the credit memo transaction, the system considers the first in first out rule. See Credit Memo Transactions for additional information on credit rules.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Credit Rule is populated correctlyRe-send the transactions to ZR |

RPRO-00047 - The credit memo line is not processed due to invalid credit rule on standalone CM

This error occurs when the Credit Rule field is not blank. The Credit Rule field must be blank for Standalone CM transactions.

Standalone CM is defined as a CM transaction without an Orig Inv Line ID.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Credit Rule is populated correctlyRe-send the transactions to ZR |

RPRO-00049 - The transaction line is not processed due to invalid Unbill Flag value

This error occurs when the flag value does not meet the requirements. Valid values for Unbill Flag (also known as Right To Bill Flag ) are Y, N or blank.

See SO accounting entries for additional information on Unbill Flag (or Right to Bill Flag ).

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Unbill Flag is populated correctlyRe-send the transactions to ZR |

RPRO-00050 - The transaction line is not processed due to invalid term

This error occurs when the Term is 0 or negative. The Term must be greater than 0 or blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Term is populated correctlyRe-send the transactions to ZR |

RPRO-00051- The transaction line is not processed due to missing Customer Number

This error occurs when the Customer Number is not specified in the transaction. Customer Number is a required field when the validation rule is enabled.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure Customer Number is populatedRe-send the transactions to ZR |

If Customer Number is not a required field for your business scenario, disable the stage validation rule as needed.

RPRO-00052 -The transaction line is not processed due to invalid FV Eligible Flag value

This error occurs when the FV Eligible Flag value does not meet the requirements. Valid values for FV Eligible Flag (also known as SSP Eligible Flag ) are Y, N or blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the FV Eligible Flag is populated correctlyRe-send the transactions to ZR |

RPRO-00053 - The transaction line is not processed due to invalid SOB ID

This error is applicable to Oracle users only. This error occurs when the SOB ID is not specified. SOB ID is a required field for all transactions.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the SOB ID is populated correctlyRe-send the transactions to ZR |

RPRO-00058 - The RORD line is not processed due to invalid Ext Sell Price

Ext Sell Price (ESP) for RORD transactions must be in negative value or $0. This error occurs when the ESP is greater than $0.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Ext Sell Price is populated correctlyRe-send the transactions to ZR |

RPRO-00059 - The transaction line is not processed due to missing Ext Sell Price

Ext Sell Price (ESP) is required for all transactions, except for CST transactions. This error occurs when the ESP is blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Ext Sell Price is populated correctlyRe-send the transactions to ZR |

RPRO-00061 - The transaction line is not processed due to invalid Rev Offset Segments

This error occurs when the Rev Offset Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the tab Account Type to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing segments | Correct the transactions in the source system to ensure the Rev Offset Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid segment delimiters (e.g. comma, colon or vertical bar) |  |

RPRO-00062 - The transaction line is not processed due to invalid Def Offset Segments

This error occurs when the Def Offset Segments field contains invalid accounting segments based on the account setup. See Setups > Application > Account Setup and click the tab Account Type to view the Accounting Segments format.

| Scenario | Recommended solution |
| --- | --- |
| Missing segments | Correct the transactions in the source system to ensure the Def Offset Segments are populated correctly.Delete the errored transactions from the inbound dataResend the transactions to ZR |
| Invalid segment delimiters (e.g. comma, colon or vertical bar) |  |

RPRO-00063 - The credit memo is not processed due to missing end date

When this validation rule is enabled, End date is required when the credit memo has a Fixed Duration Credit Rule . This error occurs when the End Date is missing on the credit memo for this specific credit rule.

See Credit Memo Transactions for additional information on credit rules.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect Credit Rule | Correct the transactions in the source system to ensure the Credit Rule is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |
| Missing End Date on the credit memo | Correct the transactions in the source system to ensure the End Date is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

When the credit rule is set as F (Fixed Duration), Start Date and End Date are expected on the transaction to amortize the credit amount in the specified duration. If both dates are not specified on the transaction, the system will amortize the credit amount based on the percentage of the billed amount. If Start Date and End Date are not needed with Credit rule “F” for your business scenario, disable the stage validation rules (RPRO-00014 for Start Date and RPRO-00063 for End Date) as needed.

RPRO-00066 - The transaction line is not processed due to invalid contract modification date

This error occurs when the Contract Modification Date is before the SO Date . The Contract Modification Date must be later than the SO Date .

| Recommended solution |
| --- |
| Correct the transactions in the source system to ensure the Contract Modification Date is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00067 The transaction line is not processed due to invalid exchange rate

This error occurs when the exchange rate fields listed below have negative values.

-   Functional Ex Rate

-   Global Ex Rate

-   Cost Func Ex Rate

-   Cost Global Fx Rate


Note that exchange rates must have positive values.

| Recommended solution |
| --- |
| Correct the transactions in the source system to ensure the exchange rate is populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

RPRO-00068 - The transaction line is not processed due to invalid duration

This error occurs when the Duration is 0 or negative. Duration must be greater than 0 or blank.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Duration is populated correctlyRe-send the transactions to ZR |

RPRO-00069 - The transaction line is not processed due to invalid FV date

When the FV Date (also known as SSP Date ) is specified on the transactions, the system validates if the FV Date is later than the first day of the current open period. If the FV Date is blank, the system will skip the validation. This error occurs when the FV Date is earlier than the current open period.

| Recommended solution |
| --- |
| Correct the transaction in the source system to ensure the FV Date are populated correctlyDelete the errored transactions from the inbound dataResend the transactions to ZR |

Note: FV Date is needed when Derive SSP/RSSP Date is set to Line Level SSP Date under Contract Modification Revision Timeline. Navigate to Policies > Contract Modification and view under Revision Timeline for the setup. Also, see Timeline for contract modification for additional information.

RPRO-00072 - The transaction line is not processed due to missing Order Quantity

This error occurs when Ordered Qty is 0 or blank on SO and RORD transactions. Ordered Qty must be greater than 0 on SO and RORD transactions.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the Ordered Qty is populated correctlyRe-send the transactions to ZR |

RPRO-00075 - The transaction line is not processed as the specified start/end date do not match the specified duration

This error occurs when the system calculated duration does not match the specified duration on the transaction. When the transaction specifies Start Date , End Date and Duration , the system calculates the duration based on the start and end date, and validates against the specified duration.

| Validation Rule Status | Data Requirements |
| --- | --- |
| Enable | Start Date is always requiredIf Duration is specified on the transaction, the End Date is not mandatory. The system calculates the End Date based on the Start Date plus Duration .If both the Start Date and the End Date are specified on the transaction, the Duration is not mandatory. The system calculates the Duration based on the dates. |
| Disable | Start Date is always requiredIf Duration is specified on the transaction, End Date is not mandatory. The system calculates the End Date based on the Start Date plus Duration .If both Start Date and End Date are specified on the transaction, Duration is not mandatory. The system calculates the Duration based on the dates.If Start Date , End Date and Duration are all specified on the transaction, the system ignores the specified End Date and calculates the End Date based on the Start Date plus Duration . This error is not applicable when the validation rule is disabled. |

| Recommended solution |
| --- |
| For the impacted transaction,Delete the errored transactions from the inbound dataCorrect the transactions in the source system based on the requirements specified aboveRe-send the transactions to ZR |

RPRO-76 - The transaction is not processed due to missing F Ex Rate and/or G Ex rate

Functional Ex Rate and Global Ex Rate are required for the following conditions. The transactions will not be processed if the requirements are not met. Update the rates in the source system and re-send the transactions to ZR.

| Required Fields | Conditions |
| --- | --- |
| Functional Ex Rate | When Transaction Currency and Functional Currency are differentFor example, transaction currency is CAD and functional currency is USD |
| Global Ex Rate | When Functional Currency and Reporting Currency are different.For example, functional currency is USD and the reporting currency is EUR Reporting Currency is set up under profile REPORTING_CURRENCY . Navigate to Setups > Application > Profile to view the setup. |

RPRO-77 - The SO update line is not processed due to exchange rate mismatch between the SO update line and the SO line in the system

This error occurs when the Functional Ex Rate of the SO update line does not match the Functional Ex Rate of the SO line in the system. If the SO line in the system has not yet released revenue, an SO update line with a different rate will be processed. This error only applies to the lines with released revenue.

| Scenario | Recommended solution |
| --- | --- |
| The new exchange rate on the SO update line is not valid | Delete the errored-out event record from inbound dataCorrect the exchange rate in the source systemResend the SO update line to ZR if needed |
| The new exchange rate on the SO update line is valid | Manually defer the revenueRe-collect the SO update lineManually release the revenueNote: The functional balance of the previously recognized revenue will be reversed via the manual deferral. Upon collection of the SO update line and manual revenue release, the functional revenue balance will be scheduled based on the new rate and cumulative catch up of the functional revenue balance is expected in the current period. |

RPRO-79 - The SO update line is not processed due to CV Eligible Flag mismatch between the SO update line and the SO line in the system

When the revenue contract (RC) is under prospective allocation treatment, the CV Eligible Flag on the SO update line and the SO line in the system must be the same.

| Scenario | Recommended solution |
| --- | --- |
| The CV Eligible Flag on an SO update line is not valid | Correct the transaction in the source system to ensure the flag is populated correctlyDelete the errored SO update line from the inbound dataResend the SO update lines to ZR if needed |
| The CV Eligible Flag was incorrect in the system. The SO update line is to correct the flag | Switch the allocation from prospective to retrospectiveIn the RC, navigate to Allocation Management > Unfreeze > SwitchRe-collect the transactionsNote:Switching allocation to retrospective will have an impact on allocation revenue. The allocation will be retrospectively recalculated based on the current transaction price in the RC and the allocation revenue will be recognized as cumulative catch-up in the current period. Once the RC is switched to retrospective, the previous prospective allocation calculation will be wiped out and cannot be retrieved. |

RPRO-00082 - The RORD line is not processed due to currency mismatch between the RORD and the SO in the system

This error occurs when the RORD currency is not the same as the associated SO currency.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the currency is populated correctlyRe-send the RORD transactions to ZR |

RPRO-00353 - The RORD line is not processed as the RORD start date and/or end date conflicts with the associated SO line

This error occurs when:

The RORD start and end date must be within the associated SO start and end date range.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transaction in the source system to ensure the RORD dates are populated correctlyRe-send the RORD transactions to ZR |

RPRO-00356 - The RORD line is not processed due to manual actions on the SO line

When this validation is enabled and the attribute RORD Completion Review Flag ( SKIP\_RORD\_VALIDATION ) is set to N or blank on the RORD transactions, the system blocks the RORD transactions for further processing. This validation serves as a manual checkpoint for the users to review and validate the revenue contracts or RORD before the data collection.

To process the RORD transactions, update the RORD Completion Review Flag as Y and re-collect the transactions into ZR.

If the review is not required prior to the data collection for your business scenario, disable the stage validation rule as needed.

RPRO-00357 - The RORD line is not processed as the Ext Sell Price on the RORD is greater than the Net Sell Price on the associated SO line

To consume the RORD line, its Ext Sell Price (ESP) must be equal or less than the Net Sell Price (NSP) of the SO line in the system.

| Scenario | Recommended solution |
| --- | --- |
| ESP on RORD line is not correct | Reverse or cancel the RORD in the source systemDelete the errored transactions from the inbound dataRe-send new RORD lines with the correct ESP |
| NSP in the system is incorrect due to previously consumed CM, CM-R or RORD | Suppose the previous consumed transactions are incorrect, resulting in an incorrect Net Sell Price in the system. In that case, it is recommended that the ESP on the current RORD transactions be updated to adjust the revenue contract to the desired Net Sell Price .Note:Allocation was calculated based on the previous consumed transactions in the prior periods. Adjusting the current RORD transactions may correct the booking values of the contract but will not rectify the allocation.Please contact Zuora Global Support if you need further assistance. |

RPRO-00600 - The transaction line is not processed as the SO Line ID on the transaction does not match with any SO in the system.

The SO Line ID is used to reference the billing transactions to an SO line. If the SO Line ID is provided on the billing transaction (invoice or credit memo), the system will locate the associated SO line, and decrement the billing transaction against the SO line.

A billing transaction without a SO Line ID is treated as a standalone invoice or credit memo. Zuora Revenue will generate internal SO Line ID for the applicable billing transactions.

| Scenario | Recommended Solution |
| --- | --- |
| The SO Line ID of the billing transaction is incorrect. | Identify the root cause of the incorrect ID from the source systemIdentify the correct SO Line ID for the billing transaction.Reverse the transaction in the source systemRe-send a new transaction to ZR for processingDelete the errored transactions from the inbound data |
| The SO Line ID of the billing transaction is not blank for standalone invoices or credit memo | Identify why the applicable ID was sent from the source systemReverse the transaction in the source systemRe-send a new transaction to ZR for processingDelete the errored transactions from the inbound data |

RPRO-00601/RPRO-78 - The INV line is not processed due to the incorrect signage. The signage of the INV and the signage of the associated SO must be the same.

| Scenario | Expectation | Recommended solution |
| --- | --- | --- |
| The SO lIne has an Extended Selling Price (ESP) of $1000, and the invoice line is -$200. | If the SO has a positive ESP, the invoice line must be a positive value. | Identify the root cause of opposite signage.Reverse the transaction in the source systemResend a new transaction with the correct signage to ZRDelete the errored transactions from the inbound data. |
| The SO Line has an ESP of -$1000, and the invoice line is $200. | The invoice line must be a negative value if the SO has a negative ESP. |  |

RPRO-00602 - Encountered Internal error - Please contact the support team for further assistance. The transaction encounters an internal error. Please contact Zuora Global Support for further assistance.

RPRO-00603 - The upload file is not processed due to special characters “=”, “+”, “@” This error occurs when the profile ENABLE\_CSV\_DATA\_SANITIZATION is set to Block .

Remove the special characters from the upload file and reprocess it. Alternatively, you can review and update the profile set up as follows to process the upload file again.

| Field values | Expected Behavior |
| --- | --- |
| Block | The system will display an error if the special characters are not removed |
| Raw | The system will accept the special characters and process the file |
| Sanitize | The system will remove the special characters and process the file |

RPRO-00604 - Total SSP for the RC is $0

The sum of the Extended SSP in the revenue contract is $0. Analyze the error further to confirm if the Extended SSP of $0 is accurate.

A common scenario may drive a $0 Ext SSP in the revenue contract.

Scenario

Based on the SSP setup, $0 extended SSPs are derived in each line for a total of $0 SSP.

| SO Line ID | Items | Extended List Price | Extended Sell Price | Extended SSP |
| --- | --- | --- | --- | --- |
| SO1.1 | HW | 1000 | 600 | 0 |
| SO2.1 | SW1 | 500 | 200 | 0 |
| SO3.1 | SW2 | 500 | 200 | 0 |
| Total |  | 700 | 400 | 0 |

RPRO-00605 - Second level allocation is not performed as the second level allocation identifier does not exist in the transaction

Second-Level Allocation error occurs when the ENABLE\_LVL2\_ALLOCATION profile is configured to Yes due to the transaction's absence of a second-level allocation identifier. for further information.

| Scenario | Recommended solution |
| --- | --- |
| The second-level identifier field is mapped incorrectly in the profile. | Complete the following steps to review if the second-level identifier is configured correctly:Navigate to Setups > Application > Profiles and search for the LVL2_ALLOC_IDENTIFIER profileHover the mouse above the LVL2_ALLOC_IDENTIFIER lineClick the edit iconReview the System Level Value field to see if your configuration is accurateChange the configuration if neededReallocate the revenue contract |
| The second-level identifier field is mapped correctly, but the identifier field is missing from the transaction. | Identify why the identifier field is not populatedReverse the transaction in the source systemResend a new transaction with accurate values to ZR for processing |
| The transaction is sent incorrectly with the CV Eligible LVL2 Flag as Y. Second-level allocation is not expected in this scenario. | Identify the root cause of the incorrect flagReverse the transaction in the source systemResend a new transaction to ZR with the correct flag for processing |

RPRO-00606 - Second level allocation is not performed as the sum of second level allocation % is not equal to 100%

Second-Level Allocation is turned on but the total percentage of the second-level allocation within the same second-level allocation group does not equal to 100%.

| Scenario | Recommended solution |
| --- | --- |
| The percentage of the allocation is sent incorrectly | Review the Lvl2 Allocated Percent field within the second-level allocation group and identify the root cause of the incorrect percentage in the source systemReverse the transaction in the source systemResend a new transaction with correct values to ZR for processing |
| A second-level allocation eligible line is not processed due to an error in inbound data. | Identify the errored second-level allocation eligible line in the inboundReview and resolve the errored transaction in the inbound dataRe-collect the transaction to populate the second-level allocation |

RPRO-00607 - SSP allocation is not performed as unable to derive SSP.

This error occurs when ZR cannot derive the SSP from a transaction. See SSP setup for additional information.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The SSP template is not active for the current period | Each template has a start date and end date. Confirm the dates on templates related to the impacted transactions and ensure they are still active for the current period. | If the templates are incorrectly ended:Update or clear the end dateRe-allocate the revenue contractWhen the template is reactivated, this update may impact other transactions.If the templates are ended correctly:Create a new templateRe-allocate the revenue contractZR considers a period or an extra space an exception, resulting in an SSP error. |
| The values to define the SSP grouping are not valid or do not exist | For each attribute used for SSP determination, you must define the expected values for ZR to look up the SSP | Review the values specified in the SSP template. Confirm and match the values in the transactions to the SSP template.If the values do not exist or are misspelled in the template, insert the end date to deactivate the impacted SSP templateCopy the previous SSP template and set a new start dateAdd or correct the values in the template.Reallocate the revenue contractZR considers a period or an extra space an exception, resulting in an SSP error. |

RPRO-00608 - The transaction is not processed due to other errors in the bundle. Review and fix the errors on the bundle line(s) for further processing

This error occurs when any lines within the bundle encounter another error. Review and fix the error on the bundle line and re-collect the lines in ZR.

The following example shows bundle lines using the Bundle Parent Line ID. The parent and child transaction lines have the same ID values.

| Item | Bundle Parent Line ID |
| --- | --- |
| Parent sku | SO123-1 |
| Child sku 1 | SO123-1 |
| Child sku 2 | SO123-1 |
|  |  |

RPRO-00609 - Discount charge line is not processed due to missing parent charge line in the system

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Incorrect configuration in Zuora Billing for a parent charge. | The Exclude item booking from revenue field in Zuora Billing is configured as Yes for a parent charge resulting in the parent charge not being synced to ZR. | Update the Exclude item booking from revenue field in Zuora Billing for the parent chargeContact the Zuora support team to re-sync the parent charge to ZR |
| The parent and discount charges should be excluded from ZR. | The Exclude item booking from the revenue field in Zuora Billing is incorrectly configured to No for a discount charge and synced to ZR. | Update the Exclude item booking from revenue field in Zuora Billing for the discount chargeDelete the discount charge from the inbound |
| The parent charge line has not been processed due to other errors. | Use Parent Charge Num and Parent Charge Segment to identify the parent charge line in the inbound. Both parent and discount charges have the same values in both fields. | Identify the error on the parent charge line in the inboundReview and resolve the errors on the parent chargeRe-collect both parent charge and discount charge |
| The parent charge line from the source system is missing. | Technical errors have caused the parent charge line not to sync to ZR. | Contact the Zuora Global Support to re-sync the parent charge to ZR |

RPRO-00610 - The SO cancellation line is not processed due to outstanding billed quantity on the line

The SO cancellation line with a cancel flag configured as Y is not processed because the billed quantity on the SO line in the system is not fully canceled. To consume the SO cancellation line, the net billed quantity on the line must be zero.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The SO cancellation line is not valid | Incorrect cancellation sent from the source system | Review and investigate the intent of the cancellation from the source system If the SO line in ZR still has the outstanding billed quantityDelete the errored SO cancellation record from the inbound dataCorrect the booking in the source system |
| The SO cancellation line is valid, but the billed quantity is not fully canceled | See example below | Identify why the billed quantity on the SO line in the system is not offset to zeroGenerate the credit memo (CM-C) to ZRCollect the SO cancellation |

Scenario 2 Example:

The original SO has a quantity of 10, and two billed invoices with a total quantity of 7. When the SO cancellation is processed, the total billed quantity is 7, as no credit memo is processed to reduce the billed quantity.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Quantity |
| --- | --- | --- | --- | --- | --- |
| SO | SO123-1 |  |  |  | 10 |
| INV | SO123-1 | INV1 | INV1.1 |  | 5 |
| INV | SO123-1 | INV2 | INV2.1 |  | 2 |

Solution:

Create a credit memo (Tran Type is CM-C) to reduce the billed quantity.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Quantity |
| --- | --- | --- | --- | --- | --- |
| CM-C | SO123-1 | CM1 | CM1.1 | INV1.1 | 5 |
| CM-C | SO123-1 | CM2 | CM2.1 | INV2.1 | 2 |

RPRO-00611 - The SO update line is not processed because the Ext Sell Price (ESP) of the SO update line is less than the total invoiced (INV and CM-C) amount in the system

To consume the SO update line, its ESP must be equal to or greater than the total invoiced amount (INV and CM-C) in the system.

| Scenarios | Descriptions | Recommended solution |
| --- | --- | --- |
| SO update line is not valid | Incorrect update sent from the source system | Review and investigate the intent of the ESP update from the source system.Delete the errored SO record from the inbound dataUpdate the line from the inbound dataCorrect the booking in the source system |
| The new ESP on the SO update line is valid but the invoiced amount (INV and CM-C) is greater than the new value. | A credit memo must be created to reduce the billed amount | Process the credit memo before collecting the SO update line. See the below examples for further details. |

Example A:

The original SO has an ESP of $1000, and two invoices totaling $700 have been billed.

An SO update line with an ESP of $500 is sent to ZR, and this error appears. The ESP is less than the total billed amount of $700.

In this situation, ZR only accepts a SO update with an ESP of $700 or above.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Amount |
| --- | --- | --- | --- | --- | --- |
| SO | SO123-1 |  |  |  | $1000 |
| INV | SO123-1 | INV1 | INV1.1 |  | $500 |
| INV | SO123-1 | INV2 | INV2.2 |  | $200 |

Solution: If the intent is to update the SO with an ESP of $500, generate a credit memo(Tran type CM-C) to cancel the invoice, which reduces the invoiced amount to $500 ($500+$200-$200). The SO update with an ESP of $500 will then be processed.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Amount |
| --- | --- | --- | --- | --- | --- |
| CM-C | SO123-1 | CM1 | CM1.1 | INV2.2 | -$200 |

Example B:

The original SO has an ESP of $1000. Two invoices totaling $700 and a CM-C of—$200 have been billed, for a total invoiced amount of $500.

An SO update line with ESP of $300 is sent to ZR and this error appears. The SO update line has $300 ESP, which is less than the total billed amount of $500.

In this situation, ZR only accepts an SO update with an ESP of $500 or above.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Amount |
| --- | --- | --- | --- | --- | --- |
| SO | SO123-1 |  |  |  | $1000 |
| INV | SO123-1 | INV1 | INV1.1 |  | $500 |
| INV | SO123-1 | INV2 | INV2.2 |  | $200 |
| CM-C | SO123-1 | CM1 | CM1.1 | INV2.2 | -$200 |

Solution : If the intent is to update the SO with an ESP of $300, generate a credit memo (Tran type CM-C) to cancel the invoice, which reduces the invoiced amount to $0 ($500+$200-$200-$500). ZR will then process the SO update with an ESP of $300.

| Type | SO Line ID | INV Num | INV Line ID | Orig INV Line ID | Amount |
| --- | --- | --- | --- | --- | --- |
| CM-C | SO123-1 | CM2 | CM2.1 | INV1.1 | -$500 |

RPRO-00612 - The SO update line is not processed because the Ext Sell Price (ESP) of the SO update line is less than the total credit memo (CM and CM-R) amount in the system

This error occurs when the new ESP exceeds the total SO-based CM/CM-R amount on the line. A credit memo referencing the SO by using SO Line ID (Orig INV Line ID is blank) is considered an SO-based credit memo.

Example A:

Month 1 — The original SO has an ESP of $1000 and an invoice of $500 has been issued.

| Type | SO Line ID | Ext Sell Price | Net Sell Price |  | Type | SO Line ID | INV Num | INV Line ID | Invoice Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO123-1 | $1000 | $1000 |  | INV | SO123-1 | INV1 | INV1.1 | $500 |

Month 2 — A SO-based CM of $-700 is generated.

The credit memo ($700) is more than the invoice ($500), assuming the $200 invoice will be processed in the future.

| Type | SO Line ID | Ext Sell Price | Net Sell Price |  | Type | SO Line ID | INV Num | INV Line ID | Invoice Amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO123-1 | $1000 | $300 |  | CM | SO123-1 | CM1 | CM1.1 | -$700 |

If the new ESP is $600 on the SO update, the line will not be processed. In this scenario, ZR will accept only an SO update with an ESP of $700 or above.

Solution: If the intent is to update the SO with an ESP of $600, complete the following steps:

The CM and CM-R reversal transaction types also have the Tran type as CM and CM-R, respectively, with a cancel flag configured as Y.

As a result, the current ESP on the booking is $600. The net invoiced amount is $500. $100 is pending for billing.

The above example and the suggested solutions also apply to SO-based CM-R scenarios.

RPRO-00613 - The SO update line is not processed because the Ext Sell Price (ESP) of the SO update line is less than the revenue recognized in the system

The error is only applicable for transactions relevant to consumption POBs.

| Scenarios | Description | Recommended solution |
| --- | --- | --- |
| The new ESP on the SO update line is valid but the revenue recognized is greater than the new ESP value. | Consumption revenue is overstated. | Reverse the overstated revenue by processing negative usage before collecting the SO update lineManually deferring revenue on a consumption POB line is not allowed. |
| SO update line is NOT valid. | Incorrect update sent from the source system. | Review and investigate the intent of the ESP update from the source systemDelete the errored SO Update line from the inbound dataCorrect the booking in the source system |

RPRO-00614 - The SO update line is not processed due to the start date mismatch between the SO update line and the SO line in the system

This error occurs when the start date of the SO update line does not match the start date of the SO line in the system.

If the SO line in the system has not yet released revenue, an SO update line with a new start date will be processed. This error only applies to the lines with revenue released.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The new start date on the SO update line is valid | The revenue recognition started with an incorrect date from the previous SO line | Manually defer the revenueRe-collect the SO update line and the revenue will be released accordingly |
| The new start date on the SO update line is not valid | Incorrect update sent from the source system | Review and investigate the intent of the update from the source systemDelete the errored SO update line from the inboundCorrect the booking start date in the source systemResend the SO update line to ZR if needed |

RPRO-00615 - The SO update line is not processed due to the RTB flag mismatch between the SO update line and the SO line in the system

The Right to Bill (RTB) flag on the SO update line and the SO line in the system must be the same. If the SO line in the system does not have any released revenue, the SO update line with a new RTB value will be processed. The error applies to the lines with released revenue.

See SO accounting entries with RTB flag for more information.

| Scenarios | Description | Recommended solution |
| --- | --- | --- |
| RTB flag was sent incorrectly in the past. The SO update line is to change the RTB flag. | RTB flag defines unbill AR vs. CA/CL classification. Due to the incorrect RTB flag sent in the past, the current accounting on Unbill AR vs CA/CL classification in the RC is not correct. | Debook the entire order in the source systemRebook a new order with the correct RTB flagAn SO update to change the RTB flag is not recommended, as the accounting results on the Unbill AR vs. CA/CL classification may not be as you expect. |
| RTB flag on an SO update line is not valid. | Incorrect update sent from the source system. | Review and investigate the intent of the update from the source systemDelete the errored SO update line from the inboundCorrect the RTB flag in the source system |

RPRO-00616 - The SO update line is not processed due to different signage of the Ext Sell price between the SO update line and the SO line in the system

The Extended Sell price (ESP) signage on an SO update line and the SO line in the system must be the same.

| Scenarios | Description | Recommended solution |
| --- | --- | --- |
| The new ESP signage on the SO update line is not valid. | Incorrect update sent from the source system. | Review and investigate the intent of the update from the source systemDelete the errored SO update line from the inboundCorrect the ESP in the source system |
| The new ESP signage on the SO update line is valid. | It is rare to send a SO update with different signage on ESP. For example, change the value of the ESP from +$1,000 to -$1,000. | Delete the errored SO update line from the inboundDebook the line in the source systemRebook a new line with the correct ESP in the source system |

RPRO-00617 - The SO update line is not processed as a system-generated SO line does not allow certain fields to be updated.

A system-generated SO line has the SO Line ID beginning with REVPRO and is created when an invoice or a credit memo does not reference any SO. This error occurs when the SO Line ID is blank.

Currently, the system does not support SO update for certain fields on a system-generated SO line. The unsupported fields are as follows:

-   Ext Sell Price

-   Ext List Price

-   Unit Sell Price

-   Unit List Price

-   Ordered Qty

-   Revenue Start Date

-   Revenue End Date

-   Duration

-   Term

-   Deferred Segments

-   Revenue Segments

-   Intercompany Account

-   Contract Asset Account

-   Contract Impairment Account

-   Adjustment Liability Account

-   Adjustment Revenue Account

-   Contra Adjustment Revenue Account

-   Payables Account

-   LT Adjustment Liability

-   LT Def Cogs Acct

-   LT Contract Asset

-   Unbilled AR Account


If an update is needed for the above fields, follow the below steps:

-   Delete the errored SO update line from the inbound data.

-   Reverse the invoice or credit memo in the source system and collect them in ZR to offset the existing transaction.

-   Resend the invoice or credit memo with the correct values on the attributes or flags to ZR for processing.


RPRO-00619 - The INV line is not processed as the associated SO line in the system is canceled

This error occurs when the associated SO line is already canceled.

| Scenarios | Recommended solution |
| --- | --- |
| The invoice line is not needed | Review and investigate the intent of the invoice transaction from the source system.Reverse the INV from the source systemDelete the errored transaction from the inbound tableNo subsequent billings are expected on the line as the SO line is canceled. |
| The invoice line is needed but has an incorrect reference ID to the canceled SO | Identify the correct reference IDReverse the invoice from the source systemResend the invoice with the correct reference to an active SODelete the errored transactions from the inbound |
| The invoice line is needed, but the SO line was incorrectly canceled in ZR previously | Identify why the SO line was previously canceled in the systemReverse the invoiceRebook a new SO and generate INVs from it.Once an SO is canceled, ZR does not support reversing the SO cancellation. |

RPRO-00620 - The RORD line is not processed as the associated SO line in the system is canceled

| Scenarios | Recommended solution |
| --- | --- |
| The RORD line is not needed or duplicate. | Review and investigate the intent of the RORD transaction from the source systemReverse the RORD from the source systemDelete the errored transaction from the inbound tableNo additional RORD is expected on the line after the cancellation of SO. |
| The RORD line is needed but has an incorrect reference ID to the canceled SO. | Identify the valid SO line for the RORD in the source systemReverse the de-booking action from the source systemRe-send the RORD line with the correct reference to an active SODelete the errored transactions from the inbound table |

RPRO-00621/RPRO-00657 - The credit memo line is not processed as the credit memo amount is greater than the amount of the associated INV

This is a data issue in the upstream system when the credit memo amount exceeds the referenced invoice amount. Review and confirm the credit memo amount against the associated invoices. Correct the credit memo in the source system and re-send it to ZR.

For Zuora’s OTR customers, this error occurs when the applicable invoice was previously fully or partially offset by other ad-hoc credit memos. Please contact Zuora Global Support for further assistance.

It is recommended that an ad-hoc credit memo from ZB be treated as a standalone credit memo in ZR. This is to prevent data corruption. By setting the original invoice line ID as null on the ad-hoc credit memo before ZR collection will ensure proper data and accounting results.

RPRO-00622 - The INV line is not processed as this INV transaction will overstate the SO sell price

The ALLOW\_OVERSTATED\_INVOICE profile is configured for handling your company’s policy on the allowance or disallowance of overbilling on a stated booking. Once the profile is updated, ZR applies the rule setting to all future transactions.

This error occurs when the ALLOW\_OVERSTATED\_INVOICE profile is configured to No. Based on the profile configuration, the system will not collect any invoice transactions if the total billed amount exceeds the original booking amount (net selling price).

| Scenarios | Recommended solution |
| --- | --- |
| The invoice line is not needed | Identify why the invoice was created in the source system.Reverse the invoice from the source system.Delete the errored invoice transaction from the inbound table. |
| ALLOW_OVERSTATED_INVOICE profile configuration is not correct | Navigate to Setups > Application > Profiles and search for the ALLOW_OVERSTATED_INVOICE profile.Click the edit icon.Toggle the System Level Value field to Yes . |

RPRO-00623 - The INV line is not processed as this INV transaction will overstate the SO quantity

The ALLOW\_OVERSTATED\_INVOICE profile is configured for handling your company’s policy on the allowance or disallowance of overbilling on a stated booking. Once the profile is updated, ZR applies the rule setting to all future transactions.

This error occurs when the ALLOW\_OVERSTATED\_INVOICE profile is configured to No. Based on the profile configuration, the system will not collect any invoice transactions if the total billed quantity exceeds the original quantity on the SO.

| Scenarios | Recommended solution |
| --- | --- |
| The invoice is not needed | Identify why the invoice was created in the source systemReverse the invoice from the source systemDelete the errored invoice transaction from the inbound table |
| ALLOW_OVERSTATED_INVOICE profile configuration is not correct | Navigate to Setups > Application > Profiles and search for the ALLOW_OVERSTATED_INVOICE profile.Click the edit icon.Toggle the System Level Value field to Yes . |

RPRO-00624/RPRO-00654 - The credit memo line is not processed as the referenced INV does not exist in the system

This error occurs when the original Invoice Line ID on the credit memo does not exist in the system.

| Scenarios | Recommended solution |
| --- | --- |
| The credit memo line is needed, but the reference ID is not correct | Identify the correct reference ID in the source system.Reverse the credit memo in the source systemRe-send the credit memo with the correct reference to ZRDelete the errored transactions from the inbound table |
| The referenced invoice is in inbound due to other errors | Identify the errored invoice transaction in the inbound fileReview and resolve the errors on the referenced invoiceCollect the invoice to process the credit memo accordingly |
| The referenced invoice is not sent or synced into ZR | For OTR customers, please contact Zuora Global Support for further assistance.For non OTR, complete the following steps:Identify why the invoice line was not sent or synced to ZRRe-send or sync the invoice to ZRCollect the invoice to process the credit memo accordingly. |

RPRO-00625 - The CST line is not processed as the cost type does not match with the cost type for the specific POB template of the SO line

| Scenarios | Description | Recommended solution |
| --- | --- | --- |
| The cost type value is not properly configured in ZR. | Correct cost type value is sent from the source system but the value is not set up correctly in ZR. | Navigate to Policies > Performance ObligationsSelect the applicable POB template and edit the template as requiredUnder the Cost Treatment tab, add the cost typeCollect the CST line accordingly |
| The cost type value on the CST line is not valid. | Incorrect cost type value sent from the source system. | Identify the root cause of the incorrect values in the source systemDelete the errored transaction from the inbound tableRe-send the transaction with the correct values from the source system to ZRCollect the CST line accordingly |

RPRO-00626 - Encountered Internal error - Please contact the support team for further assistance

This error occurs when a transaction encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00627/RPRO-00013 - The transaction line is not processed as the revenue end date is before the revenue start date

The revenue start date must be before or equal to the revenue end date.

| Type | Recommended solution |
| --- | --- |
| OTR customer | Please contact Zuora Global Support or your system administrator for further assistance to review if the error is due to customizations or data augmentation. |
| Standalone Zuora Revenue customer | Identify the root cause of the incorrect dates in the source systemDelete the errored transaction from the inbound table.Re-send the transaction with the correct dates from the source system to ZR. |

RPRO-00628 - The transaction is not processed as both Def Offset and Rev Offset segments have values

Under offset accounting setup and requirements, only one type of offset segment (Def Offset or Rev Offset) is allowed. See Offset accounting for additional information.

Complete the following steps to resolve the error:

-   Identify why both the segment values are sent to ZR for an impacted line.

-   Reverse the transaction in the source system.

-   Re-send the transaction with the proper segment values from the source system to ZR.


RPRO-00629/ RPRO-00001 \- The transaction line is not processed as the "Tran Type" value is not valid

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| The value of the transaction type is not valid. | The following are the supported transaction types:SOINVCMCM-CCM-RCM-DCM-VCINV-VCCSTRORDCM-RO | Identify the root cause of the incorrect transaction type in the source systemReverse the transaction in the source systemRe-book the transaction and send it to ZRDelete the errored records in the inbound table |

RPRO-00630 - The SO line is not processed due to missing SO line id

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Missing SO Line ID | All SO lines must have an SO Line ID value. | For Non-OTR:Identify the root cause of the missing SO Line ID in the source system.Delete the errored transaction from the inbound table.Re-send the transaction with the correct SO Line ID from the source system.For OTR:Please contact Zuora Global Support for further assistance. |

RPRO-00631 - The CST line is not processed due to missing Cost amount

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The Cost amount is missing | Cost amount is required for all CST lines. | Identify the root cause of the missing cost amount in the source system.Delete the errored transaction from the inbound table.Re-send the transaction with the correct cost amount from the source system. |

RPRO-00632 - The CST line is not processed due to missing Cost Type Name

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Cost Type Name is missing | CST line requires to have Cost Type Name | Identify the root cause of the missing Cost Type NameDelete the errored transaction from the inboundRe-send the transaction with the correct values on Cost Type Name from the source system |

RPRO-00633/RPRO-00634/RPRO-00048 - The CST line is not processed due to invalid Cost type name

All CST lines require a valid Cost Type Name. Cost Type ID should be blank.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The Cost Type Name value is invalid | Cost Type Name should match with the names already set up in ZR for all CST linesNote : ZR considers a period or an extra space as an exception | Identify the root cause of the invalid Cost Type Name in the source systemDelete the errored transaction from the inboundRe-send the transaction with the correct name from the source system |

RPRO-00635 - The transaction is not processed due to missing INV line ID

| Scenarios | Description | Recommended solution |
| --- | --- | --- |
| The INV Line ID is missing | INV Line ID is required for the below Tran Types:INVCMCM-CCM-RRORDCM-RO | For Non-OTR:Identify the root cause of the missing INV Line ID in the source system.Reverse the transaction in the source systemsRe-process the transaction with the correct IDDelete the errored transactions from the inbound table.For OTR:Please contact Zuora Global Support for further assistance. |

RPRO-00636 - The INV line is not processed as Orig SO line ID should be blank

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The Orig SO Line ID contains a reference. | The INV Tran Type lines do not require any Orig SO Line ID’s reference. | For Non-OTR:Identify why the Orig SO Line ID is populated in the INV transaction.Reverse the INV transaction in the source system.Re-process the INV transaction without any Org SO Line ID.Delete the errored transactions from the inbound table.For OTR::Please contact Zuora Global Support for further assistance. |

RPRO-00637 - The credit transaction line is not processed as both Orig INV line ID and Orig SO line ID have references. Only one reference is allowed on a credit transaction

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Both Orig INV Line ID and Orig SO Line ID have references. | Only one reference (Orig INV Line ID or Orig SO Line ID) is needed for credit transactions. | For Non - OTR:Identify why both reference IDs are populated on the credit transactions in the source systemDetermine which reference ID is needed on the transaction.Reverse the transaction in the source system and re-process the credit transaction with the correct reference ID.Delete the errored transactions from the inboundFor OTR: Please contact Zuora Global Support for further assistance. |

RPRO-00638 - The CMC line is not processed due to missing references. Either Orig INV line ID and Orig SO line ID should have a reference

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The line is either missing an Orig INV Line ID or an Orig SO Line ID | A reference to the originating transaction (Orig INV Line ID or Orig SO Line ID) is required for credit transactions. | For Non - OTR:Identify why the reference IDs are not populated on the credit transactions in the source systemDetermine which reference ID is needed on the transactionReverse the transaction in the source system and re-process the credit transaction with the correct reference IDDelete the errored transactions from the inbound tableNote: For Non - OTR, referencing a CM-C to a SO (using the Orig SO Line ID) may result in incorrect accounting from future transactions. Zuora recommends you reference a CM-C to an invoice (using Orig INV Line ID).For OTR: contact Zuora Global Support for further assistance |

RPRO-00639 - The SO line is not processed due to invalid impairment type values

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Impairment type value is invalid | To process a contract impairment accounting, the system requires an Impairment type. The value on the Impairment type field must be blank or should contain one of the following:Contract ImpairmentNew POBR AND R within SSPRetrospectiveNew POB ImmediateNew POB Ratable | Identify the root cause of the incorrect impairment typeRe-send the transaction with the correct impairment type to ZRDelete the errored transactions from the inbound table |

See Contract Impairment for further details.

RPRO-00641 - The CST line is not processed as the cost management module is not enabled

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The cost management module is not enabled | The CST lines are used for cost accounting.The cost management module must be enabled to process CST lines.Note: Cost management is an add-on module. | Contact your Customer Success Manager for more information about the Cost moduleDelete the errored transaction from the inbound if the CST line was sent by mistake |

RPRO-00642 - The SO line with cost amount is not processed as the cost management module is not enabled

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| The cost management module is not enabled | Cost Amount is used for cost accounting. The cost management module must be enabled to process the SO lines with cost amounts.Cost management is an add-on module | Contact your Customer Success Manager for more information about the Cost moduleDelete the errored transaction from the inbound if the CST amount was sent by mistake |

RPRO-00643 - Revenue on the child POB is not released as the revenue on the parent POB is not released

The revenue on a parent's POB must first be released before a Child POB can be released. Under the POB template setup, the child POB is set up with a POB dependency and links to a parent POB. Navigate to Policies > Performance Obligations to locate the applicable POB template and access the POB dependency to review the setup.

| Scenario | Recommended solution |
| --- | --- |
| Revenue on parent POB is not released | Identify why the revenue on the parent POB is not releasedRelease the parent POB if applicableAfter the revenue of the Parent POB is released, release the child POB accordingly |
| The POB dependency setup is not correct | If the impacted line is not expected to link with other POBs, review the POB dependency setup and adjust it accordinglyAfter fixing the dependency, release the impacted line accordingly |

RPRO-00644 - Revenue is not released as both revenue start date and revenue end date are outside of the ZR accounting calendar

Navigate to Setups > Applications \> Accounting Calendar to review the calendar. To release the revenue, the periods associated with the start date and end date must be set up correctly in ZR to release the revenue.

| Scenario | Recommended solution |
| --- | --- |
| The revenue start and end dates are not correct | Identify the root cause of the incorrect dates in the source systemReverse the transaction in the source systemResend a new transaction to ZR for processingDelete the errored transactions from the inbound table |
| The revenue start and end dates are accurate, but the periods are not available in the ZR accounting calendar | Contact the Zuora Global Support for further assistance to extend the accounting calendarProcess the line again once the calendar is extended |

RPRO-00645 - Encountered Internal error - Please contact the support team for further assistance The transaction encounters internal errors. Contact the Zuora Global Support for further assistance.

RPRO-00646 - The SO for the deleted amendment is not processed as the same deleted amendment was previously processed in ZR

This error applies to OTR only and is applicable if the CONSUME\_DELETED\_TRANSACTION profile is configured to Yes.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Duplicate deleted amendment SO | The deleted amendment SO line was previously processed in ZR | Delete the duplicated line from the inbound table. |

RPRO-00647 - The SO with previous charge version is not processed and the same charge version was previously processed in ZR

This error applies to OTR only.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| A duplicate SO line with the previous charge version was sent to ZR | The SO line with the previous charge version was already processed in ZR | Delete the duplicate line from the inbound table. |

RPRO-00648 - The transaction is not processed as it is associated with the charge version not existed in ZR

This error normally occurs when the associated SO lines have a future SO book date. ZR does not collect any transactions beyond the current open period.

Scenario 1 - Invoiced in the current period but it is associated with a version not collected into ZR.

This scenario is applicable when the Past End-of-Term profile is turned on in ZB. See billing rules to understand the implications of billing transactions.

Example:

On Jan 1, 2024, a subscription is booked and is partially billed.

| Tran Type | SO Line ID | Version | Book Date | Invoice Date | Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO1.1 | 1 | 1/1/24 |  | 1000 | 1/1/24 | 12/31/24 |
| INV | SO1.1 | 1 |  | 1/1/24 | 500 | 1/1/24 | 6/30/24 |

On July 1, 2024, a new charge to the subscription was added, and version 2 was created with August 2024 as the booking date. In the open period of July 2024, the system will not consume these SO transactions as the booking date is in the future.

| Tran Type | SO Line ID | Version | Book Date | Invoice Date | Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SO | SO1.1 | 2 | 8/1/24 * |  | 1000 | 1/1/24 | 12/31/24 |
| SO | SO2.1 | 2 | 8/1/24 * |  | 800 | 8/1/24 | 12/31/24 |

Note - These transactions are not collected in ZR in the month of July 2024.

In the same period in July 2024, a bill run generates an invoice on the first charge. As the Past End-of-Term profile is turned on for the invoice, the invoice on the first charge can bill more than the initial booking values for the period beyond the initial term end date of the charge.

| Tran Type | SO Line ID | Version | Book Date | Invoice Date | Amount | Revenue Start Date | Revenue End Date |
| --- | --- | --- | --- | --- | --- | --- | --- |
| INV | SO1.1 | 2 |  | 7/15/24 | 550 | 1/1/24 | 1/31/25 |

During the current period of July 2024, the system will error out the INV even if the invoice date is in the current period. The INV is referenced to SO1.1 (Version 2), where the Book Date is in August 2024, which is not collected in ZR in July 2024

Scenario 2—The proration credit memo is for the current period, but the amendment date is in the future.

On January 1, 2024, a subscription is booked and fully billed.

| Tran Type | SO Line ID | Version | Book Date | Invoice Date | Amount |
| --- | --- | --- | --- | --- | --- |
| SO | SO1.1 | 1 | 1/1/24 |  | 1000 |
| INV | SO1.1 | 1 |  | 1/1/24 |  |

On February 1, 2024, amend the subscription to reduce the price to $600 with the book date of March 1 2024. However, a proration credit memo is generated for $400 on February 1 2024

| Tran Type | SO Line ID | Version | Book Date | Invoice Date | Amount |
| --- | --- | --- | --- | --- | --- |
| SO | SO1.1 | 2 | 3/1/24 * |  | 600 |
| CM-C | SO1.1 | 2 |  | 2/1/24 | -400 |

Note - This transaction is not collected in ZR in the month of February 2024.

During the current period of February 2024, the system will not process the SO with the future book date. Although the credit memo has the date in February 2024, the system will error out the credit memo as it is tied to Version 2 amendment.

For both scenarios above, it is not recommended that amendments be made with a future date as the system would not consume such bookings. For the impacted line,

-   Recommended Solution 1—Do not take action in the current period on future SO bookings and the associated invoice or credit memo. Postpone the collection until the respective SO period is open.


Postponing the collection on both SO and invoice/credit memo will result in discrepancies in different areas.

-   Reconciliation of discrepancies in the booking and billing between ZB and ZR.

-   Reconciling variances between revenue contract roll forward report and general ledger.

-   Billed and unbilled revenue classification discrepancies may lead to different CA/CL netting or unbilled AR results.

-   Revenue recognition discrepancies depend on the POB types. For example, upon billing POB.


-   Recommended Solution 2 - If waiting for the future date to mature is not an option, contact the Zuora Global Support for further assistance to resolve the SO book date issue.


For other scenarios not listed above, contact the Zuora Global Support for further assistance.

RPRO-00650 - The ramp allocation is not performed due to inconsistent average pricing methods under the same ramp group

Term and Volume are two average pricing methods for ramp allocation. Under the same Ramp group defined by you using the RAMP\_DEAL\_REF, only one method is allowed for the ramp calculation.

| Scenario | Recommended Solution |
| --- | --- |
| Inconsistent methods under the same ramp group | Identify the root cause of the incorrect method sent to ZRRe-send the transaction with the correct AVG_PRCING_MTHD value to ZR to populate the ramp allocation |

If the transaction has no value under the AVG\_PRCING\_MTHD, ZR will consider the method based on the setup under the AVERAGE\_PRICING\_METHOD profile. If the transaction uses the Term or Volume method from the source system, the transaction values will supersede the defaulted method. See Ramp allocation for more information about the ramp configuration and calculations.

RPRO-00651- Ramp allocation under the same ramp deal does not result in straight-line revenue. A hold is applied to the RC

This error occurs when the per-day-per-unit rate is not the same across all the ramp lines. Revenue is not recognized on a straight-line basis under the same ramp group. A hold is applied to the RC for you to review further.

| Scenarios | Recommended solution |
| --- | --- |
| Rounding issues | Review the Net Revenue waterfall for the differences on the ramp lines.If the differences are acceptable, release the hold in the revenue contract.Note: The RAMP_HOLD_THRESHOLD profile is to set the threshold for rounding differences. This error will not appear if the per-day-per-unit difference is within the defined threshold. |
| Other scenarios | Contact the Zuora Global Support for further assistance.After the issue is resolved, release the hold in the RC |

See Ramp allocation for more information about unit rate calculation.

RPRO-00655 - The credit memo cancellation transaction is not processed as the referenced orig INV line ID does not exist in ZR

This error occurs when the orig INV Line ID on the credit memo cancelation does not exist in the system.

| Scenario | Recommended Solution |
| --- | --- |
| Incorrect reference in original invoice Line ID | Identify the correct reference idReverse the credit memo in the source systemRe-send the credit memo with the correct reference ID to ZRDelete the errored transactions from the inbound |
| The referenced credit memo is in inbound due to other errors | Review and resolve the errors on the referenced credit memoCollect the credit memo and the credit memo cancellation will be processed accordingly. |
| The referenced INV is not sent or integrated into ZR | For Zuora’s order to revenue datasets , please contact Zuora Global Support for further assistance.For non-Zuora’s order to revenue datasets,Identify why the credit memo line was not sent or integrated to ZRRe-send or integrate the credit memo to ZRCollect the credit memo and the credit memo cancelation will be processed accordingly |

RPRO-00659 - The CM-C transaction is not processed as the referenced SO line does not have any billing.

This error occurs when the CM-C is referenced to a SO line which does not have any billing transactions in the system. This is applicable to OTR only.

| Scenario | Recommended solution |
| --- | --- |
| The INV is not synced or integrated into ZR | Please contact Zuora Global Support for further assistance |
| The INV(s) is in inbound due to other errors | Review and resolve the errors on the INV(s)Collect the INV(s) and the CM-C will be processed accordingly. |

RPRO-00660 - The credit memo transaction is not processed as the credit memo amount is more than the available invoice amount

The credit memo amount is more than the aggregate amount of all the previously processed invoices/credit memos on the transaction.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Missing invoice(s) from the source system | Associated invoice(s) generated from the source system but not yet processed into ZR. | Collect the invoice(s)Then collect the credit memo |
| Unprocessed invoice(s) due to other errors | Associated invoice(s) are errored out in inbound | Resolve the errors on the invoicesCollect the invoice(s)Then collect the credit memo |
| ncorrect credit memo amount | Incorrect credit memo generated from the source system | Review and confirm the credit memo amountTake appropriate actions to correct the credit memo in the source systemRe-send the credit to ZR |
| Incorrect credit memo(s) processed in the past due to incorrect referencing | Previously processed credit memo has incorrect reference to the transaction. As a result, the transaction is incorrectly offset by the credit memo and the net billing amount in the system is lower than expected. | Please contact Zuora Global Support for further assistance. |

RPRO-00661 - The credit memo line is not processed as the credit memo amount is more than the net sell price on the SO

The credit memo amount cannot be higher than the net sell price on the transaction.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Incorrect Credit Memo amount | Incorrect credit memo generated from the source system | Review and confirm the credit memo amountTake appropriate actions to correct the credit memo in the source systemRe-send the credit to ZR |
| SO was incorrectly reduced in the past | SO update, RORD or credit memos were sent in the past to reduce the booking value. As such, the net sell price is lower than expected in ZR | Please contact Zuora Global Support for further assistance. |

RPRO-00662 - CM-C with SO reference is not supported

For non-Zuora’s order to revenue dataset , CM-C with SO reference is not supported. CM-C is for invoice cancellation and therefore CM-C must reference an invoice.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Correct CM-C type with SO reference | CM-C type with SO reference is not allowed and not supported in ZR for non-Zuora's order to revenue dataset. | Identify the root cause of the incorrect reference from the source systemReverse the transaction in the source systemRe-process the transaction with the correct ID to ZRDelete the errored transactions from the inbound |

For Zuora’s order to revenue dataset , it is rare to encounter this error. Please contact Zuora Global Support for further assistance.

RPRO-00663 - The CM-C cancelation line is not processed as it is not supported

CM-C cancellation is not supported in Zuora Revenue.

CM-C is for invoice cancellation. If the CM-C is deemed incorrect or needs to be reversed in ZR, re-generate the invoice from the booking in the source system to offset the CM-C. RPRO-00664 - The transaction line is not processed due to invalid book ID

| Scenario | Recommended solution |
| --- | --- |
| The value of the Book ID is blank or invalid | Identify the root cause of the invalid value in the source system.Re-send the transaction with the correct value to ZR.Delete the errored transaction in the inbound table. |

RPRO-00665 - Missing accounting segments. Please update the segments and re-process the TA batch

The TA update batch is not processed because at least one of the JE records contains invalid accounting segments. All predefined segments must be populated properly during the TA process.

| Possible Scenario | Recommended solution |
| --- | --- |
| SO Transactions with missing accounting segments | Ensure the accounting segments are properly populated in the source systems for future transactions.Update the transactions with the correct accounting segments by editing the transactions to update the accounting segments.Re-submit the transfer accounting update process. |
| IINV Transactions with missing accounting segments | Cancel the billing transaction in the source systemGenerate a new billing transactionRecollect the canceled invoice and the new invoice in ZRCreate a new transfer accounting batch to process the batch again. |

See Configure accounting structure for more details on the account segments set up.

RPRO-00666 - The credit transaction is not processed as the sum of all credits in the batch are greater than the net billing amount on the line

Credits more than the billings on a transaction are not allowed and therefore the system validates if all invoice-based CMs and CMRs (credit memos referenced to an invoice using Orig INV Line ID) in a single collection batch are greater than the net billed amount on the transaction.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Invoice(s) not in ZR inbound | Invoice(s) created in the source system but not yet integrated to ZR inbound | Integrate the invoice(s) into ZRCollect the invoice(s)Collect the credit memo(s) |
| Credits more than the billing | Total credits are greater than total billing in the source system | This is a data issue in the upstream system when the credit memo amount exceeds the net billed amount on the transaction. Review and confirm the credit memo amount against the associated invoices. Correct the credit memo in the source system and re-send it to ZR. |

RPRO-00668 - The event is not processed due to invalid release percentage

The release percentage (REL\_PCT) cannot be less than 0% or more than 100% for percent based events template.

| Scenario | Recommended solution |
| --- | --- |
| Invalid release percentage in the event upload | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release percentage |

RPRO-00669 - TA is not processed as the selected book in the batch is not enabled

This error occurs when the selected book is not enabled for Transfer Accounting (TA) or when a one-time set up is required to enable a revenue book.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect book entered in a TA batch | Edit the batch to correct the book values in ZR.Resubmit the transfer accounting process to post the new book. |
| The selected book is not enabled for posting | Navigate to Setups > Applications .Click Revenue Books .Toggle the Enabled to Yes.Resubmit the transfer accounting process again |

RPRO-00670 - Warning: Transfer validations failed and RC holds are applied

This error occurs when the TA update process is successful, except for the revenue contract that did not pass the transfer validations. A transfer hold is applied to the impacted RCs, and they are excluded from the TA process. Access the Transfer Accounting Error Report to review the list of impacted revenue contracts and the respective validation errors. RPRO-00671 - TA update batch is not processed due to TA custom code/data issues

This error occurs when the TA update batch encounters unexpected errors. Please contact Zuora Global Support for further assistance.

RPRO-00672 - TA transfer batch is not processed due to TA custom code/data issues

This error occurs when the TA update batch encounters unexpected errors. Please contact Zuora Global Support for further assistance.

RPRO-00673 - Encountered internal error - Please contact support team for further assistance

This error occurs when the applicable program encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00674 - Missing accounting segments. A transfer hold is applied on the RC and it is excluded from further TA processing

This error occurs if one of the Journal Entry (JE) records in the batch contains invalid accounting segments. All predefined segments must be populated properly during the transfer accounting process.

If more than one segment is missing in the accounting string, the JE records display an error. A transfer hold is applied on the impacted revenue contracts and are excluded from the TA update process until the error is resolved. Valid records will be processed in the TA update batch for further processing.

| Possible Scenario | Recommended solution |
| --- | --- |
| SO Transactions with missing accounting segments | Ensure the accounting segments are properly populated in the source systems for future transactionsUpdate the transactions with the correct accounting segments by editing the transactions to update the accounting segments.Create a new transfer accounting batch to process the batch again. |
| INV Transactions with missing accounting segments | Cancel the billing transaction in the source systemGenerate a new billing transactionRecollect the canceled invoice and the new invoice in ZRCreate a new transfer accounting batch to process the batch again. |

![RRPRO674.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a35dad49-46e6-4f2e-bdd5-5e031d8ae760?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEzNWRhZDQ5LTQ2ZTYtNGYyZS1iZGQ1LTVlMDMxZDhhZTc2MCIsImV4cCI6MTc3MTcwODg0NywianRpIjoiZmZiZGQ5MWFhY2JlNDg0YTg1ZWUwYmZkYTk5ZTVlYjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.URFEIeQkQ6b1G-3v-Du5faSCw2CV03roK5nGV7p2no8)

See Configure accounting structure for more details on the account segments set up. RPRO-00675 - Carve reclass entries are not net to $0. A transfer hold is applied on the RC and it is excluded from further TA processing

At least one revenue contract with carve reclass entries does not net to $0. A transfer hold is applied to the impacted revenue contracts, and they are excluded from the TA update process until the error is resolved. Please contact Zuora Global Support for further assistance.

Other revenue contracts without errors will be available for transfer accounting.

To review the carve reclass entries, perform the following steps:

RPRO-00676 - Bundle reclass entries are not net to $0. A transfer hold is applied on the RC and it is excluded from further TA processing

This error occurs if at least one revenue contract with a bundle reclass entry does not net to $0. A transfer hold is applied to the impacted RCs, and they are excluded from the TA update process until the error is resolved. Please contact Zuora Global Support for further assistance.

Other revenue contracts without errors will be available for transfer accounting.

To review the bundle reclass entries, perform the following steps:

RPRO-00677 - Encountered internal error - Please contact support team for further assistance

This error occurs when the journal entry process encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00678 - Encountered internal error - Please contact support team for further assistance

This error occurs when the journal entry process encounters internal errors. Please contact Zuora Global Support for further assistance

RPRO-00679 - Encountered internal error - Please contact support team for further assistance

This error occurs when the journal entry process encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00681 - Encountered internal API error - Please contact support team for further assistance

This error occurs when the applicable program encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00683 - The CM-RO transaction is not processed as the referenced RORD is not in the system

This error occurs when the referenced RORD transaction (referenced by Orig SO Line ID on the CM-RO) is not in the system.

| Scenario | Recommended solution |
| --- | --- |
| The RORD is not synced or integrated into ZR | Sync/Integrate the RORD transaction to ZRCollect the RORD and the CM-RO will be processed accordingly. |
| The RORD is in inbound due to other errors | Review and resolve the errors on the RORDCollect the RORD and the CM-RO will be processed accordingly. |

RPRO-00684 - The transaction is not processed due to missing grouping attributes.

This error occurs when the grouping attribute(s) on the transaction is blank. Grouping attributes are defined under the “Group by” field in the RC Grouping template. See Create RC grouping template for additional information.

| Scenario | Recommended solution |
| --- | --- |
| Values on the grouping attribute(s) not populated in the source system | Identify the grouping attribute(s) on the transactionDelete the errored-out transactions from the inbound dataCorrect the transactions in the source systemResend the transactions to ZR again |

RPRO-00685 - Impairment type other than R & R Within SSP is not processed due to inconsistency in impairment types for this RC

Once the revenue contract (RC) is processed with the impairment type of R & R Within SSP , other impairment types are blocked from further processing and require you to take certain actions. This error occurs when:

| Scenario | Recommended solution |
| --- | --- |
| Un-consumed RORD should have impairment type of R & R Within SSP to align with the existing types in the RC | Update the Impairment Type Flag to R & R Within SSP in the source systemDelete the errored-out transactions from the inbound dataResend the transactions to ZR again |
| The new impairment type (non- R & R Within SSP ) supersedes the existing type ( R & R Within SSP ) in the RC | Unfreeze the RCCollect the errored-out RORD lines |
| Mixed impairment types in the same batch | If multiple types are required in the same batch for the same period, follow the RORD collection sequence in the KC. |

See Contract Impairment for additional information.

RPRO-00686 - Impairment type with R AND R WITHIN SSP is not processed due to inconsistency in impairment types for this RC

This is applicable to OTR customers only.

This error occurs when the un-consumed RORDs have the R & R Within SSP impairment type . Once the revenue contract (RC) is processed with impairment types other than R & R Within SSP , the RORDs with impairment type of R & R Within SSP are blocked from further processing and require the users to take certain actions.

| Scenario | Recommended solution |
| --- | --- |
| Un-consumed RORD should not have an impairment type of R & R Within SSP | Update the Impairment Type Flag in the source systemDelete the errored-out transactions from the inbound dataResend the transactions to ZR again |
| The impairment type R & R Within SSP takes the precedence in the RC | Revenue in the RC must be posted in order to consume the RORD lines with R & R Within SSP when the previous RORDs were not the same typePost the revenue via Transfer Accounting for the RCCollect the RORD lines with R & R Within SSP |

See Contract Impairment for additional information.

RPRO-00687 - Intercompany accounting schedules are not net to $0. A transfer hold is applied on the RC and it is excluded from further TA processing

This error occurs if at least one revenue contract with intercompany accounting entries does not net to $0. A transfer hold is applied to the impacted revenue contracts which are excluded from the TA update process until the error is resolved. Please contact Zuora Global Support for further assistance.

Other revenue contracts without errors will be available for transfer accounting.

To review the intercompany entry details, complete the following steps:

RPRO-00688 - Carve reclass entries are not net to $0. Please contact the support team to resolve the error and re-process the TA batch

The TA update batch is not processed because at least one revenue contract with carve reclass entries does not net to $0. Please contact Zuora Global Support for further assistance. Revenue contracts with or without errors will not be available for transfer accounting. Re-submit the TA update batch after the error is resolved.

To review the carve reclass entries, perform the following steps:

RPRO-00689 - Bundle reclass entries are not net to $0. Please contact the support team to resolve the error and re-process the TA batch

The TA update batch is not processed because at least one revenue contract with bundle reclass entries does not net to $0. Please contact Zuora Global Support for further assistance. Revenue contracts with or without errors will not be available for transfer accounting. Re-submit the TA update batch after the error is resolved.

To review the bundle reclass entries, perform the following steps:

RPRO-00690 - Intercompany accounting schedules are not net to $0. Please contact the support team to resolve the error and re-process the TA batch

The TA update batch is not processed because at least one revenue contract with intercompany accounting schedules does not net to $0. Please contact Zuora Global Support for further assistance. Revenue contracts with or without errors will not be available for transfer accounting. Re-submit the TA update batch after the error is resolved.

To review the intercompany entry details, complete the following steps:

RPRO-00691 - Error: Transfer validations failed

This error occurs when the TA update batch is not processed because at least one revenue contract in the batch did not pass the transfer validations. Access the Transfer Accounting Error Report to review the list of impacted revenue contracts and the respective validation errors.

RPRO-00693 - RC is locked - Unable to save or process the changes as another user is editing the RC

This error occurs when ZR cannot save or process the changes because another user is editing the same RC. Re-save your changes after the other user completes their changes.

RPRO-00694 - New Password is blank. Please re-enter the new password

This error occurs when ZR cannot process the password setup as the New Password field is blank. Please enter a new password to proceed.

RPRO-00695 - Confirm New Password is blank. Please re-enter the confirm password

This error occurs when ZR cannot process the password setup as the Confirm New Password field is blank. Please re-enter the password to proceed.

RPRO-00696 - New password cannot be the same as your previous passwords

The new password is the same as your previous passwords based on the configurations under the profile “LAST\_N\_PWD\_CANNOT\_BE\_USED”. Please re-enter a new password to proceed.

See Configure Password Policy for more information on password configurations.

RPRO-00697 - New Password and Confirm New Password do not match

The New Password and Confirm New Password do not match. Please re-enter the passwords to proceed.

RPRO-00698 - New password does not meet the length requirements

The new password does not meet the length requirements based on the lookup configurations under “MIN\_PASSWORD\_LENGTH” and “MAX\_PASSWORD\_LENGTH”. Please re-enter a new password to proceed.

Navigate to Setup>Applications > Lookup to locate the above lookup. See Configure Password Policy for more information on password configurations.

RPRO-00699 - New password must contain both lower case and upper case

This error occurs when ZR cannot process the password set up as the new password must contain both lowercase and uppercase letters. Please re-enter a new password to proceed.

RPRO-00700 - New password must contain both letter and number combination

This error occurs when ZR cannot process the password set up, as the new password must contain both letters and numbers. Please re-enter a new password to proceed.

RPRO-00701 - Encountered internal error when resetting password - Please contact support team for further assistance

This error occurs while resetting the password. Please contact Zuora Global Support for further assistance.

RPRO-00702 - Invalid SO Num and/or SO Line ID

This error occurs during Significant Financing Component payment upload.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Missing SO Num and/or SO Line ID | Either SO Num or SO Line ID is null, for ZR to associate the payment record to the SO or SO Line, a valid reference must exist. | Update the upload file with the correct reference on SO Num and/or SO Line IDRe-upload the file |
| SO Num or SO Line ID references not exist in the system | The SO Num and/or SO Line ID on the payment upload do not exist in the system. |  |

RPRO-00703 - Payment amount cannot be blank

This error occurs during Significant Financing Component payment upload.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Missing payment amount` | Payment amount is required in payment upload | Update the upload file with the correct payment amountRe-upload the file |

RPRO-00704 - Payment date cannot be blank

This error occurs during Significant Financing Component payment upload.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Missing payment date | Payment date is required in payment upload | Update the upload file with the correct payment dateRe-upload the file |

RPRO-00705 - Payment amount must be equal to the sell price of SO or SO Line ID

This error occurs during Significant Financing Component payment upload.

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| Incorrect payment amount | Payment amount must be equal to the sell price in the system. If the payment schedule is onSO level - the sum of the payment amounts must be equal to the sell price of the entire SOSO Line level - the sum of the payment amounts must be equal to the sell price of the SO Line level | Update the upload file with the correct payment amountRe-upload the file |

RPRO-00706 - Payment upload is not processed as the principal amount is not populated

This error occurs during Significant Financing Component payment upload when the principal amount is

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| All SFC eligible lines with $0 SSP | If SSP is configured to calculate the financing principal amount and all SFC eligible lines in the RC have $0 SSP, the principal amount is then calculated at $0, and the system is not further processing the interest calculation. | Review and confirm the SSP in the RCIf the SSP on the lines are correct, this RC is not considered eligible for SFC as there is no principal amount. As a result, the payment upload will not be processed.If the SSP on the lines are incorrect (due to booking date issues or SSP setup), investigate and make the necessary adjustments to correct the SSP. The errored payment records will be processed automatically during the next payment upload or next data collection. |
| For other scenarios, such as the system encountering issues in deriving the principal amount, please contact Zuora Global Support for further assistance. |  |  |

See Significant Financing Component for additional information.

RPRO-00707 - Max. 240 characters are allowed

All field values, except the following fields, are limited to 240 characters. Update the field values and re-upload the file for further processing.

-   COMMENTS

-   DEF\_SEGMENTS

-   REV\_SEGMENTS

-   COST\_DEF\_SEGMENTS

-   COST\_REV\_SEGMENT'

-   QUOTE\_NUM


RPRO-00708 - Max. 3000 characters are allowed in the "COMMENTS" field

The COMMENTS field is limited to 3,000 characters. Update the field values and re-upload the file for further processing.

RPRO-00709 - Non-English characters are not allowed

This error is applicable when the profile “UPLOAD\_NON\_ENGLISH\_CHARS” is set to “N”.

Based on the configurations, non-English characters are not allowed in the upload. The acceptable characters are as follows,

!"#$%&''()\*+,-./0123456789:;<=>'' ''?@ABCDEFGHIJKLMNOPQRSTUVWXYZ\[\\\]^\_\`abcdefghijklmnopqrstuvwxyz{|}~'

| Scenario | Recommended Solution |
| --- | --- |
| Invalid field values with non-English characters | Update the field and exclude any non-English charactersRe-upload and process the file |
| Valid field values with non-English characters | Update the profile setting to “Y” under “UPLOAD_NON_ENGLISH_CHARS”Re-upload and process the file |

RPRO-00710 - Encountered internal errors

This error occurs when the system validates the non-English characters during the upload process. Please contact Zuora Global Support for further assistance.

RPRO-00711 - Missing values

This error occurs during Event upload processing and when multiple account segments are defined in the event upload template.The system will only process the event upload file when,

If the upload records are provided without any event account segment values, the events will be processed using the existing account segments on the SO line. If you expect the upload records to be processed against account segments different from the SO lines, you must provide all defined event account segments in the upload.

Please update the errored record(s) and re-upload the file for processing.

RPRO-00712 - Invalid number

According to the upload template setup in the system, the Input Value Type is set as Number . Only numerical values are allowed. Please update the errored record(s) and re-upload the file for processing.

The Input Value Type setup is under the Field Mapping tab within the file upload template. Navigate to the File Upload section and identify the type of the upload templates to view the setup accordingly.

RPRO-00713 - Invalid date

According to the upload template setup in the system, the Input Value Type is set as Date (DD-MON-YYYY or any specific format) in the Date Format field. Only date values are allowed. Please update the errored record(s) with the correct format and re-upload the file for processing.

Within the file upload template, the Date Format setup is under the Template Definition tab and the Input Value Type setup is under the Field Mapping tab. Navigate to the File Upload section and identify the type of the upload templates to view the setup accordingly.

RPRO-00714 - Multi-Org access restrictions

This error occurs when users do not have the access rights to the specific organization. Please work with your system administrator to obtain organization access or have the designated users with access rights to re-process the file upload.

RPRO-00715 - Duplicate INV\_LINE\_ID

The same INV\_Line\_ID is found in more than one record in the upload file. INV\_Line\_ID is a unique ID for an invoice line and duplicate ID is not allowed. Please update the errored record(s) and re-upload the file for processing.

RPRO-00716 - Invalid values in RSSP Min Type

Below are the three accepted values under “RSSP Min Type”. Please update the errored record(s) and re-upload the file for processing.

-   CUSTOM

-   LIST PRICE

-   SELL PRICE


See Residual SSP derivation for more information.

RPRO-00717 - RSSP Min (%) must be BLANK

When RSSP Min Type is “CUSTOM”, RSSP Min (%) must be blank. Please update the errored record(s) and re-upload the file for processing.

See Residual SSP derivation for more information.

RPRO-00718 - RSSP Min (Amount) must have values

When RSSP Min Type is “CUSTOM”, RSSP Min (Amount) must have values. Please update the errored record(s) and re-upload the file for processing.

See Residual SSP derivation for more information.

RPRO-00719 - RSSP Min (Amount) must be BLANK

When RSSP Min Type is “LIST PRICE”, RSSP Min (Amount) must be blank. Please update the errored record(s) and re-upload the file for processing.

See Residual SSP derivation for more information.

RPRO-00720 - RSSP Min (%) must have values

When RSSP Min Type is “LIST PRICE”, RSSP Min (%) must have values. Please update the errored record(s) and re-upload the file for processing.

See Residual SSP derivation for more information.

RPRO-00721 - Both RSSP Min (Amount) and RSSP Min (%) must be BLANK

When RSSP Min Type is “SELL PRICE”, both RSSP Min (Amount) and RSSP Min (%) must be blank. Please update the errored record(s) and re-upload the file for processing.

See Residual SSP derivation for more information.

RPRO-00722 - Invalid values in RSSP FV Type

Below are the five acceptable values under “RSSP FV Type”. Please update the errored record(s) and re-upload the file for processing.

-   CUSTOM

-   LIST PRICE

-   SELL PRICE

-   HIGHER OF SP OR RSSP MIN AMOUNT

-   RSSP MIN BASIS


See Residual SSP derivation for more information.

RPRO-00723 - RSSP FV (%) must be BLANK

When RSSP FV Type is “CUSTOM”, RSSP FV (%) must be blank. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00724 - RSSP FV (Amount) must be have values

When RSSP FV Type is “CUSTOM”, RSSP FV (Amount) must have values. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00725 - RSSP FV (Amount) must be BLANK

When RSSP FV Type is “LIST PRICE”, RSSP FV (Amount) must be blank. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00726 - RSSP FV (%) must be have values

When RSSP FV Type is “LIST PRICE”, RSSP FV (%) must have values. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information. RPRO-00727 - Both RSSP FV (Amount) and RSSP FV (%) must be BLANK

| If RSSP FV type is one of the following | Expected Values |
| --- | --- |
| SELL PRICEHIGHER OF SP OR RSSP MIN AMOUNTRSSP MIN BASIS | No values under bothRSSP FV (Amount) & RSSP FV (%) |

Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00728 - Invalid values in Alternate SSP Type

Below are the three accepted values under “Alternate SSP Type”. Please update the errored record(s) and re-upload the file for processing.

-   CUSTOM

-   LIST PRICE

-   SELL PRICE


See Residual SSP derivation for more information.

RPRO-00729 - Alternate SSP (%) must be BLANK

When Alternate SSP Type is “CUSTOM”, Alternate SSP (%) must be blank. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00730 - Alternate SSP (Amount) must have values

When Alternate SSP Type is “CUSTOM”, Alternate SSP (Amount) must have values. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00731 - Alternate SSP (Amount) must be BLANK

When Alternate SSP Type is “LIST PRICE”, Alternate SSP (Amount) must be blank. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information. RPRO-00732 - Alternate SSP (%) must be have values

When Alternate SSP Type is “LIST PRICE”, Alternate SSP (%) must have values. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00733 - Alternate SSP (Amount) and Alternate SSP (%) must be BLANK

When Alternate SSP Type is “SELL PRICE”, both Alternate SSP (Amount) and Alternate SSP (%) must be blank. Please update the errored record(s) and re-upload the file for processing. See Residual SSP derivation for more information.

RPRO-00734 - SSP Min Type/RSSP FV Type/Alternate SSP Type cannot be blank

RSSP Min Type/RSSP FV Type/Alternate SSP Type fields are Mandatory. Below are the acceptable values under each type. Please update the errored record(s) and re-upload the file for processing.

| RSSP Min Type | RSSP FV Type | Alternate SSP Type |
| --- | --- | --- |
| CUSTOMLIST PRICESELL PRICE | CUSTOMLIST PRICESELL PRICEHIGHER OF SP OR RSSP MIN AMOUNTRSSP MIN BASIS | CUSTOMLIST PRICESELL PRICE |

See Residual SSP derivation for more information.

RPRO-00735 - Start Date, End Date, Dr Activity Type and Cr Activity Type cannot be blank

For Waterfall type MJE, the below fields are mandatory and cannot be blank. Please update the errored record(s) and re-upload the MJE for processing.

Mandatory fields in Waterfall MJE upload:

-   Start date

-   End date

-   Dr Activity type

-   Cr Activity type


RPRO-00736/RPRO-00761 - Invalid currency code

The uploaded currency does not match with any currency code under the currency setup under Applications \> Currency.

| Scenario | Recommended Solution |
| --- | --- |
| Misspelled currency code | Update the errored record(s)Re-upload the file for processing |
| New currency code | Add the currency code in the systemRe-upload the file for processingNote: See Configure currency format for the setup |

RPRO-00737 - Number of decimals exceeds the setup limit

The uploaded amount has the decimal points exceeding the rounding setup under Applications \> Currency.

| Scenario | Recommended Solution |
| --- | --- |
| Incorrect decimal points in the file | Update the errored record(s)Re-upload the file for processing |
| Incorrect rounding set up in the system | Adjust the rounding in the systemRe-upload the file for processingNote: See Configure currency format for the setup |

RPRO-00738 - Invalid POB Template Name

The uploaded POB template name does not match with any POB templates in the system. Refer to Policies > Performance Obligations > POB Templates to view all the POB templates. Please update the errored record(s) and re-upload the file for processing.

See Create POB template for more information on POB template.

RPRO-00739 - Invalid Transaction Field Name

This error occurs under the POB assignment by item/sku process.The uploaded “Transaction Field Name” does not match with any attribute names in the system. The attribute name is used to derive the POB name in a revenue contract. Please update the errored record(s) and re-upload the file for processing.

See Define POB assignment rules for more information.

RPRO-00740 - Encountered internal error while locking the RC

This error occurs when locking the RC for edit by multiple users. When encountering this error, re-query this RC (Navigate to Workbench > Search > input the RC ID or other identifiers), confirm if the edit is made successfully. If the edit has not been properly saved previously, re-perform the same edit and save it.

If the error persists, please contact Zuora Global Support for further assistance.

RPRO-00741 - Encountered internal error - Please contact the support team for further assistance

Unable to complete event processing due to internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00742 - Invalid syntax in SQL - Please review and fix the SQL statement

Invalid syntax found in the query. Please update and re-run the query. See Send database query from the user interface for more information.

RPRO-00743 - Encountered internal SQL error - Please contact support team for further assistance

Unable to generate the data due to internal SQL error. Please contact Zuora Global Support for further assistance. RPRO-00744 - One Org is allowed in the upload

This error occurs when the upload file contains more than one Org. Only one Org is allowed per upload. Review and update the upload file to include a single value under the Org ID field and re-submit the file again.

RPRO-00745 - Encountered Internal Error

The upload process encounters internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00748 - The event is not processed as 0% is not accepted on non-cumulative percent based event

The release percentage (REL\_PCT) cannot be 0% for non-cumulative percent based events template.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Release percentage should be more than 0% | Incorrect percentage sent from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release percentage |
| Release percentage should be 0% | 0% release presents no events are needed for revenue recognition. | Delete the errored-out event records from the inbound data |

RPRO-00749 - The event is not processed as $0 is not accepted on non-cumulative amount based event

The release amount (REL\_AMT) cannot be $0 for non-cumulative amount based events template.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Release amount should be more than $0 | Incorrect amount sent from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release amount |
| Release amount should be $0 | $0 release presents no events are needed for revenue recognition. | Delete the errored-out event records from the inbound data |

RPRO-00750 - The event is not processed as amount based event is not supported for recurring charges

This error is not applicable to standalone customers. Please contact Zuora Global Support for further assistance if this error exists.

For Zuora’s OTR customers, only percent-based and quantity-based events are supported for recurring charges. Amount-based events are not supported.

| Scenario | Recommended solution |
| --- | --- |
| The Recurring charge is incorrectly assigned to a POB template with amount-based event | To correct the POB assignment (this will correct the future recurring charges coming to ZR),Navigate to Policies > Performance Obligations > Advance RuleSelect the Advance Rule applied to the recurring chargeReview the selection under “POB Template” and re-select the appropriate POB template and saveIf there is no appropriate POB template in the system, create the POB template with the correct “Release Event”. Refer to Create POB template for additional information. And select the new POB template under “POB Template” and save.For existing charges with an incorrect POB in ZR,Hover the mouse over the target POB line and click the menu iconClick Line Actions > MoveSelect Existing POB or New POB (depending on POBs in the current RC) and perform the remaining actions to correct the POB. Refer to Modify a POB line for additional details. |
| POB template incorrectly set up with the amount- based event | To correct the POB template (this will correct the future recurring charges coming to ZRNavigate to Policies > Performance ObligationsSelect the applicable POB template associated with the recurring chargeReview the selection under “Release Event”If the release event is incorrectly selected for this POB templateExpire this POB template by inputting the “End date”Create a new POB template and select the correct “Release Event”Refer to Associate event with POB template for additional informationFor existing charges with an incorrect POB in ZR,Hover the mouse over the target POB line and click the menu iconClick Line Actions > MoveSelect Existing POB or New POB (depending on POBs in the current RC) and perform the remaining actions to correct the POB. Refer to Modify a POB line for additional details |

RPRO-00751 - Encountered Internal error - Please contact the support team for further assistance

This error occurs during the event collection. Please contact Zuora Global Support for further assistance.

RPRO-00752 - The event is not processed due to missing release percentage

The release percentage (REL\_PCT) cannot be blank for percent based events template.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Release percentage is blank | Missing percentage from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release percentage |

RPRO-00753 - The event is not processed due to missing release amount

The release amount (REL\_AMT) cannot be blank for amount based events template.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Release amount is blank | Missing amount from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release amount |

RPRO-00754 - The event is not processed due to missing release quantity

The release quantity (REL\_QTY) cannot be blank for quantity based events template.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Release quantity is blank | Missing quantity from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correct release quantity |

RPRO-00755 - The event is not processed due to incorrect signage on release amount

The signage of the release amount (REL\_AMT) must be the same as the signage of the Ext Sell Price for amount- based events.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Incorrect signage of release amount | Incorrect amount sent from the source system | Delete the errored-out event records from the inbound dataRe-upload the event file with the correctrelease amount |

RPRO-00756 - The transaction is not processed as the CM-RO is already cancelled

This error applies to OTR only and occurs when another transaction is generated to cancel the CM-RO again.

This is rare to encounter this error. Please contact Zuora Global Support for further assistance.

RPRO-00757 - The transaction is not processed as the referenced CM-RO does not exist in the system

This error applies to OTR only and occurs when the referenced CM-RO (referenced by Orig INV Line ID) does not exist in the system.

| Scenario | Description | Recommended solution |
| --- | --- | --- |
| Referenced CM-RO not in ZR inbound | Billing transactions created in the source system but not yet integrated to ZR inbound | Integrate the billing transactions into ZRCollect the referenced CM-ROCollect the errored-out transactions |
| Referenced CM-RO is stuck in inbound due to other errors | The referenced CM-RO cannot be processed as it encounters other errors | Review and resolve the errors on the referenced CM-ROCollect the CM-ROCollect the errored-out transactions |

RPRO-00758 - Encountered Internal error - Please contact the support team for further assistance

This internal error occurs during the manual journal entry validations. Please contact Zuora Global Support for further assistance.

RPRO-00759 - Invalid SOB ID

This error occurs when the SOB ID value does not match with the setup in the system.

| Recommended solution |
| --- |
| Delete the errored transactions from the inbound dataCorrect the transactions in the source system to ensure the SOB ID is populated correctlyRe-send the transactions to ZR |

RPRO-00760 - Encountered Internal error - Please contact the support team for further assistance

This internal error occurs during the manual journal entry validations. Please contact Zuora Global Support for further assistance. RPRO-00762 - Invalid Activity Type

This error occurs when the activity type value does not match with any values set up under the lookup table. Navigate to Setups > Application > Lookups and search for the MANUAL\_JOURNAL for the lookup table.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect activity type on the journal entry | Update the activity type value in the JE file and reupload the file, or update the value in the UI |
| A new activity type value is needed | Navigate to Setups > Application > Lookups and search for the MANUAL_JOURNALHover the mouse to the MANUAL_JOURNAL lineClick the edit iconUpdate the lookup table and saveReprocess the manual journal entry |

RPRO-00763 - Invalid Reason Code

This error occurs when the reason code does not match with any codes set up under the lookup table. Navigate to Setups > Application > Lookups and search for the MANUAL\_JOURNAL for the lookup table.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect reason code on the journal entry | Update the reason code in the JE file and reupload the file, or update the code in the UI |
| A new reason code is needed | Navigate to Setups > Application > Lookups and search for the MANUAL_JOURNALHover the mouse to the MANUAL_JOURNAL lineClick the edit iconUpdate the lookup table and saveReprocess the manual journal entry |

RPRO-00764 - Invalid Ex Rate Type

This error occurs when the Ex Rate Type value does not match with any values set up under the lookup table. Navigate to Setups > Application > Lookups and search for the MANUAL\_JOURNAL for the lookup table.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect exchange rate type on the journal entry | Update the exchange rate type in the JE file and reupload the file, or update the type in the UI |
| A new exchange rate type is needed | Navigate to Setups > Application > Lookups and search for the MANUAL_JOURNALHover the mouse to the MANUAL_JOURNAL lineClick the edit iconUpdate the lookup table and saveReprocess the manual journal entry |

RPRO-00765 - Missing Ex Rate Date

This error occurs when the Ex Rate Date is not specified on the journal entry line.

| Recommended solution |
| --- |
| Update the exchange rate date in the JE file and reupload the file, or update the date in the UI. |

RPRO-00766 - Missing Ex Rate

This error occurs when the Ex Rate is not specified on the journal entry line. Ex Rate is a mandatory field in the journal entry.

| Recommended solution |
| --- |
| Update the exchange rate in the JE file and reupload the file, or update the rate in the UI. |

RPRO-00767 - Missing G Ex Rate

This error occurs when the G Ex Rate (Reporting Exchange Rate) is not specified on the journal entry line. G Ex Rate is a mandatory field when the Ex Rate Type is defined as “Users”.

| Recommended solution |
| --- |
| Update the exchange rate in the JE file and reupload the file, or update the rate in the UI. |

RPRO-00714 - The transaction line is not processed as the period is currently undergoing the close process

This error occurs when the period is undergoing the close process. If the period status is under PENDING CLOSE , the system does not process any transactions.

| Scenario | Recommended Solution |
| --- | --- |
| The transactions should be collected in the current period | Cancel the close processRe-run the data collection |
| The transactions should be collected in the next period | Continue the close processClose the current period and open the next periodRe-run the data collection |

RPRO-00769 - Payment upload is not processed as the Ext List price is not available in the RC for principal calculation

This error is applicable when the Ext List Price (ELP) is selected to calculate the Financing Principal Amount. Refer to Policies > Financing for the system configurations. See Significant Financing Component for additional information.

This error occurs during Significant Financing Component (SFC) payment upload when the ELP is not available on the SFC eligible line(s).

| Scenario | Recommended Solution |
| --- | --- |
| ELP is blank from the source system | ELP is a required data when the SFC is configured to calculate based on ELP.If ELP exists in the upstream system but is not sent properly to ZR, re-send or sync the SO line to ZR. The errored payment records will be processed automatically during the next payment upload or next data collection.If ELP is not available in the upstream system, it is recommended that the company’s policy on how SFC should be calculated be reviewed and the necessary changes made to on the configurations. |
| For other scenarios, such as the system encountering issues in deriving the principal amount, please contact Zuora Global Support for further assistance. |  |

RPRO-00770 - Payment upload is not processed as the Ext Sell price is not available in the RC for principal calculation

This is applicable when the Ext Sell Price (ESP) is selected to calculate the Financing Principal Amount. Refer to Policies > Financing for the system configurations. See Significant Financing Component for additional information.

This error occurs during Significant Financing Component (SFC) payment upload when ESP is not available on the SFC eligible line(s) due to internal errors. Please contact Zuora Global Support for further assistance.

RPRO-00771 - Payment upload is not processed as the SSP is not available in the RC for principal calculation

This error is applicable when the Standalone Sell Price (SSP) is selected to calculate the Financing Principal Amount. Refer to Policies > Financing for the system configurations. See Significant Financing Component for additional information.

This error occurs during Significant Financing Component (SFC) payment upload when the SSP is not available on the SFC eligible line(s).

| Scenario | Description | Recommended Solution |
| --- | --- | --- |
| SSP Error in the RC | If the RC encounters SSP error, the system is unable to calculate the principal amount. You may locate the SSP error by the following methods:Check the error RPRO-00607 displayed under 'Comments' in the RCReview SSP Exceptions under Data Validation tab in Close Process DashboardRun SSP Exception Report | Resolve the SSP Errors in the RCThe errored payment records will be processed automatically during the next payment upload or next data collection. |
| RC is not eligible for allocation | If the entire RC is not eligible for allocation, SSP will not be populated. The system is unable to calculate the principal amount | As the SFC is configured to calculate based on SSP, and if the SSP is not available due to another user’s configurations, it is recommended that the company’s policy on how SFC should be calculated in these scenarios be reviewed and necessary changes made to on the configurations. |
| For other scenarios, such as the system encountering issues in deriving the principal amount, please contact Zuora Global Support for further assistance. |  |  |

RPRO-0777 -

The event is not processed as the associated transaction does not exist in the system

| Scenario | Recommended Solution |
| --- | --- |
| Incorrect values of referencing attributes | Delete the errored transactions from the inbound dataCorrect the values in the source data or in the event upload fileRe-send or re-upload the events to ZR for processing |
| Referenced transactions not consumed in ZR | The referencing transactions are either not integrated to ZR or not yet consumed due to inbound errorsClear the inbound errors or integrate the transactions into ZRCollect the transactionsRe-run the event program to process the events |

This error occurs when the referencing attribute values in the event file do not correspond to any existing transactions in the system. For instance, if a SO line ID links an event to a transaction, and the provided SO line ID in the event file does not exist in any transactions, the event will not be processed.

RPRO-00778 \- The transaction is not processed as the associated SO line is replaced by a subsequent order

This error occurs when the referenced SO line has been replaced subsequently by a new SO line. Any modifications, such as SO update, RORD, CM or CM-R, against the transaction are not allowed. The system prevents processing these modifications to maintain the integrity of the superseded transaction.

It is recommended to delete the errored transactions from the inbound data or contact [Zuora Global Support](https://support.zuora.com/hc/en-us?_gl=1*jo9n1x*_gcl_au*OTg0OTQyNzAwLjE3MTU2NjQxNzc.*_ga*ODM4MzExMTA3LjE3MDAwODEzMzc.*_ga_MY8CQ650DH*MTcyMjg2MzIxMi42NjAuMS4xNzIyODYzODc2LjI2LjAuMTcxOTY3MTI5Nw..) for further assistance.

RPRO-00779 The transaction is not processed as the revenue start or end date are outside of ZR accounting calendar

This error occurs when the revenue start and/or end date falls outside the configured accounting calendar periods. The accounting calendar can be viewed under Setups>Application>Accounting Calendar.

| Scenario | Recommended solution |
| --- | --- |
| Incorrect revenue start or end date. | Update the revenue start or end date in the source system.Delete the errored out records from the inbound dataResend the transactions to ZR again for processing |
| Extend system calendar required | Contact the Zuora Global support team to extend the system calendar .Collect the errored-out transactions. |

RPRO-10000 \- The transaction is not processed as the same SO Line ID is already processed in a different org

This error is applicable for multi-org customers.

The specific SO Line ID is already processed under a different org in the system. The same SO Line ID cannot be processed other than the original org.

| Scenario | Recommended solution |
| --- | --- |
| The errored transaction has a correct SO Line ID but an incorrect org | Review and investigate why the new transactions are sent with incorrect orgDelete the errored transactions from the inbound dataCorrect the booking in the source system and resend the transactions to ZR |
| The errored transaction has an incorrect SO Line ID | Review and investigate why the new transactions are sent a duplicate SO line IDDelete the errored transactions from the inbound dataCorrect the booking in the source system and resend the transactions to ZR |
| The previous processed transaction has an incorrect org | Review and investigate why the previous transactions are sent with incorrect orgDelete the errored transactions from the inbound dataDebook the transactions in the source systemRebook the transactions with the correct org in the source system |
