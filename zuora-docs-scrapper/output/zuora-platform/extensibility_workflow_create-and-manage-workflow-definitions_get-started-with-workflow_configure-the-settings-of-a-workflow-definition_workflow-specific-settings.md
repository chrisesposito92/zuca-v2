---
title: "Workflow-specific settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/get-started-with-workflow/configure-the-settings-of-a-workflow-definition/workflow-specific-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:24.391Z"
---

# Workflow-specific settings

Available settings include cleanup policy, execution priority, security, runtime settings, triggers, notifications, and input parameters.

## Cleanup policy

If API callout is selected as a trigger, the API endpoint and token are also displayed in the Settings tab.

In the Overview section, you can update the name and description for the workflow definitions. You can specify a Category for the workflow definition so that you can quickly filter the workflow on the home page later. The Name , Description , and Category fields are for a workflow definition and apply to all the versions of that workflow definition.

You can add information about the workflow version in the Version Details field.

In the Cleanup Policy section, define the number of days that the Workflow Run data, including attachments and logs, are retained. Only Workflow Runs without pending, processing, or queued tasks will be deleted.

-   For all non-production environments, the default setting is 30 days with a configurable time range of 1-45 days.

-   For production environments, the default setting is 45 days with a configurable time range is 1-90 days.


See [Use Data Query to report on Workflow](/zuora-platform/extensibility/workflow/report-on-workflow/use-data-query-to-report-on-workflow) for accessing workflow logs and reports using Data Query.

-   Encrypt Files \- If this option is selected, all files in this workflow version are stored with client-side encryption.

-   Secure Error Messages - If this option is selected, the original messages of the unhandled errors are invisible for information security reasons. The error message will be shown as "Workflow will not report sensitive errors for unhandled exceptions."


Ignore Pending Status - Workflows are placed into the `Pending` status if there are pending tasks during execution, such as the Approval Task, Delay Task, and Callout Task Retry. If you’ve set a workflow to ignore the `Pending` status, the workflow status switches to `Finished` and the On Finish branch could execute multiple times for each occurrence of pending tasks moving to the `Success` or `Error` status. As a result, this could also create unwanted success or failure notifications.

## Execution priority

In the Execution Priority section, you can select the priority of this workflow relative to other workflows in the same Workflow instance.

Higher-priority workflows take precedence over lower-priority workflows. When a workflow of higher priority is initiated, it will be placed ahead of lower-priority workflows that are running. Depending on the available resources, lower-priority workflows may be paused until resources are released.

If you set all workflows to High, the execution sequence will not change as they are the same priority. Zuora recommends that you set high priority only for important workflows that need to be run without delay.

## Security

-   Encrypt Files \- If this option is selected, all files in this workflow version are stored with client-side encryption.
-   Secure Error Messages - If this option is selected, the original messages of the unhandled errors are invisible for information security reasons. The error message will be shown as "Workflow will not report sensitive errors for unhandled exceptions."

## Runtime

Ignore Pending Status - Workflows are placed into the Pending status if there are pending tasks during execution, such as the Approval Task, Delay Task, and Callout Task Retry. If you've set a workflow to ignore the Pending status, the workflow status switches to Finished and the On Finish branch could execute multiple times for each occurrence of pending tasks moving to the Success or Error status. As a result, this could also create unwanted success or failure notifications.

## Workflow types and triggers

To select a workflow trigger that best suits your workflow definition, select a workflow definition type. The available workflow types are as follows:

\- Processes bulk data operations where you can leverage Data Query and Data Source Exports. You can extract large data sets and iterate them for bulkier operations. The batch operation can be run when a Zuora Bill, Journal, or Payment Run is executed. You can also trigger the run by On Demand , Scheduled, or On Billing Event .

Near Real-time \- Processes data at a single record level where you cannot use asynchronous tasks such as Data Query and Data Source Exports. Additionally, these can be triggered by On Demand , Callout , Scheduled, or On Billing Event.

UI Action - Allows you to quickly install a button enabling Billing users to trigger a workflow process within a Zuora Billing page without requiring additional admin access. After selecting the UI Action, perform the following:

-   Click the Page drop-down list to select the page in Zuora Billing where the Workflow UI Action button should be placed. The following is the list of pages which are supported in Workflow:

    -   Account Detail Page

    -   Account List page

    -   Accounting Period Detail Page

    -   Accounting Period List Page

    -   Bill Run Detail Page

    -   Bill Run List Page

    -   Credit & Debit Memo List Page

    -   Credit Memo Detail Page

    -   Debit Memo Detail Page

    -   Invoice Detail Page

    -   Invoice List Page

    -   Journal Run Detail Page

    -   Journal Run List Page

    -   Payment Detail Page

    -   Payment List Page

    -   Payment Run Detail Page

    -   Payment Run List Page

    -   Product Catalog Detail Page

    -   Product Catalog List Page

    -   Refund Detail Page

    -   Refund List Page

    -   Subscription Detail Page

    -   Subscription List Page


-   Click the Roles drop-down to select SuperAdmin and Zuora Billing Standard User as a user role group base for approvals. ![clipboard_e47aec3fc7bcf7005db242c92151abf3c.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d8128329-2402-4cf2-bedf-15c0a30b6f68?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4MTI4MzI5LTI0MDItNGNmMi1iZWRmLTE1YzBhMzBiNmY2OCIsImV4cCI6MTc3MTU1ODAzOCwianRpIjoiNGVhN2I2NTM4YWNmNDYwOWI1MjRjZGE3MjE3MmMzMGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.5MdDaHBzs4HNnp8UcVlSKgzHU6KFbAQPdsZMJGWkZYE)

