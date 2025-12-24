---
title: "Modify a Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/modify-a-communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:03.785Z"
---

# Modify a Communication Profile

Learn how to modify a communication profile by the Settings API.

To modify a communication profile, see the following request and a sample of 200 response. You can get the communication profile ID or number in the path parameter through [Get all communication profiles](/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-all-communication-profiles).

HTTP request:

`PUT https://rest.zuora.com/settings/communication-profiles/{profile-key}`

The `profile-key` can be the ID or profile number of a communication profile.

Request body:

{ "name": "My Profile Modified", "number": "region012", "locale": "default", "description": "test description", "muted": false }

Response body:

{ "id": "2c92c0fa6d05a238016d154fa937469d", "name": "My Profile Modified", "number": "region012", "locale": "default", "description": "test description", "isDefault": false, "muted": false }
