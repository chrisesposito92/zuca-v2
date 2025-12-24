---
title: "Payment Method Update data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-method-update-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:49.955Z"
---

# Payment Method Update data source

Know about the Payment Method Update data source

## Overview

The Payment Method Update data source includes the Updater Detail base objects and all other PMU record information for updating default payment methods, adding new payment methods and keeping track of which payment methods were sent to the updater service provider in a batch. Records such as: updating status, response code, response message, transaction log, original credit card information, new credit card information, and much more are included.

## Objects available in the data source

![Diagram of the Payment Method Updater Base Object and Joined Objects](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bf114dfd-621b-4c39-8b66-ee7df23acbbe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJmMTE0ZGZkLTYyMWItNGMzOS04YjY2LWVlN2RmMjNhY2JiZSIsImV4cCI6MTc2NjY4ODQwOSwianRpIjoiYWY5MTIxM2E5MmMzNGU0OGIyOTg1OTU5NmNmNWU2NDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bOnHmzHZzkuiNoMApr6ODjUYYwd-tIGD9bw65pDRYww)

| Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Payment Method Update | Includes payment method updating information, such as: updating status, response code, response message, transaction log, original credit card information, new credit card information, and more. Contains the following fields:Billing Account IDCreated By IDCreated DateCredit Card Expiration MonthCredit Card Expiration YearCredit Card Number MaskedCredit Card TypeIDIs Payment Method UpdatedNew Credit Card Expiration MonthNew Credit Card Expiration YearNew Credit Card Number MaskedNew Credit Card TypeRecord IDRetrieve Request Transaction LogRetrieve Response CodeRetrieve Response MessageRetrieve Response Transaction LogStatusSubmit Request Transaction LogSubmit Response CodeSubmit Response MessageSubmit Response Transaction LogSubmitted Response TimeTransaction IDUpdate TypeUpdated By IDUpdated DateSource TypeBatch: Indicates the updating information is from the Payment Method Updater service.RTAU: Indicates the updating information is from the Real Time Account Updater service.Gateway TypePayment IdPayment Transaction Log IdError CodeError Message |
| New Payment Method | Same as Payment Method. A new account number is available and a new payment method will be created in Zuora and set as the default payment method. The new account number may also include new expiration date. |
| Payment Method | An object that stores information about payment method, such as a credit card, ACH or PayPal. |
| Updater Batch | Includes payment methods which are sent to the updater service provider as a batch. Information includes batch status, response code, message, and others. Contains the following fields:Batch NumberBatch Transaction IDCompleted TimeCreated By IDCreated DateIDInternal StatusPost DateRequest IDRetrieve Response CodeRetrieve Response MessageStatusSubmit Response CodeSubmit Response MessageSubmitted TimeSubmitting TimeUpdated By IDUpdated DateUpdater Account IDUpdater Gateway TypeUpdater Request ID |
