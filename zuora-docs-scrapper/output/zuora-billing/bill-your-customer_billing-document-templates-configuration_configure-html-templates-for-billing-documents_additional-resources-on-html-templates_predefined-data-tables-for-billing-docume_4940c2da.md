---
title: "Transactions table"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/additional-resources-on-html-templates/predefined-data-tables-for-billing-documents/transactions-table"
product: "zuora-billing"
scraped_at: "2025-12-24T05:44:27.672Z"
---

# Transactions table

The Transactions table displays predefined transaction details in HTML invoice templates, including sorting, grouping, and filtering configurations.

By dragging the Transactions component from the Content tab into an HTML invoice template, you can see a predefined Transactions table displayed in the template.

-   If you have the Invoice Settlement feature enabled, information about Credit Memos and Payments are displayed in the Transactions table on generated PDF files.

-   If you have the Invoice Settlement feature disabled, information about Payments, Refunds, Invoice Adjustments, Invoice Item Adjustments, and Credit Balance Adjustments are displayed in the Transactions table on generated PDF files.


The following table lists the details of the predefined Transactions table for invoices.

| Column header | Description | Default display |
| --- | --- | --- |
| Transaction Type | The type of the transaction. | Yes |
| Transaction Date | The date of the transaction. | Yes |
| Transaction Number | The number of the transaction. | Yes |
| Description | The description of the transaction. | Yes |
| Payment Method Type | The type of the payment method associated with the transaction. | Yes |
| Payment Method Number | The number of the payment method associated with the transaction. | Yes |
| Applied Amount | The amount of this transaction applied to invoices. | Yes |

By default, this table has a sorting configuration, and the following list demonstrates the descriptions of predefined fields in the configuration:

-   Sorting configuration in the Sort By section

    -   `TransactionDate` : sorts records in the data table by transaction date in ascending order.

    -   `TransactionNumber` : sorts records in the data table by transaction number in ascending order.


You can add, delete, and edit the fields for sorting, grouping, and filtering configurations as needed. For example, you can customize the grouping configuration, which does not have predefined fields in Transactions tables, by the following actions in the Group By section:

-   Click Add to add a field used for grouping.

-   Click the Delete icon in the corresponding row to remove the field used for grouping.

-   Click the Edit icon in the corresponding row to change the field used for grouping.


Note that you can configure a maximum of three fields for each of sorting and grouping configurations. For the filtering configuration, you can configure multiple filters based on the available fields as needed.
