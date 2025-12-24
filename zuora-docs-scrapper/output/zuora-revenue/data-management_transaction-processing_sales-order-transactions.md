---
title: "Sales order transactions"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/sales-order-transactions"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:14.861Z"
---

# Sales order transactions

In Zuora Revenue, sales order (SO) lines form the base transactions to which credit memos, reduction orders, and price change orders are linked.

Sales order (SO) transactions are one of the most basic transaction types in Zuora Revenue. Based on the SO line, credit memo lines (CM and CM-R), reduction order lines (RORD), and price change order lines (PORD) can then be uploaded to Zuora Revenue and associated with the original SO line.

## Input requirement

When you input sales order lines to Zuora Revenue, set the Line Type to be SO for this type of transactions. The following fields are mandatory for the SO lines. If any of the following fields are missing, the data validation process will fail and the data cannot be collected by Zuora Revenue.

-   EXT\_LST\_PRC: Extended list price

-   EXT\_SLL\_PRC: Extended selling price

-   ORD\_QTY: The quantity of the order

-   CURR: The currency of the order

-   F\_CUR: The functional currency of the order

-   SO\_LINE\_ID: The ID of the sales order line

-   SO\_DATE: The creation date of the sales order


Note:

-   Zuora Revenue does not support negative SO lines except for the following scenarios:

    -   A discount line with negative values where the standalone selling price (SSP) is always $0.

    -   Bad debt for writing-off, which is treated as a standalone line.

-   Zuora Revenue has the following limitations when processing a hybrid revenue contract, which contains both positive and negative lines:

    -   The released revenue percent might be different between positive and negative lines due to rounding differences.

    -   Impairment accounting cannot be fully supported.


## Accounting entries

The transaction value (Ext. Sell Price) change of the SO line will also change the following values for the line. Examples are provided to explain the impact of SO transaction value change on accounting entries.

-   Allocatable Ext. Price
-   Ext. Sell Price
-   Contract Value

## Example 1

The initial SO of $100 is collected in Zuora Revenue. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Contract Liability | 100 |  | Contract Liability | 100 |  |
| Revenue |  | 100 | Revenue |  | 100 |

Then, the SO value is increased to $180 in the next upload. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Contract Liability | 80 |  | Contract Liability | 180 |  |
| Revenue |  | 80 | Revenue |  | 180 |

After that, the SO value is decreased by $30 in another upload. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Contract Liability |  | 30 | Contract Liability | 150 |  |
| Revenue | 30 |  | Revenue |  | 150 |

## Example 2

In this example, the Right\_to\_Bill flag is set to Y for the uploaded SO of $100 and no invoice is received. This will impact the Unbilled account. After the initial upload, the impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Unbilled | 100 |  | Unbilled | 100 |  |
| Revenue |  | 100 | Revenue |  | 100 |

Again, the SO value is increased to $180 in the next upload and no invoice is received. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Unbilled | 80 |  | Unbilled | 180 |  |
| Revenue |  | 80 | Revenue |  | 180 |

Then, the SO value is decreased by $30 in another upload and no invoice is received yet. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Unbilled |  | 30 | Unbilled | 150 |  |
| Revenue | 30 |  | Revenue |  | 150 |

After that, an invoice of $100 is received. The impact and balance of the accounting entries will be as follows:

| Impact | Balance |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Dr | Cr |  | Dr | Cr |
| Unbilled |  | 100 | Unbilled | 50 |  |
| Revenue | 100 |  | Revenue |  | 150 |
| Contract Liability | 100 |  | Contract Liability | 100 |  |
| Revenue |  | 100 |  |  |  |
