---
title: "Get all Notifications under a particular Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/get-all-notifications-under-a-particular-communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:24.121Z"
---

# Get all Notifications under a particular Communication Profile

Learn how to retrieve all notifications under a particular communication profile by the Settings API.

To get all notifications under a particular communication profile, see the following request and sample of 200 response body. You can get the communication profile id in the path parameter through [Get all communication profiles](/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-all-communication-profiles).

HTTP request:

`GET https://rest.zuora.com/settings/communication-profiles/{id}/notifications`

Response body:

\[ { "id": "bd5d1b5c6c821a975efbe97d0401edc8", "profileId": "bd5d1b5c52a5ea5ac93f1cc28bb30ce6", "eventId": "bd5d1b5c07077229df79f162980605b7", "eventName": "Invoice Due", "name": "30 Days Past Due", "description": "The invoice is 30 days past due.", "active": false, "hidden": false, "param1": "30", "param2": "Days\_after\_Invoice\_Due\_Date", "param4": "Not include invoice PDF", "emailOption": true, "emailTemplate": "bd5d1b5cb3c9212b24f3ae86b28f4803", "emailTemplateName": "Invoice Due Default Email Template", "calloutOption": false, "contentType": "APPLICATION\_JSON", "calloutRetriable": false, "calloutAuth": false, "calloutOauth2": false, "calloutPreemptiveAuth": false, "useCustomRequestBody": false }, { "id": "bd5d1b5c147d3ffca0fd777d69c0f36a", "profileId": "bd5d1b5c52a5ea5ac93f1cc28bb30ce6", "eventId": "bd5d1b5c3d90e276a2e54b364088ef62", "eventName": "Amendment Processed", "name": "Renewal", "description": " A renewal amendment has been submitted and processed.", "active": false, "hidden": false, "param1": "32", "emailOption": true, "emailTemplate": "bd5d1b5c884a87432ec658ef79021f63", "emailTemplateName": "Default Email Template for Amendment Processed - Renewal", "calloutOption": false, "contentType": "APPLICATION\_JSON", "calloutRetriable": false, "calloutAuth": false, "calloutOauth2": false, "calloutPreemptiveAuth": false, "useCustomRequestBody": false } \]
