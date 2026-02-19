---
title: "Usage"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/usage"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:17.096Z"
---

# Usage

This reference document lists all the fields related to usage data dictionary.

Usage is the amount of resources a customer uses. You can track the usage of metered resources, then charge based on the amount that your customers consume.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Account Id | The ID of the account associated with the usage data. | Alphanumeric |
| Account Number* | The number of the account associated with the usage data. | Alphanumeric |
| Charge Id | The OrginalId of the rate plan charge related to the usage record. | Alphanumeric |
| Charge Number | A unique number for the rate plan charge related to the usage record | Alphanumeric |
| Description | A description of the usage data. | Alphanumeric |
| End Date Time | The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation. | Date(YYYY-MM-DDTHH:MM:SS (or) YYYY-MM-DDTHH:MM:SS[+-]HH:MM) |
| Quantity* | Indicates the number of units used. | Decimal{22,9} |
| Start Date Time* | The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the EndDateTime, the StartDateTime field does affect usage calculation. | Date(YYYY-MM-DDTHH:MM:SS (or) YYYY-MM-DDTHH:MM:SS[+-]HH:MM) |
| Subscription Id | The OriginalId of the subscription that contains the fees related to the usage data. | Alphanumeric |
| Subscription Number | The name* of the subscription that contains the fees related to the usage data. | Alphanumeric |
| Unique Key | The field is only available if you have Prepaid with Drawdown feature enabled. A customer-defined specific identifier of a usage record | Alphanumeric |
| Units of measure* | Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in Z-Billing > Settings. | Alphanumeric |
