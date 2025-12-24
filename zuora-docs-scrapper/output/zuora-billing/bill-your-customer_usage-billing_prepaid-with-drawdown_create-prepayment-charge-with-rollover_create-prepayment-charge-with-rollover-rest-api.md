---
title: "Create prepayment charge with rollover - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-prepayment-charge-with-rollover/create-prepayment-charge-with-rollover---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:46.041Z"
---

# Create prepayment charge with rollover - REST API

Learn how to use the REST API to create a prepayment charge with rollover, including mandatory fields and requirements.

You can use REST API to create a prepayment charge with rollover. Note that WSDL version 114+ is required for the `X-Zuora-WSDL-Version` header parameter. Determine the following mandatory fields specific to a prepayment charge:

| Field name | Type | Description |
| --- | --- | --- |
| isRollover | boolean | The value is either "True" or "False". It determines whether the rollover fields are needed. |
| rolloverApply | string | This field defines the priority of rollover, which is either first or last.Enum: ApplyFirst , ApplyLast |
| rolloverPeriods | number | This field defines the number of rollover periods, it is restricted to 3. |
| rolloverPeriodLength | integer | Use this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the rolloverPeriods field to 1. |
