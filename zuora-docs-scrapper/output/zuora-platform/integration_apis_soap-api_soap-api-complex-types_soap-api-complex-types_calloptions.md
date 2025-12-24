---
title: "CallOptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/calloptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:05.895Z"
---

# CallOptions

The CallOptions object is used by the create() call when creating an amendment in a single call.

It is only used in versions 25.0+ of the SOAP API. This complex type ensures that if one of the operations fails (either create or activate), the entire action will be rolled back.

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| useSingleTransaction | Yes | boolean | Specifies whether Zuora will create and activate an InvoiceItemAdjustment or Amendment within a single API call. Zuora recommends that you set this to True . If you do not pass CallOptions, Zuora assumes you are not trying to create and activate an amendment in a single call.Allowable values: true , false |
