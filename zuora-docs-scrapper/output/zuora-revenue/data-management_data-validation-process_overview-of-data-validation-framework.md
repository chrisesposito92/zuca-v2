---
title: "Overview of data validation framework"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/data-validation-process/overview-of-data-validation-framework"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:13.354Z"
---

# Overview of data validation framework

The data validation framework in Zuora Revenue ensures transaction data integrity by applying predefined and custom validation rules, preventing data with errors from being processed.

When the transaction data is uploaded to Zuora Revenue for revenue recognition process, it is important to ensure that the transaction data contains the appropriate data points that are to be processed in Zuora Revenue. If corrections are required for the transaction data, it is recommended to correct the data in the Zuora Revenue staging tables, which are the entry point for data to be collected and processed in Zuora Revenue.

If the data has already been collected by Zuora Revenue and you want to correct it, it has to be done through the data fix. When the transaction data is corrected through the data fix, it usually requires a lot of effort to keep consistency, especially when there is data update coming on top of the data fix.

## Data validation framework overview

To restrict the transactions with insufficient or mismatch data points from being collected and processed in Zuora Revenue, the data validation framework is designed in Zuora Revenue. In this data validation framework, after the transaction data is uploaded, it is first loaded to Zuora Revenue staging tables for the data validation process. Multiple validation rules are predefined in the system for the data validation process. If the transaction data does not meet any of the enabled validation rules, the transaction data will be stopped in the staging tables and cannot be subsequently collected by Zuora Revenue. You must fix the validation errors that are reported against the transaction data and then upload them to Zuora Revenue again.

In addition to the predefined validation rules, you can also set up your own validation rules to guarantee the transaction data is in line with your business logic before Zuora Revenue starts collecting and processing the data for revenue recognition.

## Problems identified in the framework

In previous versions before RevPro 36.010.00, the framework is not effectively used due to the following reasons:

-   There are certain concerns regarding the impact on data collection performance if many predefined validation rules are enabled.
-   The validation error messages are not explicit to help determine the root cause of the validation error.
-   The option of enabling or disabling the predefined validation rules is provided to end-users. Sometimes, critical validation rules are disabled which makes the framework ineffective.

## Framework changes after RevPro 36.010.00

From RevPro 36.010.00, the data validation framework becomes more robust with the following enhancements or changes:

-   By default, all the predefined data validation rules are enabled for the data validation process and you cannot make any changes to the predefined validation rules. This change can guarantee the effectiveness of the framework.
-   Explicit error codes are provided for each predefined validation rule, which can help you quickly identify the root cause for the data validation error.
-   By default, some error codes are enabled, and some error codes are disabled or deprecated in the framework. As the product evolves, the enabled, disabled, deprecated error codes might change in future releases.
-   Performance tuning and optimization can guarantee a smooth data collection process.


## Predefined validation rules

One predefined data validation rule is a logical rule set that contains one or more error codes. If the transaction data does not pass the data validation process, the error code and the corresponding error message can help you determine what the problem is.

For example, a predefined data validation rule is to check the functional exchange rate and contains only one error code. If the exchange rate of a transaction line fails this validation rule, this transaction line will be marked with the associated error code. Another predefined data validation is to verify the mandatory fields are present for the transaction lines and it contains multiple error codes. If a transaction line fails this validation rule, you can tell which mandatory field is missing according to different error codes.
