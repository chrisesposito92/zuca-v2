---
title: "Create a prepayment charge - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-charge/create-a-prepayment-charge---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:07.612Z"
---

# Create a prepayment charge - REST API

This document provides instructions on using the REST API to create a prepayment charge, including configuring mandatory fields and sample request details.

You can use the [CRUD: Create a product rate plan charge](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/) operation to create a prepayment charge. WSDL version 114+ is required for the `X-Zuora-WSDL-Version` header parameter.

Configure the following mandatory fields specific to a prepayment charge:

| Field name | Type | Description |
| --- | --- | --- |
| IsPrepaid | boolean | Set to true for prepayment charge. |
| PrepaidOperationType | string(enum) | The type of this charge. Values: topup or drawdown . Set to topup for prepayment charge. |
| PrepaidQuantity | decimal | The number of units included in this prepayment charge. Must be positive (>0). |
| PrepaidUom | string | Unit of measurement for this prepayment charge. |
| ValidityPeriodType | string(enum) | The period in which those prepayment units are valid to use. One of the following values:SUBSCRIPTION_TERMANNUALSEMI_ANNUALQUARTERMONTH |
| CreditOption | string(enum) | The way to calculate credit. One of the following values ( Default to TimeBased if no value is specified):TimeBasedConsumptionBasedFullCreditBack |

## Sample REST API request to Create a monthly recurring prepayment charge

Request: `POST /v1/object/product-rate-plan-charge`

Request Body:{ "Name": "Monthly Plan", "ChargeModel": "Flat Fee Pricing", "BillingPeriod": "Month", "BillCycleType":"DefaultFromCustomer", "ChargeType":"Recurring", "ProductRatePlanChargeTierData": { "ProductRatePlanChargeTier": \[ { "Active": true, "Currency":"USD", "Price":"20" } \] }, "ProductRatePlanId":"2c92c0f87a85be74017a88ee747862a8", "TriggerEvent":"ContractEffective", "BillingPeriodAlignment":"AlignToCharge", "AccountingCode":"Accounts Receivable", //Fields related to prepayment charge "IsPrepaid":true, "PrepaidOperationType":"topup", "PrepaidQuantity":"1", "PrepaidUom":"Million calls", "ValidityPeriodType":"MONTH" }
