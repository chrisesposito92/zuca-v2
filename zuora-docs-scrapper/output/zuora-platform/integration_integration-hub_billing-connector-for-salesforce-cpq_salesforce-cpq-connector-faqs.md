---
title: "Salesforce CPQ connector FAQs"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-faqs"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:29.328Z"
---

# Salesforce CPQ connector FAQs

This document provides answers to frequently asked questions about the Salesforce CPQ connector, including sync operations, auto-sync functionality, and multi-entity support.

This article contains answers to frequently asked questions about Salesforce CPQ connector. If you have a question not covered here, don't hesitate to ask in the [Community](https://community.zuora.com/home?CommunityKey=97a86af4-c370-4d23-a12b-296d4d7a1bcd&_ga=2.133956302.176980731.1693150186-663368165.1681877703&_gl=1*1ugnzti*_ga*NjYzMzY4MTY1LjE2ODE4Nzc3MDM.*_ga_MY8CQ650DH*MTY5MzIzMDQyOS41MC4xLjE2OTMyMzM2OTIuMjUuMC4w) Group or reach out to [Zuora Global Support](https://www.zuora.com/ace/?_ga=2.172625635.176980731.1693150186-663368165.1681877703&_gl=1*zhq3y9*_ga*NjYzMzY4MTY1LjE2ODE4Nzc3MDM.*_ga_MY8CQ650DH*MTY5MzIzMDQyOS41MC4xLjE2OTMyMzI4ODcuNTEuMC4w).

We are continually updating the list.

Question: How are changes made in Zuora synced back to Salesforce post-initial sync?

Answer: Changes made in Zuora can be synced back to Salesforce using the Zuora 360 sync feature.

Question: What is the maximum number of records that can be synced during one sync operation?

Answer: During the syncing of an order or account, a maximum of 50 related objects can be synced together.

Question: Does the connector support auto-sync functionality?

Answer: Currently, the connector only supports on-demand sync. However, ongoing enhancements are being made to introduce auto-sync functionality in the future.

Question: How is order deletion handled in Salesforce?

Answer: Manual intervention is required to delete orders in Zuora. Alternatively, cancellation amendments, supported out of the box, can be used as an alternative method for handling order deletion in Salesforce.

Question: Does the connector facilitate multi-org or multi-entity environments?

Answer: The connector currently lacks support for these, but we're actively working on expanding its capabilities.
