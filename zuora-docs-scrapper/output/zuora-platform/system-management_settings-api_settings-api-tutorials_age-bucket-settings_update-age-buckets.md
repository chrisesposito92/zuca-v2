---
title: "Update Age Buckets"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/age-bucket-settings/update-age-buckets"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:38.151Z"
---

# Update Age Buckets

Learn how to update age buckets by the Settings API.

To update Aging Buckets, see the following request and a sample of 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/aging-buckets`

Request body:

{ "includeNegativeInvoice": true, "buckets": \[ { "name": "Current", "fromDaysPastDue": 0, "toDaysPastDue": 1 }, { "name": "1 to 30 days past due", "fromDaysPastDue": 2, "toDaysPastDue": 30 }, { "name": "31 to 60 days past due", "fromDaysPastDue": 31, "toDaysPastDue": 60 }, { "name": "61 to 90 days past due", "fromDaysPastDue": 61, "toDaysPastDue": 90 }, { "name": "91 to 120 days past due", "fromDaysPastDue": 91, "toDaysPastDue": 120 }, { "name": "more than 120 days past due", "fromDaysPastDue": 121, "toDaysPastDue": 151 } \] }

Response body:

{ "includeNegativeInvoice": true, "buckets": \[ { "name": "Current", "fromDaysPastDue": 0, "toDaysPastDue": 1 }, { "name": "1 to 30 days past due", "fromDaysPastDue": 2, "toDaysPastDue": 30 }, { "name": "31 to 60 days past due", "fromDaysPastDue": 31, "toDaysPastDue": 60 }, { "name": "61 to 90 days past due", "fromDaysPastDue": 61, "toDaysPastDue": 90 }, { "name": "91 to 120 days past due", "fromDaysPastDue": 91, "toDaysPastDue": 120 }, { "name": "more than 120 days past due", "fromDaysPastDue": 121, "toDaysPastDue": 151 } \] }
