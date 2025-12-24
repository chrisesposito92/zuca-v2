---
title: "Authentication"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/aqua-api-introduction/authentication"
product: "zuora-platform"
scraped_at: "2025-12-24T18:50:50.449Z"
---

# Authentication

Learn how to authenticate to the Zuora REST API using OAuth v2.0, including creating an OAuth client, generating a bearer token, and authenticating API requests.

Zuora recommends that you use OAuth v2.0 to authenticate to the REST API. Authenticating via OAuth requires the following steps:

1.  Create an OAuth client in the Zuora UI
2.  [Generate a bearer token](https://developer.zuora.com/v1-api-reference/api/operation/createToken/)
3.  Authenticate subsequent API requests by providing a valid bearer token in an HTTP header: `Authorization: Bearer {token}`

    If you have Zuora Multi-entity enabled and your bearer token is valid for more than one entity, use the `Zuora-Entity-Ids` header to specify which entity to perform each API request in. If your bearer token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set the `Zuora-Entity-Ids` header in your API calls.

    See [Authentication](https://developer.zuora.com/docs/guides/authentication/) for more information about how to authenticate to the REST API.
