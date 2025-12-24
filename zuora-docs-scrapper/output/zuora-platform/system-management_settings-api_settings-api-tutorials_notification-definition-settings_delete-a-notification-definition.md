---
title: "Delete a notification definition"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/notification-definition-settings/delete-a-notification-definition"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:34.334Z"
---

# Delete a notification definition

Learn how to delete a notification definition by the Settings API.

To delete a specific notification definition, ID of the notification definition is required as a path parameter. After a notification definition is deleted successfully, you will receive a 200 response with an empty response body.

This operation applies to notification definitions for standard, custom, and custom scheduled events.

HTTP request:

`DELETE https://rest.zuora.com/settings/communication-profiles/notifications/{id}`

Success response code: 200 Success
