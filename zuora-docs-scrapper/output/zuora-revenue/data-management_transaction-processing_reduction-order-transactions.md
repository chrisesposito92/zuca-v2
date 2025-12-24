---
title: "Reduction order transactions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/reduction-order-transactions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:19.856Z"
---

# Reduction order transactions

In Zuora Revenue, reduction orders are used to track decreases in sales order quantity or terms.

Use reduction orders to track the reduction of a sales order in quantity or in terms. For example, if a customer has purchased 12-month maintenance service through a sales order and then requests to reduce the terms by 3 months, you can create a reduction order to track this request.

The SO based CM-R and RORD transactions can both result in the reduction of the sales order. However, the SO based CM-R transaction is usually used to reduce the quantity of a sales order. The RORD transaction is usually used to reduce the term in a sales order.

## Input requirements

The reduction order transactions can be collected by Zuora Revenue with the line type being RORD. When RORD lines are input to Zuora Revenue, the ID of the original SO line must be specified for the RORD line. So that Zuora Revenue can reduce the original SO line accordingly.

To input RORD lines in Zuora Revenue, all the mandatory fields must be present for the RORD line. See [Mandatory fields of RORD transactions](/zuora-revenue/data-management/transaction-processing/mandatory-fields-of-transactions). Besides, the following specific requirements must be met:

-   The Ext. Sell Price field must be a negative value.

-   The Ext. List Price field must be a negative value.

-   The Quantity field must be a positive value.

-   The Cancel Flag or the Return Flag fields must be empty.


## Stage validations

[Predefined validation rules](/zuora-revenue/data-management/data-validation-process/predefined-validation-rules) are also available in the system to validate data on the RORD line. If any validation fails, the RORD line will be stopped in Staging.

Note that some predefined validation rules are to validate the dates on the RORD line and by default disabled. If you enable these validations, the following error codes will be returned when the validation fails. To resolve the validation errors, you need to review the RORD line to ensure revenue recognition can be triggered accordingly.

-   RPRO-00353: The start date of the RORD line is earlier than the start date of the SO line, or the end date of the RORD line is later than the end date of the SO line.

-   RPRO-00356: The revenue start or end date on the associated SO line has been updated from the UI or through the manual deferral/release action.


A flag called RORD Review Completed is introduced to the Inbound Integration UI for you to skip this validation after you have completed the review on the RORD line. Whenever the RORD line is stopped in Stage due to the above validation errors, you can navigate to Data Interface > Inbound and change this flag on the RORD line to Y. Then, during the next data collection, the system will skip the date validation for the RORD line.

## Processing logic

When RORD is collected in Zuora Revenue, the overall revenue of the term or quantity of the SO line is to be adjusted. All the schedules created are associated with the original SO line. If both sales order and invoice schedules are present for the same period, the RORD line will reverse the invoice schedules before the sales order schedules.

-   If the RORD value equals to the original SO value, the amount in the deferred status and the amount in the recognized status will be cleared. In this case, the following changes will occur to the original SO line:
    -   The Return Flag of the original SO line becomes Y.
    -   The recognized amount, deferred amount, and the allocatable amount become null.
    -   The extended SSP price and all other SSP related fields become null.
    -   Allocation is updated based on the contract modification rules.
-   If the RORD value is less than the original SO value, the amount in the deferred status will be cleared first. After that, if the RORD value is not completely consumed, the amount is the recognized status will be reduced. In this case, the following changes occur to the original SO line:
    -   The Return Flag of the original SO line remains N.
    -   The recognized amount, the deferred amount, and the allocatable amount will be updated based on the Ext. Sell Price of the RORD line.
    -   The extended SSP price and all SSP related fields will be updated based on the changes in List Price, Sell Price, and Quantity.
    -   Allocation is updated based on the contract modification rules.

## Related profile setting

The CREATE\_RORD\_CONTRA\_ENTRY profile determines whether the Contra AR entry is to be created when RORD lines are collected in Zuora Revenue. Examples of accounting entries are provided in the Accounting entries sections below to help you understand the impact of this profile setting on RORD accounting entries.

## CM-RO transaction impact

The transaction type, CM-RO (credit memo for reduction order), is supported in Zuora Revenue to reverse the contra revenue that was created for the RORD line. The RORD schedules to be reversed are determined by the amount of the CM-RO line.

When the CREATE\_RORD\_CONTRA\_ENTRY profile is enabled, there are two circumstances when the CM-RO line is collected.

-   If the Contra AR entry that was created for the RORD line has not been posted, the Contra AR entry will be removed from the schedules after the CM-RO line comes in.

-   If the CM-RO line is collected after the RC has been posted, the schedules will contain two Contra AR entries. One is created when the RORD line is collected and the other is created when the CM-RO line is collected.


The amortization of the revenue contract will not be impacted by the CM-RO line.

For information on SSP normalization, see [here](/zuora-revenue/data-management/transaction-processing/reduction-order-transactions/ssp-normalization).

For information on Accounting entries (before 37.001.00.00), see [here](/zuora-revenue/data-management/transaction-processing/reduction-order-transactions/accounting-entries-before-37.001.00.00).

## Accounting entries (after 37.001.00.00)

In version 37.001.00.00, an enhancement is delivered regarding the RORD processing, which impacts the accounting behaviors of reduction order transactions. If you use the latest version of Zuora Revenue, for accounting examples of RORD transactions, see [RORD and CM-RO accounting](/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries) entries..
