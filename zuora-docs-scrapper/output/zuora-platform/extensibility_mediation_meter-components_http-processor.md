---
title: "HTTP processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/http-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:02.727Z"
---

# HTTP processor

The HTTP processor in Zuora Mediation enables real-time data enrichment by calling external APIs within a mediation flow, enhancing event data for accurate billing and processing.

The HTTP Operator enables your mediation pipelines to connect with external systems using HTTP or HTTPS requests. It allows you to enrich, validate, and integrate data with third-party REST APIs directly within your pipeline. You can use it to enrich or validate data mid-pipeline.

Use Case Example: Enrich usage records with customer data, validate events with external APIs, or send notifications to a webhook.

Note: The HTTP processor is currently in the Early Availability phase. Please contact your Zuora account representative to enable this feature.

The HTTP processor sends a HTTP request to an API, gets the response and uses that response to modify or enrich the event before passing it downstream.

## Key features

-   Dynamic Request Building: Construct URLs, headers, and bodies with template variables.

-   Flexible Response Mapping: Extract and map API responses using JSONPath.

-   Retry & Timeout Controls: Define limits for performance and reliability.

-   Asynchronous Execution: Improve throughput with concurrent HTTP calls.

-   Secure Secrets Management : Safely use stored API keys and tokens.

-   Built-in Error Handling: Control how failures affect pipeline flow.
