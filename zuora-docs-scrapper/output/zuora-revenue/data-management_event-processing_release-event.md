---
title: "Release event"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/release-event"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:45.413Z"
---

# Release event

Learn how Zuora Revenue processes event data for revenue or cost release, including conditions where event lines are not processed or partially consumed.

After the event data is uploaded to Zuora Revenue successfully, the event process must be started for Zuora Revenue to perform revenue or cost release.

## Procedure

Perform the steps [provided here](/zuora-revenue/data-management/event-processing/release-event/procedure) to start the event processing.

## Result

After the event process completes, Zuora Revenue can take appropriate actions against the revenue or cost based on the processed events.

Sometimes, not all the event lines are processed. In the following circumstances, the event line is not processed by Zuora Revenue:

-   The event line is to defer the revenue (Action = DEF), however, the revenue of the RC line is 0% released.

-   The event line is to release the revenue (Action = REC), however, the revenue of the RC line is 100% released.

-   The event line is to defer or release the revenue, however, there is a hold or pending approval on the RC line.


In the following circumstances, the amount of event line is partially consumed by Zuora Revenue:

-   The event line is to release the revenue, however, 100% of revenue has been released before the full amount of the event line is consumed.

-   The event line is to defer the revenue, however, there is already no revenue to be deferred before the full amount of the event line is consumed.


After the event processing completes, some lines will be stamped with a message in the following circumstances:

-   When multiple event lines are processed to release the revenue and the revenue is 100% released, the line will be stamped with a message to indicate there is no more revenue to be released.

-   When multiple event lines are processed to defer the revenue and the revenue is 100% deferred, the line will be stamped with a message to indicate there is no more revenue to be deferred.
