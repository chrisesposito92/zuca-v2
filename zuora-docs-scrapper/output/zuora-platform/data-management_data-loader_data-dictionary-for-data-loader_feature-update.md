---
title: "Feature update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/feature-update"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:14.583Z"
---

# Feature update

This reference details all the the fields associated with the Feature Update data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Field Name | Description | Value | Required to create |
| --- | --- | --- | --- |
| Id* | Object id | String | Required to update the record |
| Description | Description of the feature. | String <= 1000 characters | Optional |
| Feature Code | Unique code of the feature. | String <= 255 characters | Optional |
| Name | Name of the feature. | String <= 255 characters | Optional |
| Status | Status of the feature: Active or Inactive. | String <= 8 characters | Optional |
