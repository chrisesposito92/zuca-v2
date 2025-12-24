---
title: "Download Center"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/audit-trail-for-meter-errors/download-center"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:28.115Z"
---

# Download Center

All large error exports are visible in the centralized Download Center, which lets you monitor export jobs and download files when they are ready.

To access Download Center, navigate to . In the Actions column for a run, click View Data Exports.

Alternatively, from the Meters landing page, select View Data Exports from the actions menu.

Each export job entry displays:

-   Status – The current state of the export job, such as Pending, In Progress, Completed, or Failed.

-   Session ID – The session identifier associated with this export job (for example, `R-00005787`).

-   Run ID – The identifier of the meter run that generated the export (clickable to open the run details, if available).

-   Time Frame – The time window covered by the export.

-   Count of Records – The total number of rows included in the exported file.

-   Exported At – The time stamp indicating when the export file was produced.

-   Actions – A download control that appears when the job is in Completed status.


Exported files remain available in the Download Center for 90 days. After that, expired exports are no longer available for download.
