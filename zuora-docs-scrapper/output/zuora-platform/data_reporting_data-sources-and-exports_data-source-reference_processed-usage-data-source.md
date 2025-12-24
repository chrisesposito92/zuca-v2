---
title: "Processed Usage data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/processed-usage-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:18.877Z"
---

# Processed Usage data source

Data source to export processed usage data

Use this data source to export processed usage data.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Processed Usage as the data source.

## Data source diagram

This diagram illustrates the hierarchical association between the Processed Usage object and related (joined) Zuora objects.

![Processed Usage data source](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/db23c7a3-2bc0-4a0b-9a21-2041b7ec884f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRiMjNjN2EzLTJiYzAtNGEwYi05YTIxLTIwNDFiN2VjODg0ZiIsImV4cCI6MTc2NjY4ODQzNiwianRpIjoiZmE0ZTc2MDljOGQ4NGU5M2FiZmMxNDA1Y2ViNDQyNTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8PSMPpgUnYj7a9_MaXezp3iqhmL9dU-RAJisah_M9vk)

## Base object description

| Zuora Object | Description |
| --- | --- |
| Processed Usage | This is the base Zuora object for the Processed Usage source export and includes the following fields:BillingPeriodStartDateBillingPeriodEndDateAmountCreatedByIdCreatedDateUpdatedByIdUpdatedDate |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The customer account information. |
| Amendment | The amendment that is tied to the rate plan charge, if applicable. |
| Bill To | The entity or person associated with the account to whom your product or service is billed. |
| Credit Memo | The credit memo associated with the processed usage.This object is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| Credit Memo Item | The credit memo item associated with the processed usage.This object is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Invoice Item | Represents one line item on the invoice. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. |
| Product Rate Plan | The rate plan coming from the product catalog. |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. |
| Rate Plan | Refers to the rate plan or pricing plan information associated the subscription. |
| Rate Plan Charge | The charge information associated with the subscription. |
| Sold To | The entity or person associated with the account to whom your product or service is sold. |
| Subscription | The subscription to which the rate plan is associated.Note that the subscription ID in the usage table is always from the first version of the subscription and will not change even if a new revision is created on the original subscription. |
| Usage | Usage record information. |
