---
title: "Create a new Invoice Template"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/create-a-new-invoice-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:16.262Z"
---

# Create a new Invoice Template

Learn how to create a new invoice template by the Settings API.

To create a new Invoice Template, see the following request and a sample of 200 response.

HTTP request:

`POST https://rest.zuora.com/settings/invoice-templates`

Request body:

{ "name": "My new invoice template", "defaultTemplate": false, "suppressZeroValueLine": false, "templateFileName": "Allbrighter - Invoice Template - 2019 v1.1USD.doc", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "templateFormat": "WORD", "templateCategory": "New" }

The following fields are required in the request body:

-   `name`

-   `base64EncodedTemplateFileContent`


Response body:

{ "name": "My new invoice template", "defaultTemplate": false, "suppressZeroValueLine": false, "templateFileName": "Allbrighter - Invoice Template - 2019 v1.1USD.doc", "base64EncodedTemplateFileContent": "0M8R4KGxGuEAAAAAAAAAAAAAAAAAAAAAPgADAP...", "templateCategory": "New", "templateFormat": "WORD", "id": "2c92c0fa6d05a230016d19127a175840" }
