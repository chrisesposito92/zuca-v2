---
title: "Configure templates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/onesource-indirect-tax-determination-app/configure-the-onesource-indirect-tax-determination-app/configure-templates"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:24.410Z"
---

# Configure templates

Learn how to configure dynamic request templates using the Liquid Template Language for tax systems in Zuora.

The Dynamic Request Template is the body of the request where Zuora populates invoice information that can be configured based on your needs. Templates are dynamically rendered using the [Liquid Template Language](https://help.shopify.com/en/themes/liquid/basics) and are provided in the Text/XML or Application/JSON format.

Perform the following steps to configure a dynamic request template:

1.  Launch the created Tax instance and click the TEMPLATE CONFIGURATION tab.
2.  Select the tax engine for which you want to configure templates from the Tax Engine dropdown list.
3.  Select the tab for the template (Standard or taxVoid) you want to configure.Zuora provides you with two templates called Standard template and taxVoid template, but only the Standard template is required to be completed. Tax systems have many configuration options. The template does not have to use all the options and must be configured based on the required information of the request. Templates can include more fields than the required set of fields in the request. Refer to your tax vendor's API documentation or contact their support to learn more about how their fields are formatted. In the case of a failed payment where rollback of the Subscribe call and deleting the invoice is desired, a taxVoid template is necessary to send a request to the tax vendor to also void the invoice and subsequent tax records from their system. For more information, see Configure the taxVoid template.
4.  Add a new template or modify the default template in the text box. To view all available fields and corresponding values that can be used in the template:
    1.  Click Show Liquid Examples .
    2.  Select the desired field in the Example Field dropdown list, the corresponding value you can copy and paste in the template is displayed under Example Value. The fields in the following objects are available for selection. See Context object for rendering tax app templates for more information.

        -   customer

        -   seller

        -   document

        -   document\_item


5.  When you complete the configuration, click ![Configure icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/064542e6-d30d-4e94-92ed-2b86473bb0e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2NDU0MmU2LWQzMGQtNGU5NC05MmVkLTJiODY0NzNiYjBlOSIsImV4cCI6MTc3MTY5NDk1OCwianRpIjoiYmJmZTFjOTdmOGVmNDUxZWI0ZjA0ZGFiMDY0NzRkMTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.2RJQv7edM2a9H1LWQOMkc4TzMHgd9ZLE3q3TR8WW_28) and then select Preview Template to preview the configured template. If you want to start over, you can click ![Configure icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/064542e6-d30d-4e94-92ed-2b86473bb0e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2NDU0MmU2LWQzMGQtNGU5NC05MmVkLTJiODY0NzNiYjBlOSIsImV4cCI6MTc3MTY5NDk1OCwianRpIjoiYTE3YzA1OTZlZWUxNGEwYjk3MjEzZGJjNjA2NjY3NmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Cv-4esAVrrQsdjskMnK40Cbi1i5wHrpjdb4kszYPMlE) and select Revert Template to Default .
6.  Click Save Both Template below the text box to save the template configurations.
