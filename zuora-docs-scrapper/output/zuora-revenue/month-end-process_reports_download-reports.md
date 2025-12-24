---
title: "Download reports"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/download-reports"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:59.066Z"
---

# Download reports

Learn how to download reports immediately or schedule them for future downloads, including enabling file compression for large report files.

After you run a report, you have the option to download the current report immediately or schedule the report to run on a regular basis in the future for download. If the report file is large, it is also recommended to enable the compressed format for the report file before you submit or schedule a download.

## Enable file compression for report download

If the report file is large, it is also recommended to enable the compressed format for the report file before you submit or schedule a download.

The following instruction applies to version 37.002.00.00 and later versions. If you use a version earlier than 37.002.00.00, the Compress Report

Output toggle switch is not available.

To enable file compression for a report, complete the following steps:

1.  Navigate Reports > Run Reports.

2.  Locate the specific report on the Run Reports page by using one of the following methods:

    1.  Click the report category tab to view all available reports of this category and find the specific report.

    2.  Type part of the report name in the search box and locate the specific report.

3.  Click Edit Report. The Edit Report window is displayed.

4.  Toggle the Compress Report Output switch to Yes.

5.  Click the save icon to save your changes.


Now, you have enabled report file compression. When you download the report, the file will be compressed and then downloaded.

## Submit a report download

After you run a report, use the Submit Download option to download the report immediately. When you want to submit a report download request, an enhanced deduping process is introduced. This new deduping process will check whether a duplicate download request has been submitted for the same report with the same filter criteria (without changes in the underlying data). If yes, you will be prompted to choose whether to use the existing download or submit a new one. The introduction of the deduping process can help avoid the waste of resources due to duplicate download requests. The following instruction applies to version 37.002.00.00 and later versions. If you use a version earlier than 37.002.00.00, Step 2 will be skipped.

Complete the following steps to download a report from the UI:

1.  After the report is successfully run, on the report details page, click to expand the report menu and then click Submit Download.
2.  If a previous report download is completed or is in progress for the same report with the same filter criteria, the Confirm window is displayed to show you the details of the previous report download. Complete the following steps:
    1.  In the Confirm window, click the appropriate one among the following options:

        | Option | Explanation |
        | --- | --- |
        | Use Existing Output | Available when a previous report download already exists and is completed. Select this option to go to the My Downloads page, which lists the most recent successful submission. |
        | Use Existing Output Once Available | Available when a previous report download has been submitted and is still in progress. The ongoing request may have been submitted by you or another user and shared with you. Select this option to go to the In-Progress page to view the current report download. |
        | Submit New Download | Always available when a previous report download exists. Select this option to submit a new download request.• If the previous download was submitted by you, the previous request will be canceled.• If it was submitted by another user, the previous report download is retained, and a new download request is submitted by you. |

    2.  If you click Use Existing Output or Use Existing Output Once Available in the previous step, you can download the report file either on the My Downloads page or on the Shared Downloads page.
    3.  If you click Submit New Download in the previous step, proceed to Step 3. The following graphic displays the Confirm window when a duplicate report download request has been submitted and is working in progress.![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/C_Perform_month_end_process/media/Confirm_Window_new.png)

3.  (Optional): In the Subscribers windows, click the '+' icon to add subscribers.

4.  Click Submit Downloads. A message indicating that the request is submitted successfully with a submission ID is displayed, and you are redirected to the My Downloads page.
5.  On the My Downloads page, locate the corresponding submission ID, hover your mouse over the line, and click the download icon. The report will be exported as a CSV file.

## Schedule a report download

After you run a report, use the Schedule Report option to schedule a report to run on a regular basis and make it available for download later.

1.  After the report is successfully run, on the report details page, click the expand menu icon (three lines with downward facing arrow) and then click Schedule Report

2.  In the Schedule Report window, specify the values for the following fields.

    | Field Name | Description |
    | --- | --- |
    | Resubmit Interval | Select a time interval from the dropdown list. Available options include:• Minute(s)• Hour(s)• Day(s)• Week(s)• Month(s) |
    | Resubmit Code | Specify a number to determine the frequency of report resubmission. The combination of Resubmit Interval and Resubmit Code defines when the report will run again.Example: If Week(s) is selected as the Resubmit Interval and 2 as the Resubmit Code, the report will run every two weeks. |
    | Resubmit Type | Defines how the scheduling of the report is determined. Choose one of the following options:• From the Start of the prior run• From the Completion of the prior run |
    | Start Date | Specify a date and time for the report to start running. The report will execute at the set date and time on a regular basis according to the resubmission schedule. |

3.  Click the save icon to save the configuration.


A message indicating that the request is submitted successfully with a submission ID is then displayed. Scheduled reports will appear on the Scheduled Jobs page.

## Download an available report

After you submit or schedule a report download, use the Download Reports option to find the available reports to download.

1.  Navigate to Reports > Download Reports. The My Downloads page opens by default.

2.  (Optional) To view report submission details, click to open the side menu, and select one of the following options:

    1.  Shared Downloads – Displays reports that are shared with you and are in the Available status.

    2.  In-Progress – Displays reports that are currently being downloaded and are in the Submitted status.

    3.  Erroneous Submissions – Displays reports that did not successfully complete and are in the Error status.

3.  On the My Downloads or Shared Downloads page, hover the mouse over the line of the report that you want to download and click the download icon. The selected report is then exported as a CSV file.


Note:

Only reports in the Available status can be downloaded.

The selected report is then exported as a CSV file.
