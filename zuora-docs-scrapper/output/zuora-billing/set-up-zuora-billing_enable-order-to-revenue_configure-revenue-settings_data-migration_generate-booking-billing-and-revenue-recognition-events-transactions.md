---
title: "Generate booking, billing, and revenue recognition events transactions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/data-migration/generate-booking-billing-and-revenue-recognition-events-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:11.504Z"
---

# Generate booking, billing, and revenue recognition events transactions

Learn how to generate booking, billing, and revenue recognition events transactions for historical data using migration filters and cutover dates.

To generate booking, billing, and revenue recognition events transactions for historical data, do the following:

1.  Navigate to the Migration Filters section. ![Data migration window](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/billing/order_to_revenue/_media/Data_Migration_Window.png)
2.  Go to the Cutover Date field, click the calendar icon, and select a cutover date for the data migration. The cutover date is the driving date that determines which part of the historical data will be included in the data migration, as follows:

    -   Any subscription with the cutover date between its term start date and the term end date is included in the migration. Also, all versions of this subscription are included, which means that any charge that is active in that term and its history will be migrated. However, any charges that ended or were removed in a prior term are excluded from the migration. For example, if a one-time charge belongs to a previous term than the above-selected term, then the one-time charge will be ignored and excluded from the migration.

    -   The order line items with the order date being the same or later than the cutover date are included in the migration.

    -   Regardless of the cutover date, all active evergreen, suspended, and pending subscriptions and their charges are included in the data migration.

    -   Those billing documents for the preceding selected booking data are included in the migration. For example, if a recurring charge is active in the current term but was added in the previous term, then the recurring charge's history and all the billing documents will be selected for migration.

    -   The standalone billing documents (including standalone invoice items, credit memo items, debit memo items, and invoice item adjustments) with the document date being the same or later than the cutover date are included in the migration.

    -   For the migration, exclusion flag criteria will be applied after data selection.


3.  Click Generate at the top right of the page. As the data migration starts, you can view the migration process and results through the migration log in the Migration Logs section. For more information, see View migration logs .
