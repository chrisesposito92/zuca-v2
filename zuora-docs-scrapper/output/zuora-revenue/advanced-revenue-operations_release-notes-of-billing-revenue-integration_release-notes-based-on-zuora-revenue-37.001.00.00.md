---
title: "Release Notes based on Zuora Revenue 37.001.00.00"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/release-notes-of-billing---revenue-integration/release-notes-based-on-zuora-revenue-37.001.00.00"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:40:30.363Z"
---

# Release Notes based on Zuora Revenue 37.001.00.00

This document summarizes the enhancements, UI changes, and resolved issues in Zuora Revenue version 37.001.00.00.

Note:

Starting from version 37.001.00.00, Zuora RevPro is renamed with Zuora Revenue, powered by RevPro (Zuora Revenue for short).

This article provides a summary of enhancements, UI changes, and resolved issues for Billing - Revenue Integration based on the 37.001.00.00 version of Zuora Revenue.

## Enhancements

This section includes the enhancements for Zuora Revenue version 37.001.00.00 and the subsequent minor versions.

## 37.001.00.00

## Support for syncing currency exchange rate from Zuora Billing into Zuora Revenue

Billing - Revenue Integration now supports syncing the currency exchange rate for billing transactions from Zuora Billing into Zuora Revenue. This enhancement ensures that the exchange rate is used consistently across the two systems for billing transactions.

See [Sync exchange rate from Zuora Billing into Zuora Revenue](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration) for more information.

## Support for migrating custom field mappings

You can now export and upload custom fields as a CSV file by navigating to Data Interface > Data Sync > Data Sync Field Mapping . It facilitates migrating custom field mappings across multiple instances. For example, if you want to migrate the custom field mappings in Zuora Revenue instance A to Zuora Revenue instance B, you can now export the custom field mappings as a CSV file from instance A, and then upload it to instance B.

## Data Transformation progress available for tracking

The following columns are now available in the Data Transformation History table by navigating to Data Interface > Data Sync > Transformation Job :

-   Processed

-   Error

-   Success


These columns allow you to easily track the job progress. After successfully submitting a Data Transformation job, you can click the add icon to refresh the Data Transformation History table and monitor the status of sub-jobs.

## New parameter now available for RevPro3.0 Sync Object Mapping

A new parameter called Preserve Custom Fields is now available for the RevPro3.0 Sync Object Mapping program. The default value is Y , which means that when you rerun the Data Sync job to sync objects from Zuora Billing, the previous custom field mappings are still available for use. With this enhancement, you can easily reuse custom field mappings during repetitive Data Sync jobs.

## UI changes

This section includes the UI changes for Zuora Revenue version 37.001.00.00 and the subsequent minor versions.

## 37.001.00.00

## Data Sync UI

Navigate to Data Interface > Data Sync , the following UI changes are now available:

-   The following fields are removed:

    -   Account

    -   Subscription

-   The following columns are removed from the Data Sync History table:

    -   Entity ID

    -   Aqua Job ID

    -   No of Sub Jobs

-   If you leave the From Date and To Date fields empty, a confirmation dialog is displayed after you click the Launch Data Sync button. This change is to avoid accidental job submission.


## Resolved issues

Refer to the [attached CSV file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ad17bb1b-0cc7-421e-90e2-22a9259c395b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkMTdiYjFiLTBjYzctNDIxZS05MGUyLTIyYTkyNTljMzk1YiIsImV4cCI6MTc3MTU1ODgyMywianRpIjoiYjRmNWZjMjNmZjQ5NDNkM2E3Yzg1MDAzNGE3MTY2NmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.N_XAlF4jo2A3Hez2Bd1J6l11StXRAsPnNlfmRug5aWI&response-content-disposition=attachment%3B+filename%3D%22Resolved_issues_in_37_001_00_00.csv%22) to get a list of all issues that have been resolved in Zuora Revenue version 37.001.00.00 and the subsequent minor versions.
