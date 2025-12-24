---
title: "Workflow maintenance settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/workflow-maintenance-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:27.835Z"
---

# Workflow maintenance settings

To ensure the efficiency and performance of your workflows, you need to perform some maintenance actions to your Workflow instance.

The following maintenance utilities are available in the Settings tab of the Workflow home page:

-   Clear Personal Preferences - Clear user preferences such as column widths, filters, and order. Additionally, using this button while experiencing any UI glitches may help resolve issues. This option only applies to the user's browser.

-   Refresh Cache - Clears all cached Zuora and SFDC information, including available custom fields, objects, object fields, and API operations. By default, the cache is refreshed automatically every 24 hours.

-   Pause / Resume Processing - Pauses or resumes the processing of workflows. Use this action when you want to edit a running workflow that does not complete soon.

-   Cleanup Data - Deletes workflows that have been completed or stopped for a specific period. The available options are: For the task pending on approval, if it is not approved/rejected in 90 days, it will be marked as failed to approve/disapprove and the workflow will enter into the cleanup process.

    -   Older than 1 Week

    -   Older than 1 Month

    -   Older than 3 Months

    -   Older than 6 Months

-   Login & SMTP Credentials - Update/add credentials workflow uses or SMTP credentials for outbound emails.
