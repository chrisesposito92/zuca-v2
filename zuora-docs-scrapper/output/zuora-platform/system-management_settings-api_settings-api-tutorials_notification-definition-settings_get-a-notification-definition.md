---
title: "Get a notification definition"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/get-a-notification-definition"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:28.853Z"
---

# Get a notification definition

Learn how to retrieve a notification definition by the Settings API.

To get a specific notification definition, ID of the notification definition is required as a path parameter. See the following request and a sample of 200 response.

This operation applies to notification definitions for standard events, custom events, and custom scheduled events.

HTTP request:

`GET https://rest.zuora.com/settings/communication-profiles/notifications/{id}`

Response body:

{ "id": "8ad08cbd85ed98570185f6e540e46b90", "profileId": "8ad099158499bf1101849deab4025e2b", "eventId": "1d3d0e5b2b8b11e5b8640025904cb7f0", "eventName": "Invoice Due", "name": "25 Days Past Invoice Due", "description": "The invoice is 25 days past due.", "active": true, "hidden": false, "param1": "25", "param2": "Days\_after\_Invoice\_Due\_Date", "param4": "Not include invoice PDF", "emailOption": true, "emailTemplate": "2c92c0f85e0d9c58015e0e9376423740", "emailTemplateName": "Invoice Due Email Template", "calloutOption": false, "calloutBaseUrl": "https://test.com", "contentType": "APPLICATION\_JSON", "httpMethod": "POST", "calloutRetriable": false, "calloutAuth": false, "calloutOauth2": false, "calloutPreemptiveAuth": false, "useCustomRequestBody": false, "customRequestBody": "", "associatedAccount": "", "calloutParams": "{}" }
