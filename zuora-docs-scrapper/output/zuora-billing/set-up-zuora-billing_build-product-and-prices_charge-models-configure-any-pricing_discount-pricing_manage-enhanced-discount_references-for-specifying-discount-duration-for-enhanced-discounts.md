---
title: "References for specifying discount duration for enhanced discounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/manage-enhanced-discount/references-for-specifying-discount-duration-for-enhanced-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T04:58:24.649Z"
---

# References for specifying discount duration for enhanced discounts

This reference provides guidelines for specifying discount durations using the startDatePolicy and endDatePolicy fields in the Create an order API operation, including required fields and values.

Before specifying the discount duration, we recommend you read the Enhanced discount use cases first. When setting the `startDatePolicy` and `endDatePolicy` fields through the[Create an order](https://www.zuora.com/developer/api-references/api/operation/POST_Order/)API operation, you also need to set other required fields.

The following table lists the values of the `startDatePolicy` field and additional required fields.

| startDatePolicy values | Required fields |
| --- | --- |
| aligntoApplyToCharge | N/A |
| EndOfLastInvoicePeriodOfApplyToCharge | N/A |
| SpecificDate | specificTriggerDate |
| FixedPeriodAfterApplyToChargeStartDate | startPeriodsType : Days , Weeks , Months , YearsperiodsAfterChargeStart : number |

The following table lists the values of the `endDatePolicy`field and additional required fields.

| endDatePolicy values | Required fields |
| --- | --- |
| aligntoApplyToCharge | N/A |
| fixedPeriod | upToPeriodsType: Billing_Periods, Days, Weeks, Months, YearsupToPeriods: number |
| specificEndDate | specificEndDate |
