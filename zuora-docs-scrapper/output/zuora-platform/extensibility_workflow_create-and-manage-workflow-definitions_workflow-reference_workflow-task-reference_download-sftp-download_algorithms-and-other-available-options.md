---
title: "Algorithms and other available options"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/download-sftp-download/algorithms-and-other-available-options"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:04.314Z"
---

# Algorithms and other available options

Use this reference to understand the algorithms and other available options of the SFTP Download task.

On the Options tab, you can specify the algorithms used for the following items. Hover over the fields to see the supported algorithms.

-   Key Exchange Algorithm : The algorithms responsible for establishing secure methods of exchange. AutoDiscover means Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.

-   Host Key: The cryptographic key algorithm used for authenticating with the SFTP server. " AutoDiscover " means Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.

-   Encryption: The encryption algorithm used for the content in file transfer. You can select either of the following options.

    -   AES128-cbc: Restricted to use 128 bit encryption algorithm.

    -   AutoDiscover: Zuora SFTP client and your SFTP server will first negotiate which algorithms to use during the SFTP session.


You can also specify the following options:

-   Case Insensitive : Specify if the file name is case insensitive.

-   Halt task and do not proceed if no file found : Specify if the workflow should be halted in the case that file is not found.
