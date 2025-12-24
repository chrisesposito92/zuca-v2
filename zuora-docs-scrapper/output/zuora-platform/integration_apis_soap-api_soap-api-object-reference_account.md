---
title: "Account"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account"
product: "zuora-platform"
scraped_at: "2025-12-24T05:39:37.830Z"
---

# Account

This SOAP API reference describes the Account object and its fields.

An account is a customer account that collects all of the critical information about the customer, such as contact information, payment terms, and payment methods.

## Account object

The Account object represents an individual customer account. Each Account object includes everything Zuora needs to bill and collect, such as addresses, payment methods, and payment terms.

Zuora uses the Account object to track all subscriptions, usage, and transactions for each customer account. Each account is a source of a recurring invoice stream.

Every subscription must be associated with an account. At least one active account must exist before any subscriptions can be created.

## Supported calls

You can use this object with the following calls:

-   create()

-   delete()

-   query()

-   subscribe()

-   update()


## Walkthroughs and use cases

You can see examples here:

-   [Creating an active account with the create() call](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account/example-create-a-customer-account)
