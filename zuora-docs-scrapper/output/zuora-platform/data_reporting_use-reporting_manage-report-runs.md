---
title: "Manage report runs"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/manage-report-runs"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:47.849Z"
---

# Manage report runs

Learn how to manage report runs

The Manage Report Runs page provides you with a table of all your report runs. You can get report results from completed reports and check the status of other reports. You can see when your reports were started, and what the report status is, or switch to the report definition, or download a CSV file of the report results. Manage Report Runs also shows report schedules.

Report runs older than 60 days are not listed on the Manage Report Runs page.

Administrators can also review a full list of all report runs and see schedules created by any user. Additionally, reporting admins with the Manage All Reports permission can also cancel running reports.

## Manage Report Runs

From the Reporting Home page click on Manage Report Runs and you can choose to see either Scheduled Reports or Report Runs. Both Scheduled Reports and Report Runs are displayed on the Manage Report Runs page as tabbed views.

## Scheduled Reports

The Scheduled Reports table displays both One-time and Recurring report schedules by default.

## Schedule Types

Scheduled reports can be either one-time or recurring . Select the One-time or Recurring check box to display schedules of that type.

## Sorting

Click on nearly any table heading to sort the table contents based on the ascending, descending, or default order of the table column values. A small triangle will appear next to the heading name you clicked to mark the column as the primary sort for the table. Sorting functionality is the same for both the Scheduled Reports and the Report Runs tables.

## Report Definition

Clicking the report name on the Scheduled Reports table opens the report definition.

To see the results of reports that have been run by a schedule go to the Report Runs display.

## Actions: Edit or Delete Report Schedules

You can review and edit any of your schedules, and if you have the Manage All Reports permission or if you are the author of the schedule you can delete them.

To review, edit, or delete any of your scheduled reports go to Reporting Home > Manage Report Runs > Scheduled Reports. The Scheduled Reports tab on the Manage Report Runs page lists all your scheduled reports in a table that can be sorted on any column.

Review and edit any scheduled report using the \[Edit\] link in the Actions column. You can also \[Delete\] a scheduled report run. The report definition remains unchanged when a schedule is deleted.

## Report Runs

The Report Runs table shows your Summary and Detail report runs. Administrators with Manage Reports or Manage All Reports permissions will see all report runs from all users regardless of whether they were manually run, triggered by a schedule or invoked by an API call.

## Status

Report runs can have a status of Completed, In-progress, Cancelled, or Error. All your report runs are shown by default. Use any of the check boxes to show report runs for only the status selected.

## Report Results

Click on the report name for any of your completed report runs to see the results displayed in the browser window. You can also download a CSV file of the report results from the Actions column link.

The following options are available for summary report results only:

-   \[Download Unpivoted CSV\] - Download a CSV file that is formatted as a flat table.

-   \[Download Crosstab CSV\] - Download a CSV file with the rows and columns grouped in the same way as the report results displayed in the Zuora user interface.


To export a valid Crosstab CSV the way you export an Unpivoted CSV, add fields to [Value fields](/zuora-platform/data/reporting/use-reporting/create-a-summary-report#concept-retjrr5i__value_fields) in the report definition so that Value Fields is not empty.

Note:

If the report results are larger than 25MB, your connection may time out while Zuora is preparing the CSV file. In this scenario, Zuora displays the error message "504 Gateway Time-out." If you receive this error when downloading report results, split the report into smaller sub-reports and download the results of each sub-report separately.

## Cancel Report Runs

Report runs with a status of In Progress may be canceled by the user who started them or by an administrator with the Manage All Reports permission. To cancel a report run, click the Cancel link provided in the Actions column of the report showing a status of In Progress.

## Data retention policy for Report Run History

According to Zuora's data retention policy, report run history will be retained for 30 days. If you wish to retain the data longer than the prescribed period, please reach out to your CSM or Account Executive to discuss available options.

## Manage report runs with Multi-Org enabled

If you have the Multi-Org feature enabled, report runs or scheduled report runs are linked to the selected organization units when the runs are created.

On the Manage Report Runs page, you can find report runs or scheduled report runs that exactly match the currently selected organization units. The Organizations column in the Report Runs or Scheduled Reports table contains the unit combination of each report run when the run was created.

For example, suppose that you have a Report Run A linked to Org X and a Report Run B linked to the unit combination of Org Y and Org Z:

-   If you select Org X in the organization switcher, you can find Report Run A on the Manage Report Runs page.

-   If you select only Org Y or select the unit combination of Org X and Org Y in the organization switcher, you can find nothing on the Manage Report Runs page because there is no exact match between any report run and these unit combinations.


For more information about Multi-Org, see [Overview of Multi-Org](/zuora-platform/user-management/multi-org/overview-of-multi-org).
