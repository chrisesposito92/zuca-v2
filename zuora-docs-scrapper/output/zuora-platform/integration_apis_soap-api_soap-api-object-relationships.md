---
title: "SOAP API object relationships"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-relationships"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:52.936Z"
---

# SOAP API object relationships

Explains the SOAP API object relationships.

The calls in the Zuora API are similar to verbs (they perform actions), and they perform actions upon the Zuora objects. The Zuora API objects, such as [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account) and [Subscription](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription), support the API calls, such as [subscribe()](/zuora-platform/integration/apis/soap-api/soap-api-calls/subscribe).

The objects provide essential information needed to create and maintain a subscription, such as the information needed to create an account, contact information for that account, methods of payment for that account, and information relating to the subscription for that account.

## Zuora SOAP API Object Relationships

The following illustration shows the relationships between the objects in the Zuora SOAP API.

This version of the SOAP object relationships diagram is not actively maintained. See Zuora Business Objects Relationship for the current version of the general [Zuora business object model](/basics/about-zuora/zuora-business-object-model).

Click diagram for a larger view.

![Zuora API Object Relationship Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7cdf6a57-9bc6-46cc-a7d4-4549854c9c83?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdjZGY2YTU3LTliYzYtNDZjYy1hN2Q0LTQ1NDk4NTRjOWM4MyIsImV4cCI6MTc2NjY0MTA3MSwianRpIjoiNTE0ZGVkZjkwODQ0NDk0MGEyYjkyMmFlMTBjOGE1MjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IZjC9GjeC0H3QC8Uehcb0NPTIs4Zt1wDAalX0cX2Mt4)

## Core data types

The following data types are used in various ways in applications created using this API.

## zObject

This is the base object from which all other objects are derived. See [zObject](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject) for more information.

zObject contributes additional fields to all Zuora objects. For information on the field types, see [Field types](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/field-types).

## ApiFault

This is the base fault object. See [Faults](/zuora-platform/integration/apis/soap-api/error-handling/faults) for more information.

## Error and ErrorCode

These are the error-handling objects. See [Error handling](/zuora-platform/integration/apis/soap-api/error-handling/error-handling-in-soap-api) for more information.
