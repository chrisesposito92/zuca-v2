---
title: "Audit Trail for meter runs"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/audit-trail-for-meter-runs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:20.172Z"
---

# Audit Trail for meter runs

The audit trail for meter runs provides detailed logs of changes, segregated into live and test runs, accessible under the Audit Trail>Runs section.

The audit trail provides a list of recorded logs. Each entry contains a record of the changes to the usage meter. For a meter run, the audit trails are segregated to display data for live runs and test runs.

You can access this information under Audit Trail > Runs. Click on the Live or Test tabs to view the audit trails.

Each entry represents a specific action or event and displays the following information:

| Field | Description |
| --- | --- |
| Under the Live tab | Audit trails for the live meters are listed based on the session ID. |
| Under the Test tab | Audit trails for the test meters are listed based on the test ID and test data. |
| Start Time | Start time of the meter run session. |
| End Time | End time of the meter run session. |
| Ingestion Total | Count of ingested data into the meters. |
| Errors | Count of errors during the session. |
| Actions | For live runs - Downloadable report is availableFor test runs - Downloadable test data is available |

You can click on a test ID or session ID to see the details of the run. Click on a particular meter component to see detailed information. The Operator ID is displayed for each operator node, for both current meters and historic runs. You can copy these Operator IDs for use with error APIs and other integrations that require them. Click the View Configurations button to see the full operator‑level meter configuration, for historic meter runs. This makes it easier to inspect and troubleshoot past mediation runs.
