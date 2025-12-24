---
title: "Data Transformation errors"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/troubleshoot-billing---revenue-integration_1/data-transformation-errors"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:42:03.109Z"
---

# Data Transformation errors

This document outlines the errors related to job and transaction failures encountered during the Data Transformation process.

You might encounter the following types of error for the Data Transformation job:

-   [Errors related to job failures](#concept-xqyyb0h1__title-29)

-   Errors related to the transaction failures


## Errors related to job failure

The error message related to the job failure is prompted on the Transformation Job page when the Data Transformation job failed. The following table describes all possible errors of this type:

| Error message | Description |
| --- | --- |
| Entity lookup (rpro_ks_zuora_entities) setup is missing | The RPRO_KS_ZUORA_ENTITIES lookup is not configured correctly.You can navigate to Setups > Application > Lookups to check the configuration. |
| Not a valid template (disabled or unfrozen) or template mapping is not valid or duplicate mappings | The Data Transformation template is disabled or frozen, or the template mapping is incorrect or duplicated |
| Not a valid query filter | The query filter is not valid, probably because of a syntax error. |
| ERROR: failed to construct the transformation query | Failed to generate the Data Transformation query. |
| ERROR: No sec_atr_val found for the entity_id | For a specific Zuora Billing entity defined in the RPRO_KS_ZUORA_ENTITIES lookup, the corresponding Zuora Revenue org is not specified. |
| ERROR: Multi-Entity enabled tenant, Parse entity information for transformation | The entity name is missing from the Data Transformation parameters. The entity name is required because the current Zuora Revenue org is connected to a multi-entity Zuora Billing tenant. |
| ERROR: Entity not defined | Entity information is missing from the Data Sync table. |
| ERROR: when deriving timezone | The timezone setting of your Zuora Billing tenant is not specified in the entity definition. |
| ERROR: Invalid source transaction type | An invalid source transaction type is parsed in the Data Transformation job. |
| ERROR: Transformation job failed | It is an Oracle DB error. The cause might be invalid objects, parse errors, or other exceptions. |

## Errors related to transaction failures

The Data Transformation job completed with a status of`Completed``- Warning` indicates that some transactions failed during the transformation. The failed transactions are displayed on the error details page.

| Error message | Description |
| --- | --- |
| Missing Business Unit | The Business Unit is not defined or mapped in the template. |
| Missing Company Code | The Company Code is not defined or mapped in the template. |
| Missing Start Date | The Revenue Start Date is not populated due to one of the following reasons:Incorrect template mapping.Subscription is in the Draft status. |
| Missing Sec Attribute Value | The Zuora Revenue org is not populated due to the incorrect environment setup. |
| Missing SO Line ID | Unable to generate the SO Line ID during data transformation. |
| Missing Extended Sell Price | Unable to generate the Extended Sell Price caused by CCV or specific use cases. |
| Missing SO Date | The SO Start Date is not populated caused by the incorrect template mapping. |
| Missing Functional Currency Exchange Rate | Multi-currency transactions do not have functional exchange rates populated. Failure could be caused by the exchange rate sync.Note: Validation enabled only if the profile is turned on to reference the billing exchange rate as part of the data sync. |
| Missing Reporting Currency Exchange Rate | Multi-currency transaction does not have the reporting exchange rates populated. Failure could be caused by the exchange rate sync.Note: Validation enabled only if the profile is turned on to reference the billing exchange rate as part of the Data Sync. |
| Unable to derive sequence number | Unable to generate the sequence number for the Data Collection. |
| Order Quantity is Blank | Order Quantity is NULL. The possible cause can be the incorrect template mapping, or the missing data in the Data Sync table. |
| Regular charges transformation completed till post-stage (rpro_dt_post_order_g) and processing to line-stage(rpro_line_stg_g) failed | Regular charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| FAD charges transformation completed till post-stage (rpro_dt_post_order_g) and processing to line-stage(rpro_line_stg_g) failed | FAD charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Discount percentage charges transformation completed till post-stage (rpro_dt_post_order_g) and processing to line-stage(rpro_line_stg_g) failed | Percentage discount charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| ERROR: Booking transformation failed | The transformation for booking data failed, probably due to Oracle DB exceptions. |
| Missing Invoice Line ID | Unable to generate the Invoice Line ID during data transformation. |
| Missing Invoice Date | Missing invoice transaction date and failure could be missing/wrong template reference. |
| Regular charges Invoice transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | InvoiceItem regular charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| FAD charges Invoice transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | InvoiceItem FAD charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Discount Percentage Invoice transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | InvoiceItem discount percentage charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| ERROR: Billing transformation failed | Zuora Billing data (InvoiceItem, InvoiceItemAdjustment, CreditMemoItem, DebitMemoItem) transformation failed and the cause might be Oracle exceptions. |
| Regular Charge Invoice Item Adjustment transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | InvoiceItemAdjustment regular charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| FAD Charge Invoice Item Adjustment transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | InvoiceItemAdjustment FAD charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Discount Percentage Charge Invoice Item Adjustment transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage (rpro_line_stg_g) failed | InvoiceItemAdjustment discount percentage charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| ERROR: Invoice Item Adjustment transformation failed | InvoiceItemAdjustment transformation failed, probably due to Oracle exceptions. |
| Non-Discount Percentage Credit Memo transformation completed till post-stage(rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | CreditMemoItem Regular/FAD charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Discount percentage charges transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | CreditMemoItem discount percentage charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Standalone Credit Memo transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage(rpro_line_stg_g) failed | CreditMemoItem standard alone charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| ERROR: Credit Memo transformation failed | CreditMemoItem transformation failed and the cause might be Oracle exceptions. |
| Adhoc Invoice Debit Memo transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage (rpro_line_stg_g) failed | DebitMemoItem charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| Standalone Debit Memo transformation completed till post-stage (rpro_dt_post_bill_g) and processing to line-stage (rpro_line_stg_g) failed | DebitMemoItem standalone charges get stuck in the Post-Staging and are not processed to the Line-Staging for collection. The possible cause can be the incorrect schema structure or invalid objects. |
| ERROR: Debit Memo transformation failed | DebitMemoItem transformation failed and the cause might be Oracle exceptions. |
| Unable to generate credit memo transaction type | Data Transformation failed to generate the Zuora Revenue transaction type for the CreditMemoItem source. |
| Failed to reference Original SO or Original Invoice for an CM-C transaction | The Data Transformation job cannot generate the Original SO or Original Invoice reference for the credit back. |
| Unable to generate iia transaction type | The Data Transformation job failed to generate the Zuora Revenue transaction type for the InvoiceItemAdjustment source. |
| Unable to derive the orig_so_line_id reference | The Data Transformation job cannot generate the Original SO reference for the credit back. |
| Unable to generate invoice transaction type | The Data Transformation job cannot generate the Zuora Revenue transaction type for the InvoiceItem source. |
| ERROR: Post transformation failed during rule engine to populate amendment_type, order_id | The Data Transformation job cannot generate the amendment type and order references. |
| ERROR: Post transformation failed during rule engine to populate amendment_reason, skip_ct_mod_flag, prv_ver | The Data Transformation job cannot generate the amendment reason, previous version, and contract modification references. |
| ERROR: Post transformation failed during rule engine to populate term_number | The Data Transformation job cannot generate the subscription term number. |
| ERROR: Post transformation failed while processing cancellation subscription to reset ext_sll_prc | The Data Transformation job cannot process the cancellation subscription. |
| ERROR: Post Order transformation failed | The booking data transformation failed in the post transform checks and the cause might be Oracle exceptions. |
