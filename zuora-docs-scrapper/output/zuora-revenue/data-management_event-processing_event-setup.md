---
title: "Event setup"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/event-setup"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:09.252Z"
---

# Event setup

Learn how to set up an event type in Zuora Revenue, including selecting event types, specifying processing methods, and determining revenue release and review requirements.

Event setup is to create an event type with detailed definitions, which includes:

-   Select the type of event.
-   Specify the processing type, such as by amount, by percentage, or by quantity.
-   Indicate whether the revenue is to be released in a cumulative manner. For example, if an event is brought in for 25% and the same event is collected for that line for 30%, the total revenue released for the RC is 30%.
-   Indicate whether a manual review is required before event data is uploaded to Zuora Revenue staging tables.
-   Select the columns that are to be included in the event upload template.
-   (For a cost event) Select the cost type that is to be released.

## Before you begin

If you are going to create a cost event, make sure the required cost setup is completed. For more information, see [Cost processing](/zuora-revenue/advanced-revenue-operations/cost-processing) .

## Procedure

To create an event type in Zuora Revenue, follow the procedure [provided here](/zuora-revenue/data-management/event-processing/event-setup/create-an-event-type).

## Result

The event type is created in Zuora Revenue and will be displayed on appropriate Release Event lists for you to select when you are doing other configurations for Zuora Revenue.

## What to do next

Depending on the event type that you create, different steps are required:

-   If the event is a revenue or cost event, the next step is to associate the event with the POB template. For more information, see [Associate event with POB template](/zuora-revenue/data-management/event-processing/associate-event-with-pob-template) .

-   If the event is a hold event, the next step is to associate the event with a hold or approval. For more information, see Associate event with [revenue holds](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds) .

-   If the event is a budgeted cost or budgeted hours event, the next step is to upload the event for processing. For more information, see [Event upload](/zuora-revenue/data-management/event-processing/event-upload).
