---
title: "Ingestion source analysis"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/ingestion-source-analysis"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:56.127Z"
---

# Ingestion source analysis

There are different ingestion options available in Zuora Mediation. Each method is suitable for different use cases, based on latency, volume, infrastructure complexity, and operational needs.

| Criteria | API | Snowflake | Kafka | Amazon S3 |
| --- | --- | --- | --- | --- |
| Latency | Real-time | Batch | Near real-time | Batch |
| Use case fit | Low to medium volume, real-time | Customers already using Snowflake | High-volume streaming use cases | Scheduled large-volume ingestion |
| Ease of Integration | Easy to implement | Easy if Snowflake access exists | Requires Kafka setup | Easy (credentials and file format required) |
| Throughput Handling | Limited by API rate limits | High | Very high | Very high |
| Error Handling | Explicit API error messages | Retry via pipeline control | Requires consumer-side retry logic | Requires external retry or resume logic |
| Ordering Guarantees | Sequential per call | No guarantee | Configurable | No guarantee |
| Retry Support | Manual or client-managed | Yes, through scheduled queries | Yes, through offset management | Yes, via file re-upload |
| Zuora Support Level | Native support | Supported via connector | Supported (custom connector required) | Supported (native flow) |
| Operational Overhead | Low | Medium | High (requires infrastructure and monitoring) | Low |
| Security | OAuth or API key–based | IAM roles or network policies | SSL/TLS and ACLs | IAM and encryption supported |
| Typical use case | Real-time usage metering | Enterprises already using Snowflake | Telco- or IoT-style high event rates | B2B SaaS with daily usage dumps |
| Examples | Metered APIs, real-time billing | Monthly reports, analytics | Device metrics, log events | Usage reports, batch jobs |
| Use when | You require real-time ingestion for low to medium volume usage and prefer a simple integration experience. | Your client already stores usage data in Snowflake and prefers data warehouse–first workflows. | You operate high-throughput, event-driven systems and can manage the associated operational complexity. | You ingest usage data in scheduled batches, want a low-cost option, and can tolerate processing delays. |
