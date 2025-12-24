---
title: "Retrieve rating details through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records/usageratingdetail-columns"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:38.874Z"
---

# Retrieve rating details through Data Query

Learn how to retrieve rating details for usage charges and records using Data Query.

Perform the following steps to retrieve the rating details about usage charges or usage records through Data Query:

1.  On the bill run details page, find more information including the failure reason in the Failed Accounts or Subscriptions tab.
2.  In the left navigation menu, navigate to .
3.  Create a data query to retrieve error details at the charge level, and save the data query results.
4.  Create a data query to retrieve error details at the usage record level, and save the data query results.

## ChargeRatingDetail columns

The following table lists the ChargeRatingDetail columns that are displayed in the data query results at the charge level.

| Column | Description |
| --- | --- |
| BILLINGPERIODENDDATE | The end date of the billing period. |
| BILLINGPERIODSTARTDATE | The start date of the billing period. |
| CHARGENUMBER | The number of the corresponding rate plan charge. |
| CREATEDBYID | The ID of the user who initiated the calculation for this rate plan charge. |
| CREATEDDATE | The date and time when this detail record was created. |
| ERRORDETAILS | The details of the error. |
| ERRORRECORDCOUNT | The total number of usage records with errors. |
| ID | The ID of the charge rating detail. |
| REFERENCE | The number of the corresponding bill run or request that triggered the calculation. |
| SUCCESSRECORDCOUNT | The number of usage records. |
| UPDATEDBYID | The ID of the user who last updated this record, should always match CreatedById. |
| UPDATEDDATE | The date and time when this record was last updated, should always match CreatedDate. |

### UsageRatingDetail columns

The following table lists the UsageRatingDetail columns that are displayed in the data query results at the usage record level.

| Column | Description |
| --- | --- |
| CALCULATIONDETAILS | The detailed price formula for calculation and resolved lookup values. |
| CHARGENUMBER | The number of the corresponding rate plan charge. |
| CHARGERATINGDETAILID | The ID of the corresponding charge rating detail. |
| CREATEDBYID | The ID of the user who initiated the calculations for this usage record. |
| CREATEDDATE | The date and time when this record was created. |
| ERRORDETAILS | The details of the error. |
| ERRORSEQUENCE | The sequence of the records in error. Use this to go thru all of the errors, once this field equals the ChargeRatingDetail.ErrorRecordCount. |
| ID | The ID of the usage rating detail. |
| RECORDSEQUENCE | The sequence of the usage record calculation, given all the usage records considered for this charge. |
| REFERENCE | The number of the corresponding bill run or request that triggered this calculation. |
| SUCCESS | Whether the usage record was calculated successfully. |
| UPDATEDBYID | The ID of the user who last updated this record, should always match CreatedById. |
| UPDATEDDATE | The date and time when this record was last updated, should always match CreatedDate. |
| USAGEID | The ID of the usage record. |
