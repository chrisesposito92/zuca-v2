---
title: "Configure Invoice API Generator"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/configure-invoice-api-generator"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:07.330Z"
---

# Configure Invoice API Generator

Zuora's Invoice API Generator enables you to generate invoices of historical versions in bulk. You can use the Subscription API Loader to load the desired subscriptions, then use Invoice API Generator to generate invoices and update the invoices to "Posted".

## Create an Invoice API Generator Task

To use an Invoice API Generator to create an invoices:

1.  Navigate to New Task > Invoice API Generator.
2.  Click Download to download the template.
3.  Complete the template with the desired information. See [Template Fields](/zuora-platform/integration/integration-hub/configure-invoice-api-generator) for the details of the fields in the template.
4.  In the General tab, complete the following settings:
    1.  Enter the name of the task in the Name field.
    2.  (Optional) Select the build version in the Version drop-down list. It is not recommended to update this field because this could stop you from using the latest functionality built in the tool. The latest build name and version are populated by default.
    3.  Select the login to your Zuora tenant from the Target drop-down list or create a new login. Do not select OAuth credentials or create new logins using OAuth because OAuth is not supported by Developer Tools.
5.  In the Advanced tab, complete the following settings:
    1.  Enter the date format in the Date Format field.
    2.  Click Choose File and upload the completed CSV file.
    3.  (Optional) Configure other settings based on your needs. The following list provides additional information about several important fields:
        -   Max Threads - Sets the number of threads that can be processed concurrently by Invoice API Generator. The value for this field should not exceed Zuora's concurrent request limits. The default value is 1.
        -   Max zObjects - Sets the maximum number of the objects used in each call to Zuora. The default value is 50.
6.  Click Create.

After a CSV file that contains the invoice information is uploaded, the file is parsed and the entries are divided into groups by account and the invoice target date so that all invoices of the same account are in a single thread. Each thread will process one account at a time and generate invoices starting with the earliest entries.

Note:

If the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/enable-invoice-settlement) feature is enabled in your tenant, Invoice API Generator does not work when credit memos need to be generated.

## Template Fields

To facilitate your understanding of the template, the explanation for each field in the template is provided in the following table:

| Field | Required? | Type | Value | Character Limit | Description |
| --- | --- | --- | --- | --- | --- |
| Invoice.AccountId | Conditional | zns:ID |  | 32 | The account ID of the invoice owner.This field is required if Invoice.AccountNumber is not specified. |
| Invoice.AccountNumber | Conditional | zns:ID |  | 32 | Unique account number assigned to the account.This field is required if Invoice.AccountId is not specified. |
| Invoice.IncludesOneTime | No | boolean | TRUE, FALSE | 5 | Specifies whether the invoice includes one-time charges. You can use this field only with the generate() call for the Invoice object. |
| Invoice.IncludesRecurring | No | boolean | TRUE, FALSE | 5 | Specifies whether the invoice includes recurring charges. You can use this field only with the generate() call for the Invoice object. |
| Invoice.IncludesUsage | No | boolean | TRUE, FALSE | 5 | Specifies whether the invoice includes usage charges. You can use this field only with the generate() call for the Invoice object. |
| Invoice.Date | No | date |  | 29 | The format should align with the value for the Date Format field in the Invoice API Generator.If not specified, the value for Invoice.TargetDate will be used. |
| Invoice.TargetDate | Yes | date |  | 29 | This date is used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in this bill run.The format should align with the value for the Date Format field in the Invoice API Generator. |
| Invoice.Post | Yes | boolean | TRUE, FALSE | 5 | Specifies whether to post this invoice. The default value is FALSE. |
