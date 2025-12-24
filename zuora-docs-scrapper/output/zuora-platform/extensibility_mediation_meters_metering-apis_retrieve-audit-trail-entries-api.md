---
title: "Retrieve audit trail entries API"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/retrieve-audit-trail-entries-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:35.493Z"
---

# Retrieve audit trail entries API

The audit trail entries API gives you detailed, record-level information about what happened during processing.

The API includes the following information:

-   The payload that was being processed.

-   The error message and error code (if any).

-   Which operator handled it (type, name, ID).

-   A trace ID / event ID that you can use to correlate across systems.


## Filters

-   Export type (example: only failed records)

-   Run type (DEBUG vs NORMAL)

-   Session ID

-   Operator ID

-   Time range

-   Pagination (page size and cursor)


## Usage

-   Debugging a specific run. After a run fails:

    -   Call the Summary API to see which operator and error codes are at fault.

    -   Then call the Audit Trail entries API, filtered by sessionId + operatorId + time range, to inspect the actual failing records.

-   Building automated remediation pipelines:

    -   Identify failed records and their payloads.

    -   Transform or clean the problematic fields.

    -   Re-submit those specific records to be reprocessed.

    -   Track them using traceId or eventId across your own system logs.

-   Detecting systemic vs isolated issues:
    -   If failures share the same error code and operator, it is most likely a configuration or logic problem.

    -   If failures are tied to a narrow range of payload values (example: specific region, product, or price), it is most likely a data-quality or edge-case issue.

-   Support and customer success workflows. Given a customer account ID or charge number (which appears in the payload), you can:
    -   Find related failures.

    -   Explain exactly what went wrong and when.

    -   Attach relevant audit trail data to tickets.
