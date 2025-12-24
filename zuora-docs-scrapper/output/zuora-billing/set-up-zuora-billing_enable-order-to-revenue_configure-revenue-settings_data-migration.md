---
title: "Data migration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/data-migration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:08.688Z"
---

# Data migration

Learn how to perform data migration to generate transactions for historical data and view migration logs in your Billing tenant.

On the Data Migration page, you can perform data migration to generate booking, billing, and revenue recognition events transactions for historical data in your Billing tenant. You can also view the migration logs for your tenant.

To access the Data Migration page, click your username at the top right and navigate to Revenue > Data Migration .

Note:

You must perform data migration when enabling the Order to Revenue feature for an existing Billing tenant. Data migration must be performed after configuring the revenue settings and performing the data backfill. For more information about the required operation sequence, see Implementation guide .

Also, perform data migration only once before your tenant goes live. After your tenant goes live, if you perform data migration again, data inconsistency occurs between Zuora Billing and Zuora Revenue.
