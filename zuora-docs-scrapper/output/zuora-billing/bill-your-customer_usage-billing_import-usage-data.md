---
title: "Import Usage Data"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/import-usage-data"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:26.940Z"
---

# Import Usage Data

Learn how to import usage data through the Zuora UI or APIs, including downloading templates, editing files, and submitting them for processing.

You can add usage data by either importing a file through the Zuora UI or through APIs. To import usage data using the UI:

1.  Navigate to Billing > Usage in the left-hand navigation section.
2.  At the upper-right corner of the page, click add usage records.
3.  From this page, you can download an empty usage upload template. Click the required file format next to Download a usage file template.
4.  Edit the file to add usage data.
5.  Click Choose File and select the file that you want to import. The file must be in the Zuora Billing usage file format.
6.  Click submit.

After importing the usage file, the usage uploads are automatically set to the `Pending` status. This status indicates that the usage is waiting to be billed. Once they are billed (when you post an invoice that contains these usage charges), the status will be updated to `Processed`.

You can also perform a mass, asynchronous upload of usage records using the Zuora UI or Zuora API.

-   You can import zipped comma-separated value ( `.csv` ) files using the Zuora UI or API. In addition, you can import zipped Microsoft Excel ( `.xls` ) files using the Zuora UI. You can import a single file at a time, up to 4 MB in size.
-   You can download the import result in a single, zipped `.csv` file.
-   You can query records that have been imported successfully using the `ImportId` field of the Usage object.
-   You can use import notifications to send the import result to one or more users.

Do not perform any processes that will use this data, such as bill runs, until the usage import is complete.
