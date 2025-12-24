---
title: "Run transfer accounting process in Zuora revenue"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_revenue/prepare-zuora-revenue-for-sap-gl-connector/run-transfer-accounting-process-in-zuora-revenue"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:21.585Z"
---

# Run transfer accounting process in Zuora revenue

Learn how to run the transfer accounting process in Zuora Revenue to create journal accounting entries and manage batch regeneration.

You can run the transfer accounting process to create a batch of journal accounting entries. The connector requires at least one transfer accounting batch to be in READY TO TRANSFER state.

Transfer accounting batches created before version 37.020.00.0 must be regenerated to group the accounting entries and split the accounting journal batch into sub-batches based on the chunk size configured.

1.  Navigate to Accounting > Transfer Accounting .
2.  Click the Regenerate icon.
3.  Select Rebuild and Generate File.
4.  Click Save .
    The accounting Journal Batch re-generation will apply to the GroupBy selection configured in the Revenue GL Interface and the Journal Batch will be internally split into multiple chunks based on the value set up in the TA\_SUB\_BATCH\_SPLIT\_SIZE profile.
