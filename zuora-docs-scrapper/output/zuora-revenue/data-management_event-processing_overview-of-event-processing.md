---
title: "Overview of event processing"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/overview-of-event-processing"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:30.229Z"
---

# Overview of event processing

Zuora Revenue's Events method enables event-based revenue and cost releases or holds through configurable event types and uploaded event data.

In Zuora Revenue, the following types of POB releasing methods are supported:

-   Booking
-   Billing
-   Events
-   Manual

In the Events method, events are triggered for revenue release, cost release, and also for holding the revenue or cost. For events processing in Zuora Revenue, you must first create the event types based on your business needs, and then associate the event with the appropriate POB templates or revenue holds. After the setups are completed, you can upload event data to Zuora Revenue and then start the event process for Zuora Revenue to process the uploaded events.

This feature is not applicable for Billing - Revenue Integration since Zuora Billing and Zuora Revenue have different policies and requirements.

## Supported event types

The following types of events can be created in Zuora Revenue:

-   Budgeted Cost Use this event to release revenue based on the percentage of completed budgeted cost.
-   Budgeted Hours Use this event to release revenue based on the percentage of completed budgeted hours.
-   Cost Associate this event type with a POB template to release cost.
-   Hold Associate this event type with the holds or approvals to release the revenue hold or to transfer revenue that is placed on an RC, POB or line.
-   Revenue Associate this event type with a POB template to release revenue.

## Events processing

As part of the tech upgrade, the functionality of Event Processing was enhanced. The following changes were made to Event Processing:

-   Earlier, if an exception or error occurred, the system stopped events processing and triggered the process again, irrespective of the stage in which it failed. With this upgrade, the system handles the exceptions in the following stages:
    1.  Process events
    2.  Create actions
    3.  Process actions
    4.  Post-release process

        If an exception or error occurs, the system triggers event processing only at the stage where it failed. For example, if an RC with 5 POBs fails when processing the 5th POB, the system will trigger the process again only for the 5th POB.

-   Earlier, the process type was not considered based on the value populated in the percentage or amount column; the events processing was processed. With this upgrade, the process type takes precedence; validation restricts the data from getting processed with a proper error message.

-   Earlier, If the line was negative, the event was amount-based, and the value processed using events processing was positive. The system processed the value by moving it to the stage, but an accounting entry was not created. With this upgrade, the system displays the following error messages in such scenarios:

    -   INVALID\_PERCENT\_EVENT("Release amount or release quantity is uploaded for percent based event")
    -   INVALID\_AMOUNT\_EVENT("Release percent or release quantity is uploaded for amount based event")
    -   INVALID\_QUANTITY\_EVENT("Release percent or release amount is uploaded for quantity based event")


## Relay of Events

For Events in OTR, when you release a subscription through a percentage-based event and if the charge is split into a different segment, the revenue must be released with the same percentage in all the segments.

For example, if a subscription costs $1200, and 50% of the revenue was released through an event, $50 gets scheduled monthly. Due to an amendment, the subscription entered a different segment from April, resulting in a $600 increase and $1800 for the remaining nine months. The remaining nine months will have a subscription amount of $1500, which follows the same release percentage, i.e., $133.33 (83.33+50) each month. The first line's start and end dates were January 01st to December 31st, which gets split. Now, the first line is restricted to January 01st to March 31st. From April 1st to December 31st, a second line is created.

## Related tasks

The following tasks are required for Zuora Revenue to take appropriate actions against revenue or cost based on the uploaded events:

1.  Create the event type that you are going to upload in Zuora Revenue.
2.  Depending on the event type that you create, different steps are required:
    -   For a revenue or cost event, associate the event with a POB template.
    -   For a hold event, associate the event with a revenue hold.
    -   For a budgeted cost or budgeted hour event, proceed to the next step.
3.  Upload the event data based on an event upload template.
4.  Start the event process in Zuora Revenue.
