---
title: "Generic Error Messages"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/error-monitoring-and-setup-of-appstore-connector/generic-error-messages"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:58.449Z"
---

# Generic Error Messages

This document provides a list of generic error messages applicable to all Appstore Connectors, along with their descriptions.

The following table lists the error messages that are applicable to all Appstore Connectors types:

| Error Message on Invoice | Description |
| --- | --- |
| Invoice has invoice items from more than one invoice | The connector does not know which invoice items to process first for a particular subscription. |
| Connector only supports month-based subscription terms | The connector encounters subscriptions that are neither "Evergreen" nor "Monthly". |
| Termed subscriptions should not be set to auto renew for non-renewing apple receipts | See Apple Receipts and Zuora Subscriptions for more information. |
| Cannot process invoice until earlier invoice of subscription has been processed | Invoices must be processed in sequence based on creation dates. This is why the connector sorts invoices by the creation date before executing the processing logic. |
| No receipts found for subscription | The connector cannot find a receipt for a subscription ID that it pulled off from a Zuora invoice. |
| Multiple 'Active' receipts found for subscription | Multiple receipts are found by the connector with the same Subscription ID. |
| Expected one of the following renewal periods for a sandbox receipt: 5, 10, 15, 30, 60 minutes. | The renewal interval for a sandbox receipt allows only the following values (in minutes): 5, 10, 15, 30, and 60. Make sure you use one of these values to schedule receipt renewal. |
| The data in the receipt-data property was malformed or missing. | The JSON object that you have created and sent for verification is in the incorrect format. |
| You can not adjust the invoice balance from a negative amount to a positive amount. | You cannot adjust a negative invoice balance to positive. |
