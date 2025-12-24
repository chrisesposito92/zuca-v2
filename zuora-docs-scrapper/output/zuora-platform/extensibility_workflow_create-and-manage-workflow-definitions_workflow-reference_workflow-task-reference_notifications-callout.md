---
title: "Notifications: Callout"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:38.679Z"
---

# Notifications: Callout

This reference explains the Notifications: Callout task.

The callout task sends an HTTP request to a specified API endpoint. The data in the response can be used in downstream tasks of the workflow.

The callout task supports the following HTTP methods:

-   GET

-   POST

-   PUT

-   PATCH

-   DELETE

-   CONNECT

-   OPTIONS

-   TRACE


The data returned from a callout task is added to the workflow data payload. The data can be referenced in subsequent tasks with a Liquid statement in the following format:

{{Data.Callout.<Data\_Field>}}

The data will also be available for selection in data payload lists in subsequent tasks.

If a workflow contains multiple callout tasks, the returned data is stored as an array of records by default. A particular record can be referenced in the format of `Data.Callout[number].<Data_Field>` , where the number is the sequence of the record in the array. If you want the data from a downstream callout task to replace the data from an upstream callout task, select the Replace Payload option in the Response tab.

You can use the Swimlane to find out the workflow data payload that is fed into each task.

For example, you can use `Data.Callout[0].CATALOG` to reference the data field highlighted in this screen capture.

![Sample workflow callout payload](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fd0145fa-8287-4b55-af1f-4181d4643f0f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkMDE0NWZhLTgyODctNGI1NS1hZjFmLTQxODFkNDY0M2YwZiIsImV4cCI6MTc2NjY0MDk5NiwianRpIjoiMWFlMmYxMzQxMjM2NGM2N2I2MTA3N2Y2ZmRjMzZhOTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wROU8N3iZO7RTf2DwOWE8oIo7wJCEYnIHHy2Wy0EdXE)

Note that you cannot resend callout notifications created by workflow.

## Task use

You use the callout task to establish communication and transfer data between Zuora and other systems.

You can also use the callout task to perform operations that are only possible with Zuora APIs.

