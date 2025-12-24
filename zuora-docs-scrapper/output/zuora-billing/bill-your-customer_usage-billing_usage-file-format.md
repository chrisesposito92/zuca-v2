---
title: "Usage file format"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/usage-file-format"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:24.320Z"
---

# Usage file format

Learn about the file formats and required columns for importing usage data into Zuora.

Files for usage data import can be in the Microsoft Excel `.xls` or comma-separated value `.csv` format.

Zuora recommends that you use one of the following CSV file formats to import usage data:

-   MS-DOS Comma-Separated from Microsoft Excel
-   Windows Comma-Separated from Microsoft Excel
-   Comma-Separated Values from Microsoft Excel
-   Comma-Separated Values from Google Sheets

To download a copy of the correct usage file format, click the file type link next to Download a usage file template.

The usage file format has the following columns:

| Column | Description |
| --- | --- |
| ACCOUNT_ID | Enter the account number. For example, the default account number, such as A00000001, or your custom account number.Note: Be sure to use the account number not the Account ID or Account Name.Required? Yes |
| UOM | Enter the unit of measure. This must match the UOM for the usage that is set up in Billing > Customize Units of MeasureRequired? Yes. |
| QTY | Enter the quantity.Required? Yes. |
| STARTDATE | Enter the start date of the usage. This date determines the invoice item service period the associated usage is billed to. The date format is based on locale of the current user. For example, the start date format is MM/DD/YYYY for the en_US locale, and is DD/MM/YYYY for the en_GB locale.Required? Yes. |
| ENDDATE | Enter the end date of the usage. This is not used in calculations for usage billing and is optional. The date format is based on locale of the current user. For example, the end date format is MM/DD/YYYY for the en_US locale, and is DD/MM/YYYY for the en_GB locale.Required? The value of this column is optional, but the column header is required in the usage file. |
| PRODUCT_RATE_PLAN_CHARGE_ID | Enter a product rate plan charge number so that you can charge your customer with a dynamic usage charge for the corresponding uploaded usage record.Required? The value of this column is optional, but the column header is required in the usage file. |
| SUBSCRIPTION_ID | Enter the subscription number or subscription name. If you created the subscription in the Zuora application, Zuora created a number automatically in a format similar to: A-S00000001If you do not provide a value for this field, the associated usage will be added to all subscriptions for the specified Account that use this Unit Of Measure.Required? The value of this column is optional, but the column header is required in the usage file. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the Subscription or Charge ID in each usage record. |
| CHARGE_ID | Enter the charge number, for example, C-00000001, when you add your rate plan to your subscription and you view your individual charges. This field is related to the Charge Number on the subscription rate plan.Required? The value of this column is optional, but the column header is required in the usage file. If your Accounts can have multiple subscriptions and you do not want double or triple counting of usage, you must specify the specific Subscription or Charge ID in each usage record. |
| DESCRIPTION | Enter a description for the charge.Required? The value of this column is optional, but the column header is required in the usage file. |
| UNIQUE_KEY | This column is available only if you have the Prepaid with Drawdown or Unbilled Usage feature enabled.Enter a specific identifier for this usage record. It accepts a string less than 255 characters, for example, UK123. If not specified, its value will be ‘null’ by default. When you upload a usage record and specify the UNIQUE_KEY, the system will check if there is an existing usage record with the same Unique_Key.Required? No. |

Note: Do not create a custom field with the same name as a standard Zuora field for the Usage object. For example, two STARTDATE fields in a usage file. If you do, you will see an error indicating that required columns are missing in the usage file.

## STARTDATE and ENDDATE Format and User Locale

The format used for STARTDATE and ENDDATE depends on the locale of the current user. This format is not controlled by the locale that you set for your Zuora tenant. For example, if the user's locale is set to English (United Kingdom) or English (Australia), the date format would be DD/MM/YYYY.
