---
title: "Configure global constants of Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/configure-global-constants-of-workflow"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:48.118Z"
---

# Configure global constants of Workflow

Global constants in Workflow are encrypted parameters that are valid for all workflows in a Workflow instance. A common scenario for using global constants is to configure credentials for systems that you need to integrate Zuora with.

If you are granted the Workflow administrator user role or the Workflow Global Constants Access permission, you can define and manage global constants in Workflow.

After a global constant is defined, you can reference it in Liquid templates. For example, if you define a constant with the key `ExternalSystemUsername`, you can reference this constant with this Liquid template: `{{GlobalConstants.ExternalSystemUsername}}`.

Note:

The Global Constants that are configured as secret will not be visible to the users once set.

1.  Navigate to .
2.  Click the Settings tab.
3.  In the Global Constants section, click Add New to add a new constant. The New Global Constant dialog opens.
4.  Specify a key (constant name) and a value in the corresponding fields to define a constant. Only alphanumeric characters are supported in keys.
    You can click \+ Add to create multiple constants.

5.  Click the Add button to save the constants.
6.  (Optional) If you want to update the constant, you can click the key or value and update the constant. You can also click the delete icon to delete a global constant definition.
