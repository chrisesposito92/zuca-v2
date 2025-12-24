---
title: "Get a specific Quote Template"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/get-a-specific-quote-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:39.246Z"
---

# Get a specific Quote Template

Learn how to retrieve a specific quote template by the Settings API.

To get a specific Quote Template, the Id of the specific Quote Template is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/quote-templates/{id}`

Response body:

{ "templateCategory": "Old", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "suppressZeroValueLine": true, "name": "My new Quote Template", "defaultTemplate": false, "templateFileName": "Zuora - Quote Template - English .doc", "id": "bd5d1b5c07cfb36f20787340b4122184" }
