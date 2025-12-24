---
title: "Schedule report runs"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/schedule-report-runs"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:50.555Z"
---

# Schedule report runs

Schedule reporting reports to run at any time in the future

When reports are run on a schedule, you can automate distribution of the results, as a file attachment or with a link, to a list of email recipients.

Zuora Reporting sends report results from scheduled-report-notification-no-reply@zuora.com.

Note:

Currently, the size limit of the report attachment is 25MB. If the report attachment exceeds the limit, the email will not be sent. You can decrease the size of the report attachment by setting Format to Compressed CSV file of Report Results .

You can also share report definitions with other Reporting users. See [Folders and sharing](/zuora-platform/data/reporting/use-reporting/folders-and-sharing) for more information.

After you have saved any report, you can create a schedule to run that report.

Start report schedule configuration from either:

A) The report details page > click the triangle on the Save Report &Run button to expose the menu and select Schedule, or

B) Click the triangle on the Run Detail Report button to expose the menu and select Schedule.

The Schedule Report window enables configuration of the following:

-   Run (required) - Choose whether to run a summary report or a detail report on your schedule. If you require both reports to be run, you must configure two separate schedules.

-   Format (required) Completed report runs always generate a CSV file. You can download that file from the Manage Report Runs page regardless of whether you choose to send a link or the CSV file.

    -   CSV of Report Results - Attach the report run results to the email as a CSV file.

    -   Link to Report Results - Send a link to a CSV file that contains the report run results.

    -   Compressed CSV file of Report Results - Attach the report run results to the email as a ZIP file. The ZIP file contains the report run results in CSV format. This option is useful if your email service does not support large file attachments.

-   CSV layout (required) - Available with Run Summary Report and CSV of Report Results only. If you select Crosstab layout , the rows and columns in the generated CSV file are grouped in the same way as the report results displayed in the Zuora user interface. If you select Unpivoted layout , the CSV file is formatted as a flat table.

-   Distribution List (optional) - Enter email addresses for those who should receive the report results. Click Enter or Tab to save an email address. If you are copying and pasting multiple email addresses, email addresses must be separated by a comma. Recipient e-mail addresses may be restricted to those within your corporate domain when the Reporting API - Update Tenant Settings has been used to specify the restriction.

-   Message (optional) - Simple text with limited font markup may be used in the message field to introduce the report results. Simple tags like the following may be used inline for your message: Any text entered in the Message field is added before the following basic information sent as a message body: The {ReportName} report results are now available. Report Name: {ReportName} Report Date/Time: {DateTimeStarted} Scheduled by: {UserName} The report results are attached to this mail as a CSV file. The subject line of the email with the attached CSV file will be: {ReportName} report results

    -   <b> bold </b>,

    -   <i>italicize</i>,

    -   <u>underline</u>, or

    -   <br> for a line break.

-   Schedule (required)

    -   One-time report run - When selected, set a date and time (according to your Zuora Tenant time) when the report is to be run, or

    -   Recurring report run \- When Recurring report run is selected specify the following:

        -   Frequency - Daily, Weekly, or Monthly as a unit of time for the periodic schedule repetition.

        -   Repeats Every - Set the number of units (days, weeks, or months depending on the Frequency selection) for the period length. For example, a frequency of "Monthly" can be used for annual repetitions by setting Repeats Every to a value of 12. Quarterly report runs could be scheduled with a Repeats Every 3 months value.

        -   Repeats On (Weekly frequency only) - Choose the days of the week the report will be run. A report could be run Monday through Friday every week or once every two weeks on a Monday early AM with a Repeats Every value of 2.

        -   Day of month (Monthly frequency only) - Select any day of the month for the report to run. For months like February, which usually does not have a day 29 (Leap years excepted), 30, or 31, a selection of those days will result in no execution of the report in months without those days. To provide you with the option to execute reports at the end of every month use the "End of Month" or specify up seven days before the end of the month regardless of the number of days in the month. If you need to execute more than once a month, you can use the weekly frequency or create a second scheduled report run.

        -   Starts After \- Specify the date after which the recurring schedule should begin. Also specify the hour and minute after which the report schedule should be active and when the report is to be run. It is recommended to schedule report runs in off-peak hours, before the work day begins for your expected audience. This setting is based on the Zuora Tenant time zone setting. You can verify your Zuora Tenant time zone setting in Settings > Administration Settings > Manage Tenant Profile > Time Zone .

        -   Ends On - the date after which the schedule will no longer run.

            -   Never - Schedule will remain active until it is manually canceled.

            -   Fixed Date - Specify a date and time when the schedule is to stop.

            -   Fixed Number of Occurrences - Specifies a limit to the number of schedule report runs.


For example:

![Reporting_Schedule_Weekly.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3e066d22-1f29-42bf-a2cc-5b52d799051d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNlMDY2ZDIyLTFmMjktNDJiZi1hMmNjLTViNTJkNzk5MDUxZCIsImV4cCI6MTc2NjY4ODEwOCwianRpIjoiMzliYzhiOWY1NWE3NDdjNGIzNDY3NmVhZjY0Mzk4NjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.td9gH9El72oozXllLMAVjABs6rtFG2LvX2IbxZob9C8)

Save your schedule and your report results will be made available according to your configurations.

Zuora leverages the Quartz Cron expression, (see [Cron Trigger Tutorial](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html)) to calculate the `month` expression. The following section explains the month expression is calculated:

![Schedule Report.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e0dda8de-13b2-4a44-9646-53f7b91ffc62?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUwZGRhOGRlLTEzYjItNGE0NC05NjQ2LTUzZjdiOTFmZmM2MiIsImV4cCI6MTc2NjY4ODEwOCwianRpIjoiYjUwMzk0Y2I1YmU1NDI3Zjk5NWJkMWI3MmM3MzE3MDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-GosKOYWouzb77iXU8uLDe8eP7d6B91LmbX8l62RwRk)

In the above image, the expression is:

Starting from March with 3 month interval on the first day of the month 3/3 So the months would be March, June, Sept, Dec (3,6,9,12) If you specify Feb.28 for example, the schedule will be 2/3, (2,5,8,11).

Note:

The header of the scheduled report will be automatically translated to the language you've set in your profile. For more information, see [personal settings](/zuora-platform/system-management/additional-tenant-management-settings/personal-settings).

Zuora currently supports the following languages for translation:

-   English

-   Japanese

-   French

-   German

-   Spanish


The translation is only applicable to the report headers.

## Review, Edit, or Delete a Scheduled Report Run

You can review, edit, or delete any of your scheduled reports by going to Reporting Home > Manage Report Runs > Scheduled Reports. The Scheduled Reports tab on the Manage Report Runs page lists all your scheduled reports in a table that can be sorted on any column.

Review and edit any scheduled report using \[Edit\] in the Actions column. You can also \[Delete\] a scheduled report run and the report definition remains untouched.

## What is next

Next you can view a list of scheduled reports and other report runs. From the Manage Report Runs page you will be able to see all reports that are in progress, completed, canceled or in error.

You can download CSV report result files from the Manage Report Runs page. Report result files are available for download for 60 days.

You can also use the Manage Report Runs page to see which reports remain in progress for significant times. From that page you may delete schedules and create new schedules for reports.
