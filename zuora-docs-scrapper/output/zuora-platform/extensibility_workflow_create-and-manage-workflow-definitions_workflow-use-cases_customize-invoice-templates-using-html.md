---
title: "Customize invoice templates using HTML"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/customize-invoice-templates-using-html"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:34.501Z"
---

# Customize invoice templates using HTML

Learn how to use Workflow templates to customize invoices templates using HTML.

With the custom invoice task, you can generate invoices using an invoice template that is built with HTML tags, CSS, JavaScript, and Liquid.

In this topic, we'll introduce the upstream tasks you need to include and configurations you need to make if you want to use HTML invoice templates.

## Available templates

Invoicing > Custom Invoices

![Customize invoice templates](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4339a079-b0aa-41c8-be8e-1bb6cda50d58?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQzMzlhMDc5LWIwYWEtNDFjOC1iZThlLTFiYjZjZGE1MGQ1OCIsImV4cCI6MTc2NjY0MDc1MiwianRpIjoiYjAzZTE5MWYxNDdmNGI2N2IwMmQ3OTc5ODQxMjA3NDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HhQt1NN3CcMy5RL0K4KEQ2ZXshuzlNS5Di8xC-uufYM)

## Workflow overview

This workflow consists of six tasks.

1.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): Retrieves an invoice that you want to use the HTML invoice template for.

2.  [Query](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query): Retrieves an invoice item for which the charge type is "Usage".

3.  [Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout): Invokes an API call to retrieve account details. Some of the details will be used in the HTML template in the custom invoice task.

4.  [If](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-if): Checks if data has been retrieved in the second query task.

5.  [Callout](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout): Retrieves usage data based on the charge number obtained in the second query task.

6.  [Custom Invoice](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document): Generates an invoice based on the specified HTML invoice template. Data obtained in upstream tasks can be included in the template.


## Configurations

-   In the first query task, select the fields you need and modify the conditions. You can add an additional condition like `Status = 'Draft' OR Status = 'Posted'` , because the custom invoice task only works for invoices in Draft or Posted status.

-   The second query task uses `ChargeType = 'Usage'` as one of the conditions. You can remove this condition to include invoice items of all charge types, or revise the condition to include invoice items of both recurring and usage charge types.


## Customizations

-   This workflow retrieves data for one invoice only by default. You may want to change the conditions and settings to retrieve multiple invoices (for example, all invoices in a batch) and then iterate the invoices to perform the downstream tasks.

-   You can add an email task to send the generated invoices to specified addresses.
