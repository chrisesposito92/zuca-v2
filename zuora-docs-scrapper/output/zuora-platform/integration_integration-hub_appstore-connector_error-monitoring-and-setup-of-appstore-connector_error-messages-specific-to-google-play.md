---
title: "Error Messages Specific to Google Play"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/error-monitoring-and-setup-of-appstore-connector/error-messages-specific-to-google-play"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:55.892Z"
---

# Error Messages Specific to Google Play

This document details error messages specific to Google Play Appstore Connectors v2, including issues with receipts, subscriptions, and API requests.

The following error messages are specific to Google Play Appstore Connectors v2:

| Error Message on Invoice | Description |
| --- | --- |
| Latest receipt info is not present | The Appstore Connector cannot find the information on the latest receipt. |
| Subscription cannot be termed | The subscription should be set to "Evergreen". |
| No Purchase Date could be located on the Receipt | No purchase date is found in the receipt. |
| Error in API request to GooglePlay {response.body} | Errors exist in the API request to Google Play. Check the API request and the configuration. |
| Missing Data: {field} is blank | The indicated required field requires a value. |
