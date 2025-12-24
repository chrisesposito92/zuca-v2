---
title: "Configure e-invoicing profiles for accounts"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:58.244Z"
---

# Configure e-invoicing profiles for accounts

Learn how to configure and manage e-invoicing profiles for customer accounts using the Zuora UI or REST API.

When creating or updating a customer account, you can configure an e-invoicing profile for the account through the Zuora UI or REST API. This profile stores the business detail information as a buyer.

To configure and manage e-invoicing profiles for customer accounts through the REST API, use the following Accounts operations with the `einvoiceProfile` field:

-   Create an account

-   Retrieve an account

-   Update an account


1.  To configure an e-invoicing profile for a new customer account through the Zuora UI, perform the following steps:

    1.  When creating an account , navigate to the New Customer Account page.
    2.  In the E-Invoice section, set Generate E-Invoice for Customer to Yes .
    3.  In the displayed Business Profile subsection, configure the e-invoicing profile settings.
    4.  Click Save to save the configurations.

    The e-invoicing profile is configured for the customer account.

2.  To configure an e-invoicing profile for an existing customer account through the Zuora UI, perform the following steps:

    1.  When editing a customer account , navigate to the account details page.
    2.  In the E-Invoice section, click the down arrow next to the section name to expand the section, and then click Edit .
    3.  Set the displayed Generate E-Invoice for Customer field to Yes .
    4.  In the displayed Business Profile subsection, configure the e-invoicing profile settings.
    5.  Click Save to save the configurations.

    If the e-invoicing profile is already configured for the customer account, the E-Invoice section is expanded by default. To update the profile settings, click Edit to make changes.
