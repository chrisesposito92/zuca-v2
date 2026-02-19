---
title: "Set up a schema"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configuration/import-the-wsdl-into-zuora-360/set-up-a-schema"
product: "zuora-platform"
scraped_at: "2026-02-19T03:34:40.960Z"
---

# Set up a schema

Learn how to import the Zuora WSDL into Salesforce using the zSchema Setup configuration page, enabling integration with Zuora CPQ Order Builder and Invoice PDF functionalities.

Use the zSchema Setup configuration page to import the WSDL into Salesforce.

The imported Zuora WSDL is to be used by Zuora CPQ Order Builder and viewing or downloading Invoice PDFs.

You can perform the following actions on the zSchema Setup page:

-   Import the Zuora WSDL that includes the objects and fields that you want to use into Salesforce.

-   Create custom fields in the cached schema to match any custom fields created in Zuora.

-   Edit or delete custom fields.

-   Clear the Schema cache.


![ZSchemaSetup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/400ffead-a7c8-4408-93a7-4486444120ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQwMGZmZWFkLWE3YzgtNDQwOC05M2E3LTQ0ODY0NDQxMjBlZiIsImV4cCI6MTc3MTU1ODQ3NCwianRpIjoiYjQ3ZmU3YTczNzQwNGU4YWI5MzY4OGIwY2Y5YzA3MDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.oJeUWp17E9iSKB2ej1rNxiJslpgwlhtj3boMLGk_n7o)

To upload Zuora WSDL to Salesforce:

1.  In Salesforce, click the + tab and then click Schema Setup.
2.  On the zSchema Setup page, click Clear Schema Cache . You must clear cache before uploading a new WSDL file.
3.  Click Choose File , and select the WSDL file.
4.  Click Upload .
