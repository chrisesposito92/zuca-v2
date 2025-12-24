---
title: "SubmitContractOrder.PluginWithBackfillHandler Interface"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/global-classes-in-zuora-connector-for-salesforce-cpq/submitcontractorder-class/submitcontractorder.pluginwithbackfillhandler-interface"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:29.342Z"
---

# SubmitContractOrder.PluginWithBackfillHandler Interface

The SubmitContractOrder.PluginWithBackfillHandler Interface extends the SubmitContractOrder.Plugin Interface, enabling additional backfill logic upon Contract submission completion.

Note:

This functionality is only available if you have the Orders feature enabled

This article describes SubmitContractOrder.PluginWithBackfillHandler Interface. SubmitContractOrder.PluginWithBackfillHandler Interface extends SubmitContractOrder.Plugin Interface. It allows you to implement additional backfill logic upon completion of Contract submission.

## SubmitContractOrder.PluginWithBackfillHandler Interface

The SubmitContractOrder.PluginWithBackfillHandler interface includes the following global methods.

| Method | Type | Description |
| --- | --- | --- |
| getOrderRequestInfo(SubmitContractOrder.Input submitContractOrderInput) | SubmitContractOrder.Result | Derives an Order Request from a Contract. This method must be implemented by custom code. |
| postBackfillHandler(Id contractId, String orderId) | void | This method is only available when implementing SubmitContractOrder.PluginWithBackfillHandler interface. For details on how records are normally updated after the SubmitContractOrder Plugin executes, see Set up SubmitContractOrder Plugin. To implement additional backfill logic upon completion of Contract submission, implement SubmitContractOrder.PluginWithBackfillHandler to override this method. |
