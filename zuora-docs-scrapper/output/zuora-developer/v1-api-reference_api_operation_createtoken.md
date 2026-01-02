---
title: "CreateToken"
url: "https://developer.zuora.com/v1-api-reference/api/operation/createToken/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:46:51.916Z"
---

## Create an OAuth token

Creates a bearer token that enables an OAuth client to authenticate with the Zuora REST API. The OAuth client must have been created using the Zuora UI. See [Authentication](https://developer.zuora.com/rest-api/general-concepts/authentication/) for more information.

**Note:** When using this operation, do not set any authentication headers such as `Authorization`, `apiAccessKeyId`, or `apiSecretAccessKey`.

You should not use this operation to generate a large number of bearer tokens in a short period of time; each token should be used until it expires. If you receive a 429 Too Many Requests response when using this operation, reduce the frequency of requests. This endpoint is rate limited by IP address.

For the rate limit information of authentication, see [Rate and concurrent request limits](https://developer.zuora.com/rest-api/general-concepts/rate-concurrency-limits/).

Request

##### header Parameters

| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| --- | --- |
| Zuora-Entity-Ids | string <uuid>An entity ID if you have Multi-entity enabled.The value must be a 36-character UUID that contains hyphens(-). If your entity ID is not a valid UUID, convert it to a valid UUID before specifying this parameter.Example: 11e643f4-a3ee-8bad-b061-0025904c756d |

##### Request Body schema: application/x-www-form-urlencoded
required

| client_idrequired | string = 36 charactersThe Client ID of the OAuth client. |
| --- | --- |
| client_secretrequired | string <= 42 charactersThe Client Secret that was displayed when the OAuth client was created. |
| grant_typerequired | stringThe OAuth grant type that will be used to generate the token. The value of this parameter must be client_credentials.Value: "client_credentials" |

Responses

200

OK

429

Too Many Requests

post/oauth/token

Request samples

-   Payload
-   Curl

application/x-www-form-urlencoded

Copy

client\_id\=stringstringstringstringstringstring&client\_secret\=string&grant\_type\=client\_credentials

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "access_token": "c652cbc0ea384b9f81856a93a2a74538",

-   "expires_in": 3599,

-   "jti": "c652cbc0ea384b9f81856a93a2a74539",

-   "scope": "user.7c4d5433dc234c369a01b9719ecd059f entity.1a2b7a37-3e7d-4cb3-b0e2-883de9e766cc entity.c92ed977-510c-4c48-9b51-8d5e848671e9 service.echo.read tenant.19",

-   "token_type": "bearer"


}`
