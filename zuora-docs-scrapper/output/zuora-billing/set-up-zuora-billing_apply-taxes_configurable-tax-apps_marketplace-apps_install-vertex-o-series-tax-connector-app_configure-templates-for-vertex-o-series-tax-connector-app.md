---
title: "Configure templates for Vertex O Series Tax Connector app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app/configure-templates-for-vertex-o-series-tax-connector-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:35.821Z"
---

# Configure templates for Vertex O Series Tax Connector app

Learn how to configure dynamic request templates for the Vertex O Series Tax Connector app using the Liquid Template Language, and manage template configurations to meet your tax processing needs.

The Dynamic Request Template is the body of the request where Zuora populates invoice information that can be configured based on your needs. Templates are dynamically rendered using the [Liquid Template Language](https://help.shopify.com/en/themes/liquid/basics) and are provided in the Text/XML or Application/JSON format.

Perform the following steps to configure a dynamic request template:

1.  Launch the created Tax instance and click the TEMPLATE CONFIGURATION tab.
2.  Select the tax engine for which you want to configure templates from the Tax Engine dropdown list.
3.  Select the tab for the template (Standard or taxVoid) you want to configure.

    Zuora provides you with two templates called Standard template and taxVoid template, but only the Standard template is required to be completed. Tax systems have many configuration options. The template does not have to use all the options and must be configured based on the required information of the request. Templates can include more fields than the required set of fields in the request. Refer to your tax vendor's API documentation or contact their support to learn more about how their fields are formatted.

    In the case of a failed payment where Rollback of the Subscribe call and deleting invoice is desired, a taxVoid template is necessary to send a request to the tax vendor to also void the invoice and subsequent tax records from their system. Below is the default taxVoid template for Vertex. Note that the taxVoid template currently only supports the `id` , `transactionId` , `taxCompanyCode` , and `invoiceNumber` fields on the document object .

    01 <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"\> 02 <SOAP-ENV:Body> 03 <VertexEnvelope xmlns="urn:vertexinc:o-series:tps:7:0"\> 04 <Login> 05 <UserName>{{seller\["username"\]}}</UserName> 06 <Password>{{seller\["password"\]}}</Password> 07 <TrustedId>{{seller\["security\_token"\]}}</TrustedId> 08 </Login> 09 <RollbackRequest transactionId="{{document\["id"\]}}"/> 10 </VertexEnvelope> 11 </SOAP-ENV:Body> 12 </SOAP-ENV:Envelope>

4.  Add a new template or modify the default template in the text box. Note that the Vertex Tax Engine app now supports any number of Vertex flexible fields. To use Vertex flexible fields, you have to define custom fields in your Zuora tenant. To view all available fields and corresponding values that can be used in the template:
    1.  Click Show Liquid Examples .
    2.  Select the desired field in the Example Field dropdown list, the corresponding value you can copy and paste in the template is displayed under Example Value. The fields in the following objects are available for selection. See Context object for rendering tax app templates for more information.

        -   customer
        -   seller
        -   document
        -   document\_item

5.  When you complete the configuration, click ![Configure icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b40b45ac-1bd2-4c85-9024-d64ce7d2881e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI0MGI0NWFjLTFiZDItNGM4NS05MDI0LWQ2NGNlN2QyODgxZSIsImV4cCI6MTc2NjYzOTM3MywianRpIjoiOGJkZmE2Nzc1ZDBiNDAyNzljMDZjNTZiOWY3YTIxYjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.O7Abug2tWHTV0k4qnKYgh_-ofw_2JsXy9rQHu-9uJZc) and then select Preview Template to preview the configured template. If you want to start over, you can click ![Configure icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b40b45ac-1bd2-4c85-9024-d64ce7d2881e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI0MGI0NWFjLTFiZDItNGM4NS05MDI0LWQ2NGNlN2QyODgxZSIsImV4cCI6MTc2NjYzOTM3MywianRpIjoiNzg3ODFhNzQ2MThhNGM2ZWFjYmQ3YTZkNjU3NmZlNjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vyctY0Fg_VqdwmHJIM6Ab_unkkLiM7C_5OdjWb2kz-w) and select Revert Template to Default .
6.  Click Save Both Template below the text box to save the template configurations.
7.  Define custom fields for Vertex flexible fields as follows:
    1.  In your Zuora tenant, go to .
    2.  Select Invoice Tax Fields.
    3.  Add a custom field with the API name in the following format: `tax_vertex_flexible_code_field_[Field ID]__c`.
    4.  Click save.
