---
title: "Configure Minimum Commitment"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/minimum-commitment/configure-minimum-commitment"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:22.937Z"
---

# Configure Minimum Commitment

The Minimum Commitment app is in maintenance mode and is intended for existing customers. Follow these steps to configure the app after purchase and installation.

Note:

The Minimum Commitment app is not available for purchase anymore and is in maintenance mode. The information in this documentation is intended to be used by customers who have purchased the app.

After purchasing and installing the Minimum Commitment app, you need to perform the following steps to set up the app:

-   Configure the Minimum Commitment app notifications

-   Configure the Minimum Commitment app custom fields


1.  Navigate to in the left navigation menu in the Zuora UI.
2.  Locate the Completed Status notification defined on the Billing Run Completion event and click the Edit icon.
3.  Complete notification details.

    | Field | Description |
    | --- | --- |
    | Basic Information |  |
    | Name | Can be changed for easier tracking |
    | Description | Can be changed for easier tracking |
    | Active | Must be enabled |
    | Event Parameters |  |
    | Bill Run Status | Completed |
    | Delivery Options |  |
    | Email | System alert that Zuora has finished generating invoices.Once invoices are created, Minimum Commitment app will run. |
    | Callout | Must be enabled |
    | Base URL | Enter Endpoint URL from app installation into tenant. You can select Add Parameter to add new field.Parameter Name - BillRunIDParameter Value - BillRun.ID from Legacy Fields |
    | HTTP Method | Set this field to GET |
    | Retry | Set this field to 0 (zero). |
    | Callout Authentication | Must be enabledUsername - Enter Zuora Connect usernamePassword - Enter unique API Token from Connect profile |

4.  Click Save.

See [Using Minimum Commitment](/zuora-platform/integration/integration-hub/minimum-commitment/using-minimum-commitment) for more information.
