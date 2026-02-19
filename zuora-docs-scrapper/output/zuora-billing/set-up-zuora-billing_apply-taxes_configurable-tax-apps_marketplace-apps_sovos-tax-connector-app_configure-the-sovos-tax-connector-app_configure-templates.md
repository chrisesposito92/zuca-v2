---
title: "Configure templates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/sovos-tax-connector-app/configure-the-sovos-tax-connector-app/configure-templates"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:24.713Z"
---

# Configure templates

Learn how to configure dynamic request templates for tax systems, including selecting tax engines, modifying templates, and previewing configurations.

To configure a dynamic request template:

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


5.  When you complete the configuration, click ![configure_icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/064542e6-d30d-4e94-92ed-2b86473bb0e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2NDU0MmU2LWQzMGQtNGU5NC05MmVkLTJiODY0NzNiYjBlOSIsImV4cCI6MTc3MTU1NzAyMiwianRpIjoiYTg3NmYzZjQyNGIxNGZlYWE1OTk5OTcxZDRhOTc2MjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.QpQzbL-JoTAbesaPgnCrbiv_U_J5obW6kxYo7BNkbQ4) and then select Preview Template to preview the configured template. If you want to start over, you can click ![configure_icon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/064542e6-d30d-4e94-92ed-2b86473bb0e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2NDU0MmU2LWQzMGQtNGU5NC05MmVkLTJiODY0NzNiYjBlOSIsImV4cCI6MTc3MTU1NzAyMiwianRpIjoiNWY2NGVlODMyZmQwNDFlMTg3Yzk0NmU3MmRiNzVkNjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.EeGGgHakJD6uAPqZCDw9dItl1cEGQEzVMqY3PaiKM-M) and select Revert Template to Default .
6.  Click Save Both Template below the text box to save the template configurations.
