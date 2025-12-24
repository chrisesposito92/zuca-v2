---
title: "Rate Plan data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:38.782Z"
---

# Rate Plan data source

Data source to export summary data on rate plans that appear on subscriptions

## Overview

Use this data source to export summary data on rate plans that appear on subscriptions, including associated data on account, subscription, and product information from the product catalog.

## Objects available in the data source

![Rate_Plan_Data_Source.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49b25f25-2ef6-4961-830d-78357672d08c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5YjI1ZjI1LTJlZjYtNDk2MS04MzBkLTc4MzU3NjcyZDA4YyIsImV4cCI6MTc2NjY4ODQ1NywianRpIjoiZjA4NzZhNGVhZWQzNDFiMTlmYTZkNjUzZmQ5N2MwOTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qDVD2hkoA4fdnsHei8xmQPgUmBDy5C0bNCDYH4qBuWY)

| Object | Description |
| --- | --- |
| Account | The account number. |
| Amendment | The amendment that is tied to the rate plan, if applicable. |
| Bill To Contact | The contact of the entity/person to whom you bill for your product or service. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold. |
| Default Payment Method | The default payment method used to make payments. |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. Contains the following fields:Amendment Type: Note that a filter on this field using the unequal operator cannot return those Rate Plan records with a blank Amendment Type field.Created By IDCreated DateExternally Managed Plan ID: a text field. This field indicates the unique identifier of a rate plan purchased on a third-party store.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate planNameOriginal Rate Plan ID: the original ID of the subscription rate plan, which is the ID of the subscription rate plan in the version-1 subscriptionSubscription Owner ID: the subscription owner ID of the subscription that contains the rate planSubscription Rate Plan NumberUpdated By IDUpdated DateThe Amendment Type and Original Rate Plan ID fields are not available for single version subscriptions. |
| Subscription | The subscription the rate plan belongs to. |
| Subscription Status History | The status history information of a subscription. Contains the following fields:Created By ID - The ID of the user who creates the subscription.Created Date - The date when the subscription is created.End Date - The latest date that the status ends.ID - The unique identifier of the subscription.Sort Order - The chronological order of the subscription statuses.Start Date - The effective start date of the status history.Status - The status of the subscription.Subscription Number - The subscription number that uniquely identifies each subscription.Updated By ID - The ID of the user who last updates the subscription.Updated Date - The date when the subscription is last updated. |
| Subscription Version Amendment | The amendment that generated a particular version of a subscription.See below for more information. |

## Subscription Version Amendment

The RatePlan.Amendment Type and Amendment.Type fields show the type of the most recent amendment that touched a particular RatePlan. While there is no change to the meaning of these fields from before, note that the fields do not reflect Renewals, Cancellations, and Terms & Conditions Amendments. For example, if a subscription has been renewed, the RatePlan.Amendment Type field will continue to carry the Amendment Type value from before the renewal.

The SubscriptionVersionAmendment.Type field shows the type of the Amendment that most recently touched a particular Subscription version. This field will include all Amendment types, including Renewals, Cancellations, and Terms & Conditions.

Because the SubscriptionVersionAmendment.Type field is on a per-Subscription Version basis, it will have the same value for all RatePlans contained in a particular Subscription Version. This can result in some ambiguity. For example, if one of the RatePlans (on a subscription that has two RatePlans) is updated, the SubscriptionVersionAmendment.Type will show a value of UpdateProduct for both RatePlans. This can be disambiguated by comparing the values of SubscriptionVersionAmendment.Type and RatePlan.Amendment Type . A match indicates that the Amendment affected that particular RatePlan and a mis-match indicates that the RatePlan was not affected.

## Using the Export ZOQL to export subscription data

You can use the `SubscriptionVersionAmendment` object to export the Renewal or Terms and Conditions amendments from the Rate Plan data source object, in addition to the other amendment types that are already available. For example, you can use the following Export ZOQL query:

select SubscriptionVersionAmendment.id, SubscriptionVersionAmendment.type from RatePlan \[where Account.Name = 'ACCOUNT\_NAME'\]
