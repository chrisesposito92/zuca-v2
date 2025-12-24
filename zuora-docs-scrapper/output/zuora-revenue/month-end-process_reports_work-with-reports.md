---
title: "Work with reports"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/work-with-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:51.608Z"
---

# Work with reports

Learn how to run, schedule, and edit report layouts, as well as manage report access and favorites in Zuora Revenue.

Many options are provided for you to run a report, schedule a report, or edit the report layout. These options are available either on the Report > Run Reports page or on the report details page.

After you navigate to Reports > Run Reports , you can do the following things:

-   Get report details based on a selected layout
-   Edit the report such as the access list or the field label
-   Create or edit the report layout
-   Add the current report and layout to your favorites
-   Add the report to migration

After you get to the report details page, click the menu icon (three lines icon) to get the options to do the following things:

-   Add the current report and layout to your favorites
-   Edit the report layout
-   Edit the report
-   Submit the report download
-   Save the report layout,
-   Schedule a report download

## Run Reports

To run a report in Zuora Revenue, complete the following steps:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the report that you want to run and select a layout from the dropdown list. For example, select the Accounting Summary layout for the Accounting Report.
4.  Click Report Detail to go to the corresponding report page.
5.  In the Filter section, specify the criteria to filter the report data.

    Note:

    Filter criteria are specific to each report. The mandatory field for the filter is indicated by an asterisk (\*).

6.  Click Run Report. The report data is displayed in the lower pane under the Filters section on the report details page.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bef5357e-b436-4bdf-bcbd-d88365277c4a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJlZjUzNTdlLWI0MzYtNGJkZi1iY2JkLWQ4ODM2NTI3N2M0YSIsImV4cCI6MTc2NjYzNjg2OSwianRpIjoiNTc0NTJhZGU3MzY1NDBjZWI0NTVjODI0OWYxZjU5OTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gjqfZsHxpvG7ZMCSNePRfDsI_pekNrisBR_HiaYp_Gg)

    Note:

    The following fields have been introduced and are now available for use in Custom Layouts within the Accounting reports:

    -   Associated Credit Memo Type
    -   Credit Memo Number
    -   Credit Memo Line Number
    -   Credit Memo Line ID
    -   System Generated Billings


## Copy Layouts

Layouts must be defined for a report to display data. The reports that are seeded in Zuora Revenue have predefined layouts. You can copy these predefined layouts and then customize them based on your own needs.

Complete the following steps to copy an existing report layout:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the target report and click Edit Report. The Edit Report window of this report is displayed. The following graphic shows the window for the Accounting Report.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a1818666-20fc-4e1a-85d8-255c19a192e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImExODE4NjY2LTIwZmMtNGUxYS04NWQ4LTI1NWMxOWExOTJlOSIsImV4cCI6MTc2NjYzNjg2OSwianRpIjoiMDViYTlhNjgzNmI3NGU2Y2I1NjAxZGM4ZjEzMjg3ODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-V0rAXaOgUDLq_dkIx4IAiGWf0NW2Tmkzycuht5ZdvY)
4.  In the Layouts tab of the Edit Report window, hover your mouse over the line of the report layout that you want to copy and click the copy icon.
5.  In the Confirm Copy window, click OK. The Copy Layout window will be displayed.
6.  Enter the values for the Layout Name, Layout Description, and Filename Prefix fields in the Copy Layout window.
7.  Click Copy. The newly created layout will be displayed in the Layouts tab of the Edit Report - Accounting Report window.
8.  Click the save icon in the Edit Report window to save the copied layout in Zuora Revenue.


## Create Layouts

Complete the following steps to create a layout from scratch:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the target report and click Edit Report.
4.  In the Layouts tab of the Edit Report window, click the plus icon to create a new layout. The New Layout window is displayed.
5.  Complete the following fields in the New Layout window.
    | Field Name | Description |
    | --- | --- |
    | Layout Name | Enter a layout name. |
    | Layout Description | Enter the layout description. |
    | Enabled | Switch the Enabled toggle to indicate whether the layout is enabled. |
    | Is Summary | Switch the Is Summary toggle to indicate whether this report should be further summarized by the selected dimensions. |
    | Enable Totals | Switch the Enable Totals toggle to indicate whether to generate grand totals for the report. |
    | Aggregate Flag | Switch the Aggregate Flag toggle to indicate whether to enable the Aggregate Flag in the report layout. |

6.  Click the save icon save this layout information. A message indicating that the layout is successfully created is displayed and the lower pane of the New Layout window becomes available.
7.  Configure the layout details and save your configuration in each tab.

    -   Fields: Select the fields that you want to view in the report layout and click the arrow buttons to move the fields from Available Fields to Selected Fields. The maximum number of the selected fields is 50.
    -   Field Details: Edit the details of the selected fields in the Fields tab.

        Note:

        Note that the sort order will not work for the following reports:

        -   Billing Waterfall
        -   SSP Update Report
        -   Period FX Waterfall
        -   SSP Optimizer Range
        -   SSP Stratifications
        -   Consumption Usage Waterfall Report
        -   Role Privileges Report

        | Field Name | Description |
        | --- | --- |
        | Sort Order | The order of the field values. Select one from the following options:Ascending Blanks FIRSTAscending Blanks LASTDescending Blanks FIRSTDescending Blanks LAST |
        | Sort Seq | Enter the Sort Sequence number of each field in its corresponding data category. |

    -   Filters: The filters that you used to run the report are populated automatically in the Filters tab. You can review the filters in this tab. If you have not run the report yet, nothing is displayed in this tab.
    -   Drill Layouts: Select the layouts to be displayed by moving your selection from Available Layouts list to Selected Layouts list.

    -   Chart Config: Set the criteria to configure the chart. You can click the chart icon to preview the generated chart based on your configurations.

