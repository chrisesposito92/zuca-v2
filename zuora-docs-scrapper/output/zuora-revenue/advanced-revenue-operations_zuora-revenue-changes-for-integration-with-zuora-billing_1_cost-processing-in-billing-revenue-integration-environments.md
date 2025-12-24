---
title: "Cost processing in Billing - Revenue integration environments"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing_1/cost-processing-in-billing---revenue-integration-environments"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:54.338Z"
---

# Cost processing in Billing - Revenue integration environments

This document outlines the process of cost processing in Zuora Billing - Revenue Integration environments, including the setup of cost-related accounts, policies, and POB templates to ensure compliance with ASC 606.

It is required by ASC 606 that the incremental costs that are related to obtaining or fulfilling the revenue contract must be capitalized and amortized based on the transfer of the goods and services that the costs relate to. Incremental costs are the costs that are directly incurred as a result of the obtainment or fulfillment of a revenue contract. Incremental costs do not occur if the revenue contract is not obtained. Examples of incremental costs are direct labor, direct materials, and sales commission.

Note:

In Zuora Billing - Revenue Integration environments, to avoid externally calculate the cost for each sales order line, you can define a percent-based formula by setting up a cost rule in Zuora Revenue. Then, cost amortization will happen in the same way as revenue and you can review the cost data in reports and workbench. Before you start configuring Zuora Revenue for cost processing, be aware of the following limitations for the Zuora Billing - Revenue Integration environments:

-   Only formula-based costs are supported.

-   Only Extended Sell Price and Extended List Price can be used in formulas.

-   After the formula is set up and consumed by the system, it cannot be changed before the subscription ends.


## Required configuration

For Zuora Revenue to process and report on costs, you must complete the following configuration in Zuora Revenue.

1.  Set up cost-related accounts. See [Accounting setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/accounting-setup).
2.  Create cost types and cost formulas and cost rules for the costs to be calculated based on formulas. See [Policy setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/policy-setup).
3.  Modify the POB templates to specify the cost treatment information. See [POB template setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/pob-template-setup).

## Accounting setup

To track the accounting journal entries for costs, each cost type must be associated with its related accounts. The following accounts are the minimum requirements for each cost type. You might also need to create other accounts based on your company's accounting policies.

-   A balance sheet account
-   An income statement account

Complete the following steps to create account type in Zuora Revenue:

1.  Navigate to Setups > Application.

2.  Open the side menu and then click Accounting Setup. The Account Setup page opens.

3.  Click Unfreeze to edit the accounting settings.

4.  To add an account type, click the Account Type tab and then click the '+' icon on the Account Type page.

5.  In the New Account Type window, enter the account type and select the account type ID from the drop-down list.

6.  To specify the account type, toggle the appropriate account type switch to Yes to associate the account with the cost type. The following account types are available:

    -   Balance Sheet Account

    -   Cost Account

    -   Income Statement

    -   VC Account

    -   Payable Account

    -   VC Clearing Account

7.  Click the save icon and close the window. A message is displayed indicating that the account type is added successfully.

8.  (Optional): To edit the account mapping for the new account, locate the account type line on the Account Type page and click the second pencil icon on the right.

9.  (Optional): In the Edit Account Mapping window, change the account mapping and save your changes.

10.  Repeat Step 4 ~ 9 to create as many account types as you need.

11.  To freeze the accounting setup after your updates, click the Account Setup tab and then click Freeze.


## Policy setup

For Zuora Revenue to automatically process costs, you must configure cost-related policies, such as cost types, formulas, and rules.

Complete the following steps to set up cost-related policies in Zuora Revenue:

1.  Navigate to Policies > Cost.

2.  Set up the cost formulas by completing the following steps:

    1.  Click the three horizontal lines icon and then click Manage Cost Formulas.

    2.  In the Manage Cost Formulas window, click the '+' icon to add a formula.

    3.  In the New Formula window, specify a unique formula name in the Name field and the start effective date in the Start Date field.

    4.  In the Formula field, provide a formula by selecting appropriate fields, operators, and operands from the Column Name, Keypad, and Function sections.

        At the moment, only Extended Sell Price and Extended List Price can be used in formulas. For example, you can define a formula as **Ext. Sell Price \* 10%**. Then, if the Ext. Sell Price of the sales order line is $300, the cost will be $30 (300\*10%).

    5.  Repeat Step b ~ d to create as many formulas as you need.

    6.  Save your changes and close the window.

