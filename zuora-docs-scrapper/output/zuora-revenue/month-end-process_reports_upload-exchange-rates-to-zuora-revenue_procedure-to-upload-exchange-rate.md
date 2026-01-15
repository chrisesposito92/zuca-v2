---
title: "Procedure to upload exchange rate"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/upload-exchange-rates-to-zuora-revenue/procedure-to-upload-exchange-rate"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:20.185Z"
---

# Procedure to upload exchange rate

Learn how to upload exchange rates to Zuora Revenue by navigating through file upload options, downloading and updating templates, and ensuring data accuracy.

Complete the following steps to upload the exchange rate to Zuora Revenue:

1.  Navigate to File Upload > Custom . ![Monthly Exchange Rate Upload_Reports_new.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1af571fd-93c2-43e6-af96-1c6c3dd39429?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhZjU3MWZkLTkzYzItNDNlNi1hZjk2LTFjNmMzZGQzOTQyOSIsImV4cCI6MTc2ODYwMDk5NSwianRpIjoiM2IxMTk4MjI1YzA4NGRkYjlhNmExZWY2YTIxNjI0NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Qg9ob-wNS3rwTEp7KgaV87XA2H_VjjzjLlIaY3hpGF0)
2.  To download and update the exchange rate template, complete the following steps:
    1.  Hover your mouse over the Monthly Exchange Rate Upload template line and click the Download Template icon to download the template file.
    2.  Open the template file, and fill in the following information:

        -   From Currency: Enter the appropriate functional currency. All functional currencies should have been already created and uploaded in Zuora Revenue.
        -   To Currency: To Currency:Use this field to enter a currency type from the already uploaded functional currencies in the system. If the reporting currency is updated as USD in the system, then To Currency must be updated as USD.
        -   Start Date: Specify the start date of the month.
        -   End Date: Specify the end date of the month.
        -   Exchange Rate: Specify the exchange rate that is used to convert the home currency into the transaction currency for the set duration.
        -   Exchange Rate type: Specify the exchange rate type. The valid values include Period Average and Period End. Period End rates are used for the balance sheet account, and Period Average rates are used for the Profit/Loss accounts.

        Note:

        -   The start date and end date must be set according to the calendar setup. Zuora Revenue will use the calendar's end date every month to determine the respective exchange rate from the uploaded exchange rates.
        -   Ensure that all field details that you enter in the upload file contain no typos because the system will not do any no validation against the input. If erroneous data are in the uploaded file, the system cannot derive the reporting currency fields correctly.
        -   This [CSV file i](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/10156093-79af-416f-b52a-30d59d6b62dd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEwMTU2MDkzLTc5YWYtNDE2Zi1iNTJhLTMwZDU5ZDZiNjJkZCIsImV4cCI6MTc2ODYwMDk5NSwianRpIjoiNDFiM2IxNGVlNzk3NGI0Njk5ODAwZTliNjcxYzRhZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9._1ndQi0trxALYyQSRmcENiJCvk0Gx4gP0t9LSOLIEL8&response-content-disposition=attachment%3B+filename%3D%22Monthly_Exchange_Rate_Upload_-_Sample.csv%22)s provided as an example for your reference
        -   Ensure that all field details that you enter in the upload file contain no typos because the system will not do any no validation against the input. If erroneous data are in the uploaded file, the system cannot derive the reporting currency fields correctly.

        .

    3.  Save your changes in the file. The exchange rate template file is updated.
3.  To upload the exchange rate template file to the list, complete the following steps:
    1.  Hover your mouse over the Monthly Exchange Rate Upload template line and click the Upload icon .
    2.  Choose the local file that you just updated and then click Upload .

In the Uploaded Files section on the Custom page, you can view the file upload result.

Note : Trial Balance contains the following fields that represent account balance:

| Fields | Description |
| --- | --- |
| F.Amount(H) | Use exchange rates from the transactions that come from the respective orders and billings. |
| R.Amount(H) |  |
| T.Amount(H) |  |
| R. Amount - Curr Period Rt | These fields are available only for global currency RCs. This will display a blank value if multi-currency is used. If current period rates are required, you must have customizations to populate the respective rates into Zuora Revenue every month through a custom job. Rates should be inserted into rpro_ex_rates_g every month. |
| F. Amount - Curr Period Rt |  |
