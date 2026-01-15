---
title: "Activate the imported customer accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/view-customer-accounts/import-customer-accounts/activate-the-imported-customer-accounts"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:01.977Z"
---

# Activate the imported customer accounts

This task topic allows you to activate imported customer accounts by navigating through the customer accounts menu, importing necessary contacts, and updating account details using CSV files.

To activate the imported customer accounts, perform the following steps:

1.  Navigate to Customers > Customer Accounts in the left navigation menu.
2.  Import customer contacts for the customer accounts you just imported: When the operation is completed, you can find the imported contacts under the associated customer accounts.
    1.  Click the Import icon ![import](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7e6ea80-d369-47fd-9d64-154c0363c5dc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3ZTZlYTgwLWQzNjktNDdmZC05ZDY0LTE1NGMwMzYzYzVkYyIsImV4cCI6MTc2ODYwMDU1NSwianRpIjoiODI4OGNjYTViOTM2NGMwMDg0NzFkNGI5NTU4MzI4YTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.yCBNvros4VTnwOGqRQpAar3Hm3JM4fmD29dY07ZkVks) in the upper right of the list. The Import dialog opens.
    2.  Select Contacts from the Type list.
    3.  Click Choose File to select the CSV file that contains the customer contacts you want to import. You must import at least one contact for each customer account because Bill To Contact and Sold To Contact are required when you activate draft accounts. For more information about the CSV file format, see Required column headers for customer contacts .
    4.  Click Import to import custom contact data from the selected file.
3.  Update and activate the imported customer accounts:
    1.  Click the Import icon ![import](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7e6ea80-d369-47fd-9d64-154c0363c5dc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3ZTZlYTgwLWQzNjktNDdmZC05ZDY0LTE1NGMwMzYzYzVkYyIsImV4cCI6MTc2ODYwMDU1NSwianRpIjoiMmIxZWFhNDg3NGEzNDRiOGI5YmVmY2M0ZThlNzcyN2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.aJwmbii7Fo597Oo0aHgLPrv34Yhsr8vSjHcNQ7oeP10) in the upper right of the list. The Import dialog opens.
    2.  Select Customer Accounts from the Type list.
    3.  Click Choose File to select the CSV file for updating the imported customer accounts. The required columns for activating draft accounts are as follows:

        -   Sold To: The format is `Last Name, First Name` of the contact.

        -   Bill To: The format is `Last Name, First Name` of the contact.

        -   Payment Term

        -   Batch

        -   Status : Active


    4.  Click Import to update and activate the customer accounts.

You can find the status of the customer accounts you just imported are updated from Draft to Active.

Note:

-   If you are not sure about the column headers in the CSV file, click Download a Template to get the templates for customer accounts, contacts, and payment methods. These templates contain all available column headers. For the required columns, refer to Required Column Headers .

-   Characters in languages other than English might be garbled. If it happens, save the CSV file in UTF-8 without BOM encoding and import the file again.

-   You can also use the same way to import contacts and payment methods. Remember that the customer account ID is required for each contact and each payment method. To obtain the appropriate customer account IDs for contacts and payment methods, export the customer accounts that you previously imported by clicking Export Customer Accounts . In the exported CSV file, do a lookup to combine the contacts and payment methods with the customer account IDs.

-   Importing a CSV file with a large number of records takes time, and if it exceeds 60 seconds, a timeout error is displayed in the Zuora UI. However, the import process continues properly in the backend despite the timeout error displayed.