For example, you can create, update or delete multiple records of the same object in a single callout task. To do so, you need to perform a callout to the [object update](https://www.zuora.com/developer/api-references/api/operation/Action_POSTupdate?_gl=1*j97koe*_gcl_au*OTc0ODg5MzMyLjE3NjA1NTA1NTQ.*_ga*NzQzNDIyODkwLjE3NTI3OTM2OTI.*_ga_MY8CQ650DH*czE3NjIxOTY0OTkkbzE1NSRnMCR0MTc2MjE5NjQ5OSRqNjAkbDAkaDEwMTc2NjUyMjQ.) operation and include the array of records in the request body. You can use an iterate statement in Liquid to iterate the array in the request body.

Here is an example request body for updating the Notes field of multiple accounts in Zuora with the data in the payload.

{ "objects": \[ {% for account in Data.Account %} { "Id": "{{account.Id}}", "Notes":"{{account.Notes}}" }{% if forloop.last == false %} , {% endif %} {% endfor %} \], "type": "Account" }

You can create/update a “Notification: Callout” task in the following ways:

-   Create/update a task by selecting a template from the Select Callout to Zuora API dropdown list.

    1.  On the Headers tab, click the dropdown list under Select Callout to Zuora API .

    2.  Select the template from the list. You can enter a few letters in the text field and filter the template quickly.

    3.  After you select the template, information for API type, URL endpoint, available merge fields/arrays, authentication, and API validation options are preloaded. You can further complete the task configuration manually if needed.


-   Create/update a task by manually entering all the required fields.


## Headers

You can use the Zuora system constants or your own constants to refer to endpoints and credentials for Zuora and other systems. To learn about how to define a constant, see [Configure global constants of Workflow](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/workflow/configure_global_workflow_settings/configure_global_constants_of_workflow.dita). For the available Zuora system constants, see the following table.

You need to wrap constants with double curly brackets.

| Zuora Constants for Endpoints and Credentials | Description |
| --- | --- |
| Credentials.zuora.username | The username used in Workflow installation |
| Credentials.zuora.password | The password used in Workflow installation |
| Credentials.zuora.url | The SOAP API endpoint |
| Credentials.zuora.session | The session ID of the Workflow instance |
| Credentials.zuora.entity_id | The API entity ID of the Workflow instance |
| Credentials.zuora.rest_endpoint | The REST API endpoint: https://rest.zuora.com/v1/ |

You can set up a retry strategy for the callout task by specifying the "max retry count" and "window retry time (min)" fields.

Note:

Configurable retry is applicable for both Zuora APIs and external APIs. But when a retry is initiated due to Zuora API fails, e.g., row locking, Workflow will first run the user-configured retries. If the user-configured retries haven't succeeded, Workflow will continue to run a few additional retries.

To allow the logs of callouts sent via this task to be included in the Callout History report, check the Customer Notification History checkbox in the Headers tab. When this option is enabled, you must also specify the customer account ID to which the history will be attached. You can also optionally specify the ID of the object associated with this callout notification in the Zuora Object ID field. Note that there is no validation on the Zuora Object ID field. It is only used for informational metadata and reporting purposes.

To receive a valid response, you must set appropriate values for each field while configuring the callout. For example, the Body must be in valid JSON format if you specify JSON as the response header's Content-Type .

## Body

You can specify the request body of the callout task in one of the following ways:

-   form-data

-   raw

-   binary


Note that you can use Liquid statements in the request body when selecting the raw data option.

## Authentication

You select the authorization type and specify details in the Authentication tab. Zuora recommends that you use OAuth 2.0 to authenticate to the Zuora REST API.

When sending callouts to Zuora, you can select zuora as the authorization type to use the credentials of your Zuora tenant. When this option is selected, you do not need to specify Zuora credentials in the header.

When setting up Mutual TLS Authentication, ensure that the certificate data you entered must contain the content of a PEM file having the private key appended.

For HMAC authentication, the following hash algorithms are supported:

-   MD5

-   SHA-1

-   SHA-256

-   SHA-385

-   SHA-512


You can define a global constant for the HMAC secret key. Once defined, the constant can be selected from the drop-down list.

Alternatively, you can specify the secret dynamically using Liquid expressions in the Secret field.

Note:

The secret specified in the Secret field will override the secret retrieved from the Key field.

In the data text field, enter the data to be signed with the specified key. You can use Liquid expressions to refer to the headers that you have defined. For example, if you have defined a header called Date, you can refer to it using this expression:

{{Data.Request.Headers.Date}}

In the Signed Header Key field, enter the signed header key. In the text field below, enter the signed header value. For the header value, you can use Liquid expressions. For example, you can use the following expression to refer to the signed data.

{{Data.HMAC.Signed}}

Note:

If needed, you can add basic authentication information by specifying the Username and Password fields.

To learn about HMAC authentication settings through examples, see Examples of using [HMAC authentication in a callout task](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-callout/example-use-hmac-authentication-in-a-callout-task).

## Response

-   Payload Placement : Use this field to specify the location where the data generated from this task will be stored. The default placement for a callout task is Callout. If multiple callout tasks use the same payload placement, the data for each task will be appended to the same array as a separate object. If you want the data from a downstream task to replace the data from an upstream task, select the Replace Payload option.

-   Zuora API Validation : This option is selected by default when configuring a callout to a Zuora API, ensuring that Workflow will retry failed requests due to API limits being reached, lock issues, or temporary errors. Workflow automatically validates the Zuora API tasks, and the tasks are marked as failed if the validation fails due to errors like business logic, API issues, and so on. Then, the API execution is stopped. If you want to proceed with the API execution for the failed tasks, go to the Settings tab of the Callout task and disable the Zuora API Validation option. Then the error tasks will continue to generate downstream tasks and write callout responses into the payload.
