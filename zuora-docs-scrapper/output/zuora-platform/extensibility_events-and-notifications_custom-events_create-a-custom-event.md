---
title: "Create a custom event"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-events/create-a-custom-event"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:36.078Z"
---

# Create a custom event

Learn how to create a custom event in the Zuora UI.

1.  Navigate to in the left navigation menu.
2.  Click the Custom Events tab.
3.  Click Create Custom Event.
4.  In the Create Custom Event dialog, enter the following information:

    -   Name: Enter the display name of the custom event.

    -   API Name: Enter the API name of the custom event. The name must be unique and contain no space.

    -   Base Object: Select the base object that the custom event is defined on. Zuora standard objects and custom objects are supported.

    -   Description: Optionally, enter the description of the custom event.

    -   Active: Switch this toggle to indicate whether the custom event should be triggered.


5.  Define trigger conditions for the custom event in one of the following ways:

    -   Define trigger conditions with the condition builder (default view). For more information about the condition builder, see [Condition builder overview](/zuora-platform/extensibility/events-and-notifications/condition-builder/condition-builder-overview).

    -   Switch on the Advanced (JEXL) toggle, and then specify an expression in Java EXpression Language (JEXL) in the Set Trigger Conditions field. For more information, see [Trigger condition syntax](/zuora-platform/extensibility/events-and-notifications/custom-events/custom-event-overview#concept-ac-1314__trigger-condition-syntax).


6.  Click Save.
