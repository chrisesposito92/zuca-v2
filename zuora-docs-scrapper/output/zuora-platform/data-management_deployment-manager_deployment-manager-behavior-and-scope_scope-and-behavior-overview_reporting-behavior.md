---
title: "Reporting behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/reporting-behavior"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:55.578Z"
---

# Reporting behavior

This document outlines the reporting deployment scenarios and best practices for using Deployment Manager reports .

-   Deployment Manager supports reports that are stored within My Shared Reports.
-   The primary key for comparison in reporting is Report Name and Data Source
-   If the source folder structure exists in the target, but it hasn't been shared, the reports won't be migrated unless the customer manually shares that folder.
-   Reports located in other folders for e.g. My Reports will not be migrated.
-   Download CSV and history details of Reporting deployments is work in progress. We will be supporting them in the Deployment Manager.

Following are the reporting deployment scenarios:

When both the source and target have the same folder configuration

| Report Path | Source | Target | Post Deployment In Target Tenant |
| --- | --- | --- | --- |
| My Shared Reports/ Callout (Folder) | Y | Y | Callout Summaries report will be created in the target tenant with the path, My Shared Reports/ Callout/ Callout Summary Report |
| My Shared Reports/ Callout folder / Callout Summary Report | Y | N |  |

When the source includes a folder and report path definition, and the target tenant does not have the corresponding folder and report

| Report Path | Source | Target | Post Deployment in Target Tenant |
| --- | --- | --- | --- |
| My Shared Reports/ Collections | Y | N | Deployment Manager will create the folder 'Collections' and the report 'Dunnings' |
| My Shared Reports/ Collections/ Dunnings | Y | N |  |

Folder sharing behavior and best practice

-   If you share a parent folder, all its subfolders are shared automatically, maintaining the folder structure.
-   If you share a subfolder independently, it appears as a separate folder without hierarchy. If the parent is later shared, the subfolder will appear twice, once as part of the hierarchy and once as an individual shared folder.
-   As a best practice to maintain a clear folder structure and avoid duplicates, Zuora recommends sharing folders at the parent level instead of sharing subfolders separately.
