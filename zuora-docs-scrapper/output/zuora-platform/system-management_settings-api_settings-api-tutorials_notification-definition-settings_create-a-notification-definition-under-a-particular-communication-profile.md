---
title: "Create a notification definition under a particular Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/create-a-notification-definition-under-a-particular-communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:25.767Z"
---

# Create a notification definition under a particular Communication Profile

Learn how to create a notification definition under a particular communication profile by the Settings API.

To create a notification definition under a particular communication profile, see the following sample request body and 200 response body.

HTTP request:

`POST https://rest.zuora.com/settings/communication-profiles/{id}/notifications`

The path parameter `id` is the ID of the communication profile to which the notification definition belongs. You can get the ID through [Get all communication profiles](/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-all-communication-profiles).

Request body:

The following fields are required in the request body:

-   `profileId`: the ID of the communication profile to which the notification definition belongs. It must be the same as the path parameter `id` in the preceding HTTP request.

-   `eventId`: the ID of the event to which the notification definition is related.

    -   For standard events, it is a 32-character identifier.

    -   For custom events, the format is `user.notification:<custom_event_name>` . For example, `user.notification:InvoiceUpdated`.

-   `name`: the name of the notification definition.


{ "profileId": "8ad099158499bf1101849deab4025e2b", "eventId": "1d3d0e5b2b8b11e5b8640025904cb7f0", "name": "30 Days Past Due", "description": "The invoice is 30 days past due.", "active": true, "param1": "30", "param2": "Days\_after\_Invoice\_Due\_Date", "param4": "Not include invoice PDF", "emailOption": true, "emailTemplate": "1d3d0e822b8b11e5b8640025904cb7f0", "calloutOption": true, "calloutBaseUrl": "https://mycompany.com/callout", "contentType": "APPLICATION\_JSON", "httpMethod": "POST", "calloutRetriable": true, "customRequestBody": "", "useCustomRequestBody": false, "calloutParams": "{}", "calloutAuth": true, "calloutUsername": "AmyL", "calloutPassword": "Abc@AmY", "calloutOauth2": false, "calloutOauth2Id": "", "calloutPreemptiveAuth": false }

Response body:

{ "id": "8ad0845b9108944c01910c703d3c0dc2", "profileId": "8ad099158499bf1101849deab4025e2b", "eventId": "1d3d0e5b2b8b11e5b8640025904cb7f0", "eventName": "Invoice Due", "name": "30 Days Past Due", "description": "The invoice is 30 days past due.", "active": true, "hidden": false, "param1": "30", "param2": "Days\_after\_Invoice\_Due\_Date", "param4": "Not include invoice PDF", "emailOption": true, "emailTemplate": "1d3d0e822b8b11e5b8640025904cb7f0", "emailTemplateName": "Invoice Due Default Email Template", "calloutOption": true, "calloutBaseUrl": "https://mycompany.com/callout", "contentType": "APPLICATION\_JSON", "httpMethod": "POST", "calloutRetriable": true, "calloutAuth": true, "calloutUsername": "AmyL", "calloutOauth2": false, "calloutPreemptiveAuth": false, "useCustomRequestBody": false, "customRequestBody": "", "calloutParams": "{}" }
