---
title: "Field Mappings between Zuora and Anrok"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/anrok-tax-connector/field-mappings-between-zuora-and-anrok"
product: "zuora-billing"
scraped_at: "2026-02-20T17:29:01.786Z"
---

# Field Mappings between Zuora and Anrok

This section describes how Zuora Billing integrates with Anrok APIs and how request and response fields are mapped between Zuora and Anrok during tax calculation.

## Zuora Billing Operations and Anrok APIs

Zuora Billing integrates with Anrok through Anrok's Zuora-specific API endpoint:

[https://api.anrok.com/integrations/zuora/api](https://api.anrok.com/integrations/zuora/api)

All requests are sent as HTTP requests with JSON payloads. Request and response structures align with Anrok’s public API documentation.

Zuora integrates with the following Anrok APIs:

-   /v1/seller/transactions/createEphemeral

-   /v1/seller/transactions/createOrUpdate

-   /v1/seller/transactions/id:{transactionId}/void

-   /v1/validate

    Note:

    The /v1/seller/transactions/createNegation endpoint is not supported.
