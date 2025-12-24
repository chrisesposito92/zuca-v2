---
title: "Zuora Connector for Salesforce CRM Release Notes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/release-notes/zuora-connector-for-salesforce-crm-release-notes"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:52.188Z"
---

# Zuora Connector for Salesforce CRM Release Notes

Zuora Connector for Salesforce CRM Release Notes provide a summary of new features, enhancements, and resolved issues for the Zuora Data Sync for Salesforce CRM, including updates on subscription management, payment methods, and data synchronization improvements.

We publish Zuora Data Sync for Salesforce CRM Release Notes when customer-facing features, enhancements, and resolved issues of Zuora Data Sync for Salesforce CRM are deployed to Zuora Sandbox environments.

These release notes provide a summary of new features, enhancements, and resolved issues in the Zuora Data Sync for Salesforce CRM.

## October 9, 2024(Maintenance Release 5.20)

## New single version checkbox for subscriptions

A new checkbox field `SingleVersion` ( `Zuora__SingleVersion__c` ) has been added to the Subscription ( `Zuora__Subscription__c` ) object to indicate whether the subscription is a single version.

## Reverted status checkbox for rate plans

A new checkbox field `Reverted` ( `Zuora__Reverted__c` ) has been added to the SubscriptionRatePlan ( `Zuora__SubscriptionRatePlan__c` ) object to indicate if a RatePlan has been reverted.

## IPv6 support for IP address field in payment method

The length of the `IPAddress` ( `Zuora__IPAddress__c` ) field in the PaymentMethod ( `Zuora__PaymentMethod__c` ) object has been extended to 39 characters to accommodate IPv6 addresses.

## April 1, 2024(Maintenance Release 5.19)

## Correction of PSStartDate label in payment schedule

The label for `PSStartDate` ( `PaymentSchedule.PSStartDate__c` ) has been corrected in the PaymentSchedule object.

## New status fields for payment schedule and payment schedule item

New fields `Status` ( `PaymentSchedule.Status__c` and `PaymentScheduleItem.Status__c` ) have been added to the PaymentSchedule and PaymentScheduleItem objects.

## February 22, 2024(Maintenance Release 5.18)

## Introduction of payment schedule and payment schedule item objects

The `PaymentSchedule` and `PaymentScheduleItem` objects have been introduced to manage and track payment schedules and their individual installments, supporting structured billing and installment plans.

## September 11, 2023(Maintenance Release 5.17)

## Length of BankBranchCode field in PaymentMethod increased to 10 characters

The length of `BankBranchCode (Zuora__BankBranchCode__c)` field in the `PaymentMethod (Zuora__BankBranchCode__c)` object has been increased from 5 to 10 characters.

## Support for "No" option in TransferredToAccounting field

A new dropdown option No has been added to the `TransferredToAccounting (Zuora__TransferredToAccounting__c)` field in the `Refund (Zuora__Refund__c)` object.

## July 5, 2023

## Support for full or historical sync of Product Catalog Data in Zuora Connector for Salesforce CRM

Zuora Connector for Salesforce CRM now supports a full or historical sync of product catalog data. With this new feature, you have the ability to select the product catalog from the dropdown menu and initiate a data sync of all historical records for the product catalog objects.

To initiate the sync, simply select the desired product catalog from the dropdown menu and click on the Sync button. The system will then run a manual sync job to fetch and update all historical records for the selected product catalog. Please note that only one manual sync job can run at a time.

It is recommended to allow at least 30 minutes for a manual sync job to finish before attempting to initiate another sync. This will ensure a smooth and efficient sync process.

## April 21, 2023

## Resolved issue: Invoice items not syncing with Zuora Connector for Salesforce CRM

Previously, you might encounter the issue where invoice items were not synced with Zuora Connector for Salesforce CRM for tenants with package 5.2 or below. This issue has been resolved.

Now, you can now expect all invoice items to sync with Zuora Connector for Salesforce CRM accurately, regardless of your tenant package version.

## March 28, 2023

## Support for syncing Draft Billing Accounts

Previously, syncing of Draft Billing Accounts was not supported. However, this feature has been added in the new version, and now you can sync your Draft Billing Accounts . This will enable you to have greater control and flexibility over your billing accounts, allowing you to make changes and updates to your billing information.

## Resolved: Subscription rate plan charges not synced due to sync unreliability

Previously, you might have encountered an issue where data connect sometimes deleted Subscriptions and Rate Plan Charges because of sync unreliability. Thus this issue has been resolved.

## Resolved issue: Incorrect syncing of Payment Method Types

Previously, the Payment Method Type (such as Cash, Other, Credit Card, etc.) was incorrectly synced to Zuora\_\_Refund\_\_c's Zuora\_\_PaymentMethod\_\_c column. This issue has been resolved.

## March 15, 2023(Maintenance Release 5.16)

## Support for new field in ZContact object

In Zuora Data Sync for Salesforce CRM, we have added a new field called Zuora\_\_CustomerAccount\_\_c to Zuora\_\_ZContact\_\_c. In Salesforce 5.16, this field corresponds to the CustomerAccount object.

## February 10, 2023

## Support for encrypting Objects and Fields in Salesforce

In Zuora Data Sync for Salesforce CRM, objects and fields in Salesforce can now be encrypted using Salesforce Shield.

## Resolved issue: Zuora Data Sync does not retrigger child objects when the parent object has been synced with 360

Previously, you might have encountered an issue where Zuora Data Sync did not retrigger the child objects after the parent object was synced with 360. This issue has been resolved.

## Resolved issue: Rate Plan History and Rate Plan Charge History objects not synced to Salesforce

Previously, the Rate Plan History and Rate Plan Charge History records were not synced in Salesforce. This is because if both the object and the history version of the object have the same id, retrying by id does not necessarily retry both entries. This issue has been resolved.

## Resolved issue: Custom fields not synced properly

Previously, you might have encountered an issue resulting in some records not being synced properly when deleting custom fields. This issue has been resolved.
