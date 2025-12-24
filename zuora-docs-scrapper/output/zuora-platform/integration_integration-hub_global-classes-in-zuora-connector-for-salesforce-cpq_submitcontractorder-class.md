---
title: "SubmitContractOrder Class"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/global-classes-in-zuora-connector-for-salesforce-cpq/submitcontractorder-class"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:24.756Z"
---

# SubmitContractOrder Class

The SubmitContractOrder Class facilitates the translation of Contracts into Orders for submission to Zuora, allowing customization and additional backfill logic implementation.

Note:

This functionality is only available if you have the Orders feature enabled.

This article describes the SubmitContractOrder plugin and the related classes. Using the SubmitContractOrder plugin, you can:

-   translate a Contract to an Order for submission to Zuora.
-   customize the translation for your own.

See SubmitContractOrder Plugin for:

-   Workflow of sending a Contract to Zuora as an Order.
-   Limits of the SubmitContractOrder plugin.

For details on how records are normally updated after the SubmitContractOrder Plugin executes, see Set up the SubmitContractOrder Plugin.

## SubmitContractOrder.Plugin Interface

The SubmitContractOrder.Plugin interface includes the following global methods.

| Method | Type | Description |
| --- | --- | --- |
| getOrderRequestInfo(SubmitContractOrder.Input submitContractOrderInput) | SubmitContractOrder.Result | Derives an Order Request from a Contract. This method must be implemented by custom code. |

SubmitContractOrder.Plugin interface is extended by SubmitContractOrder.PluginWithBackfillHandler Interface that allows you to implement additional backfill logic upon completion of Contract submission.

## SubmitContractOrder.Input Class

The SubmitContractOrder.Input class includes the following global properties.

| Property | Type | Description |
| --- | --- | --- |
| contractId | Id | The Salesforce ID of the Contract to be translated into an Order |

## SubmitContractOrder.Result Class

The SubmitContractOrder.Result class includes the following global properties.

| Property | Type | Description |
| --- | --- | --- |
| requestBody | String | The body of the Order Request that will be sent to Zuora. |
| entityId | String | The Zuora ID of the Billing Entity that the Order request will be sent to when Multi-Entity is enabled for your Zuora Tenant.Optional. The default entity will be used if it is not set. |
| previewRequestBody | String | The body of the Order Preview Request that will be sent to Zuora. Note that BillingDocs, ChargeMetrics, and OrderMetrics must be included in preview types to get metrics. |
