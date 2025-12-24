---
title: "Connection configuration examples"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor/connection-configuration-examples"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:10.239Z"
---

# Connection configuration examples

Examples of connection configurations for customer enrichment and webhook sinks.

## Example 1: Customer Enrichment

Enrich pipeline data with customer information from an external API.

Input:

{ "customerId": "CUST-12345" }

Response:

{ "customerId": "CUST-12345", "customerName": "Acme Corporation", "customerTier": "premium" }

Configuration:

{ "httpRequestConfig": { "httpMethod": "GET", "urlPath": "/customers/${event.customerId}", "timeoutInMillis": 5000 }, "httpOutputConfig": { "responseToOutputMapper": \[ { "field": "customerName", "jsonPath": "$.name" }, { "field": "customerTier", "jsonPath": "$.tier" } \] } }

## Example 2: Webhook Sink

Send enriched events to an external webhook.

Configuration:

"httpRequestConfig": { "httpMethod": "POST", "urlPath": "/webhooks/usage-events", "body": "{\\"type\\": \\"usage\\", \\"data\\": ${event}}", "retries": 1 }, "httpOutputConfig": { "continueOnFailure": true }
