---
title: "Create a custom scheduled event"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/create-a-custom-scheduled-event"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:09.717Z"
---

# Create a custom scheduled event

Learn how to create a custom scheduled event in the Zuora UI.

1.  Navigate to in the left navigation menu.
2.  Click the Custom Events tab.
3.  Click Create Custom Scheduled Event.
4.  In the Create Custom Scheduled Event dialog, enter the following information:

    -   Name: Enter the display name of the custom scheduled event.

    -   API Name: Enter the API name of the custom scheduled event. The name must be unique and contain no space.

    -   Base Object: Select the base object on which the custom scheduled event is defined.

    -   Base Field: Enter the base field of the base object that the custom scheduled event is defined on. Note that this must be a date or timestamp format field and the value is case sensitive.

    -   Hour: Enter the daily evaluation time (hour) of the custom scheduled event. The value must be an integer between 0 and 23.

    -   Minute: Enter the daily evaluation time (minute) of the custom scheduled event. The value must be an integer between 0 and 59.

    -   Description: Optionally, enter the description of the custom scheduled event.

    -   Active: Switch this toggle to indicate whether the custom scheduled event should be triggered.


5.  Click Save.
