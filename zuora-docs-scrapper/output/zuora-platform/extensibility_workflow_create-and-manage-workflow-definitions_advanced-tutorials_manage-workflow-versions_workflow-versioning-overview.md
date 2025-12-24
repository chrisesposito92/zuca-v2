---
title: "Workflow versioning overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/workflow-versioning-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:58.576Z"
---

# Workflow versioning overview

An introduction of the versions of a workflow definition.

You can view the versions of a workflow definition on the Versions tab. Click a workflow to open it, and then click the Versions tab. The information for each version is displayed in a table.

Workflow versions are either in the active or inactive status, which is indicated in the Version Status field.

-   Active - The active version is loaded by default on the Workflow tab when you open this workflow. The active version cannot be edited. It can be run manually, with event triggers, or on schedule. It is indicated with an Active label in the workflow definition name. Only one version can be set as the active version for a workflow definition.

-   Inactive - The inactive version can only be accessed on the Versions tab for a workflow. The inactive version can be edited and run manually as a development version for test. The Workflow Name and Workflow Triggers fields on the Settings tab for the inactive version are not editable. Except for the active version, all other versions of a workflow definition are inactive versions. It is indicated with an Inactive label in the workflow version name.


Note:

-   The first version created with the workflow definition is always inactive.

-   The Last Run Date for a workflow is determined by its versions. If the active workflow version has a recorded last run, its UTC time is used. If the active version has no recorded run, the UTC time from the inactive version's last run is used instead. If neither version has a recorded run, the Last Run Date will be blank.


![Workflow version page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/81a2d314-faa7-49fd-920e-210071f51024?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgxYTJkMzE0LWZhYTctNDlmZC05MjBlLTIxMDA3MWY1MTAyNCIsImV4cCI6MTc2NjY0MDcxNiwianRpIjoiNmJlMWUzM2Y1MmE3NDlmM2E1N2RhNmRjOGRjYzgwZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4WxRQYeOsmt1W3ITSkMcvcxyg5qmcEkP0diuob3nJsU)

The following actions are available for each version. Click the menu icon to access these actions.

-   Run - Manually run the selected workflow version.

-   Edit - Open and edit the selected version for the workflow definition. The active version is not editable.

-   Export - Export the logic and configurations of a selected version of workflow as a JSON file. See [Export a specific version of a workflow](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/export-a-specific-version-of-a-workflow-definition) for details.

-   Metrics - Display the task and workflow usage metrics for the selected version.

-   Set Active - Set the selected version as the active version. See [Set a workflow version as the active version](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/set-a-workflow-version-as-the-active-version) for details.

-   Delete Previous Versions - Delete the previous versions prior to the selected version. See [Delete workflow versions](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/delete-workflow-versions) for details.

-   Delete - Delete the selected workflow version. The active version cannot be deleted. See [Delete workflow versions](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/delete-workflow-versions) for details.
