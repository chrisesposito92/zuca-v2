---
title: "File: File Operations - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/file-file-operations/file-file-operations---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:24.960Z"
---

# File: File Operations - Task settings

This reference describes the settings of the File: File Operations task.

## Zip File

File - Select the file to be zipped from the list.

## Unzip File

File - Select the file to be unzipped from the list.

## CSV Creation

-   Filename - Specify the name of the CSV file to be created.

-   Column Name - Click the Add button and specify the name of the column(s) for the CSV file.


## PDF Creation

-   Filename - Specify the name of the PDF file to be created.

-   Content of PDF file - Enter the binary data content for the PDF file.


## File Encryption

-   File - Select the file to be encrypted from the list.

-   Encrypted Filename - Specify the name of the encrypted file.

-   Public Key - Enter the public key to encrypt the file.

-   You can also specify the following fields to add a signature to the file to be encrypted. The pubic key of the signer will be required to decrypt the file.

    -   Signer

    -   Signer Passphrase

    -   Private Key of the Signer


## File Decryption

-   File - Select the file to be decrypted from the list.

-   Decrypted Filename - Specify the name of the decrypted file.

-   Private Key - Enter the private key to decrypt.


If a signature is added during file encryption, you need to enter the public key of the signer to decrypt the file.

## Zip Multiple Files

-   Regex for input files - Enter a regular expression to define the input files to be compressed. A maximum of 10,000 files can be compressed at a time.

-   Filename of the zipped file - Enter the name of the compressed output file.


Note:

The input files could contain files with the same name from previous tasks. When this happens, the files will be renamed following the rules below: 1. The first file remains its original name. 2. The successive files are renamed to "task\_id\_\_filename".

## Attach XML to PDF

-   PDF file - Select a PDF file from the list.

-   XML file - Select an XML file from the list.

-   File name of the XML attachment - Enter a file name for the XML file attached in the PDF file.
