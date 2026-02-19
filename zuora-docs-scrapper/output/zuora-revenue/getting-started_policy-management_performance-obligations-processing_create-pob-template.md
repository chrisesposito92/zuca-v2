---
title: "Create POB template"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/create-pob-template"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:37:58.734Z"
---

# Create POB template

Learn how to create a POB template by navigating to the appropriate section, entering required information, and saving your configuration.

Complete the following steps to create a POB template:

1.  Navigate to Policies > Performance Obligations .
2.  Click the '+' icon to create a POB template. The New POB Template window is displayed.
3.  Provide the following required information for the POB template and click .

    -   A unique template name in the Name field.
    -   The template effective start date in the Start Date field.

    -   The revenue trigger event in the Release Event field. Manual, Upon Billing, and Upon Booking are by default provided. You can also create your own event. For more information, see [Associate event with POB template](/zuora-revenue/data-management/event-processing/associate-event-with-pob-template) .
    -   The revenue treatment timing in the Ratable Method and Accounting Method fields. The ratable method determines how revenue is to be amortized based on the sales order line duration. The accounting method determines whether the revenue is to be calculated on a daily or partial monthly basis.
    -   Based on your business needs, use the POB Satisfied field to set the timing to be Over Time or Point In Time. This field is a display field, which does not have any impact on the POB functionality.
    -   The method of how to retain released revenue when sales order (SO) line updates are collected in the Retain Method field. Valid values are Retain Percent and Retain Amount. Selecting Retain Percent indicates when there is an increase or decrease in the SO value, the system will retain the release percentage but adjust the unreleased and released amount. Selecting Retain Amount indicates when there is an increase or decrease in the SO value, the system will retain the release amount but adjust the overall release percentage.
        Note: The Retain Method field takes effect only on SO value updates. It is not applicable for reduction order (RORD) line processing. When RORD is collected to reduce the term or quantity, it will be released based on the SO release percentage and the RORD dates.


4.  (Optional): Specify other fields for revenue treatment if necessary.

    -   Specify whether the POB should be treated as series distinct for contract modifications by using the Series Distinct toggle switch.
        Note: If a performance obligation contains a series of distinct goods or services, contract modification in transaction price will be accounted for on a prospective basis. If a performance obligation contains a series of non-distinct goods or services, contract modification in transaction price will be accounted for as cumulative adjustment if it has not been 100% recognized.

    -   Specify whether SO value or term change is allowed for the POB by using the Allow SO Term Change toggle switch.
    -   Enter a GL account in the Natural Account field.
    -   When the revenue release event does not occur, specify the revenue treatment in the Expiry Details section.
    -   Specify whether to exclude the SO line with overstated amount from being reported as exceptions on the Close Process Dashboard by using the Exclude from Close Dashboard toggle switch.

5.  (Optional): To apply a defined forecast type to this POB template, select the appropriate forecast template name in the Forecast Template field. For more information, see [Forecasting](/zuora-revenue/data-management/forecasting) .
6.  Save your configuration by clicking the save icon and close the Edit POB Template window.
7.  (Optional): Define the following information that is associated with the POB template and click the save icon on each tab.

    -   In the Cost Treatment tab, enable the appropriate cost type to associate the cost with this POB template and specify the cost recognition pattern for each cost type. For more information, see [Cost Processing](/zuora-revenue/advanced-revenue-operations/cost-processing) .
    -   In the VC Assignment tab, enable the appropriate VC rules for the POB template. For more information, see [Variable Consideration Processing](/zuora-revenue/day-to-day-operation/variable-consideration-processing) .
    -   In the POB Dependency tab, add the parent POB template and specify the dependency type. For more information, see [POB dependency](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/pob-dependency) .

    The POB template is created and listed on the POB Templates page.
