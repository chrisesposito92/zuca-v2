---
title: "Configure Zuora Billing"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/configure-zuora-billing"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:54.913Z"
---

# Configure Zuora Billing

Learn how to configure Zuora Billing by creating user roles, users, and clients, and setting up custom fields and segmentation rules.

Configuring Zuora Finance involves the following tasks:

Complete the following steps to create a Zuora User Role:

After creating a Zuora user role, you should create a user and assign it to the "Workday Connector" Role.

After creating a Zuora User, you should create a Zuora Client.

1.  Login using your administrator credentials.
2.  Navigate to Settings \> Administration \> Manage User Roles .
3.  Select "Platform" from the View Role List .
4.  Click Add New Role .
5.  Type "Workday Connector" in the name field.
6.  Check the API Write Access and Integration Hub boxes.
7.  Click Save .
8.  Login using your administrator credentials.
9.  Navigate to Settings \> Administration \> Manage Users .
10.  Click Add Single User .
11.  Select "Workday Connector" from the Zuora Platform Role drop-down.
12.  Enter your first name, last name, work email, and the login name as "yourname+wd@yourcompany.com ".
13.  Check your work email for a Welcome to Zuora! email and click the "Set your password and get started here" link.
14.  Enter your new password, security question, and security answer.
15.  Click Save .
16.  Login using your administrator credentials.
17.  Navigate to Settings \> Administration \> Manage Users .
18.  Click on the user name you created previously.
19.  Scroll down to the OAuth Client section.
20.  Enter "Workday Connector" as the client name.
21.  Click Create . Zuora displays the Client ID and Client Secret for the OAuth client. Take note of the Client ID and Client Secret.

Extend the Journal Entry object with the WD\_Accounting\_Journal\_ID custom field.

To configure custom fields, navigate to Extension Studio \> Object Manager . For more information, see [Custom Fields](/zuora-platform/extensibility/custom-fields/custom-field-overview).

This custom field is populated with Workday Accounting Journal IDs after accounting journals are successfully posted to your Workday Financials general ledger.

A segment is an association with a field on a Zuora object. After configuring segments, data for these segments is automatically included in your journal entries.

To configure segments, click your username at the top right and navigate to Settings > Finance > Configure Segments . For more information, see [Configuring Segments](/accounts-receivable/finance/zuora-finance-settings).

When you perform a journal run, you may add segments to a segmentation rule to determine how your transactions are segmented into journal entries.

A general ledger segmentation rule determines how your journal entries are segmented when you perform a journal run. A general ledger segmentation rule contains a set of segments, and transactions are grouped into summary journal entries according to the transactions' values for those segments.

Transactions are grouped into summary journal entries based on the following fields:

-   Transaction type

-   Currency

-   Debit account

-   Fields associated with the active general ledger segmentation rule


To configure GL segmentation rules, click your username at the top right and navigate to Settings > Finance > Configure GL Segmentation Rules .

For more information, see [Configuring GL Segmentation Rules](/accounts-receivable/finance/zuora-finance-settings/gl-segmentation-rules).

Journal runs create journal entries suitable for importing into your general ledger.

To create a journal run, click Finance > Journal Runs from the left navigation panel and click New Journal Run .

For more information, see [Create a Journal Run](/accounts-receivable/finance/summary-journal-entries/journal-runs/create-a-journal-run) .
