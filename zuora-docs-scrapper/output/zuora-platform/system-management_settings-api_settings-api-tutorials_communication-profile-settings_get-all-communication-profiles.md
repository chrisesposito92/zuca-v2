---
title: "Get all Communication Profiles"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/communication-profile-settings/get-all-communication-profiles"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:00.942Z"
---

# Get all Communication Profiles

Learn how to retrieve all communication profiles by the Settings API.

To get all communication profiles, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/communication-profiles`

Response body:

\[ { "id": "2c92c8fb7ddc795b017dde4350c949a0", "name": "B2C Customers", "number": "CP-00000011", "locale": "default", "description": "", "isDefault": false, "muted": false }, { "id": "2c92c8f9631ea3850163271f7fc02dc3", "name": "Default Profile", "number": "CP-00000001", "locale": "default", "description": "Rajesh Desc", "isDefault": true, "muted": false }, { "id": "8a90c2d1800251b3018003435cdd24be", "name": "Delinquent Customers", "number": "CP-00000003", "locale": "default", "description": "", "isDefault": false, "muted": false }, { "id": "8a9083aa7fb5882e017fb69e81e1311c", "name": "Deployment Manager Profile", "number": "CP-00000004", "locale": "default", "description": "", "isDefault": false, "muted": false }, { "id": "8a9092747e331080017e38ae549b17cc", "name": "Enterprise Profile", "number": "CP-00000005", "locale": "default", "description": "", "isDefault": false, "muted": false }, { "id": "8a90da067e766b83017e76b8ca470213", "name": "Rajesh-Test", "number": "CP-00000006", "locale": "default", "description": "Rajesh-Test", "isDefault": false, "muted": false } \]
