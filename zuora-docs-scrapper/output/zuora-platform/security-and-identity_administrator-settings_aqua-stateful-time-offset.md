---
title: "AQuA Stateful Time Offset"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/aqua-stateful-time-offset"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:45.809Z"
---

# AQuA Stateful Time Offset

Describes the time offset for AQuA queries in stateful mode.

By default, stateful AQuA requests execute the queries against incremental data that were created or updated between the completion time of the previous AQuA session and the current time. Administrators can use the AQuA API Stateful Mode Time Offset setting to specify a time offset, to control the end time of this interval.

## Configure AQuA Stateful Time Offset

Administrators can configure your AQuA API stateful mode time offset by navigating to . From here, administrators can set the integer value of the time offset in seconds. The default value is 0. The maximum value is 3600.

For example, if you set AQuA Stateful Time Offset to 600 seconds and you submit a query in stateful mode at 2:00 AM, Zuora returns data that was created or updated between the completion time of the previous stateful query and 1:50 AM.

See Time offset for AQuA stateful queries for more information.
