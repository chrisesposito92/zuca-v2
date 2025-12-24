---
title: "Significant financing component"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/significant-financing-component"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:50.565Z"
---

# Significant financing component

Learn how to evaluate and adjust transaction prices for a Significant Financing Component (SFC) in compliance with GAAP and IFRS standards, using Zuora Revenue to calculate Net Present Value and manage accounting setups.

Accounting standards like GAAP and IFRS require organizations to evaluate the presence of a Significant Financing Component (SFC) and adjust the transaction price accordingly to reflect the time value of money when necessary. Compliance with these standards ensures transparency and consistency in revenue recognition practices.

Zuora Revenue calculates the Net Present Value (NPV) of individual future billing installments using the interest rate you provide. The system then converts this interest rate to a daily interest rate to calculate the NPV.

This NPV is compared to the absolute values of the correlating billing installment to calculate the principal and interest portion for the Interest amortization table.

## Accounting setups

Zuora Revenue's Accounting Setup allows you to create and manage ledger accounts to generate journal entries and automate processes. For more information, see [Configure accounting structure](/zuora-revenue/getting-started/system-management/configure-accounting-structure).

For SFC, Zuora Revenue provides you with the following pre-configured ledger accounts:

-   Interest Liability (balance sheet)
-   Interest Income (income statement )
-   Interest Impairment (income statement)

## Viewing your pre-configured Accounting Setup

Zuora Revenue provides you with the following pre-configured Accounting Setup. Navigate to Setups > Application > Accounting Setup > Account Type and then type one of the following in the Search field to view the applicable settings:

-   Interest Income
-   Interest Accrual
-   Interest Impairment

## Interest Income

The following buttons are toggled to Yes in the Interest Income account type:

-   Income Statement - Indicates this as an income statement account.
-   Financing Account - Associates this account to SFC.
-   Enable - Indicates this account is active in Zuora Revenue.

The following fields are auto-filled with the following information:

| Field | Description |
| --- | --- |
| Waterfall Type | Auto-filled with Interest Income, enabling Interest Income as a Waterfall Type under the Revenue Contract Workbench. |
| Revenue Summary | Auto-filled with Interest Income, enabling Interest Income as a part of the Revenue Summary tab under the Revenue Contract Workbench. |

## Interest Accrual

The following buttons are toggled to Yes in the Interest Interest Accrual type:

-   Balance Sheet - Indicates this as a balance sheet account.
-   Financing Account - Associates this account to SFC.
-   Enable - Indicates this account is active in Zuora Revenue.
-   Include in Netting - This button Includes Interest Accrual accounts in the Revenue Contract Rollforward report. If this button is toggled to No, you will not be able to review the Interest Accrual portion of an SFC contract in the Revenue Contract Rollforward report.

The Revenue Summary field is auto-filled with Interest Accrual, which enables Interest Accrual to appear on the Revenue Summary tab under the Revenue Contract Workbench.

The Waterfall Type filled is not auto-filled since Balance Sheet accounts are usually not reviewed as a Waterfall Type under the Revenue Contract Workbench.

## Interest Impairment

The following buttons are toggled to Yes in the Interest Impairment Type:

-   Income Statement - Indicates this as an income statement account.
-   Financing Account - Associates this account to SFC.
-   Enable - Indicates this account is active in Zuora Revenue.
-   Include in Netting - This button Includes Interest Accrual accounts in the Revenue Contract Rollforward report. If this button is toggled to No, you cannot review the Interest Accrual portion of an SFC contract in the Revenue Contract Rollforward report.

The Revenue Summary field is auto-filled with Interest Impairment, which enables Interest Impairment to appear on the Revenue Summary tab under the Revenue Contract Workbench.

The Waterfall Type filled is not auto-filled since Income Impairment accounts are usually not reviewed as a Waterfall Type under the Revenue Contract Workbench.

## Review your Accounting Mapping

You can review or configure the settings of the Account Mapping to your preference. Perform the following steps to review/configure your settings:

1.  Navigate to Setups > Application > Accounting Setup
2.  Click Account Type
3.  Type one of the following in the Search field to view the applicable settings
    1.  Interest Income
    2.  Interest Accrual
    3.  Interest Impairment
4.  Hover over the applicable account type line and click Edit Account Map to configure or review the account mapping.

## Setting up Lookups

Setting up your Lookups in Zuora Revenue allows you to customize your revenue contract workbench. Configure the following Lookups in the system tocustomize and manage the revenue contract workbench to include SFC.

For SFC, the following lookups are required to enable this feature:

-   WB\_RC\_REV\_SUMMARY - Create a new Line and reference Interest Income in Lookup Code and Lookup Value. This will enable you to view Interest Income information under the Revenue Summary Tab of the Revenue Contract Workbench.
-   WB\_RC\_WF\_TYPE - Creating a new Line and referencing Interest Income in Lookup Code and Lookup Value will enable you to view Interest Income information as a Waterfall Type under the Waterfall Tab of the Revenue Contract Workbench.
-   REVENUE\_TYPE - Configure this Lookup to populate Account Type If you want the custom-defined account type as part of the Revenue summary in Work Bench.

Complete the following steps to add the above Lookups:

