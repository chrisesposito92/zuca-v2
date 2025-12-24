---
title: "Retrieve audit trail export jobs API"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/retrieve-audit-trail-export-jobs-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:40.812Z"
---

# Retrieve audit trail export jobs API

This API lists the export jobs that you previously initiated.

The API provides the following information:

-   Job status. Examples: RUNNING, FINISHED.

-   When the export jobs were started and when they were completed.

-   How many records they produced.

-   Which files were generated (file keys / paths).


You can filter jobs by export type and session IDs. The API supports pagination (page, page size).

## Usage

-   Track long-running exports:

    -   Build a small dashboard or internal page where ops can see all export jobs and their statuses.

    -   Show when a job is still running vs when it is ready.

-   Orchestrate follow-up steps. Your automation can periodically check this API. When a given requestId is marked as FINISHED, the process can move on to download and process the exported file.

-   Maintain audit records:
    -   To identify the time periods or sessions that were exported.

    -   To determine if they were ERROR-only or SAMPLE.

    -   To find out thefiles that correspond to each job.
