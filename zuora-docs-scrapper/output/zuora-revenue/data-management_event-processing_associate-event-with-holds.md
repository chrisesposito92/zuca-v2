---
title: "Associate event with holds"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/associate-event-with-holds"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:40.384Z"
---

# Associate event with holds

Learn how to associate hold events with defined holds to manage releases in Zuora Revenue.

To release the hold that is placed on an RC, POB, or line based on events, you must associate a hold event with the holds that are defined during the policy configuration of holds.

## Before you begin

Make sure that the hold event type is defined in Zuora Revenue. For more information about how to define a hold event, see [Event setup](/zuora-revenue/data-management/event-processing/event-setup).

## Procedure

Complete the following steps to associate a hold event with a revenue hold:

1.  Navigate to Policies > Holds and Approvals.
2.  On the Revenue Holds page, hover the mouse over the target hold line and click the pencil icon..
3.  In the Edit Hold window, select the hold event from the drop-down list for the Release Event field.
4.  Ensure the Hold Level field is specified correctly to release the hold that is placed on an RC, POB, or line.
5.  Save your changes and close the window.

## What to do next

You have completed the setup for hold events. The associated holds can be released after the hold events are uploaded and processed in Zuora Revenue. For more information, see [Event upload](/zuora-revenue/data-management/event-processing/event-upload) .
