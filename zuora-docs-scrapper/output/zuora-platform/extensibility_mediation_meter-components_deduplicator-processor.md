---
title: "Deduplicator processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/deduplicator-processor"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:28.189Z"
---

# Deduplicator processor

The Deduplicator processor helps you prevent duplicate data from being processed in your Mediation pipeline. It ensures that only unique records flow through, based on a field or set of fields that you define as the uniqueness criteria.

Use the Deduplicator when an event source can produce duplicate records and you want to avoid double-counting, duplicate billing, or redundant downstream processing.

## How the Deduplicator processor works

The Deduplicator checks each incoming record against records it has already seen, using the fields that you select in the Uniqueness criteria:

-   If a record does not match any previously seen record within the TTL window, it is treated as unique and passes through normally.

-   If a record does match a previously seen record within the TTL window, it is treated as a duplicate and is either filtered out or marked as a duplicate, depending on the configuration.


The processor keeps track of recently seen records for a limited duration, called TTL (Time-To-Live). After the TTL period expires, the corresponding entries are removed from memory, and a new record with the same values is treated as unique again.

The Uniqueness criteria control how the Deduplicator identifies duplicates:

-   All Fields – Compares the entire record. Two records are considered duplicates only if every field matches.

-   Specific Fields – Compares only the fields that you select, such as accountNumber or an identifier field. Two records are considered duplicates if all of the selected fields have the same values.


Use All Fields only when records must match in every field to be considered duplicates. Use Specific Fields when a small set of fields (for example, account ID or invoice number) uniquely identifies the record, even if other fields differ.

The TTL (Time-To-Live) defines how long the Deduplicator remembers previously seen records. While a record is within the TTL window, a new record with the same uniqueness key is treated as a duplicate. After the TTL expires, the original record is forgotten, and a new record with the same key is treated as unique.

-   Streaming API data – Duplicates are recognized if they occur within 30 days of the original event. This is the current setting and cannot be extended beyond 30 days.

-   File-based data – Deduplication is scoped to each file individually. Duplicates are detected within a single file using your uniqueness criteria, but not across multiple uploads.


## Example: Deduplicate by account number

Uniqueness criteria: Specific Fields

Selected field: accountNumber

The first record with a given accountNumber is treated as unique and passes through. A second record with the same accountNumber that arrives within the TTL window is treated as a duplicate. A record with the same accountNumber that arrives after the TTL has expired is treated as unique again.
