---
title: "Manage usage data"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/manage-usage-data"
product: "zuora-billing"
scraped_at: "2025-12-24T08:28:19.107Z"
---

# Manage usage data

Learn how to manage and upload usage data in Zuora Billing, including creating units of measure, uploading usage records, and handling duplicate uploads.

Usage based charge models in Zuora Billing allow for the conversion of units into money, usually based on a tiered pricing model. During the customer account's next billing run, Zuora will scoop up and (if there is more than one usage record for an account) aggregate all the relevant usage records and apply the charge model to convert the uploaded units into monies owed. Usage billing is always done in arrears. That is, you bill for usage after your customer has used (consumed) the units.

In Zuora, usage is measured by units and there are no restrictions for what is measured by your units. For example, a unit can represent a seat, a license, or even a gigabyte of storage. You can also create new units of measure (UOM) at any time by going to Billing \> Customize Units Of Measure .

## Options to upload usage information

You can upload usage information in the following two ways:

-   Use an Excel spreadsheet or comma-separated value ( `.csv` ) file to manually upload usage through the Zuora UI.
-   Use the [Zuora API](https://developer.zuora.com/v1-api-reference/introduction/) to create usage objects.


Note that there is no screen to enter individual usage records using the Zuora UI, you can only upload a file or use the API to add usage records. All usage data must be in the Zuora specified format. You must utilize your metering system's reporting features to report the data in the necessary format or utilize an ETL or data mapping tool to convert the metered data to Zuora's format.

Therefore if regular, such as daily, uploads are needed, you should either be prepared to upload a file each day or develop an automated process to do the equivalent using the Zuora API. Use cases on working with the Zuora Usage object can be found in our API documentation.

## Do I need to upload usage daily?

Before rushing into daily uploads you should review your actual business need, starting with what do your Units of Measure (UOMs) represent in the real world? As we have noted earlier, Zuora will sum the usage for a particular charge, subscription or account, but Zuora does not currently provide any other aggregation functions such as average, min or max — only summation. So if you are measuring something like average disk space usage over a month, your external metering system must only supply one value for that UOM, for each account, and for that time period. So if your customer is on a monthly billing plan you would upload one record per month for that account, for that UOM. Zuora's billing engine will then convert the UOM amount in that record to the appropriate charge automatically.

As a result, many customers prefer to do all usage value derivation external to Zuora and only upload one usage record per charge, per billing period regardless of usage type. This often results in one upload file per month, which is more manageable using a manual process.

## What if I accidentally upload the same usage records twice?

Zuora Usage objects always have one of two statuses: Pending or Processed. When initially uploaded, all objects have a Pending status, but after having been processed by the billing engine and turned into a charge, the status is updated to Processed. Once processed by the billing engine, the associated amount has been converted to a charge on an invoice and can no longer be deleted. If the status is Pending, you can use the Zuora UI or the API to remove usage records.

## Delete usage records

Using the Zuora UI go to the Usage page ( Billing > Usage ) and you'll see a list of all recently uploaded usage. If you only need to remove an individual record click on the Status (must be Pending) for that record and you will be presented with a screen that allows you to edit or delete that usage record. If you uploaded an entire file in error, just click on the file name in the File Name column (next to Status ) and you'll be taken to a screen where you can delete all the usage uploaded by that file.

The Zuora API also allows you to delete usage records by specifying the appropriate usage object identifiers, see Deleting Usage in the API documentation for details. Zuora provides an `ImportId` field for each usage record that can be used to easily identify which records came from a specific import.

## Extract uploaded usage and notifications

You can now export uploaded usage using the Full Data Sources feature (currently in controlled release, contact [Zuora Global Support](http://www.support.zuora.com) if you are interested in this feature).

There are also two Import Notifications available, one for successful imports and one for failed imports. You can find these notifications by navigating to Extension Studio > Events & Notifications in the left navigation menu.

## UOM validation

As the usage charge is rated by aggregating the relevant usage records and then applying the charge model to convert the uploaded units into monies owed, you need to make sure that the UOM of your usage record matches the UOM of the corresponding usage charge. Otherwise, you will encounter the following situations:

-   Without the Prepaid with Drawdown feature or the Unbilled Usage feature enabled, if the preceding two UOMs do not match, you can still upload the usage record with the incorrect or mismatched UOM. However, the bill run will not pick up this usage record for the corresponding usage charge; therefore, no usage charge can be rated for this usage record.
-   With the Prepaid with Drawdown or Unbilled Usage feature enabled, for a usage charge such as a drawdown charge in the Prepaid with Drawdown feature and a credit commitment charge in the Minimum Commitment feature, if the preceding two UOMs do not match, your uploading the usage record will be rejected.
