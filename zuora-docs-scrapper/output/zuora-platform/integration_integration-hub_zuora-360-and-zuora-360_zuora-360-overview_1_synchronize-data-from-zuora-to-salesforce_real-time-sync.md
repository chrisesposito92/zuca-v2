---
title: "Real-Time sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/real-time-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:06.737Z"
---

# Real-Time sync

Learn how to configure and use Real-time Sync in Zuora 360.

Refer to [Real-time Sync](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/integration_hub/zuora_360_plus_and_zuora_360/Work_with_Zuora_360_plus/topics/real-time_sync_for_zuora_360.dita) for detail information about this sync mode.

Depending on your data volume, it can take up to a few hours for Zuora 360 to synchronize all data to Salesforce.

You must have the version 2.70 or later of Zuora 360 in order to use Real-time Sync.

1.  In the Recurring Sync section, click edit next to the Sync Mode field.
2.  Click the Sync Mode arrow and select Real-time Sync from the drop-down list.

    Note: Turbo Sync automatically runs Full Sync, first, when changing from Scheduled Sync to Real-time Sync or when changing from None to Real-time Sync

3.  For Objects , click and select Accounts & Related Objects . You can only sync the Accounts & Related objects using Real-time Sync. Only the subscriptions in the Active, Pending, and Cancelled state are synced to Salesforce. Draft and Deleted subscriptions are not synced to Salesforce.
4.  In the Real-time Sync Trigger Conditions section, set the trigger settings. The Real-time Sync trigger settings determine when the next Real-time Sync job is automatically triggered. A sync job occurs when either of the following trigger condition is met, whichever comes first.

    -   Maximum Data Change Events Before Sync - Specifies how many data change events occur before the next sync happens. The possible values are: 1, 5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500. The default value is 10 if you do not set this condition. See [Real-Time Sync](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce/real-time-sync-for-zuora-360) for a list of data change events monitored to trigger a Real-time Sync.
        Note: We recommend that you set this to 10 or higher. The lower the Maximum Data Change Events Before Sync trigger value is set, the more API limits will be consumed. You should configure the trigger value according to the number of API limits of your Salesforce org.

    -   Maximum Time Between Sync - Specifies the maximum time between two Real-time sync sessions. If the Maximum Data Change Events Before Sync has not occurred, a sync session will be automatically triggered when the Maximum Time Between Sync duration has elapsed since the last sync session. For example, with Maximum Data Change Events set to 50 and Maximum Time Between Sync set to 30 minute, if there are only 49 data change events accumulated since the last sync session occurred at 10:00 AM, the next sync session will still be automatically started at 10:30 AM. The default interval is 120 minutes.


5.  For Email Notifications , click and select the event types of which you want to be notified via email. Notifications are sent to the user who is setting up the email notifications . This setting is available only to Recurring Sync jobs. The options are:

    -   None - No email notification

    -   Errors Only - Email notifications only when sync errors occur

    -   All (Excluding Zero Records) - Email notifications when at least one record is successfully synchronized to Salesforce

    -   All (Including Zero Records) - Email notifications after all sync jobs. This is the default option for all other types of Zuora 360 syncs, such as On-demand or Manual Syncs.


6.  Click Save . The sync will occur automatically based on the trigger conditions you set.
7.  You can monitor the status of the Real-time Sync you just scheduled. After you click Save , a status message appears. The message indicates how many more data change events need to be accumulated, or how many minutes longer in maximum, in order for the next sync session to be triggered.
