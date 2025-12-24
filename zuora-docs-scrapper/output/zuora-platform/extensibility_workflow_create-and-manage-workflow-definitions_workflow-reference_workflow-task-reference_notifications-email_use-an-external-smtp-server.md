---
title: "Use an external SMTP server"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/notifications-email/use-an-external-smtp-server"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:36.071Z"
---

# Use an external SMTP server

Learn how to use an external SMTP server in Workflow. This server can be managed by yourself or an email service provider.

1.  Click the Settings tab of Workflow, and then click Login & SMTP Credentials.
2.  Specify the information of the SMTP server in the External SMTP section.

    The following table provides the description of each field:

    | Field | Required or optional | Description |
    | --- | --- | --- |
    | SMTP Server Name | Required | Host name of the external SMTP server. Note that Zuora enables the external SMTP server for Workflow only if this field is specified. |
    | SMTP Port | Required | The port that Zuora uses to connect to the external SMTP server. |
    | SMTP Username | Required only if the SMTP Authentication checkbox is selected | The username for the external SMTP server. |
    | SMTP Password | Required only if the SMTP Authentication checkbox is selected | The password for the external SMTP server. |
    | SMTP Authentication | Optional | Indicate whether to enable authentication when communicating with the external SMTP server. |
    | Enable StartTLS | Optional | Indicate whether to enable a secure connection with the external SMTP server by using TLS or SSL. |

3.  Click Update .
