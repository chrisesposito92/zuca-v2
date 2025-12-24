---
title: "amend()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:21.242Z"
---

# amend()

Use the amend() call to change a subscription, such as upgrading the subscription.

## Usage

-   Supported objects: [Amendment](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment)

-   Version availability: WSDL 28.0+

-   Asynchronous process: no


## Limits

Objects per call - The number of amendments supported in a single `amend` call are:

-   For WSDL versions 69+: Up to 10 amendments

-   For WSDL versions 42.0 through 68: Up to 3 amendments

-   For WSDL versions 29.0 through 41.0: Only 1 amendment


## Errors

If one of your `Amendment` objects fails in a single `amend()` call, then the entire call fails.

## Fields

The following fields are always required for this call:

`Amendment.Type`

-   `Amendment.Name`

-   `Amendment.SubscriptionId`


## Syntax and Arguments

![Amend call diagram for syntax and arguments](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/652de5bd-1b4e-4fdf-9b12-f85eb68d1aa7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1MmRlNWJkLTFiNGUtNGZkZi05YjEyLWY4NWViNjhkMWFhNyIsImV4cCI6MTc2NjY0MTA5OSwianRpIjoiN2QzNWJjYzlhYmJhNDk1MWJlOWZmOWNmZGI0MjhkMzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.p1xOJN3qwqRZ7qhHWb1_JGHxNgrGodm08G0YhNzaz3Q)

The amend() call uses the following items:

-   Call wrappers

    -   `AmendRequest`

    -   `AmendResult`

-   Containers

    -   `AmendOptions`

    -   `PreviewOptions`

    -   `ExternalPaymentOptions`

-   Object

    -   `Amendment`


## Call wrappers

Every amend() request requires an [AmendRequest](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest) wrapper. Every amend() call responds with an [AmendResult](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/response-amendresult) wrapper.
