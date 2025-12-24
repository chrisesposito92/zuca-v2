---
title: "Procedure"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/multiple-books-configuration-in-zuora-revenue/procedure"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:55.053Z"
---

# Procedure

Follow these steps to set up a revenue book, including navigating to the application, adding a new book, and assigning related accounts.

Complete the following steps to set up the revenue book:

1.  Navigate to Setups > Applications .
2.  Click the left pointing arrow to open the side menu and then click Revenue Books .
3.  To add a revenue book, click the New Book icon (+).
4.  In the New Revenue Book window, provide the following information and click the save icon .

    | Field name | Description |
    | --- | --- |
    | Name | A unique name of the revenue book to be created. This field is required. |
    | Description | A short description of the book for informational purposes. |
    | Enabled | Indicate whether this book is enabled. |
    | Book Type | Select the appropriate guidance for the book for informational purposes. |
    | RC Prefix | The prefix that is to be used in the revenue contract ID. For example, if the prefix is RC and the RC number is 12345, the RC ID will be RC12345. This field is required. |
    | Primary Book | Indicate whether this book is the primary book. If a book is selected as the primary book, the Enabled switch must also be toggled to Yes . |
    | Allocation Enabled | Indicate whether the allocation functionality is enabled for this book. |
    | Postable Enabled | Indicate whether the transfer accounting functionality is enabled for this book. For more information, see Transfer accounting . |
    | LTST Enabled | Indicate whether the long-term/short-term reclassification functionality is enabled for this book. For more information, see Long-term and short-term reclassification . |
    | Start Date | The start date when the book is active. |
    | End Date | The end date when the book becomes inactive. |

5.  (Optional): After the book is created, you can assign related accounts to this book. The result is that, when the account fields are absent on the uploaded transaction lines, the accounts that you add here will be automatically populated for the transaction lines that are collected for this book.
    1.  On the Revenue Books page, hover the mouse over the line of the book and then click the Assign Accounts icon .
    2.  In the Assign Accounts window, click (+) to add a row for one company code.![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0113b078-46ec-41c0-85d2-a228cadd84e5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxMTNiMDc4LTQ2ZWMtNDFjMC04NWQyLWEyMjhjYWRkODRlNSIsImV4cCI6MTc2NjYzNjU3MywianRpIjoiOTE1NmJlMDAxZWY0NDM1ZGFhM2M4N2EzNDYwOGM5NjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pC_3fqAHVpwcPEFza5y9Zh7TztQa6bFFPG7xWDDC-yw)
    3.  In the added row, specify the account information in different columns. The value that you specify must comply with segment settings on the Account Setup page.
    4.  Add as many rows as you need.
    5.  After you are done, click the save icon and close the window.

Upon success, a confirmation message is displayed on the top right side of the UI and the book is listed on the page.

When more than one revenue book is enabled in the system, the Period Open/Close Templates must be created with applicable books assigned. When you are viewing revenue contracts in Workbench, you have the option to view the revenue contract within different books. Reports are also based on individual revenue books.
