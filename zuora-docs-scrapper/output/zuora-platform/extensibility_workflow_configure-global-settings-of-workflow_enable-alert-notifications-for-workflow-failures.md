---
title: "Enable alert notifications for workflow failures"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/enable-alert-notifications-for-workflow-failures"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:18.833Z"
---

# Enable alert notifications for workflow failures

Enable email notifications to get notifications for failures in all workflow instances or in a specific workflow.

You can enable email notifications upon the following situations for all workflow instances in the tenant or for a specific workflow:

-   Asynchronous task exhaustion - Sent when a task has exhausted allowable processes to complete.

-   DKIM verification failure - Sent when workflow email notifications bounce.

-   Rate limiting error - The workflow failed due to rate limiting issues.

-   Workflow threshold alert - Sent when a workflow has been inactivated due to prolonged errors or has reached allowable volume boundary.
