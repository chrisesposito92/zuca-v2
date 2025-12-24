---
title: "Retrieve rating details at the charge level"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records/retrieve-rating-details-at-the-charge-level"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:43.884Z"
---

# Retrieve rating details at the charge level

Learn how to retrieve and download charge-level rating details using a SQL query, and understand the information contained in the resulting CSV file.

To retrieve rating details at the charge level, enter the following SQL query into the text box on the Create Data Query page:

Select \* from ChargeRatingDetail where Reference = 'BR-00000041'

After running the data query, you can download the query result in CSV format. The following table lists the information contained in the CSV file

| Column | Row value |
| --- | --- |
| billingperiodenddate | 20/8/1 |
| billingperiodstartdate | 20/7/1 |
| chargenumber | C-00000098 |
| createdbyid | 11e643f4-a3f8-a9da-b061-0025904c57d6 |
| createddate | 2020-07-17T23:33:51.802Z |
| errordetails | {"errorCode":"UNKNOWN_ERROR","additionalDetails":"Failed to rate one or more usages, please see usage level details"} |
| errorrecordcount | 1 |
| id | fbe29496-b50f-429e-b32b-2dea5e0a4c5f |
| reference | BR-00000041 |
| successrecordcount | 1 |
| updatedbyid | 11e643f4-a3f8-a9da-b061-0025904c57d6 |
| updateddate | 2020-07-17T23:33:51.802Z |

The value of the errordetails column indicates that an error occurs at the usage record level. You can retrieve rating details at the usage record level for more information.
