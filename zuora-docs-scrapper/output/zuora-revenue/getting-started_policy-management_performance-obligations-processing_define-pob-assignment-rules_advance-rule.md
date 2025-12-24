---
title: "Advance Rule"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules/advance-rule"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:14.547Z"
---

# Advance Rule

Learn how to define and apply advanced rules to combine transaction lines into a single performance obligation (POB) for revenue recognition.

Use the advanced rules to combine one or more transaction lines into a single POB.

To define an advanced rule, you must specify required and optional goods and/or services to be included in the POB and specify the leading line that drives revenue recognition for the POB.

Complete the following steps to assign the POB template with the advanced rule:

1.  Navigate to Policies > Performance Obligations .
2.  Click the left pointing arrow to open the side menu, and then click Advance Rule .
3.  To add a rule, click the '+' icon on the left pane.
4.  In the New Rule window, specify the rule name and the sequence number, and then click the save icon. The rule name is listed on the left pane.
5.  To add a grouping condition, complete the following steps:
    1.  Hover the mouse over the rule that you created and click .
    2.  On the New Condition page, enter the condition name, select the attribute to derive POB name, and then select the appropriate POB template.
    3.  In the Grouping Identifier field, select the attribute that you want to use for grouping across different goods and services.
    4.  Click the save icon. The condition is created and listed under the rule name on the left pane.
    5.  On the Goods and Services tab, enter the name of the goods or services in the Name column.
    6.  Specify whether this transaction line is required to form the POB within the revenue contract in the Mandatory Element column.
    7.  Specify whether this transaction line is the leading line that drives revenue recognition in the Leading Indicator column. For example, if there are multiple lines in a POB, the leading line determines the revenue timing that all the other lines within the same POB should follow.

        -   If an item is selected as the leading indicator, it must also be selected as the mandatory element. The mandatory element leading indicator is the item sold within a revenue contract that will be used to identify the line that drives revenue recognition for the performance obligation. A performance obligation can have only one mandatory element leading indicator.
        -   Besides the mandatory element leading indicator, it is not required for a performance obligation to have other mandatory elements. If more than one mandatory element is selected for a performance obligation, all mandatory elements must be present in the revenue contract to create the selected performance obligation.
        -   Optional elements are not required to create a performance obligation. However, if optional elements exist in the revenue contract, they will be included as part of the performance obligation.


    8.  (Optional): If there are multiple goods and/or services that meet the criteria, use the Consolidate and Consolidate Identifier columns to select the attribute that is used for consolidating the transaction line. Otherwise, individual POBs are created for each satisfied POB condition line.
    9.  Click the cogwheel icon to assign the grouping criteria for the current line. The Assign Criteria window is displayed.
    10.  In the Assign Criteria window, specify the attribute name, operator, and operand that are used to group multiple goods and/or services into the single transaction line. For example, if you set Product Catalog = Maintenance, all goods or services that fall into the maintenance catalog will be grouped into one transaction line.
    11.  Click the save icon and then close the Assign Criteria window.
    12.  Repeat the above steps to add more goods and services for this POB template.
    13.  (Optional): To assign holds to the POB template, click the Assign Holds tab and select the appropriate holds from the Available Holds list and add them to the Selected Holds list. Then click the save icon .
6.  Add as many conditions as you need.
7.  Adjust the sequence of multiple conditions to apply, edit the number in the Sequence filed on each condition page.

When Zuora Revenue identifies performance obligations within a revenue contract, it always attempts to apply the configured advance rules first. If no advanced rules are applicable, Zuora Revenue then attempts the Assignment - By Attributes rule.
