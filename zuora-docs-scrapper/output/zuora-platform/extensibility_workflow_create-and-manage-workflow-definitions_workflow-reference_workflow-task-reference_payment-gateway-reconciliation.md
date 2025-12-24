---
title: "Payment: Gateway Reconciliation"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/payment-gateway-reconciliation"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:28.374Z"
---

# Payment: Gateway Reconciliation

This reference describes the Payment: Gateway Reconciliation task.

The gateway reconciliation task performs one of the three reconciliation actions (Settle, Reject, or Reverse) on a specified payment. It corresponds to the three REST API operations for gateway reconciliation provided by Zuora.

A typical use case of this task is to update the payment and account data in your Zuora tenant based on gateway reconciliation reports from payment gateways. You may need to define different cases using a case task and take corresponding reconciliation actions.

For an example use case, see [Perform payment gateway reconciliations with Workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/perform-payment-gateway-reconciliations-with-workflow).

## Task settings

When creating this task, you need to select one of the three actions and specify parameters for the action.

-   Settle : Sets the status of the specified payment to Settled and returns the payment object as response. You must specify the payment ID or select a field to identify the payment. For details about request parameters and the response, see [Settle a payment](https://developer.zuora.com/v1-api-reference/api/operation/POST_SettlePayment/).

-   Reject : Sets the status of the specified payment to Rejected, creates a refund for the payment amount, and returns the refund object as response. You must specify the payment ID or select a field to identify the payment. For details about request parameters and the response, see [Reject a payment](https://developer.zuora.com/v1-api-reference/api/operation/POST_RejectPayment/).

-   Reverse : Sets the status of the specified payment to Reversed, creates a refund for the specified amount and returns the refund object as response. You must specify the payment ID or select a field to identify the payment and specify the amount to be refunded. For details about request parameters and the response, see [Reverse a payment](https://developer.zuora.com/v1-api-reference/api/operation/POST_ReversePayment/).
