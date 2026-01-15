---
title: "Deployment Manager known facts and limitations"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:56.387Z"
---

# Deployment Manager known facts and limitations

Overview of Deployment Manager's design behaviors and limitations.

Deployment Manager has the following behaviors by design concerning , Custom Objects, Notifications, Hosted Payment Pages, Accounting Period, Taxation, Custom Fields, Reporting, and General Facts.
Note: It is recommended that Notifications and Workflow be deployed as separate components without any other deployment components for best results.

## Deployment Manager system behavior

Deployment Manager provides role-based access and permission controls. It does not support the migration or cloning of usernames and passwords. Zuora recommends storing usernames and passwords safely or deleting them when they are obsolete to prevent unauthorized access or data exposure.
