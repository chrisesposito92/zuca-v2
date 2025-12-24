---
title: "Journal Entry Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/journal-entry-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:31.539Z"
---

# Journal Entry Item data source

Data source to export journal entry data

Use this data source to export journal entry data.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Journal Entry Item as the data source.

## Data source diagram

This diagram illustrates the hierarchical association between the base Journal Entry Item object and related (joined) Zuora objects.

![Journal Entry Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0360edc0-9f52-47a3-9460-849881c37378?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAzNjBlZGMwLTlmNTItNDdhMy05NDYwLTg0OTg4MWMzNzM3OCIsImV4cCI6MTc2NjY4ODI2OSwianRpIjoiNWJiNWJjNmVlMDA3NGI4ZWE0ZDMxMTY5NGQ5MTZlMWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5p1JYjReZVvLpDWe9KrsrNFf6SqikMf2m3pFwzflVX8)

## Data source detail

The following sections provide data source details.

## Base object description

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora object | Description |
| --- | --- |
| Journal Entry Item | This is the base Zuora object for the Journal Entry Item data source export and includes the following fields:AmountCreated By IDCreated DateCurrencyIDTypeUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora object | Description |
| --- | --- |
| Accounting Code | Categorizes Zuora transactions for accounting purposes, such as Account Receivables and Account Payables. Includes the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesPriceStatusTypeUpdated By IDUpdated Date[custom field] |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated Date |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated Date |
