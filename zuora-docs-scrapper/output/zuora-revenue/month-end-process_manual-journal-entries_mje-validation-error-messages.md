---
title: "MJE validation error messages"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/manual-journal-entries/mje-validation-error-messages"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:18.254Z"
---

# MJE validation error messages

Learn how to address MJE validation errors in Zuora Revenue by understanding error messages and corrective actions.

After you upload MJE based on either the waterfall template or the standard template, Zuora Revenue will validate the data in the uploaded file. If the uploaded journal entry contains incomplete data or incorrect data, the status of the JE upload changes to Error on the Manual JE Entries page.

To find out the root cause and fix the errors, hover the mouse over the JE line and then click the JE Details icon Errors tab of the JE Details window. See the following graphic for an example.

![MJE-validation-error.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/accc1f9a-ef27-47ac-b738-c5925ff5bff7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFjY2MxZjlhLWVmMjctNDdhYy1iNzM4LWM1OTI1ZmY1YmZmNyIsImV4cCI6MTc2NjYzNjk1NiwianRpIjoiYzVhM2M2N2ZhNzkzNGRmYWE1ZTMyYzU2ZWM3MmU2NzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.q-CeFGSfSJ2EWtnF7SfzbyazflI9vsLwYDWKO55XsKM)

Refer to the following table to find the detailed explanation for each error message as well as the corrective action for each error message.

| Error message | Explanation | Corrective action |
| --- | --- | --- |
| Cannot have both DR and CR GL Code combination id on same Line ID | Both the credit and debit code combination IDs are present for a line. This error happens to the standard MJE type. | Provide appropriate credit or debit code combination ID for the MJE line. In the standard MJE type, it is always one line for credit and the other line for debit. |
| CR Accounting segments count more than active accounting segments count at Line ID | The number of credit accounting segments specified for the MJE line is greater than the number of accounting segments defined in the system. | Provide appropriate credit accounting segments for the MJE line. |
| CR Accounting segments missing at Line ID | The credit accounting segments are missing in the MJE or the number of specified accounting segments is less than that of what is defined in the system. | Provide appropriate credit accounting segments for the MJE line. |
| CR Activity Type Not Defined for Cost | An incorrect credit activity type is defined for the cost in the MJE. This error might also occur when the account type is not enabled to be included in MJE in the accounting setups. | Provide an appropriate CR activity type in the MJE. Ensure that the Include In MJE switch is toggled to Yes for the account type in the accounting setup. |
| Currency mismatch with Linked RC Line | The currency of the JE line is different from the currency of its linked RC line. | Specify an appropriate currency for the JE line that is linked to the RC line. |
| DR Accounting segments count more than active accounting segments count at Line ID | The number of debit accounting segments specified for the MJE line is greater than the number of accounting segments defined in the system. | Provide appropriate debit accounting segments for the MJE line. |
| DR Accounting segments missing at Line ID | The debit accounting segments are missing in the MJE or the number of specified accounting segments is less than that of what is defined in the system. | Provide appropriate debit accounting segments for the MJE line. |
| Dr Activity Type Not Defined for Cost | An incorrect debit activity type is defined for the cost in the MJE. It might also because the account type is not enabled to be included in MJE in the account setups. | Provide an appropriate DR activity type in the MJE. |
| End Date less than Start Date at Line ID | The end date of a line is earlier than the start date. This error happens to the waterfall type only. | Correct the start and end dates for the MJE line so that the end date is later than the start date. |
| Invalid Activity Type Code | The provided activity type code is invalid. | Provide an appropriate activity type code in the MJE. |
| Invalid currency code | The provided currency code is invalid. | Provide an appropriate currency code in the MJE. |
| Invalid Exchange Rate at Header | The exchange rate in the header in the invalid or undefined. | Provide an appropriate exchange rate in the MJE header. |
| Invalid Reason Code | The provided reason code is invalid. | Provide an appropriate reason code in the MJE. |
| Invalid SOB Id | The specified SOB (set of books) Id is wrong. | Check the SOB Id and provide a valid one. |
| Mismatch in DR and CR | The CR amount and DR amount does not match. This error happens to the standard MJE type. | Provide appropriate values in CR and DR so that the credit amount and the debit amount can net off. |
| Missing Amount at Line ID | The Amount column in the MJE is not populated. | Specify the Amount column in the MJE. |
| Missing CR GL Code combination at Line ID | The CR code combination ID does not exist for the MJE line. | Provide the appropriate accounting segment values and check the CCID mapping. |
| Missing DR GL Code combination at Line ID | The DR code combination ID does not exist for the MJE line. | Provide the appropriate accounting segment values and check the CCID mapping. |
| Missing Ex Rate at Line | The exchange rate is missing for the MJE line. | Provide the exchange rate for the MJE line. |
| Missing Exchange Rate Date | The Exchange Rate Date is missing for one of the following exchange rate types:DailyCorporatePeriod EndPeriod Average | Provide the appropriate value for the exchange rate date. |
| Missing Exchange Rate Type | The Exchange Rate Type is not specified. | Specify the exchange rate type. |
| Missing From Currency | The functional currency on the MJE header is missing. | Provide the value in the Currency field in the MJE. |
| Missing Reporting Exchange Rate/Exchange Rate Date | This error occurs when the APPRV_RULE_CURR profile is set to Reporting but the exchange rate details are not provided for the MJE lines. | Provide the correct exchange rate information in the MJE lines. |
| Missing To Currency | The transaction currency on the MJE header is missing. | Specify the correct currency value in the Currency field in the MJE. |
| Negative/Zero Amount at Line ID | The Amount column contains a non-positive value. | Specify the appropriate value for the Amount column. |
| No accounting segments defined | No accounting segments are defined in the MJE. | Provide appropriate accounting segments in the MJE lines. |
| Reversal Date and Start / End Date cannot be populated at the same time | Both the start date and the reversal date are populated at the same time. This error happens to the standard MJE type. | Provide either start and end dates or the reversal date. |
| The Cost type does not exist | An incorrect cost type is specified in the MJE or the specified cost type is not defined in Zuora Revenue. | Provide an appropriate cost type in the MJE. |