8.  Click the save icon in the upper pane to save layout in Zuora Revenue.


## Add field to the report filter

To add a field to be used as a filter to a report, complete the following steps:

1.  Navigate to Reports > Run Reports.
2.  Locate the target report and click Edit Report.
3.  In the Layouts tab of the Edit Report window, hover the mouse over the line of the target layout and click the pencil icon.

    Note:

    The predefined standard layout is not editable. Only the customized layout is eligible for the following steps. To add a field as a filter for the standard layout, make a copy of the standard layout and then edit the copied layout.

4.  In the Edit Layout window, click the Filters tab. The fields available for the current filter are listed.
5.  To add a field to the filter, click the Manage Filter icon. (Filler icon) .
6.  In the Manage Filter window, click the plus icon (+) add a line.
7.  In the Data Category column, select All to display all the eligible fields for the current report.
8.  In the Field Name column, select the target field and ensure the Enabled Filter switch is toggled to Yes.
9.  Click the save icon and close the window.

## Add a field to the report

To add a field to a report, complete the following steps:

1.  Navigate to Reports > Run Reports.
2.  Locate the target report and click Edit Report.
3.  In the Layouts tab of the Edit Report window, hover the mouse over the line of the target layout and click the pencil icon.

    Note: The predefined standard layout is not editable. Only the customized layout is eligible for the following steps. To add a field as a filter for the standard layout, make a copy of the standard layout and then edit the copied layout.

4.  In the Edit Layout window, use the Fields tab to specify the fields that are available in the report. To add a field, click one or more target fields from the Available Fields section, and click the arrow icon to move your selection to the Selected Fields section.

    Note:

    The combination of the Available Fields list and the Selected Fields list includes all the fields that are applicable to the current edited report. If the Available Fields list is empty for your selection, it means all the applicable fields of the report have been moved from the Available Fields list to the Selected Fields list.

5.  Click the save icon and close the window.


## Restrict Report access to specific roles

You can control the report access by giving the editing permission to different roles:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the target report and click Edit Report.
4.  In the Edit Report window, click the Security tab.
5.  Select the roles to whom you want to give the editing permission from the List of Roles section and click right arrow icon to move your selected to the Selected Roles section.
6.  Click the save icon in the lower pane to save the permission configuration and then click the save icon in the upper pane to save the report.

## Edit layout

The standard report layouts that are predefined in Zuora Revenue cannot be edited. To edit a standard report layout, copy the standard layout and edit the copied one.

After the standard layout is copied by following the instructions in Copy Layouts section (above), complete the following steps to edit the copied layout:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find target the report and select a layout from the dropdown list.
4.  Click Edit Layout. The Edit Layout window of the selected layout is displayed.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9dc2e0bf-6e15-4850-acc6-84458b88e4d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkYzJlMGJmLTZlMTUtNDg1MC1hY2M2LTg0NDU4Yjg4ZTRkMiIsImV4cCI6MTc2NjYzNjg2OSwianRpIjoiMjlkMjU2MGU0OTQwNDU4ZjhhMmUwYjY3OTdmNDk1YTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NMp3NQIl-sUfLrOreGZZmKK1w-sLKTWYzWUxFRubod0)
5.  Configure the layout details in each tab and save the layout configurations. See the Create Layouts section (above) for detailed information about each tab.

## Add to Favourites or remove from Favourites

You can add report layouts to your favorites so that you can quickly access them in the Favorites tab in the future. You can also remove the report layouts that are no longer needed from your favorites.

## Add to Favourites

Complete the following steps to add a report layout to your favorites:

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the target report and select a layout from the dropdown list.
4.  Click Add To Favorites.

A message indicating the report has been successfully added to Favorites will be displayed and the report with the selected layout then appears in the Favorites tab on the Reports > Run Reports page.

## Remove from Favourites

Complete the following steps to remove a report layout from your favorites:

1.  Navigate to Reports > Run Reports.
2.  In the Favorites tab, locate the report and select the layout that you want to remove from the dropdown list.
3.  Click Remove From Favorites.

A message indicating the report has been successfully removed from Favorites will be displayed and the report with the selected layout is then removed from the Favorites tab.

## Add to Migration

Complete the following steps to add a report to migration.

1.  Navigate to Reports > Run Reports.
2.  Click the tab of a certain report category to view all available reports of this category.
3.  Find the report that you want to add to migration and click Add To Migration.

A message indicating that it is successfully added to the migration will be displayed.
