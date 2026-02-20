---
title: "Associate event with POB template"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/associate-event-with-pob-template"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:27.735Z"
---

# Associate event with POB template

Learn how to associate revenue or cost events with a POB template in Zuora Revenue to trigger revenue or cost release.

A revenue event or cost event must be associated with a POB template before the event can be uploaded to Zuora Revenue for processing to trigger the revenue or cost release.

-   To associate a revenue event with a POB template, use the Revenue Treatment tab when you create or edit a POB template.

-   To associate a cost event with a POB template, use the Cost Treatment tab when you create or edit a POB template.


## Before you begin

Make sure that the revenue or cost event type is defined in Zuora Revenue. For more information about how to define a revenue or cost event, see [Event setup](/zuora-revenue/data-management/event-processing/event-setup) .

It is assumed that target POB template has been created in Zuora Revenue in the following procedure. If the POB template with which you want to associate the event, create the POB template. For more information, see [Create POB template](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/create-pob-template) .

## Procedure

1.  Navigate to Policies > Performance Obligations.

2.  On the POB Templates page, hover the mouse over the target POB template and click the pencil icon. The Edit POB Template window is displayed.

3.  To associate a revenue event with the POB template, in the Revenue Treatment tab, select the event from the drop-down list for the Release Event field.

4.  To associate a cost event with the POB template, complete the following steps in the Cost Treatment tab:

    1.  Locate the target cost type based on which the cost event was created.

    2.  Ensure that the Follow Revenue Release checkbox is cleared for the cost type.

    3.  In the Release Event column, select the appropriate cost event from the drop-down list. Only the cost events that are created based on the current cost type can be displayed and selected.

    4.  Make other changes if necessary.

5.  Save your changes and close the window.


## What to do next

You have completed the setup for revenue or cost events. Events can be uploaded to Zuora Revenue for processing. For more information, see [Event upload](/zuora-revenue/data-management/event-processing/event-upload) .
