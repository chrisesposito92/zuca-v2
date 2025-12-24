---
title: "Request: AmendRequest"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:23.583Z"
---

# Request: AmendRequest

Use this reference to learn the AmendRequest objects and containers.

Pass an AmendRequest wrapper with the amend() call. `AmendRequest` is a wrapper that includes an object and containers.

## AmendRequest objects and containers

| Name | Required? | Description |
| --- | --- | --- |
| Amendment (object) | required | Make changes on a subscription. |
| AmendOptions (container) | required | Specify billing options. |
| PreviewOptions (container) | optional | Preview an amendment before committing its changes to a subscription. |
| ExternalPaymentOptions (container) | optional | Create or change a subscription and mark its invoice as already paid. |

## Containers

Containers go inside an `AmendRequest` wrapper.

See the following pages for container details:

-   [AmendOptions](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/amendoptions)

-   [PreviewOptions](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/previewoptions)

-   [ExternalPaymentOptions](/zuora-platform/integration/apis/soap-api/soap-api-calls/amend/request-amendrequest/externalpaymentoptions)
