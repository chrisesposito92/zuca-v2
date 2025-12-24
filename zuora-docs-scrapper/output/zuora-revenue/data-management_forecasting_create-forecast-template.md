---
title: "Create forecast template"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/forecasting/create-forecast-template"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:03.219Z"
---

# Create forecast template

Create and manage forecast templates to associate with POB templates, enabling automatic generation of forecast schedules for transaction lines in Zuora Revenue.

A forecast template must be created for each forecast type that you have. Then, you can associate the appropriate forecast type with the POB template by specifying the Forecast Template field of the POB template. After that, when transaction data is uploaded to Zuora Revenue, the RevPro3.0 Generate Forecast Master program can be started to automatically create forecast schedules for all the transaction lines within the associated POB.

Forecast schedules are created for contractual revenue and carves, which will be used to calculate the net revenue. All the forecasted amounts are calculated for transaction lines and stored in Zuora Revenue as percentages, and then applied to all the transaction lines within the POB. The actual amounts will be derived as part of reporting and displayed accordingly.

## Before you begin

You must determine the forecast method to be used for a forecast template that you want to create. The following options are available for the Forecast Method field in the template definitions for you to select. Base on your selection, more definitions must be provided in the template.

-   By System: The forecast type is based on the system date. For this method, you also need to define the forecast date hierarchy and forecast schedules in the template definitions as explained below.

    -   Forecast date hierarchyThe date hierarchy determines the specific date when the revenue is to be forecasted. You can specify multiple dates in the date hierarchy and apply different adjustment methods for them. Detailed descriptions of adjustment methods can be found in the By Ratable Method bullet below.
    -   Forecast schedulesThe schedule determines the percentage of the amount that is to be forecasted for the specified duration type.
-   By Ratable Method: The forecast type is based on the specified start date and end date. For this method, you also need to specify the ratable method and adjustment method in the template definitions.

    -   Ratable Method Select the specific ratable method to be used for the forecast. This is similar to the POB template definitions.

    -   Adjustment MethodSpecify the adjustment method for the period to absorb the revenue amount that is ahead of the forecasted amount. Valid options are:

        -   Prorate: The available actuals and forecasted amount of the current open period will spread evenly across the remaining forecast schedules.
        -   LIFO (Last In First Out): The adjustment starts from the last forecast schedule period.
        -   FIFO (First In First Out): The adjustment starts from the next period after the current open period.For example, the initial forecast amount is 10000. Actuals of 4000 occurs in the current open period, Jan-19. The forecasted amounts derived by different adjustment methods are listed in the following table:

|  | Jan-19 | Feb-19 | Mar-19 | Apr-19 | May-19 |  |
| --- | --- | --- | --- | --- | --- | --- |
| Initial Forecast | 10000 | 2000 | 2000 | 2000 | 2000 | 2000 |
| Prorate |  | 0 | 1500 | 1500 | 1500 | 1500 |
| LIFO |  | 0 | 2000 | 2000 | 2000 | 0 |
| FIFO |  | 0 | 0 | 2000 | 2000 | 2000 |

Note:

For ratable POBs, if forecast schedules are defined in their associated forecast template, the POB start date and end dates will be ignored. The defined forecast schedules are used for forecasting instead.

## Procedure

Complete the following steps to create a forecast template:

1.  Navigate to Forecast > Template.

2.  To create a template, click the New Template icon (+) . The New Template window is displayed.

3.  Specify a unique name for the template in the Name field and select the effective start date for the template in the Start Date field.

4.  Click the save icon . The template is created.

5.  In the Forecast Method field, select By System or By Ratable Method.

6.  If you select By Ratable Method in the previous step, specify the Ratable Method and Adjustment Method fields by selecting the appropriate item from the drop-down list and then proceed to Step 8. Otherwise, proceed to the next step.

7.  If you select By System in the Forecast Method field in Step 5, specify the date hierarchy and forecast schedules in the lower half of the window by completing the following sub-steps:

    1.  In the Forecast Date Hierarchy section, click the '+' icon to add a line.

    2.  In the Forecast Start Date column, select the date from which the revenue has to be forecasted. The date fields on the line data are populated and listed for your selection.

    3.  In the Adjustment Period column, select the appropriate adjustment method.

    4.  Click the save icon in the Forecast Date Hierarchy section.

    5.  Click the line that you just created in the previous step.

    6.  In the Schedules section, click the '+' icon to add a line for the forecast schedules.

    7.  In the Duration Type column, select Periods or Days for the duration.

    8.  In the Duration column, enter the number of periods or days during which the forecasted revenue is collected for the defined schedules.

    9.  In the Percent column, enter the percentage without the percent sign (%) to specify the percentage of the forecasted revenue to be released in this duration.

    10.  Add as many lines as you need to specify the schedules for a forecast date hierarchy and use the Seq column to determine the sequence of these durations.

    11.  Click the save icon in the Schedules section. The following graphic shows an example of setting up LIFO adjustment period.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/524c6f44-5c96-48ee-a22c-3808dec4c892?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUyNGM2ZjQ0LTVjOTYtNDhlZS1hMjJjLTM4MDhkZWM0Yzg5MiIsImV4cCI6MTc2NjYzNjgyMSwianRpIjoiNDQ2OGNlNmY5ZmE1NDlmMWI4MWMzZGI1ODUzMzFjZTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ssmHymSVxe2UFAiYg1Ao2jldWGFvquYomjd88h6pa4A)

8.  Save your changes and close this window.


## Waterfall example of LIFO method

In this example, the forecast date hierarchy and schedules are defined as shown in Step 7-k in the above procedure. The Forecast Start Date is set to Revenue Start Date and the adjustment method is LIFO. According to the forecast schedule setting, the adjustment will last for 4 periods and 25% of unreleased revenue will be scheduled for each period.

The current open period is Jan-19 and the revenue start date is in the Jan-19 period. The adjustment will last for 4 periods and starts from Feb-19 until May-19. The unreleased revenue of each POB line in an RC is 12000. The forecast schedules in the waterfall for this RC will be as follows:

| SO Line ID | Line Item Num | SO Line Num | Revenue Start Date | Revenue End Date | Unreleased Revenue | RC Pob ID | Feb-19 | Mar-19 | Apr-19 | May-19 | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1001 | SW | 1000 | 01/01/2019 | 31/12/2019 | 12000 | 17600 | 3000 | 3000 | 3000 | 3000 | 12000 |
| 1002 | SW | 1000 | 01/01/2019 | 31/12/2019 | 12000 | 17601 | 3000 | 3000 | 3000 | 3000 | 12000 |
| 1003 | SW | 1000 | 01/01/2019 | 31/12/2019 | 12000 | 17602 | 3000 | 3000 | 3000 | 3000 | 12000 |

## What to do next

After the forecast templates are created, you can associate a forecast template with the POB template. To do this, go edit the POB template to select the appropriate forecast template in the Forecast Template field. For more information, see [Create POB template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/A_get_started/topics/create_pob_template.dita) .

After the forecast template is associated with a POB template, the RevPro3.0 Generate Forecast Master program can run with POB template name specified to create forecast schedules for all the transaction lines within the POB. After the program completes, you can view forecast data in the Waterfall tab of the Workbench or relevant reports.
