---
title: "Integrate Workflow with Configurable Payment Retry"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/integration-with-other-products/integrate-workflow-with-configurable-payment-retry"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:58.749Z"
---

# Integrate Workflow with Configurable Payment Retry

You can integrate Workflow with the Configurable Payment Retry feature, so that workflows can be triggered from your payment retry logic.

When a workflow is triggered from your payment retry logic, Configurable Payment Retry passes the account ID of the failed payment and the ID of the payment to the workflow.

For the integration to work, you need to create a dedicated workflow, define the following input fields in the settings of the workflow, and configure the Configurable Payment Retry feature.

| Callout field name | Object | Field name | Datatype |
| --- | --- | --- | --- |
| paymentId | Workflow | paymentId | Text |
| accountId | Workflow | accountId | Text |

To learn about how to add an input field, see [Configure a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/get-started-with-workflow/configure-the-settings-of-a-workflow-definition).
