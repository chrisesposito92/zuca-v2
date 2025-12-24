---
title: "Preview and test e-invoice file templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing/preview-and-test-e-invoice-file-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T08:40:19.528Z"
---

# Preview and test e-invoice file templates

Learn how to preview and test e-invoice file templates by specifying an account and billing document in the e-invoice file template editor.

When e-invoice file templates are created, you must preview and test each e-invoice file template by specifying an account and billing document in the e-invoice file template editor.

To preview and test an e-invoice file template, perform the following steps:

1.  Click your avatar in the upper right and click Settings > Billing .
2.  On the Billing Settings page, click E-Invoice .
3.  On the E-Invoice Settings page, scroll down to the Templates section.
4.  In the Templates section, locate the e-invoice file template you want to preview and click the Edit Content ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1f3c24ed-594c-4ebf-b3f5-8f7cec717063?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFmM2MyNGVkLTU5NGMtNGViZi1iM2Y1LThmN2NlYzcxNzA2MyIsImV4cCI6MTc2NjY1MjAxNywianRpIjoiMzU2YTYzYWEyNmM2NGYyMzk0OWQzYTc1YTI2OTFkNzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wQ8YyYIxMNmHHG9OneR9Hg4XHQTzlv2oKjPCow_l5CI) icon. The e-invoice file template editor opens.
5.  Click Preview to switch from the Edit mode to the Preview mode.
6.  In the Preview Settings section, specify an account and billing document. Zuora will load the data of the specified account and billing document into your template and validate the template. For more information, see step 5 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents).
7.  If the validation fails, resolve the template format errors in the Edit mode. Error messages are displayed in the left panel.

    ![E-invoicing file template editor - error message](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a091eb1b-f361-4529-936c-dfbaf2ec7a52?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwOTFlYjFiLWYzNjEtNDUyOS05MzZjLWRmYmFmMmVjN2E1MiIsImV4cCI6MTc2NjY1MjAxNywianRpIjoiNWViYWYxOTg5Y2QzNDE3M2I0NGNhZGE3MmIzZGQwZDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jaokGB2TtVpenkuqlQDRX8ClNmyR1pLeRjR3QzVp1c4)

8.  If the E-Invoice Status is Failed in the Preview Settings section, click Download Logs and then click the Edit tab to resolve the error in the Edit mode. After that, click the Preview tab to switch back to the Preview mode and then click Regenerate E-Invoice . You can switch between two tabs to resolve errors until the E-Invoice Status changes to Success . The error can either be a Zuora-generated error or one returned by Sovos. For more information about error types and resolutions, see [View e-invoice file status and error information through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/generate-e-invoice-files-for-billing-documents-through-the-zuora-ui). The E-Invoice Status field is available only if you have configured the e-invoicing profile for the account and posted the invoice. For more information, see [Configure e-invoicing profile for customer accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).

    ![E-invoicing file template editor](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8ea48404-3715-4ded-8090-368baad47d2c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlYTQ4NDA0LTM3MTUtNGRlZC04MDkwLTM2OGJhYWQ0N2QyYyIsImV4cCI6MTc2NjY1MjAxNywianRpIjoiYjU4NDdlMTgwYmIyNDhjZTkzZDMyNmIyNzEzYjRmYzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HXkbqHmEhQ6fWe7Y0bhSDbvm0_0JU4xcPw9xEbJ8__A)

9.  Click Save in the upper right to save the e-invoice file template.
