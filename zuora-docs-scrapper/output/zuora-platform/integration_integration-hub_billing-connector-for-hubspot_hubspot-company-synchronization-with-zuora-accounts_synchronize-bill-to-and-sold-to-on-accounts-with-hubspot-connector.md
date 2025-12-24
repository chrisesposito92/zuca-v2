---
title: "Synchronize Bill To and Sold To on accounts with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-company-synchronization-with-zuora-accounts/synchronize-bill-to-and-sold-to-on-accounts-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:16.223Z"
---

# Synchronize Bill To and Sold To on accounts with HubSpot connector

You can specify the Bill To and Sold To contacts for accounts in Zuora using associations in HubSpot. Learn how to create this association in HubSpot.

1.  Navigate to .
2.  Create a new association of type Contacts to Company with the following configuration:

    Label Bill To with the internal name bill\_to\_contact\_company.

    Label Sold To with the internal name sold\_to\_contact\_company.

3.  To set the Bill To contact for the account, navigate to the company and choose the contact that you want using the association you created.
4.  Follow the same step to set the Sold To contact.

You can now synchronize the company from HubSpot. A CRM card labeled Sync Object To Zuora contains two options:

-   Sync Company with Deals

    Syncs the specified company with all related deals and contacts

-   Sync Company and Contacts Only

    Syncs the company and its contacts, excluding deals


Once synchronization is complete, the corresponding Zuora data can be accessed from the company's associated CRM card. The card also includes significant account-related information.
