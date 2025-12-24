---
title: "Retrieve rating details at the usage record level"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records/retrieve-rating-details-at-the-usage-record-level"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:46.162Z"
---

# Retrieve rating details at the usage record level

Learn how to retrieve and analyze rating details at the usage record level using SQL queries and CSV downloads.

To retrieve rating details at the usage record level, enter the following SQL query into the text box on the Create Data Query page:

Select \* from UsageRatingDetail where Reference = 'BR-00000041'

After running the data query, you can download the query result in CSV format. The following table lists the information contained in the CSV file.

| Column | Usage record 1 | Usage record 2 |
| --- | --- | --- |
| calculationdetails | {"formula":"UsageQuantity() * fieldLookup(\"usage\", \"rate__c\")","fieldLookups":{"usage.rate__c":1.0}} |  |
| chargenumber | C-00000098 | C-00000098 |
| chargeratingdetailid | fbe29496-b50f-429e-b32b-2dea5e0a4c5f | fbe29496-b50f-429e-b32b-2dea5e0a4c5f |
| createdbyid | 11e643f4-a3f8-a9da-b061-0025904c57d6 | 11e643f4-a3f8-a9da-b061-0025904c57d6 |
| createddate | 2020-07-17T23:33:52.026Z | 2020-07-17T23:33:52.048Z |
| errordetails |  | {"errorCode":"MISSING_CUSTOM_FIELD","additionalDetails":"Invalid value for for pre-rated custom field [rate__c], required a numeric value, was: null"} |
| errorsequence |  | 1 |
| id | 2d862214-fc6b-4480-a5c3-8af35a437ec2 | a856046f-af4f-4cef-ba70-b865901394f0 |
| recordsequence | 1 | 2 |
| reference | BR-00000041 | BR-00000041 |
| success | TRUE | FALSE |
| updatedbyid | 11e643f4-a3f8-a9da-b061-0025904c57d6 | 11e643f4-a3f8-a9da-b061-0025904c57d6 |
| updateddate | 2020-07-17T23:33:52.026Z | 2020-07-17T23:33:52.048Z |
| usageid | 2c92c0f8735614e101735f1fef4179df | 2c92c0f8735614e101735f1fcd137922 |

The first usage record, based on the `recordSequence` field value 1, shows success, as expected, since a proper value for the `rate__c` custom field was set.

The value of the `errordetails` field for usage record 2 indicates that an invalid value was specified for the `rate__c` custom field -- it was missing. You have to specify a valid numeric value for the `rate__c` custom field of the usage record so that the usage record can be uploaded successfully.

Note that even after correcting the `rate__c` custom field on usage record 2, usage record 1 will likely fail, if the other custom field, the `total__c` field, is not set for both usage records.
