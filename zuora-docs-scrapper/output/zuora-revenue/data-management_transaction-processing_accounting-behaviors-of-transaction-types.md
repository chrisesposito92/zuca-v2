---
title: "Accounting behaviors of transaction types"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:36.267Z"
---

# Accounting behaviors of transaction types

Upload transaction types to Zuora Revenue for processing

You can upload the following types of transactions to Zuora Revenue for processing. Zuora Revenue uses the Transaction Type field value of the transaction line to determine the type of the uploaded transaction line.

-   Sales order lines (SO)
-   Invoice lines (INV)
-   Credit memo lines (CM)
-   Invoice cancellation lines (CM-C)
-   Credit memo lines for return (CM-R)
-   Credit memo lines for reduction orders (CM-RO)
-   Price change order lines (PORD)
-   Reduction order lines (RORD)

After the initial transaction upload, the transaction value might be changed in future uploads.

## Link identifier for transaction upload

Zuora Revenue uses different link identifiers to associate the transaction that is uploaded later with the original one for different transaction types. For example, after one SO line is collected in Zuora Revenue, another SO line with the same link identifier is uploaded at a later time. The latter SO line will be treated as the SO update to the original SO line because they have the same link identifier. Or, if a credit memo is collected, Zuora Revenue will use the link identifier specified for the credit memo line to associate it with the previous invoice line or SO line.

Refer to the table below to find the field that is used as the link identifier for various transaction types in Zuora Revenue. For example, if a CM line is uploaded to Zuora Revenue with the INV\_LINE\_ID field specified, Zuora Revenue will identify the invoice line with the specified INV\_LINE\_ID value and then associate the CM line with the identified invoice line.

| Transaction type | Link identifier | Description |
| --- | --- | --- |
| SO | SO_LINE_ID | The initial or original SO line ID. |
| INV | INV_LINE_ID | The initial or original invoice line ID. |
| CM | Sales order based: SO_LINE_IDInvoice based: INV_LINE_ID | Either the original SO line ID or the original invoice line ID. |
| CM-C | INV_LINE_ID | The original invoice ID. |
| CM-R | Sales order based: SO_LINE_IDInvoice based: INV_LINE_ID | Either the original SO line ID or the original invoice line ID. |
| CM-RO | SO_LINE_ID | The original SO line ID. |
| PORD | SO_LINE_ID | The original SO line ID. |
| RORD | SO_LINE_ID | The original SO line ID. |

## Impact of transaction value

The transaction value (EXT\_SLL\_PRC) changes from different transaction types have different impacts on the accounting entries and on different fields of the SO line.

The following table explains whether the transaction value change of each transaction type can influence the accounting entries or the field values of the SO line. The first row indicates the different transaction types. The first column lists the SO line fields that might be impacted and the accounting entries. Yes means the EXT\_SLL\_PRC value change of the indicated transaction type will have an impact on the current row.

Take the CM column for example. The values listed in this column indicate the EXT\_SLL\_PRC value change of the CM line will influence the Allocatable Ext Price and Contract Value of the SO line and also the accounting entries. However, it will not influence the Ext Sell Price, Ext List Price, and Return Flag of the SO line.

|  | SO | INV | CM | CM-C | CM-R | CM-RO | PORD | RORD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Allocatable Ext Price | Yes | Yes2 | Yes | Yes2 | Yes | No | Yes | Yes |
| Ext Sell Price | Yes | Yes2 | No | Yes2 | No | No | Yes | No |
| Ext List Price | Yes | Yes2 | No | Yes2 | Yes | No | No | No |
| Contract Value | Yes | Yes2 | Yes | Yes2 | Yes | No | Yes | Yes |
| Return flag | No | No | No | No | Yes | No | No | No |
| Accounting entries | Yes1 | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Notes:The EXT_SLL_PRC change of the SO line will influence the accounting entries only when the SO line has been recognized.The field will be influenced only when invoice overage exists. |  |  |  |  |  |  |  |  |
