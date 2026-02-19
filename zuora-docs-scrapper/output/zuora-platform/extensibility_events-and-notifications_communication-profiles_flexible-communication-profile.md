---
title: "Flexible communication profile"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/communication-profiles/flexible-communication-profile"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:53.898Z"
---

# Flexible communication profile

The flexible communication profile feature allows you to override predefined communication profiles in real time, enabling notification customization for specific events.

You can override communication profiles to handle notifications more flexibly in scenarios such as the following:

-   Stop sending notifications for specific occasions by assigning a muted communication profile.

-   Send notifications using different templates for branding purposes.


To override the communication profile for a specific event, you must create a custom field named `CommunicationProfileOverrideKey__c` on the base object linked to that event, and enter a valid ID or number for the alternative communication profile in this custom field.

When the event is triggered, Zuora checks the associated base object for the presence of this custom field. If the field is found, Zuora ignores the original communication profile and sends notifications based on the notification definitions and templates from the specified alternative profile.

The `CommunicationProfileOverrideKey__c` field supports either a communication profile ID or number. If the ID or number is invalid, Zuora uses the original communication profile.

Note that communication profile overriding applies to all events related to the base object that contains the `CommunicationProfileOverrideKey__c` field. For example, if you add this custom field to an Order Action object, Zuora uses the specified communication profile for the following related events throughout the object's lifecycle:

-   Order Action Created (custom event)

-   Order Action Processed

-   Order Action Updated (custom event)
