---
title: "Configure scheduler"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-scheduler"
product: "zuora-platform"
scraped_at: "2025-12-24T08:25:38.398Z"
---

# Configure scheduler

Learn how to configure scheduler

## Overview

After you submit your sync preferences and advanced settings, the Scheduler button is enabled in Zuora Connector for NetSuite. Click Scheduler to enter into the Scheduler screen. You can configure how frequently the sync should run once activated.

## Schedule properties

To add a schedule, click + and set the schedule properties to create a schedule for the synchronization process.

## Minute/hour/day schedule types

Configure the Minute/Hour/Day schedule types to process the sync automatically, based on the interval that you specify and those days on which you want the sync to occur.

Zuora recommends that you configure your schedules to use the Minute, Hour, or Day types.

| Property | Description |
| --- | --- |
| Type | Select one of the following:Minute: Run the sync process between the specified times, with an interval from 1 to 30 minutes. Zuora recommends that you set this to a value greater than 1 to avoid overlapping sync schedules.Hour: Run the sync process between the specified times, with an interval from 1 to 12 hours.Day: Run the sync process at the specified time, with an interval from 1 to 14 days. |
| Start Time | Specify a time to begin the sync process. The process will repeat at the specified Interval value. The sync is triggered in UTC time. |
| End Time | For Minute and Hour schedules, set a time to end the sync process for the day. |
| Interval | Specify the amount of time to wait between sync processes. You can select from 1 to 30 minutes, 1 to 12 hours, or 1 to 14 days. |
| Days | Select the days during which you want the sync process to run. |

If a scheduled sync process is in progress when the next sync process is scheduled to run, the second sync process will be canceled. Zuora Connector for NetSuite will send a warning message to the log file indicating that the second process was skipped. You can either wait for the next scheduled sync process, or you can run the execution manually.

Note:

Schedulers should be configured to allow for a minimum time interval of 30 minutes before triggering a new synchronization process. Larger data sets may require additional time exceeding the 30-minute mark for synchronization to complete. Ensure a minimum 30-minute interval between executions to complete the run before starting another process.
