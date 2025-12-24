---
title: "Transaction discrepancy"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/current-and-future-gaap/transaction-discrepancy"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:29.597Z"
---

# Transaction discrepancy

This document explains the handling of transaction discrepancies in Zuora Revenue when transitioning from current GAAP to future GAAP, including the deletion of certain transaction types and mapping of INV transactions.

In Zuora Revenue under the future GAAP, the following types of transactions will be deleted from the staging tables under the current GAAP immediately after these transactions are loaded to the staging tables under the future GAAP.

-   Credit memo created (Transaction Type = CM)
-   Credit memo cancellation (Transaction Type = CM-C)
-   Credit memo for return (Transaction Type = CM-R)
-   Credit memo for reduction order (Transaction Type = CM-RO)
-   Reduction order (Transaction Type = RORD)
-   Cost (Transaction Type = CST)

In Zuora Revenue under the current GAAP, credit memo transactions are indicated by Transaction Type being INV and Cancel Flag being Yes . This type of transaction under the current GAAP can be passed onto the staging tables under the future GAAP. However, in the same record of the ARR transaction staging table, you must use the INTG\_TYPE column to populate the corresponding transaction types that are supported by the future GAAP. Use the following table to map the INV transactions under the current GAAP to the transaction types that can be supported by the future GAAP.

| Transaction type under current GAAP | Quantity invoiced | Cancel flag | Return flag | Transaction type under future GAAP |
| --- | --- | --- | --- | --- |
| INV |  | Y |  | CM-C |
| INV | A negative value |  | Y | CM-R |
| INV | 0 |  | Y | CM |
