---
title: "Create invoice schedules for ramp deals"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-invoice-schedules-for-ramp-deals"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:28.046Z"
---

# Create invoice schedules for ramp deals

Create invoice schedules for ramp deals by enabling necessary features and following specific steps in the Orders UI.

Before creating invoice schedules for ramp deals, ensure you finish the following settings:

-   Enable the Billing Schedule feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

-   Enable the Ramps feature with the self-serve interface. For more information, see Enable billing features by yourself .

-   In the Orders or Orders Harmonization tenant, set the Enable Ramp for Orders? setting to Yes by navigating to Billing Settings > Default Subscription and Order Settings in Orders UI.

-   Read the import notes before creating invoice schedules.


You can create invoice schedules for a ramp deal through the Billing Schedule feature. To create invoice schedules for a ramp deal, complete the following steps:

1.  Create an order to create a subscription with a ramp deal. For more information, see Create a Ramp Deal. For a 3-year contract similar to the below examples, you can specify the following fields for quick creation. Zuora automatically populates the interval start and end dates for your ramp deal.

    -   Terms and Conditions section:

        -   Term start date: 2023/01/01

        -   Initial term: 36 and period type: month

    -   Ramp section:

        -   Ramp: enabled

        -   Interval duration: Annual


2.  Create an invoice schedule. For more information, see Create Invoice Schedules .
3.  To add or replace a product in the ramp deal, perform one or more of the following tasks and then create another invoice schedule for the added product.

    -   Remove product

    -   Change terms and conditions of ramp deals

    -   Add products in ramp deals


    Note: You can read the basic Example 1 and other examples to learn more about creating invoice schedules for ramp deals.
