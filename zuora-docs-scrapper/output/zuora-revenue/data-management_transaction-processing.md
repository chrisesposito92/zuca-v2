---
title: "Transaction processing"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:26.274Z"
---

# Transaction processing

In Zuora Revenue, transaction processing is a very critical process and the starting point in the revenue management workflow. If Zuora Revenue is not integrated with any upstream system, you will have to manually update transaction lines as data files to Zuora Revenue for processing. If Zuora Revenue is integrated with the upstream system, you might skip the manual transaction upload. However, it is important for you to understand the accounting behaviors after the supported types of transactions are collected in Zuora Revenue.

"Transaction" means each discrete transaction invoice or credit line input into Zuora Revenue, including each additional invoice or credit line created if a Customer splits a transaction bundle into component transaction invoice or credit lines using the Zuora Revenue bundle split functionality. The following transaction types are considered individual invoice or credit line types and count towards Customer's volume of Transactions: INV (Invoice), CM (Credit Memo), CM-R (Returns), CM-RO (Credit for Reduced Orders) and CM-C (Invoice Cancellations).
