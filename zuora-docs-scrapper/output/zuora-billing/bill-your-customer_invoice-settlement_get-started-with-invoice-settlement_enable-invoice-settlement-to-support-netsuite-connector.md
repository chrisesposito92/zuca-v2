---
title: "Enable Invoice Settlement  to support Netsuite connector"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:58.551Z"
---

# Enable Invoice Settlement to support Netsuite connector

Know how to enable Invoice Settlement to support Netsuite connector

If you are a Netsuite integration customer, migrating your Zuora account will not automatically migrate your Netsuite connector to support [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview).

Complete the following steps before you enable the Invoice Settlement in your tenant:

-   [Prepare data for migration](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/prepare-data-for-migration)

-   [Migrate Invoice Settlement data](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/migrate-invoice-settlement-data)

-   [Synchronize NetSuite Payments with Zuora post-upgrade](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/synchronize-netsuite-payments-with-zuora-post-upgrade)


## Managing connector instances in the new tenants

Each NetSuite Connector license includes two permanent connector instances. If additional permanent instances are required, an extra license must be purchased. As a result, you can re-use the existing AccountId and EnvironmentId from your existing sandbox and production instances that are running on the non-Invoice settlement tenant to the new tenant with Invoice Settlement enabled.

Once the connector's instance details have been updated in the new tenant, please create a new Zuora OAuth to reflect the changes in Zuora tenant.

The NetSuite credentials can remain as is if the target NetSuite remains the same.
