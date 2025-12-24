---
title: "Migrate data through standalone invoices for distributor accounts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts/reseller-account/migrate-data-through-standalone-invoices-for-distributor-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:41.980Z"
---

# Migrate data through standalone invoices for distributor accounts

This task topic explains how to migrate and process large volumes of invoices for distributor accounts using standalone invoices and REST API.

You want to migrate over 200,000 invoices under an account during the migration phase. After going live, you have to process around 30,000 invoices for such accounts every day.

To migrate ad process large volumes of invoices, perform the following steps:

1.  Update an existing invoice owner account by setting the `partnerAccount` field to true.
2.  Create standalone invoices through the REST API in multiple requests.
3.  Use the Retrieve an account or Retrieve an account summary operation to check the value of the `lastMetricsUpdate` field for the accounts after all standalone invoices are created and uploaded.
