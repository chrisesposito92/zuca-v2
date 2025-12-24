---
title: "Configuring Zuora accounting codes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/reconcile-data-between-zuora-and-netsuite/configuring-zuora-accounting-codes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:46.327Z"
---

# Configuring Zuora accounting codes

This reference explains how to configure Zuora accounting codes

You must also configure several types of Zuora records with various NetSuite accounting information to correctly sync and affect GL accounts.

To view and/or modify NetSuite Accounts, go to Lists > Accounting > Accounts.

| In this Zuora record... | ...change the value of this field... | ...to this NetSuite value. | Used for Integration or Reporting? |
| --- | --- | --- | --- |
| Product Rate Plan Charge | Accounting Code | Full name of an active Account of type Income | Integration: NoReporting: Yes |
| Product Rate Plan Charge | Deferred Revenue Account (custom) | Full name of an active Account of type Deferred Revenue | Integration: NoReporting: Yes |
| Payment Method | Payment Accounting Code | Full name of an active Account of type Bank (starting with the NetSuite Account Number) | Integration: No. The Zuora Payment Accounting Code is not used by the NetSuite Integration process. See the NetSuite instructions for Reconciling Payment Method Values for more information.Reporting: Yes |
| Payment Method | Refund Accounting Code | Full name of an active Account of type Bank | Integration: NoReporting: Yes |
| Tax Code | Accounting Code | Internal ID of the Non-Inventory Sale Item created for the Tax CodeMake sure that you have assigned the correct income account on this item. If the the income account is incorrect, the item cannot be referenced on an invoice. | Integration: Yes, if Taxation is enabled and used in Zuora Billing.Reporting: Yes |

The Full Name identifies the hierarchy of the Account, using a colon to separate the levels. Include a space character before and after the colon. For example: `My Parent Account : My Child Account : My Grandchild Account`

To obtain the Internal ID, view the Item and look at the URL in your browser's Address bar. The Internal ID is the last part of the URL. For example, in `https://system.netsuite.com/app/common/item/item.nl?id=2`, the Internal ID is `2`.
