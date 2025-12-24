---
title: "Logic: XML Transform"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-xml-transform"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:34.184Z"
---

# Logic: XML Transform

This reference describes the Logic: XML Transform task.

The XML transform task transforms an XML file in the data payload into a different XML structure, or converts the file to a JSON object. The output data will be appended to the data payload.

Note:

The XML transform task only supports UTF-8 as the character encoding for the input and output XML files, and does not support character encoding conversion in the task.

## Task settings

When creating an XML transform task, you need to specify an object (an XML file) as the input and select a transformation mode. Optionally, you can enter a filename for the output file.

![XML Transform configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/617d93d5-cecb-40c8-b5c4-7d96807dda5b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYxN2Q5M2Q1LWNlY2ItNDBjOC1iNWM0LTdkOTY4MDdkZGE1YiIsImV4cCI6MTc2NjY0MDg3MiwianRpIjoiOTMyNWJmYzRmNWI0NDdiMmFkOGFlZDU4YzVhN2E3MjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9hux1SOTgUcOnFEs04zp3th6paKehnBR8-fqGwR6hEM)

There are two modes available.

-   XML Transform: Transforms the specified XML file to a different structure. A new XML file will be added to the Files object in the data payload.

-   Convert to JSON: Converts the specified XML file to a JSON object. The output JSON object is placed in the XMLTransform object. The object name (Data in the example below) is the name of the outermost tag in the XML file.

    ![XML Transform payload](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9b3088f0-ec97-40c1-a426-4483ca364f4d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjliMzA4OGYwLWVjOTctNDBjMS1hNDI2LTQ0ODNjYTM2NGY0ZCIsImV4cCI6MTc2NjY0MDg3MiwianRpIjoiMTQ4NGQwNTA5N2UxNDQ4ZTgyNjMyM2UwMTE0ZjFkZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mONWsnb68uyCIKoMv0hPzi-mY4vkDKiY9oCsbKuAYEs)


If the XML Transform mode is selected, you need to enter XSLT code to transform the XML data, and XSD code to validate the output XML.

![XML Transform code example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47984a73-dfaa-43c6-9335-7710ee658031?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3OTg0YTczLWRmYWEtNDNjNi05MzM1LTc3MTBlZTY1ODAzMSIsImV4cCI6MTc2NjY0MDg3MiwianRpIjoiYTU0MzhjYTk2N2Y4NDE4Y2E3MzU2MDMxOGQ2YTM0MjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3RI5TBE4tDFKDqGa635p_tpZv8lkBNpUZEvJKVY78NI)

## Examples

For an example of using the XML transform task, see the template Billing > Invoice to XML Document - XSLT Transform. The template is explained in [Retrieve and format tax data for bulk upload](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/retrieve-and-format-tax-data-for-bulk-upload).
