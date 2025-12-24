---
title: "Manage workflow versions"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:56.222Z"
---

# Manage workflow versions

Workflow versioning enables you to update a workflow at the version level instead of creating a new workflow from scratch.

You can better manage your workflows with the version control feature. You can switch between different versions with only a few clicks. When you create a new workflow version, the active version and the existing API integration can still work properly.

After you open a workflow page, a version list for the workflow definition is available on the Versions tab. You can open and view any version. You can set an active version as the current version for the workflow. You can create a new version based on the active version or by using an imported JSON file.

The workflow version starts from version 0.0.1 by default. The version number must be unique. A new version number must be greater than the existing highest version number.

You can retrieve the workflow version information in [Data Query](/zuora-platform/data/data-query/overview-of-data-query) with the Version field. All version changes are tracked and recorded in [Audit Trail](/zuora-platform/system-management/audit-trail/audit-trail-overview).

Note:

It's important to understand the difference between workflow definition status and workflow version status:

-   The status of workflow definitions indicates whether a definition is triggerable: Only active definition can be triggered.

-   The status of workflow versions indicates which workflow version will be run when a definition is triggered.
