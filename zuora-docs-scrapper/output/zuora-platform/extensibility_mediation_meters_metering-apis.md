---
title: "Metering APIs"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:30.491Z"
---

# Metering APIs

The Metering APIs provide insights into success/failure metrics, record-level details, and guidance for next steps, supporting backend integration and data analysis.

The APIs for metering/rating runs are designed to answer three questions:

-   What happened? High-level success/failure metrics, per operator, per session, per error code.

-   Why did it happen? Record-level details: which records failed, under which operator, with what payload and error.

-   What should I do next?Automatically decide whether to retry, re-mediate, alert, or export data for deeper analysis.


You can use the APIs directly in your backend, in integration workflows (iPaaS tools), or to provide inputs to internal dashboards and observability systems.

For detailed API documentation and specifications, see the [Zuora API Reference](https://developer.zuora.com/v1-api-reference/api/tag/Meters/).
