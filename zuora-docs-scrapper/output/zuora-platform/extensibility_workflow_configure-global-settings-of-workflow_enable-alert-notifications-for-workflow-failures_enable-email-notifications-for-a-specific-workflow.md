---
title: "Enable email notifications for a specific workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/enable-alert-notifications-for-workflow-failures/enable-email-notifications-for-a-specific-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:21.500Z"
---

# Enable email notifications for a specific workflow

Learn how to enable email notifications for a specific workflow.

1.  Create a global constant (such as devOpsEmail) for the responsible party. When testing the workflow, assign your own email to this constant. When this workflow is ready to be deployed to Production, replace your email with the correct one. To learn how to create global constants, see [Configure global constants of Workflow](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/workflow/configure_global_workflow_settings/configure_global_constants_of_workflow.dita) .
2.  In the settings of the workflow, select Notify on failed tasks . ![Workflow email notification configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6ec471d4-f769-461c-a228-3e443a29212b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlYzQ3MWQ0LWY3NjktNDYxYy1hMjI4LTNlNDQzYTI5MjEyYiIsImV4cCI6MTc2NjY0MDY3OSwianRpIjoiZjhhYmY1ODdmYjFlNDJmMDg2NmJhOTdmODQ4MDI0N2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.W7hCi0Is1YgvAKZWHHzd13xdIpBWx476mCl89CLwHbE)
3.  If you want to ignore certain errors, enter one or multiple strings or regulation expressions to define the filtered-out error response. For the filtered-out error response, alert emails will not be sent to the distribution list specified in the workflow settings.
4.  Enter the global constant in the Email Addresses field.
5.  Click Update to save the settings.
