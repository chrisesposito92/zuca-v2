---
title: "Data Loader FAQs"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/data-loader-faqs"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:41.402Z"
---

# Data Loader FAQs

This document provides answers to frequently asked questions about the Zuora Data Loader, covering topics such as permissions, enablement, learning resources, supported objects, and error handling.

## Learning more about Data Loader

Q: I am used to Developer Tools and the templates supported by Developer Tools. How can I learn more about Data Loader?

A: The reference material for Data Loader is available in the following resources:

-   [Get Started with Data Loader](/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/create-a-new-job-in-data-loader)
-   [Data Loader List view Page](/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/data-loader-summary-and-icons-on-list-view)
-   [Understanding Field Mapping in Data Loader](/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/best-practices-for-accurate-field-mapping)
-   [Zuora University Course on Data Loader](https://accounts.skilljar.com/accounts/login/?t=1tfzciqy110l5&d=2i36p8vnff3fh&next=%2Fauth%2Fendpoint%2Flogin%2Fresult%3Fnext%3D%252Fdata-loader%253F_gl%253D1%252A16itq63%252A_gcl_au%252AMzAzMjUyNDQ2LjE3NTU3Nzk0MDc.%252A_ga%252AODkxMjAwOTM1LjE3NTU3Nzk0MTE.%252A_ga_MY8CQ650DH%252AczE3NTk0OTcwNzkkbzIxNyRnMSR0MTc1OTQ5ODU4OCRqNjAkbDAkaDEyODMwNDgxNzA.%26d%3D2i36p8vnff3fh)


Q. I don't understand what value I must assign to the `IsMarker Column,` True or False?

A: The `IsMarker` Column in Data Loader is an attempt for preparing a flat file for the nested objects in Zuora Billing and Payments. By Nested objects, we mean the objects that have an array of objects within the payload.

When the user is creating a new record the value of the IsMarker Column should be true. However, the value of the IsMarker Column can be left blank or made as False when adding the line items to the same record. For example, when creating or updating a new Invoice the IsMarker Column value should be True but when adding line items for the same Invoice, the IsMarker Column should be left blank, if not applicable. The Required or Mandatory fields are required when the IsMarker Column is marked as True otherwise these fields can be ignored.

Q: What are the objects supported in Data Loader?

A: Refer to the complete lit of Data Dictionary on object coverage.

Q: What are the date formats supported by Data Loader?

A: Data Loader supports the Date Formats that are supported by the Rest APIs in Billing. Refer to the Data Dictionary of the object for learning about the supported Date Format. See the API documentation for the object on [Zuora Developer Centre](https://developer.zuora.com/v1-api-reference/introduction/).

## Understanding Errors

Q: How do I understand the errors?

A: Data Loader is built on the Rest APIS, the following error codes from the API.

Q: I used 'update' --> 'product rate plan charge' as the base object --> reduced the columns in the template to only include relevant fields --> populated with values - upload the template.

Result shows 0 records processed / successful / failed - any idea what I did wrong? Or there are no successful or failed records after submitting a job.

A: In such scenarios, check the CSV. The IsMarker Column denotes a new object. The value has to be True when creating or updating a record but it can be left blank/False for the line items within that object. In the above example, the user was able to make a successful job by: Please mark the IsNew Marker for ProductRatePlan Charge as True. This is applicable for all the templates.

Q: I'm trying to upload a sample csv and getting format issues. Not sure what's the issue with the format. After I manually edit the number format and resubmit it blanks out everything.

A: Review the csv, one thing to note is that the `Tier.Number` column is out of sync, it has to be after the `IsNew.Tier` marker column, else it will be ignored

All fields of a child object (or those relating to a marker col) have to be after the marker col, else they will be ignored.

Q: Are there any sample files?

A: See [Guidelines for CSV file upload in Data Loader](/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/nested-objects-handling-for-csv-templates) .

Q: The file is failing with the error: "Duplicate Header". What does this error mean?

A: The csv file that has been prepared and uploaded has duplicate columns. For resolving this error, check your csv for duplicate columns and remove the extra columns.

Q: What is this icon on the validation screen? It is not in the csv? How to resolve this?

![Validation screen icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5bbf4935-b8bd-4a63-916c-84fff584cb5f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjViYmY0OTM1LWI4YmQtNGE2My05MTZjLTg0ZmZmNTg0Y2I1ZiIsImV4cCI6MTc2ODYwMDcxNiwianRpIjoiYTk3MDJlZTM0YzVkNGYzYmEyMTViYzk2ZmIyZTViMjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.Sdr_BfKnpnjf9ohIxmDezF7VtN4FZJjtiLVZOTLuuvU)

A: This is BOM or Byte Order Mark. A Byte Order Mark (BOM) is a special character at the beginning of a text file that indicates its encoding. In UTF-8 encoding, the BOM is optional and consists of the byte sequence. Zuora Data Loader: Zuora's Data Loader does not support CSV files containing a BOM. Uploading such files will result in job failures. It's recommended to save CSV files in UTF-8 encoding without a BOM when using Zuora's Data Loader.

Q: When creating records on Product Rate Plan Charge, I got the following error, what does this mean?

MISSING\_REQUIRED\_VALUE: The accounting code for the \[RecognizedRevenueAccount DeferredRevenueAccount\] finance accounts cannot be blank. Please select a valid accounting code.

A: When the value of Allow blank Accounting Codes under Finance Settings on Accounting Rules is No, it is required to provide a value of Recognized Revenue Account and Deferred Revenue Account otherwise if Allow Blank Accounting Codes is Yes, the above mentioned fields are optional.

Q: m trying to load the Account file via Data loader in SBX. And, am getting error as: File contains Duplicate Columns. But don't find any in the file.

A: In such a scenario, check the csv file. If it contains two extra columns as shown in the image below, remove these columns and try again.

![CSV file blank column](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7e8247de-85db-42a5-adf1-b4252d0c3e66?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdlODI0N2RlLTg1ZGItNDJhNS1hZGYxLWI0MjUyZDBjM2U2NiIsImV4cCI6MTc2ODYwMDcxNiwianRpIjoiOWRiYWU0ZWRhMWU0NDlkOWI3MTk0ODFkYmNjYjUyNDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.n3ri--vPpspuu1_LDt0KRvMTxn7tv3fI4k8FVwnLvKo)
