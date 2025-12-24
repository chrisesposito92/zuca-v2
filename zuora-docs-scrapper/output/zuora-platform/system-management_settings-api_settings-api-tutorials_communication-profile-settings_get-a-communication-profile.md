---
title: "Get a Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-a-communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:58.813Z"
---

# Get a Communication Profile

Learn how to retrieve a communication profile by the Settings API.

To get a specific communication profile, the ID or number of the communication profile is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/communication-profiles/{profile-key}`

The `profile-key` can be the ID or profile number of a communication profile.

Response body:

{ "id": "2c92c0f9446cd49501447539d6a72815", "name": "Default Profile", "number": "CP-00000001", "locale": "default", "description": "Default communication profile", "isDefault": true, "muted": false }
