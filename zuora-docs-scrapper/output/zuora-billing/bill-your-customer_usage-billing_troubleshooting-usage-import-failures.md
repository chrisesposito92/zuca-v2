---
title: "Troubleshooting usage import failures"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/troubleshooting-usage-import-failures"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:43.339Z"
---

# Troubleshooting usage import failures

Learn how to troubleshoot common issues with usage import failures, including upload and import errors, and understand the error messages that may occur.

Two types of failures may occur when uploading usage information:

-   Upload failure: If the file cannot be uploaded, Zuora will return you to the usage upload page. Verify that the file matches the usage file format, and then upload the file again. In this case, Zuora does not load any information. This type of failure can occur in either of the following situations:
    -   The file type is not recognized.
    -   The file is not encoded in UTF-8.
    -   The file is too large (greater than 4 MB).
    -   The system cannot detect the file name from the `Content-Type` . You need to provide the file name using the name parameter in your API call.
    -   A directory is contained in the zip file.
    -   Exceeds the maximum number of files in one zip file.
    -   The file has an MD5 verification error.
-   Import failure: If Zuora cannot import the data successfully, the system will return a `Failed Status | Import` `Processed` notification. If this occurs, verify that the file is correct, and then upload the file again.

## Import failure error messages

-   The ACCOUNT\_ID is missing
-   The ACCOUNT\_ID does not match
-   The UOM is missing
-   The Account status is not active
-   The UOM does not match
-   File Import Failed: The UOM {} does not match any existing charge
-   This usage record has been billed and cannt be updated
-   The QTY is missing
-   The QTY cannot be less than 0
-   The Usage STARTDATE cannot be after the ENDDATE
-   The Subscription is not ACTIVE
-   Invalid Subscription ID
-   Invalid Charge ID
-   The Charge is not ACTIVE
-   The Charge Type is not Usage
-   The Subscription ID and Charge ID do not match
-   The Charge and Billing Account do not match
-   Failed to import usage: An invalid character (emoticon) was identified
-   DESCRIPTION length is longer than the 200 character maximum
-   The Usage Quantity exceeds 13 digits before the decimal place, the maximum digits supported by the system
-   The Subscription and Billing Account do not match
-   The STARTDATE is missing
-   The STARTDATE format is invalid
-   The CustomFiled {} date format is invalid
-   The ENDDATE format is invalid
-   The required custom field:{} is missing
-   Invalid value for custom field: {}
-   The length of the following custom field is longer than its field length: {}
-   This row record has been omitted because all values are missing
-   Usage cannot be imported into a closed accounting period
-   File Import Failed: The unique-keys are the same at rows: {} {}
-   The Usage Upload Process was rejected. {} at row: {}

Note: {} indicates the relevant values that will be retrieved and displayed for the specific error.

## Dynamic pricing usage charges

Legacy Billing usage import does not support sending usage to dynamic pricing usage charges. When usage is associated with a dynamic pricing usage charge, Billing blocks operations through these legacy paths.

Remove those rows from the usage file, and use Mediation to ingest usage events for dynamic pricing usage charges instead.
