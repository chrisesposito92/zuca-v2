---
title: "Run Zuora Billing CCV report"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/charge-contractual-value-reconciliation_1/run-zuora-billing-ccv-report"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:40:38.741Z"
---

# Run Zuora Billing CCV report

The Zuora Billing CCV report provides detailed data on booking transactions, excluding usage and certain discount charges, and can be downloaded as a CSV file.

The charge contractual value (CCV) report for Zuora Billing contains the CCV data for all booking transactions that will be synced into Zuora Revenue. You can generate this report and download it as a CSV file in Zuora Revenue.

The CCV report for only termed subscriptions can be generated. Subscriptions might have multiple versions, but the data for only the latest subscription version is included in the report.

Because Billing - Revenue Integration does not support booking-based revenue recognition for usage charges, the following items are not included in the CCV report:

-   Usage charges

-   Discount charges that are applied to usage charges


## Run CCV report

Take the following steps to run the CCV report for Zuora Billing:

1.  In the Zuora Revenue UI, navigate to Data Interface > Data Sync.
2.  Expand the side menu and then click CCV Report. The CCV Report page opens.
3.  Select your Zuora entity from the Entity dropdown list.
4.  Specify the filters. The CCV report can be created based on any combination of the following filters:
    -   Subscription: Enter the subscription number. One or multiple subscription numbers are supported.
    -   Account - Subscription Owner: Enter the number of the billing account associated with the subscription owner. For example, A-0000001. One or multiple account numbers are supported.
    -   Account - Invoice Owner: Enter the number of the billing account associated with the invoice owner. For example, A-0000002. One or multiple account numbers are supported.
    -   From Date and To Date: Specify the last updated date range for the target rate plan charges.
    -   Additional Fields: Specify the fields that will be included in the report in addition to the predefined fields. See CCV report fields, below for more information.
5.  Click Run CCV Report. If the job is successfully submitted, the corresponding item is added to the Run History table.

## Report run history

Jobs in the Run History table can be in one of the following status:

| Status | Description |
| --- | --- |
| submitted | The job has been submitted. |
| processing | The job is being processed. |
| error | One or more errors occurred during the report generation. The report is not successfully generated. |
| completed | The job is completed and the report is successfully generated. |
| cancelled | The user has cancelled the job. |

The Processed/Total Subscriptions column indicates the report generation progress. When two numbers in the Processed/Total Subscriptions column are equal, the status of the job is updated to completed. You can then hover over the job item and click the download icon. to download the generated report.

![CCV Report](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/97e8dbc0-7013-4fd2-93f4-08262cb5fdeb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk3ZThkYmMwLTcwMTMtNGZkMi05M2Y0LTA4MjYyY2I1ZmRlYiIsImV4cCI6MTc2NjYzNzYzNywianRpIjoiNmVhZTNjZGY0YWE3NDg1M2JiNTdlNzVkOWEzMDM5M2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zOMsG9KN5Skoh-5tGbwLYneKJl4eP_BvDp8Jkr2be3c)

If a job is completed in error, hover over the job and click the magnifying glass icon to view the detailed error message.

## CCV report fields

The Zuora Billing CCV report contains two types of fields: standard fields and additional fields. Standard fields are predefined and the values are populated in the report by default. If you want to add more fields, specify the target fields in Additional Fields .

## Standard fields

The CCV report includes the following fields by default:

| Fields (Columns in report) | Derived value for regular charges | Derived value for discount charges |
| --- | --- | --- |
| rateplanchargeid | ccv.rateplanchargeid | ccv.rateplanchargeid |
| subscriptionid | ccv.subscriptionid | ccv.subscriptionid |
| isdiscount | No | Yes |
| appliedtorateplanchargeid | NA | ccv.appliedtorateplanchargeid |
| quantity | rpc.quantity | discount_rpc.quantity |
| amount | ccv.amount | ccv.amount |
| elp | ccv.elp | ccv.elp |
| currency | ccv.currency | ccv.currency |
| accountnumber | acct.accountnumber | acct.accountnumber |
| accountname | acct.name | acct.name |
| subscriptionname | ssp.name | ssp.name |
| subscriptionversion | ssp.version | ssp.version |
| subscriptionstatus | ssp.status | ssp.status |
| chargenumber | rpc.chargenumber | rpc.chargenumber |
| originalid | rpc.originalid | discount_rpc.originalid |
| segment | rpc.segment | discount_rpc.segment |
| version | rpc.version | discount_rpc.version |
| appliedtooriginalid | NA | regular_rpc.originalid |
| appliedtosegment | NA | regular_rpc.segment |
| appliedtoversion | NA | regular_rpc.version |
| effectivestartdate | rpc.effectivestartdate | regular_rpc.effectivestartdate |
| effectiveenddate | rpc.effectiveenddate | regular_rpc.effectiveenddate |
| updateddate | rpc.updateddate | regular_rpc.updateddate |

To unify the CCV report for regular and discount transactions, several columns specific to discount transactions are included in the report. The values for these columns are set to `NA` for regular transaction lines.

## Additional fields

You can specify the fields on the following objects, including common fields and custom fields:

-   [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account).

-   [Order](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data.ditamap)

-   ProductRatePlanCharge

-   ProductRatePlan

-   Product

-   RatePlanCharge

-   RatePlan

-   Subscription


The following example shows the format to be used for the Additional Fields box. It adds the SubscriptionEndDate field on the Subscription object to the CCV report. The field name is appended with the `__c` suffix. If you want to add multiple fields for an object, specify the fields in separate lines with a comma at the end of each line.

{ "object": "Subscription", "fields": \[ "SubscriptionEndDate\_\_c " \] }

## What to do next

After the Zuora Billing CCV report is generated, you can run [Rate Plan Charge Booking report](/zuora-revenue/advanced-revenue-operations/ccv-calculation-in-billing---revenue-integration).
