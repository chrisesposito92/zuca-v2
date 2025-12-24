---
title: "AmendRequest"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/amendrequest"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:55.573Z"
---

# AmendRequest

The AmendRequest object is a parameter of the amend() call, which is used to request a subscription amendment.

## Supported calls

[amend()](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend) only

## Field descriptions

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| Amendments | optional | Object of type Amendment | Changes on a subscription. |
| AmendOptions | optional | complex | Specify billing options, such as invoice generation and when to process payments. |
| PreviewOptions | optional | complex | Preview an amendment before committing its changes to a subscription. |
