---
title: "Stored Credential Profile data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/stored-credential-profile-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:32.651Z"
---

# Stored Credential Profile data source

Data source to export the data of the stored credential profiles created for payment methods

Use this data source to export the data of the stored credential profiles created for payment methods. Each row in the export represents one stored credential profile record.

## Best practice

-   If you want to query data by joining Payment Method and Stored Credential Profile, use Stored Credential Profile as the base object to achieve better query performance.

-   If you want to find out payment methods without stored credential profiles, use Status is null as the filter.


## Accessing the data source

​Navigation: Reporting > Data Sources and select Stored Credential Profile as the data source.

## Objects available in the data source

The following sections list the objects available in the data source.

## Base object

| Zuora object | Description |
| --- | --- |
| Stored Credential Profile | An object that stores information about the stored credential profiles of payment methods. The Stored Credential Profile object contains the following fields:Activated OnAgreed OnAgreement Expiration DateBrandCancelled OnConsent Agreement RefConsent Agreement SrcCreated By IdCreated DateExpired OnIDLast Success Transaction TimeLast Transaction TimeNumberStatusTypeUpdated By IdUpdated Date |

## Related object

| Zuora object | Description |
| --- | --- |
| Stored Credential Profile Data | The Stored Credential Profile Data object contains the following fields:Network Transaction IdGateway TypeGateway VersionIDCreated By IdCreated DateUpdated By IdUpdated DateStored Credential Profile Data is only available in the Stored Credential Profile data source. It is not available in the Payment Method data source. |
| Payment Method | The payment method used to make the payments. See Payment Method Data Source for more information. |
