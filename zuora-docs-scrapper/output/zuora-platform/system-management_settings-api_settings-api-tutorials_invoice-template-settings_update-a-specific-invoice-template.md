---
title: "Update a specific Invoice Template"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/update-a-specific-invoice-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:19.019Z"
---

# Update a specific Invoice Template

Learn how to update a specific invoice template by the Settings API.

To update a specific Invoice Template, the Id of the specific Invoice Template is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/invoice-templates/{id}`

Request body:

{ "name": "test-template2", "defaultTemplate": true, "suppressZeroValueLine": true, "templateFileName": "test12.doc", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", }

Response body:

{ "name": "test-template2", "defaultTemplate": true, "suppressZeroValueLine": true, "templateFileName": "test12.doc", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "templateCategory": "New", "id": "2c9890337c5f3042017c5f39ae420001" }
