---
title: "Configure task parameters of the workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/configure-task-parameters-of-the-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:26.638Z"
---

# Configure task parameters of the workflow

Learn how to configure the task parameters for the Apply late fees tutorial.

1.  Start Workflow from your tenant in the Sandbox environment.
2.  Select the Workflows tab, find the late-fee workflow, and click Edit. The design board of the workflow is displayed.
3.  Hover over the Export Subscriptions tied to Late Accounts task and click the edit icon.
    1.  Click Subscription in the left panel and select these fields:

        -   Contract Acceptance Date

        -   Contract Effective Date

        -   ID

        -   Name

        -   Service Activation Date


    2.  Click BillToContact in the left panel and select the Work Email field.
    3.  Select the Conditions tab. Revise the query as follows and click Update to save the changes.

        -   Change today - 10 day to today - 5 day or another number of days that you want to use.

        -   Change Limit 1 to Limit 5, because we want to have 5 results instead of 1. Limit 1 is used to limit the number of results to 1. You can keep the limit when you test the workflow and remove the limit when the workflow is ready for actual use.


4.  Edit task Apply Late Fee - Edit to select RatePlan . In this tutorial, we will not edit the iterate subscription task.
    1.  Remove \- Edit to select RatePlan from the name of the task. We no longer need this reminder in the name.
    2.  For Product, select Late Fee Product from the list. If the new product is not available on the list, refresh the catalog in the global settings. To learn about how to refresh the catalog, see [Workflow maintenance settings](/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/workflow-maintenance-settings).
    3.  For RatePlan, Select Late Fee from the list. If the rate plan isn't available on the list, refresh the catalog in the global settings.
    4.  Modify the name and description of this amendment if necessary.
    5.  Modify the three billing trigger dates if necessary. If you want to use the same billing trigger dates as the subscription, you can select the data fields (for example, Subscription.ContractEffectiveDate) from the list.
5.  Edit task Notify About Late Fee.
    1.  In the Address tab, select BillToContact.WorkEmail for To (Email). You can enter your own email when you are testing the workflow.
    2.  For From (Email), the only option is [workflow@zuora.com](mailto:workflow@zuora.com). If you want to add a new option, submit a request at [Zuora Global Support](https://support.zuora.com/).
    3.  In the Address tab, keep Preview Only selected. Deselect this option only when the workflow is ready for actual use.
    4.  In the Body tab, modify the message if necessary. Use the merge field assistant above the text field to get Liquid expressions for available merge fields.
6.  Test run the workflow and perform troubleshooting if necessary. Expected result: The workflow runs successfully. The specified email addresses get the notification that late fee has been applied. You can now create a copy of this workflow on your tenant in the Production environment.
