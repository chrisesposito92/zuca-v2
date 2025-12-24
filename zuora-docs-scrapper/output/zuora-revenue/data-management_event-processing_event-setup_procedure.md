---
title: "Procedure"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/event-setup/procedure"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:35.234Z"
---

# Procedure

Learn how to create an event type in Zuora Revenue by following a series of steps, including navigating to the Event Setup, adding a new event, and configuring event details.

To create an event type in Zuora Revenue, complete the following steps:

1.  Navigate to Setups > Application .
2.  Click the left pointing arrow icon to open the side menu and then click Event Setup .
3.  On the Event Setup page, click the '+' icon to add an event. The New Event window is displayed.
4.  In the Name field, provide a unique event name.
5.  In the Event Type field, select the type of event that you want to create. Valid options are as follows:

    -   Budgeted Cost: To define a budgeted event based on cost.

    -   Budgeted Hours: To define a budgeted event based on hours.

    -   Revenue: Only revenue can be recognized or deferred.

    -   Cost: Only cost can be recognized or deferred.

    -   Hold: To define a hold event.


6.  Based on the event type that you select in the previous step, specify the following fields as indicated in the UI:

    Note:

    If you are creating a budgeted cost or budgeted hours event, By Percent is selected by default and cannot be charged.

    If you are creating a hold event, you do not need to specify the process type.

    The Cost Type field is for cost events only.

    -   Cost Type: Select the type of cost that is to be released based on the cost event.

    -   Process Type: Select the processing type. The following options are available:

        -   By Amount: The event is processed based on the amount.

        -   By Percent: The event is processed based on the percentage value.

        -   By Quantity: The event is processed based on the quantity.


7.  If this is a cumulative event, select the Cumulative checkbox. The revenue is released in a cumulative manner.

    Note:

    If you are creating a budgeted cost or budgeted hours event, the Cumulative checkbox is selected by default and cannot be changed.

8.  Click the save icon. The event is created.
9.  Click the Mapping tab to select the columns that you want to include in the event upload template.
    1.  Choose the field names from the Source Column list.
    2.  From the Event Column list, select the corresponding staging fields for each of your selections in the Source Column list. The Event Column list displays the names of the staging fields that belong to the Line Events category on the Setup/Application/Labels page. One source column field must have a corresponding event column field.
10.  (Optional): Click the Order By tab to select the order in which the sales order lines or invoice lines are to be processed. If no selection is made, sales order lines are processed first.
11.  Save your configuration and close the window.
