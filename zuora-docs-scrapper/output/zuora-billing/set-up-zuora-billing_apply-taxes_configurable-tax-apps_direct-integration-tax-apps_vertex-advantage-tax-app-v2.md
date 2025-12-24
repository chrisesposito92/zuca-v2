---
title: "Vertex Advantage Tax app v2"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/direct-integration-tax-apps/vertex-advantage-tax-app-v2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:06:28.569Z"
---

# Vertex Advantage Tax app v2

Upgrade to Vertex Advantage Tax app v2 for improved features and support, as v1 will no longer be maintained.

## Prerequisites

Before upgrading to Vertex Advantage Tax app v2, ensure the following prerequisites are met:

-   Activate the Connect Tax Engine feature before transitioning to v2.


Note:

Version 2 (v2) of the Vertex Advantage Tax app has significantly improved compared to its predecessor, the Vertex Advantage Tax Connector app (v1). It is strongly recommended to switch to v2 going forward, as v1 will no longer receive development and support.

Zuora's tax integration is built on Taxamo's v2 RESTful API. Other versions, such as v1 or v3, are not supported. For more information, refer to the [Taxamo V2 API Reference](https://developer.vertexinc.com/vertex-e-commerce/reference/introduction).

## Overview

Refund items are treated differently in the current connector(v1) compared to the updated version(v2). Understand this by reviewing the specifics below.

## Behavior Change

| Version | Handling of credit |
| --- | --- |
| v1 | Credits are treated as refunds. |
| v2 | Credits are handled as negative amounts. |
