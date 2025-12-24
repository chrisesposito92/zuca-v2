---
title: "Logic: If"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-if"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:09.855Z"
---

# Logic: If

This reference describes the Logic: If task.

The Logic: If task splits the execution of a workflow into two branches based on the conditional statements that you define.

The returned evaluation of your conditional statements must be either `True` or `False` . You can then define a downstream task for the On True or On False condition.

## Task settings

On the Condition tab, enter the if-clause in [Liquid](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/workflow/liquid_expressions_in_workflow.ditamap) and the returned evaluation must be either `True` or `False` . `True` and `False` must be spelled with the first letter capitalized.

If you want to use a Liquid variable that is defined in an upstream task in the current task, you must select Skip Validation . Otherwise, the variable cannot be parsed.

## Examples

Here is an example of the conditional statements for evaluating the size of an array and the two branches created after this “Logic: If” task.

{% if Data.Subscription.size > 0 %} True {% else %} False {% endif %}

For more examples, see the following articles:

-   [Customize invoice templates using HTML](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/customize-invoice-templates-using-html)

-   [Perform payment gateway reconciliations with Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/perform-payment-gateway-reconciliations-with-workflow)

-   [Process a large number of refunds](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/process-a-large-number-of-refunds)
