---
title: "Export error records"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/audit-trail-for-meter-errors/export-error-records"
product: "zuora-platform"
scraped_at: "2026-01-15T22:00:43.922Z"
---

# Export error records

Learn how to export and download meter run error records, including large datasets that exceed the inline download limit of 100,000 rows.

You can download meter run error records directly from the Meter Run page. The export behavior depends on how many error rows are included:

-   If the total number of error rows is ≤ 100,000, the export runs synchronously, and the file downloads immediately.

-   If the total number of error rows is > 100,000, Zuora creates an asynchronous export job. You are redirected to the Download Center, where you can track the job and download the file when it is ready.


Error exports are visible for both Live and Test runs and are scoped to error records only when you filter for errors.

1.  Navigate to Audit Trail > Runs.
2.  Click on the Live or Test tabs to to locate the meter run.
3.  Click on the Session ID for the meter run that generated the error records.
4.  In the meter flow window, click on the meter component that displays the errors.
5.  In the operator window, enable the Show Errors Only toggle button.
6.  Click the download icon.
7.  If the number of error rows is ≤ 100,000, the export runs synchronously and your browser starts downloading the file immediately.
    Use this option when you need a quick export of a moderate volume of error records directly from the Meter Run page.

8.  If the number of error rows is > 100,000:
    1.  A message is displayed indicating that the export will be processed as a background job and might take time to complete.
    2.  Select the record types you want to download and click the Export button.
        You can export a combination of success and error records, or error records only. Zuora creates a background export job for the export.

    3.  After you confirm, you are redirected to the Download Center, where you can track progress of the export job.
    4.  In the Download Center, locate the export job for your run and check the Status, Count of Records, and Exported At time.
    5.  When the job status is Completed, click the Download icon to download the error file.
        Use this flow when you need full access to very large error datasets for troubleshooting or analysis without impacting interactive performance.


The error records are downloaded.
