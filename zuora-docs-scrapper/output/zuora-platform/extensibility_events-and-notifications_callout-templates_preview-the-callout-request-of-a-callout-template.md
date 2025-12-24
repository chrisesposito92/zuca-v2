---
title: "Preview the callout request of a callout template"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/callout-templates/preview-the-callout-request-of-a-callout-template"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:23.837Z"
---

# Preview the callout request of a callout template

Learn how to specify an object to preview the callout request of a callout template.

1.  When creating a callout template, on the Create Callout Template page, specify an object ID in the Object ID field in the Request Preview section. This must be an ID of the object that corresponds to the callout template’s related event. For example, if the related event is Account Created, this must be an account ID. Otherwise, no merge field will be replaced. Note that Zuora only replaces advanced and data source merge fields in the request URL, request body, and custom callout headers. You cannot preview merge fields that are not from the base object or associated objects of the callout template. For example, System Health merge fields or system merge fields are not supported for preview.
2.  Click Preview.
3.  Verify the displayed callout request. The following is an example:

    C

    Figure 1.

    ![The displayed callout request details when previewing a callout template](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0484444d-3975-4bf2-80f7-5d936e09a896?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA0ODQ0NDRkLTM5NzUtNGJmMi04MGY3LTVkOTM2ZTA5YTg5NiIsImV4cCI6MTc2NjY0MDM4MSwianRpIjoiZjIyMmI0NzZhM2M1NGU1ZDllZDljOGJkMWQ0NjRlNmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.AZjVM_nUfEC7nUYKgGLQDqSNDDpRQU0w3LtYEYe2PHw)

4.  If the information displayed is not as expected, review and update the configuration of the request URL, request body, or custom callout headers.
