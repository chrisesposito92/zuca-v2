---
title: "Required SFTP server information and post-processing action"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/download-sftp-download/required-sftp-server-information-and-post-processing-action"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:01.704Z"
---

# Required SFTP server information and post-processing action

Use this reference to understand the required SFTP server information and post-processing action of the SFTP Download task.

In the Connection Details section of the Setup tab, you need to specify the hostname or IP address of the SFTP server, the credentials, and the relative path of the file to be downloaded.

## Server information

Specify the HOST and PORT information.

## Credentials

The task supports two authentication methods.

-   A username and a password

-   A username and a raw private key in PEM format


Note:

To download from AWS S3, make sure you or your AWS admin has made the right configuration on the AWS side to support the selected authentication method.

You can click Validate to verify the credential you entered.

## File path

Specify the relative path and the filename of the file to be downloaded.

Asterisks (\*) can be used in the path and name of the file. If there are multiple files matching the file path criteria, only the first file will be downloaded.

You can click Scan to test if the file is available in the specified path.

## Post processing actions

Select how to handle the original file after it is downloaded. If you have the write permission to the server, you can select either of the following options to perform.

-   Delete File

-   Move/Rename File


If you select Move/Rename File, you need to specify the new file path.

Liquid statements are supported in the new file path. Workflow provides three system variables that you can use in the new file path.

-   `Data.OriginalFilePath`: The full file path of the original file

-   `Data.OriginalDirectory`: The directory of the original file

-   `Data.OriginalFileName`: The name of the original file


If the folder path of the file is `Example` and the file name is `invoices.csv`, then the values of the three variables are:

-   Data.OriginalFilePath = Example/invoices.csv

-   Data.OriginalDirectory = Example

-   Data.OriginalFileName = invoices.csv


If you want to move the original file to a directory called downloaded and keep the file name, you can specify this new path:

{{Data.OriginalDirectory}}/downloaded/{{Data.OriginalFileName}}

If you want to rename the original file to invoices.csv.processed, you can specify this new path:

{{Data.OriginalFilePath}}.processed
