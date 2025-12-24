---
title: "Summary Statement Settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/summary-statement-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:57.235Z"
---

# Summary Statement Settings

Learn how to retrieve, update, and delete Summary Statements through the Settings API.

## Get a specific summary statement template

To get a specific template for a summary statement, see the following request and a sample 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/summary-statement-templates/{templateKey}`

The request parameter for this request is as follows:

-   templateKey - The template ID or template number


Response body:

{ "name": "summaryStatementTemplate2", "defaultTemplate": false, "base64EncodedTemplateFileContent": "eyJodG1sQ29udGVudCI6ICI8cD5BY2NvdW50TnVtYmVyOnt7U3VtbWFyeVN0YXRlbWVudC5BY2NvdW50LkFjY291bnROdW1iZXJ9fTwvcD48cD5TdGF0ZW1lbnROdW1iZXI6e3tTdW1tYXJ5U3RhdGVtZW50LlN0YXRlbWVudE51bWJlcn19PC9wPiJ9", "templateFormat": "HTML", "associatedToBillingAccount": false, "templateNumber": "SSTEMP-00000002", "id": "40288186916939740191697fc3b206c6", "updatedOn": "2024-08-19T00:22:41.000-07:00" }

## Get all templates for summary statement

To get all templates for a summary statement, see the following request and a sample 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/summary-statement-templates`

The request parameter for this request is as follows:

-   templateKey - The template ID or template number


Response body:

\[ { "name": "summaryStatementTemplate2", "defaultTemplate": false, "templateFormat": "HTML", "associatedToBillingAccount": false, "templateNumber": "SSTEMP-00000002", "id": "40288186916939740191697fc3b206c6", "updatedOn": "2024-08-19T00:22:41.000-07:00" }, { "name": "summaryStatementTemplate3", "defaultTemplate": true, "templateFormat": "HTML", "associatedToBillingAccount": false, "templateNumber": "SSTEMP-00000003", "id": "40288186916939740191698442b206d8", "updatedOn": "2024-08-19T00:22:41.000-07:00" } \]

## Create a new summary statement template

To create a template for a summary statement, see the following request and a sample 200 response.

HTTP request:

`POST https://rest.zuora.com/settings/summary-statement-templates`

Request parameters:

-   name - The name of the summary statement template.

-   templateFormat - The format of the template. Currently, only 'HTML' is supported.

-   defaultTemplate - Indicates whether this template is the default template.

-   base64EncodedTemplateFileContent - The content of the template encoded using the Base64 algorithm. This allows for safe transmission of binary data in a text format.


Request body:

{ "name": "summaryStatementTemplate3", "templateFormat": "HTML", "defaultTemplate": true, "base64EncodedTemplateFileContent": "eyJodG1sQ29udGVudCI6ICI8cD5BY2NvdW50TnVtYmVyOnt7U3VtbWFyeVN0YXRlbWVudC5BY2NvdW50LkFjY291bnROdW1iZXJ9fTwvcD48cD5TdGF0ZW1lbnROdW1iZXI6e3tTdW1tYXJ5U3RhdGVtZW50LlN0YXRlbWVudE51bWJlcn19PC9wPiJ9" }

Response body:

{ "name": "summaryStatementTemplate4", "defaultTemplate": true, "base64EncodedTemplateFileContent": "eyJodG1sQ29udGVudCI6ICI8cD5BY2NvdW50TnVtYmVyOnt7U3VtbWFyeVN0YXRlbWVudC5BY2NvdW50LkFjY291bnROdW1iZXJ9fTwvcD48cD5TdGF0ZW1lbnROdW1iZXI6e3tTdW1tYXJ5U3RhdGVtZW50LlN0YXRlbWVudE51bWJlcn19PC9wPiJ9", "templateFormat": "HTML", "associatedToBillingAccount": false, "templateNumber": "SSTEMP-00000004", "id": "402881869169397401916dc2848b1aa2", "updatedOn": "2024-08-19T20:09:10.158-07:00" }

## Update a specific summary statement template

To update a template for a summary statement, see the following request and a sample 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/summary-statement-templates/{templateKey}`

Request parameters:

-   name - The name of the summary statement template.

-   templateFormat - The format of the template. Currently, only 'HTML' is supported.

-   defaultTemplate - Indicates whether this template is the default template.

-   base64EncodedTemplateFileContent - The content of the template encoded using the Base64 algorithm. This allows for safe transmission of binary data in a text format.


Request body:

{ "name": "summaryStatementTemplate2", "templateFormat": "HTML", "defaultTemplate": true, "base64EncodedTemplateFileContent": "eyJodG1sQ29udGVudCI6ICI8cD5BY2NvdW50TnVtYmVyOnt7U3VtbWFyeVN0YXRlbWVudC5BY2NvdW50LkFjY291bnROdW1iZXJ9fTwvcD48cD5TdGF0ZW1lbnROdW1iZXI6e3tTdW1tYXJ5U3RhdGVtZW50LlN0YXRlbWVudE51bWJlcn19PC9wPiJ9" }

Response body:

{ "name": "summaryStatementTemplate2", "defaultTemplate": false, "base64EncodedTemplateFileContent": "eyJodG1sQ29udGVudCI6ICI8cD5BY2NvdW50TnVtYmVyOnt7U3VtbWFyeVN0YXRlbWVudC5BY2NvdW50LkFjY291bnROdW1iZXJ9fTwvcD48cD5TdGF0ZW1lbnROdW1iZXI6e3tTdW1tYXJ5U3RhdGVtZW50LlN0YXRlbWVudE51bWJlcn19PC9wPiJ9", "templateFormat": "HTML", "associatedToBillingAccount": false, "templateNumber": "SSTEMP-00000002", "id": "40288186916939740191697fc3b206c6", "updatedOn": "2024-08-19T20:14:33.852-07:00" }

## Deletea specific summary statement template

To delete a specific summary statement template, the template key of the summary statement is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`DELETE https://rest.zuora.com/settings/summary-statement-templates/{templateKey}`

Response body:

{ "success": true }
