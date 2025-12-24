---
title: "Get a specific Invoice Template"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/get-a-specific-invoice-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:11.238Z"
---

# Get a specific Invoice Template

Learn how to retrieve a specific invoice template by the Settings API.

To get a specific Invoice Template, the Id of the specific Invoice Template is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/invoice-templates/{id}`

Response body:

{ "name": "System Default Template", "defaultTemplate": true, "suppressZeroValueLine": false, "templateFileName": "Zuora - Invoice Template - 2016 v1.0 - USD - English (1).doc", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "templateCategory": "New", "templateFormat": "WORD", "id": "8a90da067e766b83017e76b3546001e1", "updatedOn": "2022-01-20T00:56:11.000-08:00" }

The template file content is supported as `base64EncodedTemplateFileContent`. To transfer a specific Invoice Template to another environment:

1.  Use this call to view the specific Invoice Template.

2.  Copy the value of the `base64EncodedTemplateFileContent` field in the 200 response body.
3.  Make a [Create a new Invoice Template](/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/create-a-new-invoice-template) call in the target environment, pasting the value copied from step 2 into the `base64EncodedTemplateFileContent` field of the request body.
