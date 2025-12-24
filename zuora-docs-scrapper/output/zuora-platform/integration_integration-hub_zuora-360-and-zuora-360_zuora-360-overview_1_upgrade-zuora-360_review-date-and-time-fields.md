---
title: "Review date  and time fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/upgrade-zuora-360/review-date-and-time-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:58.037Z"
---

# Review date and time fields

Review and update your custom code to accommodate changes in dateTime fields to Date type in Zuora WSDL version 69.

A number of dateTime type fields were changed to the Date type in the version 69 of Zuora WSDL. If you have custom code using Order Builder, follow the steps to review and update affected code:

1.  Review Date Field Changes in the SOAP API for the list of affected fields whose type was changed to Date from dateTime.
2.  Upgrade your Zuora WSDL version in the API Connection Setting to 69 or higher.
3.  Upload the version 69 or higer of Zuora WSDL in Schema Setup .
4.  Update your Order Builder code to reflect the changes. The following global methods were updated or added to support the changes related to time zone support in Zuora. Review your Order Builder code for the changes and make updates where needed.

| Global Method | Version Changed | Change |
| --- | --- | --- |
| Zuora.zUtil.getZuoraDate | 2.100 | The method now returns a string that includes the Salesforce user's time zone offset. |
| Zuora.zUtil.getZuoraDateOnly | 2.100 | The method returns a date only string for the Date type fields in version 69 or higher of Zuora WSDL. |
