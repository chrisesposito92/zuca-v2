---
title: "Usage records update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/usage-records-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:57.444Z"
---

# Usage records update

This reference document provides a list of all fields in the Update Usage data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Usage | Id* | string | Required for updating field usage | Object id |
| Usage | End Date Time | string <date-time> | Optional | The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation. Character limit: 29 Values: a valid date and time value. |
| Usage | Quantity | number <double> | Optional | Indicates the number of units used. Character limit: 16 Values: A valid decimal amount. |
| Usage | RBE Status | string | Optional | Indicates if the rating and billing engine (RBE) processed usage data for an invoice. Character limit: 9 Values: automatically generated to be one of the following values: Importing, Pending, Processed. |
| Usage | Start Date Time | string <date-time> | Optional | The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the EndDateTime, the StartDateTime field does affect usage calculation. Character limit: 29 Values: a valid date and time value. |
| Usage | Unit Of Measure | string | Optional | Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Billing Settings. Character limit: Values: a valid unit of measure |
