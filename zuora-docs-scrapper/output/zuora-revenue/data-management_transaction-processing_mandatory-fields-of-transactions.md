---
title: "Mandatory fields of transactions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/mandatory-fields-of-transactions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:28.706Z"
---

# Mandatory fields of transactions

Upload different types of transaction lines, each with its own required fields to ensure proper processing

You can upload the following types of transaction lines to Zuora Revenue for processing. In the uploaded file, different fields are required by different types of transactions. If the mandatory fields are missing in the uploaded file, the transaction data cannot be correctly processed by Zuora Revenue. Click the following transaction type name below to find the mandatory fields for it.

-   [SO (sales order)](#concept-8q84qhtw__SO)
-   [INV (invoice)](#concept-8q84qhtw__INV)
-   [CM (credit memo created)](#concept-8q84qhtw__CM)
-   [CM-C (credit memo cancelation)](#concept-8q84qhtw__CM-C)
-   [CM-R (credit memo for return)](#concept-8q84qhtw__CM-R)
-   [CM-RO (credit memo for reduction order)](#concept-8q84qhtw__CM-RO)
-   [RORD (reduction order)](#concept-8q84qhtw__RORD)
-   [PORD (price change order)](#concept-8q84qhtw__PORD)

Note:

-   The PORD transaction type is no longer used.
-   The Accounting Segment field is mandatory for all transaction types and will not be listed in the tables below.

## SO (sales order)

| Field name | Description |
| --- | --- |
| EXT_LST_PRC | Extended list price |
| EXT_SLL_PRC | Extended selling price |
| ORD_QTY | The quantity of the order |
| CURR | The currency of the order |
| F_CUR | The functional currency of the order |
| SO_LINE_ID | The ID of the sales order line |
| SO_DATE | The creation date of the sales order |

## INV (invoice)

| Field name | Description |
| --- | --- |
| EXT_LST_PRC | Extended list price |
| EXT_SLL_PRC | Extended selling price |
| INV_QTY | The quantity of the invoice |
| ORD_QTY | The quantity of the order |
| CURR | The currency of the invoice |
| F_CUR | The functional currency of the invoice |
| INV_LINE_ID | The ID of the invoice |
| INV_DATE | The creation date of the invoice |
| INV_NUM | The invoice number |

## CM (credit memo created)

| Field name | Description |
| --- | --- |
| EXT_SLL_PRC | Extended selling price |
| INV_QTY | The quantity of the invoice |
| CURR | The currency of the credit memo |
| F_CUR | The functional currency of the credit memo |
| INV_LINE_ID | The ID of the credit memo |
| INV_DATE | The creation date of the credit memo |
| INV_NUM | The invoice number |

## CM-C (credit memo cancelation)

| Field name | Description |
| --- | --- |
| EXT_SLL_PRC | Extended selling price |
| INV_QTY | The quantity of the invoice |
| CURR | The currency of the credit memo |
| F_CUR | The functional currency of the credit memo |
| INV_LINE_ID | The ID of the credit memo |
| INV_DATE | The creation date of the credit memo |
| INV_NUM | The invoice number |

## CM-R (credit memo for return)

| Field name | Description |
| --- | --- |
| EXT_LST_PRC | Extended list price |
| EXT_SLL_PRC | Extended selling price |
| INV_QTY | The quantity of the invoice |
| CURR | The currency of the credit memo |
| F_CUR | The functional currency of the credit memo |
| INV_LINE_ID | The ID of the credit memo |
| INV_DATE | The creation date of the credit memo |
| INV_NUM | The invoice number |

## CM-RO (credit memo for reduction order)

| Field name | Description |
| --- | --- |
| EXT_SLL_PRC | Extended selling price |
| CURR | The currency of the credit memo |
| F_CUR | The functional currency of the credit memo |
| SO_LINE_ID | The ID of the sales order line |
| INV_LINE_ID | The ID of the credit memo |
| INV_DATE | The creation date of the credit memo |
| INV_NUM | The invoice number |

## RORD (reduction order)

| Field name | Description |
| --- | --- |
| EXT_LST_PRC | Extended list price (a negative value) |
| EXT_SLL_PRC | Extended selling price (a negative value) |
| ORD_QTY | The quantity of the reduction order (a positive value) |
| CURR | The currency of the reduction order |
| F_CUR | The functional currency of the reduction order |
| SO_LINE_ID | The ID of the sales order line |
| SO_DATE | The creation date of the sales order line |
| ORIG_SO_LINE_ID | The ID of the original sales order line |

## PORD (price change order)

Note:

The PORD transaction type is no longer used.

| Field name | Description |
| --- | --- |
| EXT_SLL_PRC | Extended selling price |
| ORD_QTY | The quantity of the order |
| CURR | The currency of the order |
| F_CUR | The functional currency of the order |
| SO_LINE_ID | The ID of the sales order line |
| SO_DATE | The creation date of the sales order line |
