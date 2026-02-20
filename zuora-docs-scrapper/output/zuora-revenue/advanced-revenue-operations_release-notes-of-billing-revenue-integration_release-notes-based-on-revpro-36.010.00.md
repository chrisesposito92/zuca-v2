---
title: "Release Notes based on RevPro 36.010.00"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/release-notes-of-billing---revenue-integration/release-notes-based-on-revpro-36.010.00"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:52.840Z"
---

# Release Notes based on RevPro 36.010.00

This article provides a summary of enhancements and resolved issues for Billing - Revenue Integration based on RevPro 36.010.00 and subsequent minor versions.

## Enhancements

This section includes the enhancements for RevPro version 36.010.00 and the subsequent minor versions.

## 36.010.11

The following enhancements are based on RevPro 36.010.11 patch.

## Support for performing allocation for ramp deals

If you create ramp deals in Zuora Billing, RevPro provides the ramp allocation functionality to identify the ramp deal lines in a revenue contract and perform allocation based on the ramp percentage that is calculated for each line in a ramp deal group.

For more information, see [Ramp deal processing](/zuora-revenue/day-to-day-operation).

## 36.010.09

The following enhancements are based on RevPro 36.010.09 patch.

## Enhanced CA/CL netting process

The CA/CL netting process is enhanced to better support Zuora Billing and RevPro integration scenarios. When there is a negative value (billed amount or revenue recognized to date) at the line level, the CA/CL Determination Amount value is introduced to determine the CA/CL position for the whole RC.

For more information, see [Enhanced CA/CL netting process](/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing/enhanced-cacl-netting-process).

## 36.010.08

The following enhancements are based on RevPro 36.010.08 patch.

## CCV Report for Zuora Billing now available

The charge contractual value (CCV) report for Zuora Billing is now available in RevPro. This report includes the CCV data for all booking transactions that will be synced into RevPro. After you run and download Zuora Billing CCV Report and Rate Plan Charge Booking Report, you can start the reconciliation to identify the discrepancy between them.

See [Charge contractual value reconciliation](/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation) for more information.

## Data Transformation scheduler introduced

A scheduler for the RevPro3.0 Zuora Data Transformation program has been introduced. It allows you to save your effort and reduce errors. Previously, you could only run the transformation job manually, which was time-consuming and error-prone.

See Schedule [Data Transformation jobs](/zuora-revenue/advanced-revenue-operations/run-data-transformation-jobs) for more information.

## Zuora Billing objects and fields supported by query filter in Data Transformation

When configuring RevPro3.0 Zuora Data Transformation , you can now specify not only Pre-Staging tables and fields, but also Zuora Billing objects and fields in the Query Filter parameter. For example, the following filter conditions can achieve the same result:

-   rpro\_ds\_subscription\_g.name = 'S-0000001'

-   Subscription.Name = 'S-0000001'


Previously, Query Filter only supported referencing Pre-Staging tables and fields as the filter condition.

## New indicator available in Billings layout in RC Workbench

A new indicator called Include System Generated Billings is now available in the Billings tab in RC Workbench. The values for this indicator are:

-   Include invoice and invoice cancellation

-   Include only invoice

-   Include only Invoice cancellation

-   Exclude invoice and invoice cancellation


You can now exclude the system generated CM-C lines from the Billings tab to find out the actual invoices sent from Zuora as part of the Billing - Revenue Integration.

## 36.010.06

The following enhancements are based on RevPro 36.010.06 patch.

## Rate Plan Charge Booking Report now available

To facilitate the charge contractual value (CCV) reconciliation between Zuora Billing and RevPro, Billing - Revenue Integration now introduces the Rate Plan Charge Booking Report. This report includes all error transactions in the integration layer (Data Sync and Data Transformation), and Staging lines and RC lines in RevPro.

## 36.010.05

The following enhancements are based on RevPro 36.010.05 patch.

## Data Sync Field Mapping now available

A new menu called Data Sync Field Mapping is now available after you navigate to Data Interface > Data Sync in RevPro. You can now view or configure field mappings for Data Sync based on the role privilege settings of different user roles. Both standard fields and custom fields are supported.

## 36.010.04

The following enhancements are based on RevPro 36.010.04 patch.

## Validation added for record count in Data Sync jobs

The Data Sync service has introduced validation to call the AQuA file download API only if `record_count` is greater than `0` . When `record_count` equals `0` , the AQuA job status is updated to `Completed` and the message becomes `Warning - No Record to Sync` .

## New program available in RevPro

A new program called RevPro3.0 Billing Entity ID Sync Process is now available in RevPro. You can run this program to sync Zuora Billing entities into RevPro Pre-Staging.

## 36.010.03

The following enhancements are based on RevPro 36.010.03 patch.

## Data Sync now works in both SSO and non-SSO modes

The route of the proxy server for the Data Sync service is now changed to `/api/revpro/datasync/secure` so that it can work both in the SSO and non-SSO modes.

Previously, the route was `/api/datasync/secure` , which can work only in the non-SSO mode.

## 36.010.02

The following enhancements are based on RevPro 36.010.02 patch.

## Tax lines are excluded from IIA transformation

The tax lines for invoice item adjustment (IIA) transactions are not needed for revenue recognition. These lines are now excluded from the data transformation process for IIA.

## 36.010.01

The following enhancements are based on RevPro 36.010.01 patch.

## Order Item removed from Data Sync

The Order Item object in Zuora is now removed from the Data Sync service. Order Mrr and Order Item are no longer synchronized as a part of this change.

## New flag available for invoices

A flag called Avoid Overage is now available for invoices in RevPro and the value is automatically set based on the invoice values from Zuora Billing. When an invoice is collected into RevPro with the Avoid Overage flag as Y , a CM-C line will be generated for the variance of overage.

## 36.010.00

The following enhancements are based on RevPro 36.010.00.

## Enhancement of Data Sync UI

If you have multiple Zuora Billing entities, you should select an entity before configuring other settings when scheduling a Data Sync job in RevPro. The Data Sync UI has been improved to align with this requirement:

-   If multiple Zuora Billing entities are available, the values for other settings are not available for selection until the Entity dropdown list is selected.

-   If only one Zuora Billing entity is available, the Entity dropdown list is automatically selected and all other settings are available for selection.


## New field now available in Data Sync service

The field called Is Processed available in the [Rate Plan Charge data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source) in Zuora Billing has been added to the Data Sync service. This field indicates whether a charge segment has been completely billed for all relevant billing periods.

## Jobs now dependent on the ZBILLLING\_INTEGRATION profile

The following jobs are now available only when you set the ZBILLING\_INTEGRATION profile to Y :

-   RevPro3.0 Subscription Term Number Generation Process

-   RevPro3.0 Sync Object Mapping

-   RevPro3.0 Zuora Data Transformation

-   RevPro3.0 Data Sync Process


## Resolved issues

Refer to the [attached CSV file](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/583f541d-e262-499b-b520-36d0eb47f9e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU4M2Y1NDFkLWUyNjItNDk5Yi1iNTIwLTM2ZDBlYjQ3ZjllOSIsImV4cCI6MTc3MTcwODg0NiwianRpIjoiYWY3NWU3MjlmZDFmNDIwYWEzY2M3YjllY2U5YzdkNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.PxaGn-tnp0PAd3jWgyGH1ODzVeeBiSinldgW9-zECkY&response-content-disposition=attachment%3B+filename%3D%22Resolved_Issues_in_Zuora_Billing_RevPro_Integration.csv%22) to get a list of all issues that have been resolved in RevPro version 36.010.00 and the subsequent minor versions.
