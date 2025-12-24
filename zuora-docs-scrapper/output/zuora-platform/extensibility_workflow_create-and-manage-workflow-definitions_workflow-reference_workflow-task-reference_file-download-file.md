---
title: "File: Download File"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/file-download-file"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:19.479Z"
---

# File: Download File

This reference explains the File: Download File task.

The Download File task downloads a file in Zuora with a specified file ID or downloads an external file that is retrieved through a callout mechanism.

## Task settings

From the Source list, select either Zuora or External .

-   Zuora: Download a file in Zuora. You only need to provide a file ID.

-   External: Download an external file that is retrieved through a callout mechanism. You need to specify the operation type and URL endpoint, and then provide all necessary body and authentication settings. On the Authentication tab, select the authorization type and specify details accordingly. Zuora recommends that you use OAuth 2.0 to authenticate to the Zuora REST API. When sending callouts to Zuora, you can select zuora as the authorization type to use the credentials of your Zuora tenant. When this option is selected, you do not need to specify Zuora credentials in the header. When setting up Mutual TLS Authentication , ensure that the certificate data you entered must contain the content of a PEM file having the private key appended. The result will be written into a file that will be available in the file list.
