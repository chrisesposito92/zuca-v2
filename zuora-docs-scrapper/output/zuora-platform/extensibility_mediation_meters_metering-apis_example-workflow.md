---
title: "Example workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/example-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:45.812Z"
---

# Example workflow

An example of how these APIs work together.

1.  The meter run is completed (or fails) and a status-change notification is triggered.

2.  Your automation calls the Retrieve summary data API to understand high-level results:

    -   Was failure partial or full?

    -   Which operator and error codes are involved?

3.  If deeper analysis is needed, you can call the Retrieve audit trail entries API to filter the results by failing session ID and operator and to pull records to debug or feed into a remediation flow.
4.  For bulk offline analysis:

    -   Call the Create audit trail export job API to filter by time window, run type, status.

    -   Poll using the Retrieve list of export jobs API until the status is FINISHED.

    -   For each file in the fileList, call the Retrieve presigned download URL API and move the file into your warehouse or analytics system.

5.  The following actions can be configured based on the results:
    -   Automatically retry only impacted records.

    -   Alert relevant teams based on the operator or error code.

    -   Enrich run-monitoring dashboards and periodic health reports.
