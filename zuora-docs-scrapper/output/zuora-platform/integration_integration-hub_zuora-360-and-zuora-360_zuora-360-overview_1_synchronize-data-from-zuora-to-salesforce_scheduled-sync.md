---
title: "Scheduled sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/scheduled-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:03.934Z"
---

# Scheduled sync

Learn how to configure and schedule recurring syncs, including setting sync modes, intervals, and email notifications.

1.  In the Recurring Sync section, click edit next to the Sync Mode field.
2.  Click the Sync Mode arrow and select Scheduled Sync from the drop-down list.
3.  For Objects , click and select the Objects you want to sync. If you select Accounts & Related Objects , note that only the subscriptions in the Active, Pending, and Cancelled states are synced to Salesforce. Draft and Deleted subscriptions are not synced to Salesforce.
4.  For Sync Interval , click and select the sync interval, such as Daily or Every 2 hours . If you selected Product Catalog in the Objects field, you can only select Daily in the Sync Interval field.
5.  For Start first recurring sync , click and select how many hours to wait before starting the first recurring sync.
6.  For Email Notifications , click and select the event types of which you want to be notified via email. Notifications are sent to the user who is setting up the email notifications. This setting is available only to Recurring Sync jobs. The options are:

    -   None - No email notification

    -   Errors Only - Email notifications only when sync errors occur

    -   All (Excluding Zero Records) - Email notifications when at least one record is successfully synchronized to Salesforce

    -   All (Including Zero Records) - Email notifications after all sync jobs. This is the default option for all other types of Zuora 360 syncs, such as On-demand or Manual Syncs.


7.  Click Save . The sync will occur automatically based on the schedule you set.
