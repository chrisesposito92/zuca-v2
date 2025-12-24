---
title: "Export ZOQL"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile/datetime-field-behavior-after-changing-your-time-zone/export-zoql"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:13.971Z"
---

# Export ZOQL

Use this reference to learn how changing the time zone affects the Export ZOQL.

Example field: Account.CreateDate

| Export ZOQL query input | Value in CSV file | Explanation |
| --- | --- | --- |
| Account.CreateDate=2015-01-01T16:00:00 | 2015-01-01T16:00:00+01:00 | If you do not enter a time zone offset, your tenant time zone offset is added automatically. |
| Account.CreateDate=2015-01-01T16:00:00+01:00 | 2015-01-01T16:00:00+01:00 | If you input your tenant time zone offset, the value remains unchanged. |
| Account.CreateDate=2015-01-01T16:00:00+04:00 | 2015-01-01T13:00:00+01:00 | If you input a time zone offset different than your tenant time zone, the value is converted into your tenant time zone. |
| Account.CreateDate=2015-01-01T09:00:00+01:00 | 2015-01-01 | If the field value is midnight in Zuora system time, the CSV file only has the date part of the field value.In this example, 2015-01-01T09:00:00+01:00 is equal to 2015-01-01T00:00:00-08:00, which is midnight in Zuora system time, so only 2015-01-01 is included in the CSV file.Note: If you are using WSDL 68 or earlier, the CSV file only has the date part of the field value even if the field value is not midnight in Zuora system time. |
