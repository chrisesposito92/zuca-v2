---
title: "Payment Run data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-run-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:00.293Z"
---

# Payment Run data source

Data source to export payment run data

Use this data source to export payment run data, such as the number of credit balance adjustments, number of payments, payment run number, status, and key dates. Each payment run represents one row in the export.

Note:

Zuora recommends always appending Payment.Source = 'PaymentRun' to the DataSource/Data Query if you want to query a Payment using a Payment Run Number. Compared to simply filtering by Payment Run Number, this will result in faster output.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Payment Run as the data source.

## Data source details

The following sections provide data source details.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Payment Run | Payment runs that are used to collect payments using electronic payment methods, like credit cards or ACH. It includes the following fields:Created By IDCreated DateEnd DateExecuted DateIDNumber of Credit Balance Adjustments (The number of Credit Balance Adjustments that have been created. If the Invoice Settlement feature is enabled in your tenant, the value of this field is the number of Credit Balance Adjustments that were created before the Invoice Settlement feature was enabled.)Number of ErrorsNumber of InvoicesNumber of PaymentsNumber of UnprocessedPayment Run NumberStatusTarget DateUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
