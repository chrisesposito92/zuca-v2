---
title: "Get Age Buckets"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/age-bucket-settings/get-age-buckets"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:35.695Z"
---

# Get Age Buckets

Learn how to get age buckets by the Settings API.

To get Age of Buckets, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/aging-buckets`

Response body:

{ "includeNegativeInvoice": true, "buckets": \[ { "name": "Current", "fromDaysPastDue": 0, "toDaysPastDue": 0 }, { "name": "1 to 30 days past due", "fromDaysPastDue": 1, "toDaysPastDue": 30 }, { "name": "31 to 60 days past due", "fromDaysPastDue": 31, "toDaysPastDue": 60 }, { "name": "61 to 90 days past due", "fromDaysPastDue": 61, "toDaysPastDue": 90 }, { "name": "91 to 120 days past due", "fromDaysPastDue": 91, "toDaysPastDue": 120 }, { "name": "more than 120 days past due", "fromDaysPastDue": 121, "toDaysPastDue": 151 } \] }
