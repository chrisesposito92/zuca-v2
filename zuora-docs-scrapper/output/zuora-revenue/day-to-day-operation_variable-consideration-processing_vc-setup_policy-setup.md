---
title: "Policy setup"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/policy-setup"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:56.436Z"
---

# Policy setup

Define VC-related policies, including VC type, formula, and rule, to enable automatic application of VC to sales order lines in Zuora Revenue.

Before transactions can be uploaded to Zuora Revenue, VC-related policies, such as VC type, formula, and rule, must be defined.

If a transaction satisfies the VC rule and the POB mapped with the VC type is applied to that transaction, VC can be automatically applied to the sales order line upon RC creation. If RC is already created, the VC rule setup can be omitted.

Complete the following steps to set up VC policies:

1.  Navigate to Policies > Variable Consideration . The Variable Consideration page is displayed.
2.  To select the VC fields to used for VC stratification configuration in Step 5, complete the following steps:
    1.  Click the menu icon and then click Manage VC Fields .
    2.  In the Manage VC Fields window, select the required fields from the Available Books list and move them to the Selected Books list.
    3.  Save your changes and close the Manage VC Fields window.
3.  To set up VC formulas, complete the following steps:
    1.  Click the menu icon and then click Manage VC Formulas .
    2.  In the Manage VC Formulas window, click to add a formula.
    3.  In the New Formula window, specify a unique formula name in the Name field and the start effective date in the Start Date field.
    4.  In the Formula field, provide a formula by selecting appropriate fields, operators, and operands from the Column Name, Keypad, and Function sections. The following graphic shows an example of a defined VC formula: ![vc-formula-example.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b6362e8d-0673-400e-bc71-37fdcd63aaad?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2MzYyZThkLTA2NzMtNDAwZS1iYzcxLTM3ZmRjZDYzYWFhZCIsImV4cCI6MTc2NjYzNzExNCwianRpIjoiNTcwOWI0MjI3YzJhNGYzYzkyOWQ1ZWJkODM4NTlmYmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8W0K9MdVwRJjHWW1xfYduxOUqXg4zBKElgPsInQThbk)

        Note:

        -   If you use Apply Value in your formula, you can specify different apply values in this formula and assign the formula to different VC types later as instructed in Step 6 - Define a VC rule.
        -   If you use Billing - Revenue Integration, do not use the allocatable value in the formula; otherwise, the calculated VC amount might be inaccurate.

    5.  Save your changes.
    6.  Repeat Step b ~ e to create as many formulas as you need and close the window.
4.  To create a VC type, complete the following steps:
    1.  Click the menu icon and then click Manage VC Types .
    2.  In the Manage VC Types window, click to add a VC type line.
    3.  Provide a name and description for the VC type.
    4.  (Optional) Select the appropriate VC rule type in the Rule Type column.
    5.  (Optional) In the Include in Allocation column, specify whether the amount of this VC type should be included in the allocation process.
    6.  (Optional) In the Netting column, specify whether you want the accounting entries for this VC type to be included in the netting process as VC accrual or VC revenue.
    7.  If you want the Actuals Qty field to be populated during the VC actual upload, toggle the Track By Quantity switch to Yes . Otherwise, the Actual Qty field will not be accounted in for VC estimates.
    8.  Select appropriate VC accounts for the Balance Sheet , Income Statement , VC Clearing Account columns.
    9.  For Zuora Revenue to create VC accrual entries, toggle the Create Accrual Accounting switch to Yes and then select the appropriate accrual method in the Accrual Method column. Otherwise, the VC accrual entries will not be created. The following accrual methods are available:

        -   Booking: Accrual entries are created upon booking of the order.

        -   Billing: Accrual entries are created upon billing of the order, for example, when an invoice is received. If billing is partial, the accrual entries will also be created partially.

        -   Revenue Release: Accrual entries are created upon full or partial revenue recognition of the order. The accrual entries created will be proportional to the percentage of revenue release.


    10.  Ensure the Enabled switch is toggled to Yes .
    11.  (Optional) Specify the expiry information for the VC type in the following columns. When the VC Expiry job is started, the VC estimate for a sales order line will expire after the specified duration. After the VC Expiry job completes, the expired amount is populated for the SO line unless the estimated amount has been cleared. This will reset the allocatable amount for the SO line and reallocation is triggered. For example, you can configure the VC to expire four days after the RC Line Date.

         -   Expiry Base Date: Specifies the date, which is populated in transaction upload, to be used to calculate the expiry date for the VC type.

         -   Expiry Type: Specifies whether the expiry date is calculated based on days or periods, starting from the expiry base date.

         -   Expiry Value: Specifies the number of days or periods after which the VC will expire.


    12.  Save your settings.
    13.  Repeat Step b ~ l to create as many VC types as you need.
5.  To define VC stratification to map the appropriate formula for a VC type, complete the following steps:
    1.  Click the menu icon and then click Manage VC Types .
    2.  In the Manage VC Types window, click the target VC type.
    3.  In the VC Stratification Criteria section, click to add a line.
    4.  Provide a name and then select the VC fields to be set for criteria by toggling the switch to Yes . Your selection will be used for VC rule configuration in Step 6 - Define a VC rule.
    5.  In the Apply Formula column, select the VC formula to be applied to the VC type.
    6.  Specify the start effective date of this VC stratification line.
    7.  Ensure that the Enabled switch to toggled to Yes .
    8.  Add as many lines as you need and organize the order in the Seq column.
    9.  Save your settings and close the window.
6.  To define a VC rule, complete the following steps:
    1.  Click the menu icon and then click Manage VC Rules . The Manage VC Rules window is displayed with the VC fields that you selected in Step 5 - Define VC stratification listed.
    2.  In the Manage VC Rules window, click the add icon ('+') to add a rule.
    3.  In the VC Type column, select the target VC type for which you want to define a rule.
    4.  Input the criteria in the selected VC field columns. The criteria will be used to determine the target transactions for VC processing.
    5.  In the Apply Formula column, select the appropriate formula that you defined in the previous steps.
    6.  If the Apply Value is used in the selected formula, enter the value that is to be applied to the calculation.
    7.  In the Start Date column, specify the start effective date of the VC rule.
    8.  Toggle the Enabled column to Yes .
    9.  Save your settings and close the window.
    10.  Repeat Step b ~ i to create another VC rule if necessary.
