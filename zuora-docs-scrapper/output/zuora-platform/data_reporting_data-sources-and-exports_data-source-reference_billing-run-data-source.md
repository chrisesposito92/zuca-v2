---
title: "Billing Run data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/billing-run-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:59.515Z"
---

# Billing Run data source

Data source to export bill runs and statistics about the bill runs

Use this data source to export bill runs and statistics about the bill runs, including the number of invoices and accounts generated, statuses, and key dates.

## Objects available in the data source

![Billing_Run_Data_Source.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3a9399ca-efc5-460f-b7a5-8b641e885562?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNhOTM5OWNhLWVmYzUtNDYwZi1iN2E1LThiNjQxZTg4NTU2MiIsImV4cCI6MTc2NjY4ODE3NywianRpIjoiODcyNTUzNjk0OTE5NDkxZGI0NjZhNjJlYzJjNmQ3OGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gj3HZ2tcQ4O05vuAVpI3QHSD0JZCjMyK_2RqTvvAtTM)

## Data source detail

The following sections provide data source details.

## Basic object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Billing Run | The billing run, the base object for this export. It includes the following fields:Billing Run NumberBilling Run TypeCreated By IDCreated DateEnd DateError MessageExecuted DateIDInvoice DateNameNumber Of AccountsNumber of Credit MemosNote: This field is only available if you have the Invoice Settlement feature enabled.Number Of InvoicesPosted DateStart DateStatusTarget DateTarget TypeTotal TimeThe total time when the billing run is completed, expressed in milliseconds. It does not contain the time for posting billing documents, including invoices, credit memos, and debit memos.Updated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
