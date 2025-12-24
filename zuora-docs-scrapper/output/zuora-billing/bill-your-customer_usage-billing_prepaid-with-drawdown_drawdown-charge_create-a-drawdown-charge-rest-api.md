---
title: "Create a drawdown charge - REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/drawdown-charge/create-a-drawdown-charge---rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:17.910Z"
---

# Create a drawdown charge - REST API

This guide explains how to use the REST API to create a drawdown charge, including required fields and a sample request.

You can use the [CRUD: Create a product rate plan charge](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/) operation to create a drawdown charge. WSDL version 114+ is required for the `X-Zuora-WSDL-Version` header parameter.

Configure the following mandatory fields specific to a drawdown charge:

| Field name | Type | Description |
| --- | --- | --- |
| IsPrepaid | boolean | Set to true for drawdown charge. |
| PrepaidOperationType | string(enum) | The type of this charge. Values: topup or drawdown . Set to drawdown for drawdown charge. |
| DrawdownRate | decimal | Conversion rate between Usage UOM and Drawdown UOM.Must be a positive number (>0).Must be 1 when Usage UOM and Drawdown UOM are the same.If both DrawdownRate and DrawdownUom are empty, the system will set default values respectively:DrawdownRate : 1DrawdownUom : Same as the Usage UOM of this drawdown charge.DrawdownRate and DrawdownUom need to have values or be empty at the same time. |
| DrawdownUom | string | Unit of measurement for this drawdown charge, should be the same as the PrepaidUOM configured in its paired prepayment charge. |
| test | test | test |

## Sample REST API request to create a monthly recurring drawdown charge

Request: `POST /v1/object/product-rate-plan-charge`

Request Body: { "AccountingCode":"Accounts Receivable", "BillingPeriodAlignment":"AlignToCharge", "ChargeModel": "Per Unit Pricing", "BillingPeriod": "Month", "BillCycleType":"DefaultFromCustomer", "ChargeType":"Usage", "Name": "Drawdown", "ProductRatePlanChargeTierData": { "ProductRatePlanChargeTier": \[ { "Active": true, "Currency":"USD", "Price":"5" } \] }, "ProductRatePlanId":"2c92c0f87a85be74017a88ee747862a8", "TriggerEvent":"ContractEffective", "UOM":"Million calls", //Fields related to drawdown charge "IsPrepaid" : true, "PrepaidOperationType": "drawdown", "DrawdownUom" : "Million calls", "DrawdownRate": 1, }
