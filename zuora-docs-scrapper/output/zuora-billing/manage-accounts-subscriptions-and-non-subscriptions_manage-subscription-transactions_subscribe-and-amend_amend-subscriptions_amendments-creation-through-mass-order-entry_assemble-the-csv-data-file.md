---
title: "Assemble the CSV data file"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/amendments-creation-through-mass-order-entry/assemble-the-csv-data-file"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:22.002Z"
---

# Assemble the CSV data file

This article explains how to assemble the CSV data file and upload it to Zuora using the mass order entry template.

Next, assemble the CSV data file and upload it to Zuora. For details on the fields in the template, see the Mass Order Entry Fields table below.

1.  Enter data from the subscription, customer accounts, and product catalog files into the mass order entry template. This is commonly done in a spreadsheet application. Be sure to save it as a CSV file, not a spreadsheet file.
2.  Then upload the file to Zuora:
    1.  Navigate to Subscriptions and click Mass Order Entry .
    2.  Click Browse to navigate to the file, then click submit .

Note that you should use UTF-8 to encode the CSV file.

The Export Mass Order Entry file is a large file that contains every subscription and amendment in your Zuora tenant. Zuora limits this file to 200,000 records.

Zuora recommends uploading up to 400 records per file for improved processing.

If your tenant has more than 200,000 records, Zuora returns the following error:

<timestamp> The total number of records to be exported exceeds the maximum limit of 200000, please contact customer support to complete the export request.

You can use the Subscription data source to export larger volumes of subscription data.
