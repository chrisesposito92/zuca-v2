---
title: "Get all Quote Templates"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/get-all-quote-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:36.601Z"
---

# Get all Quote Templates

Learn how to retrieve all quote templates by the Settings API.

To get all Quote Templates, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/quote-templates`

Response body:

\[ { "templateCategory": "Old", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "suppressZeroValueLine": true, "name": "My new Quote Template", "defaultTemplate": false, "templateFileName": "Zuora - Quote Template - English .doc", "id": "bd5d1b5c07cfb36f20787340b4122184" }, { ... } \]
