---
title: "Preview and test e-invoice file templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoice-file-template-configuration-and-complete-end-to-end-testing/e-invoice-file-templates-creation-and-testing/preview-and-test-e-invoice-file-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:03.646Z"
---

# Preview and test e-invoice file templates

Learn how to preview and test e-invoice file templates by specifying an account and billing document in the e-invoice file template editor.

When e-invoice file templates are created, you must preview and test each e-invoice file template by specifying an account and billing document in the e-invoice file template editor.

To preview and test an e-invoice file template, perform the following steps:

1.  Click your avatar in the upper right and click Settings > Billing .
2.  On the Billing Settings page, click E-Invoice .
3.  On the E-Invoice Settings page, scroll down to the Templates section.
4.  In the Templates section, locate the e-invoice file template you want to preview and click the Edit Content ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c818e8df-2405-4500-8ff7-7701a0e0b600?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM4MThlOGRmLTI0MDUtNDUwMC04ZmY3LTc3MDFhMGUwYjYwMCIsImV4cCI6MTc2NjY4NzQwMSwianRpIjoiMmJiMjUyMGQ5ZmU5NDhhM2JhNGRmNzk1NDZhZDk1YjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pyr9_tLcsuLGhLao7x_GHuF6sv4MTJdwIUcz_WzAais) icon. The e-invoice file template editor opens.
5.  Click Preview to switch from the Edit mode to the Preview mode.
6.  In the Preview Settings section, specify an account and billing document. Zuora will load the data of the specified account and billing document into your template and validate the template. For more information, see step 5 in [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents).
7.  If the validation fails, resolve the template format errors in the Edit mode. Error messages are displayed in the left panel.

    ![Error message](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bcebecc2-4935-4e7f-9b4f-7af34701a06a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJjZWJlY2MyLTQ5MzUtNGU3Zi05YjRmLTdhZjM0NzAxYTA2YSIsImV4cCI6MTc2NjY4NzQwMSwianRpIjoiMTk3MjM2M2Q3NTUwNGEyNTk5MDA1Nzk2ZmQ5N2FhMGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g85nGk-RhVmBWnWnxTYcZPm957i2iHfO7I5TTMoXN3E)

8.  If the E-Invoice Status is Failed in the Preview Settings section, click Download Logs and then click the Edit tab to resolve the error in the Edit mode. After that, click the Preview tab to switch back to the Preview mode and then click Regenerate E-Invoice . You can switch between two tabs to resolve errors until the E-Invoice Status changes to Success . The error can either be a Zuora-generated error or one returned by Avalara. For more information about error types and resolutions, see [View e-invoice file status and error information through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoice-files-generation-for-billing-documents/generate-e-invoice-files-for-billing-documents-through-the-zuora-ui). The E-Invoice Status field is available only if you have configured the e-invoicing profile for the account and posted the invoice. For more information, see [Configure e-invoicing profile for customer accounts](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-sovos/e-invoice-file-template-configuration-and-complete-end-to-end-testing).

    ![Avalara invoice file template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c9fc64e5-338f-4424-a5a8-78e512dc4815?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM5ZmM2NGU1LTMzOGYtNDQyNC1hNWE4LTc4ZTUxMmRjNDgxNSIsImV4cCI6MTc2NjY4NzQwMSwianRpIjoiM2I5YjM0NDhlMTg4NDQyOThkZTEzYWNmNmU1YzY4MjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YgePQ4fB_vFcJcWpokCFPc32TyylgtXICHrh6RJTO-I)

9.  Click Save in the upper right to save the e-invoice file template.
