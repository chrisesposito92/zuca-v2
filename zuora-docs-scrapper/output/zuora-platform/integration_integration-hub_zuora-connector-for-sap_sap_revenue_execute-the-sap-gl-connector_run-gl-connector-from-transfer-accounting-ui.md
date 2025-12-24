---
title: "Run GL connector from transfer accounting UI"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_revenue/execute-the-sap-gl-connector/run-gl-connector-from-transfer-accounting-ui"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:56.827Z"
---

# Run GL connector from transfer accounting UI

Learn how to execute the GL connector from the Transfer Accounting UI, manage accounting journal batches, and handle status updates in Zuora Revenue.

You can execute the GL connector directly from the Transfer Accounting UI for each Accounting Journal Batch. You must enable the Enable\_ZR\_Connectors profile and use SAP\_GL in the System Level Value field to perform this.

Only batches in the READY TO TRANSFER state will have the Run GL Connector button . The Accounting Journal Batch has been introduced with a new status called Posting in Progress. This intermediate status applies only when a GL connector is enabled and triggered directly from the Transferring Accounting UI.

If there are accounting batches in Revenue that were previously posted into the NetSuite GL but are still in the READY TO TRANSFER state, then the status of all those accounting batches must be updated to TRANSFERRED. To update the states of the accounting batches, you can use the Revenue API or submit a request to [Zuora Global Support](https://www.zuora.com/support-center/) or your implementation team.

If you created Accounting Batches before enabling the Zuora Revenue GL connector to SAP, you must regenerate each batch in the following scenarios:

-   When configuration changes are made in the GL Interface setup, these changes will be applied to the existing Batch.

-   When there are any accounting data changes on the Revenue contracts


In such scenarios, you must regenerate and build the Revenue Accounting Batches. If there are no data or setup changes, you can do the vanilla regeneration of the Accounting Batches. To Regenerate the Accounting Batch, Click the Regenerate button on the Accounting Batch and select Generate File or Rebuild and Generate File.

If the connector fails to update the status of the Transfer Accounting batch in Revenue, you can click the Update Status button to change the status to Transferred or Ready to Transfer.

## Validating journals in SAP

You will receive an email notification on completion. The email notification indicates if the transfer to the accounting operation was a success or failure. Once the transfer to accounting operations is completed, you can view a summary report on the Execution tab.

In the event of a failure, the summary report will include actionable insights that will enable you to remediate the cause of the failure.

On successful completion of a transfer to accounting operation, the SAP Journal document number will be recorded in the email attachment.
