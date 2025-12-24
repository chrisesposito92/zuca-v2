---
title: "Connection configuration references"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor/connection-configuration-references"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:07.733Z"
---

# Connection configuration references

References for configuring HTTP connections, including setup, request handling, and authentication types.

## Connection configuration

Defines the base setup for the external HTTP service.

| Field | Description |
| --- | --- |
| Base URL | The API endpoint for all requests |
| Authentication | API key, token, or credentials (stored securely) |
| Common Headers | Headers applied to all requests |

## HTTP request configuration

Defines how the request is sent to the target API.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| httpMethod | String | Yes | HTTP method (GET & POST) |
| urlPath | String | No | Path appended to base URL |
| body | String | No | Request body (supports template variables) |
| headers | List | No | Additional headers |
| parameters | List | No | Query parameters |
| retries | Integer | No | Number of retry attempts (default: 0) |
| timeoutInMillis | Integer | No | Timeout (default: 30000 ms, max: 180000 ms) |

Template Variables

You can dynamically reference values from events or secrets using the `${}` syntax.

| Variable | Example | Description |
| --- | --- | --- |
| ${event.customerId} | /customers/${event.customerId} | Pulls value from input event |
| ${secrets.apiKey} | "Bearer ${secrets.apiKey}" | Inserts secure API key from secrets |

Example

{ "urlPath": "/customers/${event.customerId}", "headers": \[ { "key": "Authorization", "value": "Bearer ${secrets.apiKey}" } \] }

## HTTP output configuration

Controls how response data is added to the output event.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| Pass on event in case of error | Boolean | false | Continue pipeline execution even if the HTTP call fails |
| Fields To Append | List | - | Maps response JSON fields to output event fields |

Example

"responseToOutputMapper": \[ { "field": "customerName", "jsonPath": "$.name" }, { "field": "customerTier", "jsonPath": "$.tier" } \]

## Supported authentication types

Zuora currently supports the following authentication types for HTTP connections:

| Parameter | Description |
| --- | --- |
| Basic Auth | Uses a username and password encoded in the HTTP header |
| Header-based Auth | Custom authentication key/value pair added to request headers |
| Bearer Token Auth | Uses a bearer token (example: Authorization: Bearer <token>) |
| No Auth | Sends requests without authentication (for open/public APIs) |
| Internal Zuora Auth | Used for secure calls between Zuora services within the same tenant |
