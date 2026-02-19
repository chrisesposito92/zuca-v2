---
title: "Post invoices"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/invoices/post-invoices"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:29.223Z"
---

# Post invoices

This reference document lists the various fields associated with the Post Invoices data dictionary.

This article lists the various fields associated with the Post Invoices data dictionary in detail.

Note: Fields with an asterisk mark indicate mandatory fields.

Note:

Please consult your Administrator before proceeding, as this action is essential for accuracy of financial records.

| Object | Field Name | Value | Required to Post | Description |
| --- | --- | --- | --- | --- |
| Invoice | Id* | string | Required for Posting Invoice | The ID of the invoice to be posted. |
| Invoice | Invoice Date | string <date> | Optional | The date that appears on the invoice being created, in yyyy-mm-dd format. The value cannot fall in a closed accounting period. |
