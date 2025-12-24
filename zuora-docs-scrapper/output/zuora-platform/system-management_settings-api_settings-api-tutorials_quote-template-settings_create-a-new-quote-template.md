---
title: "Create a new Quote Template"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/quote-template-settings/create-a-new-quote-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:41.917Z"
---

# Create a new Quote Template

Learn how to create a new quote template by the Settings API.

To create a new Quote Template, see the following request and response samples.

HTTP request:

`POST https://rest.zuora.com/settings/quote-templates`

Request body:

{ "templateCategory": "Old", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "suppressZeroValueLine": true, "name": "My new Quote Template", "defaultTemplate": false, "templateFileName": "Zuora - Quote Template - English .doc" }

The following fields are required in the request body:

-   `name`

-   `templateFileName`

-   `base64EncodedTemplateFileContent`


If any of the required fields are not present in the request body, you will get the 400 response containing the error code and error messages. For example:

400 Response body:

{ "errorCode": "INVALID\_USER\_INPUT", "messages": \[ "#: required key \[name\] not found", "#: required key \[templateFileName\] not found", "#: required key \[base64EncodedTemplateFileContent\] not found" \] }

If the new Quote Template is successfully created, you will get the 200 response. For example:

200 Response body:

{ "templateCategory": "Old", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "suppressZeroValueLine": true, "name": "My new Quote Template", "defaultTemplate": false, "templateFileName": "Zuora - Quote Template - English .doc", "id": "bd5d1b5c07cfb36f20787340b4122184" }
