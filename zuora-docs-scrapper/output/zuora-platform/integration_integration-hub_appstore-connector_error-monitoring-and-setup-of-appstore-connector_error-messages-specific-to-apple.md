---
title: "Error Messages Specific to Apple"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/error-monitoring-and-setup-of-appstore-connector/error-messages-specific-to-apple"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:53.172Z"
---

# Error Messages Specific to Apple

This document details error messages specific to Apple Appstore Connectors v2, including issues with subscription receipts and cancellation processes.

The following error messages are specific to Apple Appstore Connectors v2:

| Error Message on Invoice | Description |
| --- | --- |
| No receipts found for subscription | The connector cannot find a receipt for a subscription ID that it pulled off a Zuora invoice. |
| Can’t cancel active Apple subscription | The receipt is still in billing retry in the Apple App Store.If the apple receipt is in billing retry, the Appstore Connector will not cancel the subscription. The next time the Appstore Connector is triggered, it will check if the subscription is still in billing retry. If the retry status has changed, it will cancel the subscription. |
| App receipt blank or has nothing in it | The receipt is incorrectly generated and has nothing in it |
| Latest receipt info is not present | The connector cannot find the information on the latest receipt. |