3.  To create a cost type, complete the following steps:

    1.  Click the three horizontal lines icon and then click Manage Cost Types.

    2.  In the Manage Cost Types window, click the '+' icon to add a cost type.

    3.  Enter the cost type name in the Type column and select the appropriate balance sheet account and income statement account in the Balance Sheet and Income Statement columns.

    4.  In the Liability Entry column, specify whether Zuora Revenue should create two-sided cost accounting entries or one-sided cost accounting entries. Valid options are as follows:

        -   Yes: Zuora Revenue creates two-sided cost accounting entries based on invoicing and posts the two-sided cost accounting entries to the general ledger when the Transfer Accounting operation occurs in Zuora Revenue. This option is usually selected when costs are calculated in Zuora Revenue based on formulas and the upstream system does not create any initial deferral accounting entries for these costs.

        -   No: Zuora Revenue creates one-sided cost accounting entries at the time of invoicing, which is for informational and reporting purposes only. The one-sided cost accounting entries indicate that the costs are already deferred before they are input to Zuora Revenue for processing. One-side cost accounting entries are not post-able. This option is usually selected when costs are calculated outside Zuora Revenue.

    5.  If you select Yes for the Liability Entry column, specify the account that is used for the cost deferral account in the Liability Account column.

    6.  In the Capitalization column, select the appropriate release event for the cost. Valid options are:

        -   Upon Booking

        -   Upon Billing

        -   Upon Cost Release

    7.  In the Impact Margin column, specify whether the cost should be considered in margin calculation. Only the costs that are considered as part of the costs of goods and services can impact margin.

    8.  In the Cost Practical Expedient column, specify whether the line is with a recognition pattern of less than one year and cost should be released immediately as or when the POB is satisfied.When it is set to Yes and the expected amortization schedules are for less than a year, the costs are released at the same time as revenue is released but are scheduled as immediate recognition. If the expected amortization schedules are for a duration longer than a year, the cost treatment will always follow the revenue treatment.

        The Cost Practical Expedient column is applicable only when the cost treatment for release and timing is configured to follow the revenue treatment in a POB template in [POB template setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/pob-template-setup).

    9.  If you want to enable the cost value to be switched between short-term accounting and long-term accounting, toggle the switch to Yes in the LT Reclass column and specify the account in the LT ST Account column.

    10.  Ensure the Enabled switch is toggled to Yes.

    11.  Click the save icon . The cost type is created.

    12.  Repeat Step b ~ k to create as many cost types as you need.

4.  (Optional): To define cost stratification to map the appropriate formula for a cost type, complete the following steps:

    1.  Click the three horizontal lines icon and click Manage Cost Types.

    2.  In the Manage Cost Types window, click the target cost type.

    3.  In the Cost Stratification Criteria section, click the '+' icon to add a line.

    4.  Provide a name and then select the cost fields that are to be set for criteria by toggling the switch to Yes. Your selection will be used for cost rule setup in Step 5 - Define a cost rule.

    5.  In the Apply Formula column, select the cost formula to be applied to the select cost type.

    6.  Specify the start effective date of this cost stratification line in the Start Date column.

    7.  Ensure that the Enabled switch to toggled to Yes.

    8.  Add as many lines as you need and organize the order in the Seq column.

    9.  Save your settings and close the window.

5.  To define the cost rule for each cost type to be calculated based on formulas, complete the following steps:

    1.  Click the three horizontal lines icon and then click Manage Cost Rules. The Manage Cost Rules window is displayed with the cost fields that you selected in Step 4 - Define cost stratification.

    2.  In the Manage Cost Rules window, click the '+' icon to add a rule.

    3.  In the Cost Type column, select the cost type for which you want to define a rule.

    4.  Input the criteria in the selected cost field columns. The criteria will be used to determine the transactions to which this cost rule should apply.

    5.  In the Apply Formula column, select the appropriate formula that you defined in the previous steps.

    6.  If the Apply Value is used in the selected formula, enter the value that is to be applied to the calculation.

    7.  In the Start Date column, specify the start effective date of the cost rule.

    8.  Toggle the Enabled column to Yes.

    9.  Repeat b ~ h to create one cost type for each cost type that is to be calculated based on formulas.

    10.  Save your settings and close the window.


## POB template setup

After cost policies are set up, all defined cost types are displayed in the POB template for you to map to appropriate POB templates.

Complete the following steps to map the cost type to a POB template:

1.  If a POB template does not exist in Zuora Revenue yet, create it. For more information, see [Create POB template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/A_get_started/topics/create_pob_template.dita).

2.  Navigate to Policies > Performance Obligations. The POB Templates page is displayed listing all POB templates created in Zuora Revenue.

3.  Click the target POB template and then click Edit Template icon on the right. The Edit POB Template window is displayed.

4.  Click the Cost Treatment tab. All defined cost types are listed and the cost fields are populated as defined for each cost type.

5.  To map a cost type to the POB template, select the checkbox in the Enabled column.

6.  For the cost release to follow the revenue release percentage, select the checkbox in the Follow Revenue Release column.

7.  For the cost treatment to follow the timelines and revenue ratable methods that are defined in the POB template, select the checkbox in the Follow Revenue Timing column.

8.  Click the save icon to save your settings.


## What to do next

After you complete the required cost setups, Zuora Revenue can automatically apply appropriate formulas to calculate cost amounts when transactions are loaded to Zuora Revenue.

To review the cost data in Zuora Revenue, use the Revenue Contract Detail page or cost-related reports. For more information, see [Cost review](/zuora-revenue/advanced-revenue-operations/cost-processing).

To understand the accounting behaviors for cost processing, see [Accounting entries for cost](/zuora-revenue/advanced-revenue-operations/cost-processing/cost-setup) .

Note:

After accounting entries are created for the cost, you can no longer make changes to the cost.