1.  Navigate to Setups > Application.
2.  Click Lookups.
3.  Click the '+' icon to add a new lookup.
4.  Type WB\_RC\_WF\_TYPE in the Name field.
5.  Type APPLICATION in the Category field.
6.  Click the save icon to add the lookup.
7.  Repeat steps 1 to 6 to add WB\_RC\_REV\_SUMMARY and REVENUE\_TYPE lookups.

## Setting up the policy for the Significant Financing Component

Zuora Revenue's policies allow you to manage accounting policy-related capabilities. For general information on Zuora Revenue Policies, see Policy Related Configuration.

Complete the following steps to set up your SFC:

1.  Navigate to Policies > Financing from the main menu.
2.  Click Create New.
3.  Type the name of your choice for the SFC in the Name field.
4.  Type the description of the name in the Description field.
5.  Select a start date from the Start Date field indicating the effective start date of the policy.
6.  Select an end date from the End Date field.
7.  (Optional) Select an end date from the End Date field.
8.  Select the Booking from the Accrual Method drop-down field.This feature only supports the Booking method currently.
9.  Select Interest Accrual from the Balance Sheet drop-down field to indicate this account is set up to map to the Balance Sheet.
10.  Select Interest Income from the Income Statement drop-down field to indicate that this account is set up to be mapped to the Income Statement.
11.  Select Interest Impairment from the Impairment drop-down field to indicate this account is set up to map to Interest Impairment.SFC automates journal entries for interest impairment in the use case where an SFC-related contract is fully terminated early before the original end term.
12.  Toggle the Include Interest Accrual/Cap in Netting button to Yes/No.
     -   Toggled to Yes - This includes the interest accrual portion as a part of contract asset and contract liability netting.
     -   Toggled to No - If your interpretation is that the interest accrual portion must not be viewed as a part of SFC contracts for Contract Asset and Contract Liability Netting.
13.  Toggle the Enabled button to Yes to activate the policy.
14.  Review the following fields that have a default setting:
     -   Interest Amortization Method - Indicates that the system calculates the amortization based on a daily amount.
     -   Financing Eligibility - Indicates that the system identifies Sales Order lines related to SFC via a Y configuration on the financing column of the inbound Sales Order transaction.
     -   Financing Interest Rate - Indicates that the Zuora Revenue identifies Sales Order lines related to SFC via the Interest Rate column of the inbound Sales Order transaction.
15.  Select the applicable option from the Financing Principal Amount field. This setting allows you to configure which basis the system assigns a billing installment to the NPV calculation, which determines the principal vs. interest calculation.

## Upload transaction data using a CSV file

Complete the following steps to upload the transaction data using a CSV file to Zuora Revenue:

1.  Navigate to File Upload > Transactions/Cost.
2.  Include the following mandatory fields in your CSV file for Zuora Revenue to recognize Significant Financing Component (SFC):

    | Field | Description |
    | --- | --- |
    | SFC Eligible | Mark Y for lines that qualify for financing interest. |
    | Interest Rate | Enter the interest rate of the transaction. |

3.  Ensure the file is ready for upload.
4.  Click the Upload icon.
5.  Click Choose File in the File Name field and select the CSV file to be uploaded.
6.  Type the name of the template in the Template Name field.
7.  Select the format of the date in the Date Format field.
8.  Click Upload.

## Upload payment schedule using a CSV file

Complete the following steps to upload the payment schedule using a CSV file to Zuora Revenue:

1.  Navigate to File Upload > Payment Schedule.
2.  Include the following mandatory fields in your csv file and ensure the file is ready for upload.

    | Field | Description |
    | --- | --- |
    | Payment Id | A unique id to identify your payment transactions within the file you uploaded. |
    | SO Number | The corresponding Sales Order Number for the payment. Either SO Number or SO Line ID must be populated. |
    | SO line ID | The corresponding Sales Order Line ID for the payment must be populated, either the SO Number or the SO Line ID. |
    | Payment date | The date on which the payment was made. |
    | Payment amount | The amount for which the payment was made. |
    | Exemption amount | The amount is exempted from financing calculations. This field is mandatory when the exemption amount is populated. |

3.  Click the upload icon
4.  Click Choose File in the File Name field and select the CSV file to be uploaded.
5.  Type the name of the template in the Template Name field.
6.  Select the format of the date in the Date Format field.
7.  Click Upload to calculate the interest rate for eligible items.

## Manually Defer/Release Interest

Zuora Revenue allows you to defer/recognize interest components for an SFC. To manually defer/recognize interest, complete the following steps:

1.  Navigate to Workbench > Revenue Contracts
2.  Search for the applicable SFC revenue contract and open the Revenue Contract Detail page.
3.  Click Financing.
4.  Hover over the revenue contract and select the release/defer interest by clicking the three lines menu.
5.  Select Deferral or Recognize in the Release/Defer Interest window.

    | Action/Description | Steps |
    | --- | --- |
    | Deferral - Defers the interest of the sales order line from the period you provided until the end of its tenure. | Select Deferral.Select the applicable period from the Period drop-down field from which you want the system to perform deferral.Note: The system only displays all the periods of the current year. |
    | Recognize - Recognizes the interest in the sales order line from the current period until the end of its tenure. | Select Recognize. |

6.  Enter applicable comments in the Comments section.
7.  Click Submit.
