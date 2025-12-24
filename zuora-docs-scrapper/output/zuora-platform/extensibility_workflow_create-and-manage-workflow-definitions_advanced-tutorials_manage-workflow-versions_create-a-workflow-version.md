---
title: "Create a workflow version"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/advanced-tutorials/manage-workflow-versions/create-a-workflow-version"
product: "zuora-platform"
scraped_at: "2025-12-24T05:32:00.995Z"
---

# Create a workflow version

Learn how to create a new workflow version.

You can create a new version for a workflow definition based on the active version or by using an imported JSON file. When you create and edit the new version, the active version and the existing API integration of the workflow can still work properly.

1.  Open a workflow.
2.  Click the Versions tab to open it.
3.  Create a new version by using either of the following methods:

    -   At the upper right of the workflow details page, click the more icon, and then click Create New Version .

    -   On the Versions tab, click the plus icon at the upper right of the workflow version table, and then click Create New Version .


4.  In the New Workflow Version window, create the new version through either of the following ways:

    -   Create a new version based on the active version: After the new version is created, the definition and settings of the active version are cloned to the new version by default. You can continue to edit the new version.

        1.  On the General tab, enter a valid version number. The version number must be unique and in one of the following formats. The new version number must be greater than the existing highest version number.

            -   `integer`

            -   `integer.integer`

            -   `integer.integer.integer.`

        2.  (Optional) Enter any descriptions for this new version.

        3.  Click Create .

    -   Create a new version by using an imported JSON file:

        1.  On the General tab, enter a valid version number.

        2.  (Optional) Enter any descriptions for this new version.

        3.  On the Import JSON tab, paste the content of your JSON file or update the pre-loaded JSON file of the active version.

        4.  Click Create .



The newly created workflow version will always be in the Inactive status. Set it to Active when you complete the configuration.
