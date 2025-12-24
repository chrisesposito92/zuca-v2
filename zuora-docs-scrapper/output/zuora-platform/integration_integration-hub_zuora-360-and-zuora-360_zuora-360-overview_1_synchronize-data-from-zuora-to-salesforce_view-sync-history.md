---
title: "View sync history"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/view-sync-history"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:11.659Z"
---

# View sync history

Learn how to view and manage the sync history, including filtering and reviewing sync job statuses.

To see the progress and status of all sync jobs:

1.  In the Sync History section, click clear to remove any view filter.
2.  Click refresh in the Status column heading to refresh the list.
3.  To see a detail status of a job, click the status link in the Status column of the job.
4.  Review the detail status in the Show Result page.
5.  If there is any failure, click \[more...\] in the Failed column cell. The .csv file with error information opens.
6.  Click close to close the Show Result page.

    To narrow the results, filter by a sync date range and by sync operations, i.e., all, Manual Sync, Scheduled Sync, Real-time Sync, On-demand Sync, and Sync Clean-up.

7.  To filter sync jobs:
    1.  In the Sync History section, select the From and To dates to filter on.
    2.  Click the Operation arrow and select the type of operations you want to monitor.
    3.  Click filter to apply the filter.
    4.  Follow the steps 3 - 6 above to see the status of sync jobs.

        Note:

        As of Zuora 360 version 2.70, a job runs automatically to delete entries older than 30 days. For each synchronization, entries with a Finished on date that is lower than or equals today's date minus 30 days will be deleted. The same cleanup logic applies to the Crm Id Change Result table. Entries in this table have a Master-Detail relationship with the Sync History entries.


Zuora 360 returns the following types of status:

Finished

The sync session has completed successfully.

Finished with Errors

The sync session has completed but there is one or more record having sync error(s). These errors will be retried in the next sync session. Some errors, e.g. Unable to lock row, are automatically retry-able, and other errors, e.g. Invalid CRM Account ID, requires a manual fix. We recommend that the errors are addressed as soon as possible.

Failure

Some system failure, such as a database connection failure, a storage failure, or Salesforce connection failure, occurred and caused the sync session finished prematurely. In the next sync cycle, the entire session will be retried instead of only the records in error.
