---
title: "Cost setup"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/cost-processing/cost-setup"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:01.330Z"
---

# Cost setup

Zuora Revenue requires specific setups to process and report on costs, including setting up cost-related accounts, creating cost types, and modifying POB templates for cost treatment.

For Zuora Revenue to process and report on costs, you must complete some setups in Zuora Revenue.

1.  Set up cost-related accounts, which is the prerequisite for all types of costs. See Accounting setup.
2.  Create all required cost types, and optionally create cost formulas and cost rules for the costs to be calculated based on formulas. See [Policy setup](#concept-1510__title-50) .
3.  Modify the POB templates to specify the cost treatment information. See [PoB template setup.](#concept-1510__title-165)

## Accounting setup

To track the accounting journal entries for costs, each cost type must be associated with its related accounts. The following accounts are the minimum requirements for each cost type. You might also need to create other accounts based on your company's accounting policies.

-   A balance sheet account
-   An income statement account

## Procedure

Complete the following steps to create account type in Zuora Revenue:

1.  Navigate to Setups > Application.
2.  Open the side menu and then click Accounting Setup. The Account Setup page opens.
3.  Click Unfreeze to edit the accounting settings.
4.  To add an account type, click the Account Type tab and then click '+' on the Account Type page.
5.  In the New Account Type window, enter the account type and select the account type ID from the drop-down list.
6.  To specify the account type, toggle the appropriate account type switch to Yes to associate the account with the cost type.
7.  Click the save icon and close the window. A message is displayed indicating that the account type is added successfully.
8.  (Optional) To edit the account mapping for the new account, locate the account type line on the Account Type page and click the second pencil icon on the right.

9.  (Optional) In the Edit Account Mapping window, change the account mapping and save your changes.

10.  Repeat Step 4 ~ 9 to create as many account types as you need.

11.  To freeze the accounting setup after your updates, click the Account Setup tab and then click Freeze.


## Policy Setup

For Zuora Revenue to automatically process costs, you must configure cost-related policies, such as cost types, formulas, and rules.

Complete the following steps to set up cost-related policies in Zuora Revenue:

1.  Navigate to Policies > Cost.
2.  To select the cost fields based on which you will create the cost types or cost rules, complete the following steps:
    1.  Click and then click Manage Cost Fields.
    2.  In the Manage Cost Fields windows, select the fields that you want to display for your cost types or cost rules from the Available Fields list and move them to the Selected Fields list.The selected fields will be displayed for you to define cost stratification in Step 5.
    3.  Click and close the Manage Cost Fields window.
3.  (Optional) For Zuora Revenue to automatically calculate the costs based on formulas, set up the cost formulas by completing the following steps:
    1.  Click the grey menu icon (three horizontal lines) and then click Manage Cost Formulas.
    2.  In the Manage Cost Formulas window, click the '+' icon to add a formula.
    3.  In the New Formula window, specify a unique formula name in the Name field and the start effective date in the Start Date field.
    4.  In the Formula field, provide a formula by selecting appropriate fields, operators and operands from the Column Name, Keypad, and Function sections.

        Note:

        -   To apply different values in the same formula for different cost types, you don't need to create the formula for multiple times with different values. Use the Apply Value field to specify different values for different cost types in their cost rules as instructed in Step 6 - Define a cost rule. Remember the Apply Value field in the cost rule is a percentage value. For example, you can define a formula as *Ext. Sell Price*. The Apply Value for Cost Type 1 is 10 and the Apply value for Cost Type 2 is 20. If the Ext. Sell Price is $300, the Cost Type 1 will be $30 (300\*10%) and Cost Type 2 will be $60 (300\*20%).
        -   Be careful when you add the Apply Value field to a cost formula and also specify the Apply Value in the cost rule. The Apply Value will be used twice in the cost calculation. The Apply Value in the formula is used as an absolute amount and the Apply Value in the cost rule is used as a percentage. The cost amount is calculated by multiplying the amount derived based on the formula by the apply value in the cost rule as a percentage. For example, the formula is defined as *Ext. Sell Price \* Apply Value*. If the Ext. Sell Price is $300 and the Apply Value for a cost type is 10, the cost amount is calculated by multiplying the amount ($300 \*10 = $3000) derived based on the formula by the Apply Value as a percentage (10%), which results in $300.

    5.  Repeat step b-d to create as many formulas as you need.

    6.  Save your changes and close the window.
4.  To create a cost type, complete the following steps:

    1.  Click and then click Manage Cost Types.

    2.  In the Manage Cost Types window, click the green save icon. to add a cost type.

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

    9.  If you want to enable the cost value to be switched between short-term accounting and long-term accounting, toggle the switch to Yes in the LT Reclass column and specify the account in the LT ST Account column.

    10.  Ensure the Enabled switch is toggled to Yes.

    11.  Click the green save icon. The cost type is created.

    12.  Repeat Step b ~ k to create as many cost types as you need.

5.  (Optional) To define cost stratification to map the appropriate formula for a cost type, complete the following steps:

    1.  Click the three line icon and click Manage Cost Types.

    2.  In the Manage Cost Types window, click the target cost type. All the fields that you selected in Step 2 are displayed in the Cost Stratification Criteria section.

    3.  In the Cost Stratification Criteria section, click the green '+' icon to add a line.

    4.  Provide a name and then select the cost fields that are to be set for criteria by toggling the switch to Yes. Your selection will be used for cost rule setup in Step 6 - Define a cost rule.

    5.  In the Apply Formula column, select the cost formula to be applied to the select cost type.

    6.  Specify the start effective date of this cost stratification line in the Start Date column.

    7.  Ensure that the Enabled switch to toggled to Yes.

    8.  Add as many lines as you need and organize the order in the Seq column.

    9.  Save your settings and close the window.

6.  To define the cost rule for each cost type to be calculated based on formulas, complete the following steps:

    2.  Click the three line icon and then click Manage Cost Rules. The Manage Cost Rules window is displayed with the cost fields that you selected in Step 5 - Define cost stratification.

    3.  In the Manage Cost Rules window, click the '+' icon to add a rule.

    4.  In the Cost Type column, select the cost type for which you want to define a rule.

    5.  Input the criteria in the selected cost field columns. The criteria will be used to determine the transactions to which this cost rule should apply.

    6.  In the Apply Formula column, select the appropriate formula that you defined in previous steps.

    7.  If the Apply Value is used in the selected formula, enter the value that is to be applied to the calculation.

    8.  In the Start Date column, specify the start effective date of the cost rule.

    9.  Toggle the Enabled column to Yes.

    10.  Repeat b ~ h to create one cost type for each cost type that is to be calculated based on formulas.

    11.  Save your settings and close the window.

         Note:

         After you understand the logic of how costs are processed in Zuora Revenue and are familiar with the process of defining cost rules, you can create multiple cost rules based on the same cost type all at once by uploading the defined rules in a CSV file. To do this, on the Cost page, click Upload. Then, in the Cost Upload window, select the cost type, choose the local CSV file and click Upload.


## Example

For example, you can define a formula as Apply Value \* Ext Sell Price (Of The SO Line) as instructed in Step 3. Then, you define a cost type named Commission in Step 4, enable Product Category for the cost stratification criteria and select that formula for this stratification line in Step 5. In Step 6, you can define multiple cost rules so that different values are applied to the same formula to calculate the costs for different line items as follows:

| Cost Rule | Product Category | Apply Value | Formula |
| --- | --- | --- | --- |
| Commission Hardware | Hardware | 5 | Ext Sell Price * 5% |
| Commission Software | Software | 4 | Ext Sell Price * 4% |
| Commission Services | Services | 3 | Ext Sell Price * 3% |

## POB Template setup

After cost policies are set up, all defined cost types are displayed in the POB template for you to map to appropriate POB templates.

Note: Before you begin, remember that, If a POB template does not exist in Zuora Revenue yet, create it. For more information, see

[Create POB template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/A_get_started/topics/create_pob_template.dita)

.

## Procedure

Complete the following steps to map the cost type to a POB template:

1.  Navigate to Policies > Performance Obligations. The POB Templates page is displayed listing all POB templates created in Zuora Revenue.

2.  Click the target POB template and then click Edit Template icon (pencil icon) on the right. The Edit POB Template window is displayed.

3.  Click the Cost Treatment tab. All defined cost types are listed and the cost fields are populated as defined for each cost type.

4.  To map a cost type to the POB template, select the checkbox in the Enabled column.

5.  If you want the cost release to follow the revenue release percentage, select the checkbox in the Follow Revenue Release column. Otherwise, clear this checkbox and select cost release event in the Release Event column.

6.  If you want to the cost treatment to follow the timelines and revenue ratable methods that are defined in the POB template, select the checkbox in the Follow Revenue Timing column. Otherwise, clear this checkbox and select the cost ratable method in the Ratable Method column.

7.  Click the save icon to save your settings.


After you complete the required cost setups, for formula-based costs, Zuora Revenue can automatically apply appropriate formulas to calculate cost amounts when transactions are uploaded to Zuora Revenue.

To upload costs that are calculated outside Zuora Revenue by using file upload, see [Cost upload](/zuora-revenue/advanced-revenue-operations/cost-processing/cost-upload).

Note:

After accounting entries are created for the cost, you cannot make changes to the cost.
