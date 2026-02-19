---
title: "SOAP API"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone/soap-api"
product: "zuora-platform"
scraped_at: "2026-02-19T03:20:29.062Z"
---

# SOAP API

Use this reference to learn how changing the time zone affects the SOAP API.

Example field: Usage.StartDateTime

| Example input value | Response value | Explanation |
| --- | --- | --- |
| 2015-01-01T16:00:00 | 2015-01-01T16:00:00+01:00 | If you do not enter a time zone offset, your tenant time zone offset is added automatically. |
| 2015-01-01T16:00:00+01:00 | 2015-01-01T16:00:00+01:00 | If you input your tenant time zone offset, the value remains unchanged. |
| 2015-01-01T16:00:00+04:00 | 2015-01-01T13:00:00+01:00 | If you input a time zone offset different than your tenant time zone, the value is converted into your tenant time zone. |
