---
title: "Create a new Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/create-a-new-communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:56.334Z"
---

# Create a new Communication Profile

Learn how to create a new communication profile by the Settings API.

To create a new communication profile, see the following request and samples of request and 200 response bodies.

HTTP request:

`POST https://rest.zuora.com/settings/communication-profiles`

Request body:

{ "name": "New Profile", "number": "region001", "locale": "en\_US", "description": "Test profile", "muted": false }

Response body:

{ "id": "2c92c0fa6d05a238016d154fa937469d", "name": "New Profile", "number": "region001", "locale": "en\_us", "description": "Test profile", "isDefault": false, "muted": false }
