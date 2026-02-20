---
title: "Feature import"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/feature-import"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:46.683Z"
---

# Feature import

This reference details all the the fields associated with the Feature Import data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Field Name | Description | Value | Required to create |
| --- | --- | --- | --- |
| Feature Code* | Unique code of the feature | String <= 255 characters | Required to create the record |
| Name* | Name of the feature | String <= 255 characters | Required to create the record |
| Description | Description of the feature | String <= 1000 characters | Optional |
| Status | Status of the feature: Active or Inactive | String <= 8 characters | Optional |
