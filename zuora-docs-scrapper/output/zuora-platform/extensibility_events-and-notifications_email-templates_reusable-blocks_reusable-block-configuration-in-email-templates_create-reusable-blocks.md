---
title: "Create reusable blocks"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/email-templates/reusable-blocks/reusable-block-configuration-in-email-templates/create-reusable-blocks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:05.881Z"
---

# Create reusable blocks

Learn how to create reusable blocks for common elements in email notifications.

1.  Navigate to in the left navigation menu. The Setup Profiles, Notifications and Email Templates page opens.
2.  Click the Email Templates tab.
3.  Click the Reusable Blocks sub-tab.

    Figure 1.

    ![The Reusable Blocks sub-tab in the Email Templates tab.](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e29732ea-0243-472d-a2c2-4b0923f6f733?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyOTczMmVhLTAyNDMtNDcyZC1hMmMyLTRiMDkyM2Y2ZjczMyIsImV4cCI6MTc2NjY0MDM2NCwianRpIjoiNWE1NzlhN2IwMmZiNGFjMGFiNThlYzY3ZjBjMzEyNjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oRH5hcuQ-AAjWEVuw0XOy1a7L5hAC_pl38i53rDr01s)

4.  In the upper right of the Reusable Blocks section, click \+ Add New Block. The Create Reusable Block dialog opens.
5.  Specify the following information:

    -   Name: The name of the reusable block. The value must be unique across all blocks.

    -   Block Number: The number of the reusable block. The value must be unique across all blocks. A unique value is populated automatically, but you can modify it as needed.

    -   Category: Select a category for the reusable block. The following values are supported:

        -   Headers

        -   Footers

        -   Other

    -   Tag(s): Enter comma-separated tags for the reusable block. Tags help you quickly locate blocks when editing email templates in the UI by using the tag filter.

    -   Active: Turn on this toggle to activate the reusable block. Only active blocks can be embedded into email templates.


6.  Edit the content of the reusable block using the same process as editing email template bodies. For more information, see [Specify email subject and body](/zuora-platform/extensibility/events-and-notifications/email-templates/create-an-email-template/specify-email-subject-and-body). You cannot use merge fields in reusable blocks because they are intended for branding elements and do not have the context of events and objects.
7.  Click Save.