-   Enter the button label in the Button field.

-   Once the Workflow is created and activated, the button automatically appears on the designated Billing page. ![Custom account label](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/70c82c3d-bf11-4d1b-a511-cda821d0193b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcwYzgyYzNkLWJmMTEtNGQxYi1hNTExLWNkYTgyMWQwMTkzYiIsImV4cCI6MTc3MTU1ODAzOCwianRpIjoiNmYyNzg1ZDg0NzM0NGMwNWJmNDU2NWQwNDljZDU0MTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.eseJaFQTCK5AAsPz6Zpp1SHdlIj3Nvf3_y3Ev6620SM)

-   You can set up input parameters that are displayed to the administrator when the button is clicked from the Billing page. Input parameters can include files, limited to a 100-second upload timeout. For more information, see [Inputs](#reference-9779__workflow-setting-inputs). ![Account page](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/05eca5ba-3c1f-4396-8a5d-85c5d40a37ff?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA1ZWNhNWJhLTNjMWYtNDM5Ni04YTVkLTg1YzVkNDBhMzdmZiIsImV4cCI6MTc3MTU1ODAzOCwianRpIjoiMzcxM2NkM2I2ZDM3NDNkNWJiMTZlYWNlMjRhNmFmZGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.DfMJjZIW96GOuhBcQmmXGiYbgeuk0Rzzcdlc89fZjS4)

-   For all the detail pages, the object ID is automatically passed into the run-time data payload as `{{Data.UIAction.ObjectId}}` .


Select the triggers for the workflow definition type in the Workflow Triggers section.

-   On Demand - The workflow version will run when manually initiated.

-   Callout - The workflow version will run upon an API callout. This option must be selected to integrate with the Configurable Payment Retry feature or the Collections Window feature in Collections. Note that this workflow trigger option is available only for the Near Real-time workflow definition type​​​​​​.

-   Scheduled - The workflow version will run based on the configured schedule. If this option is selected, configure the running schedule in the Schedule Config section.

-   On Billing Event - You can select On Billing Event in Create New Workflow Definition to define the Billing Event and Billing Event Parameters. If a workflow is triggered by a Billing Event, you must also select that same Billing Event as the first step in the branch that starts from the Start node. In the canvas, click the plus (+) icon next to the Start node and choose the Billing Event name (for example, PaymentRunCompletion). That starting step receives the Billing Event payload (such as the payment run ID) and passes it to the downstream tasks. Selecting On Billing Event as the trigger alone does not automatically inject the event payload into your workflow; the starting branch must explicitly include and use the Billing Event name selected from the Start node menu. A scheduled workflow run will be skipped under the following circumstances:

    -   Another workflow run is in the Queued or Processing status.

    -   A pending task will run within three minutes. For example, if a delayed task from a previous run is scheduled to run in 2 minutes of the next scheduled time, the next workflow run will be skipped.

    -   The workflow version is deactivated.


You can set the Active Scheduled Run Check option to False to prevent any previous workflow run from blocking a later run. But note that setting this option to False could potentially lead to the situation where multiple scheduled workflow runs are run at the same time and on the same data set.

## Callout configuration

Note down the callout URL and API token displayed in the Callout Configuration section. If you intend to integrate Workflow with Configurable Payment Retry feature or the Collections Window feature of Zuora Collections, you need the URL and API token for system integration. See Set Up the Configurable Payment Retry Feature or Set Up the Collections Window Feature for more details.

## Inputs

In the Mapped Input Fields and Params sub-section, define the mapping between data fields in callouts and corresponding data fields in the workflow version. When a defined parameter is passed via callout, it will be recognized by the workflow. In the workflow version, the passed-in parameter is referenced by in the format of `Data.<Object>.<Field>`.

In the Mapped Input Fields and Params sub-section, define the mapping between data fields in callouts and corresponding data fields in the workflow version. When a defined parameter is passed via callout, it will be recognized by the workflow. In the workflow version, the passed-in parameter is referenced by in the format of Data.<Object>.<Field>.

For example, if you define the following pair of input and workflow fields.

| Callout Field Name | Object | Field Name | Datatype |
| --- | --- | --- | --- |
| paymentId | Workflow | paymentId | Text |

You can reference this parameter using this Liquid statement.

{{Data.Workflow.paymentId}}

Click Add New Mapping to add a new pair of data fields, and click Update to save the fields and parameters that you enter.

Billing Event Parameters use the same mapping mechanism as callout inputs. When you configure a workflow with an On Billing Event trigger, define the Object and Field Name for each Billing Event parameter so that the value is written to the same Data.<Object>.<Field> location that your tasks expect. For example, if your first task needs the payment run ID as Data.Workflow.paymentRunId, set the Billing Event parameter with Object = Workflow and Field Name = paymentRunId. This way, you can test the workflow by entering paymentRunId manually in the UI or by letting the Billing Event supply it, without changing the task configuration.

## Always Show Prompt

You can configure to be prompted to set the value(s) of the input fields each time before a workflow version is run.

1.  Make sure the workflow version is in the Inactive status. You cannot modify active workflow versions.

2.  Under the Inputs section, toggle on Always Show Prompt.

3.  Click Update.


Later, when you run the workflow version manually, you will always be prompted to set the input values. Make sure that you set the version back to Active.

## Notifications

In the Workflow Email Notifications section, configure the events upon which you want to receive notifications and enter the email addresses for receiving notifications. See Enable alert notifications for workflow failures for more information.
