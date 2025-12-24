---
title: "Enrichment processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/enrichment-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:26.768Z"
---

# Enrichment processor

The Enrichment processor in Zuora Mediation adds data to events using methods based on product, account, or identifier attributes.

The Enrichment processor in Zuora Mediation adds data, such as the subscription ID, charge number, or unit of measure to the event, based on selected attributes on the event.

Zuora offers the following methods to enrich events with subscription and charge metadata:

## Enrich events using Product or Account data

You can use this method to enable enrichment based on standard Zuora metadata such as product catalog, accounts, subscriptions, and charges. A prefetch mechanism retrieves all relevant data for an event. By default, this method includes all charge types, including usage, recurring, and one-time charges. It also includes all charge segments, meaning even outdated or expired segments may be matched unless filtered out.

Use the available filters to narrow down the results. For example, to limit results to usage charges or use the event time to pick the appropriate charge segment. This method is best suited for cases that require full context around billing, rating, or the lifecycle of the subscription.

## Enrich events using Account Number and Charge Name or Subscription ID

You can use this method to enrich events by performing a lookup based on identifiers such as account number, charge name, or subscription ID. It is a lightweight approach designed for speed and simplicity. The enrichment is limited to usage charges only; recurring and one-time charges are not considered

In this method, the configuration options are limited. Use this in cases where the event data already contains precise identifiers and the enrichment does not require complex logic or additional metadata.
