---
title: "Notification: SMS"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notification-sms"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:43.709Z"
---

# Notification: SMS

This reference explains the Notification: SMS task.

The SMS task sends a text message to a specified phone number. You can specify multiple phone numbers, and the text messages will be sent to all the specified phone numbers.

## Task settings

The following screenshot shows the configuration of the SMS task:

![SMS task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/72c2544d-6c77-4189-93bb-d0c60760879e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcyYzI1NDRkLTZjNzctNDE4OS05M2JiLWQwYzYwNzYwODc5ZSIsImV4cCI6MTc2NjY0MTAwMSwianRpIjoiN2RhZTllZTYyZDNjNDQ4N2JiNTYyMDU4MzU4Mzg2MGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lxDYQnWxulkPWRoTWJ4epQT8t9Cog1b1mHTCDMMX7go)

-   Task name: Specify the name of the task.

-   Phone number: Type or select phone number from the data payload. For example, `BillToContact.MobilePhone` . You can specify multiple phone numbers, and the messages will be sent to all numbers.

-   SMS message: Enter the SMS message template. For example: Hello {{Data.BillToContact.FirstName}}, your recent payment for subscription {{Data.Subscription.Id}} has failed. Please update your payment method at https://www.sampleComp.com/account/123456/payment-methods-update to avoid service disruption.

-   Task tags (Optional): Specify a task tag that will be used for searching and filtering tasks via the UI or API.

-   Paths of data payload values to delete (Optional): You can delete data that is not needed to reduce task payload size and improve performance. The payload path is in the format of `Data.<objectName>` .
