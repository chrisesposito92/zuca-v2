---
title: "Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/upload-ftp-and-sftp/task-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:56.658Z"
---

# Task settings

Use this reference to understand the task settings of the Upload: FTP and Upload: SFTP tasks.

## Specify the required FTP or SFTP server information

On the Setup tab, enter the information of the FTP or SFTP server to be used, including the host name or address, port number, your credentials to the server, and target folder location.

-   Connection details: Specify the HOST and PORT information.
    Note: For FTP server, you need to select an encryption method. Available options are Plain FTP and Explicit FTP over TLS .

-   Credentials: Enter your credentials to the server.

    -   For FTP server authentication, specify your username and password.

    -   For SFTP server authentication, in addition to the username/password option, you can choose to authenticate using username and a raw private key in PEM format.


    Note: To upload to AWS S3, make sure you or your AWS admin has made the right configuration on the AWS side to support the selected authentication method.

-   File path: Specify the target folder location on the server. Optionally, you can choose to create the folder if it doesn't exist. Note that you don't need to include / at the end of the path. For example, use /folder\_a/folder\_b/folder\_c instead of /folder\_a/folder\_b/folder\_c/.


## Specify the files to be uploaded

On the Files tab, specify the files to be uploaded. File names support variables by using Liquid syntax.

In the Zuora Files section, you can specify files generated in Zuora but outside Workflow by entering file IDs.

In the Workflow Files section, files from the preceding Workflow task are automatically displayed. Select the files to be uploaded to the server. You can change the file names. The key next to the Workflow file indicates the number in the file name of the payload where this file is from.

## Specify the algorithms to be used (For SFTP server only)

On the Options tab, specify the algorithms used for the following items. Hover over the fields to see the supported algorithms.

-   Key Exchange Algorithm: The algorithms responsible for establishing secure methods of exchange. " AutoDiscover " means Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.

-   Host Key: The cryptographic key algorithm used for authenticating with the SFTP server. AutoDiscover means Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.

-   Encryption: The encryption algorithm used for the content in file transfer. You can select either of the following options.

    -   AES128-cbc: Restricted to use 128 bit encryption algorithm.

    -   AutoDiscover: Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.

-   Permissions: The file permission assignment, using [Linux read (r), write (w), and execute (x) syntax](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-understanding-linux-file-permissions) for the file. If this field is not configured, Zuora will use the permissions set on the file directory.
