---
title: "Configure account and billing account layouts for on-demand sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/on-demand-sync/configure-account-and-billing-account-layouts-for-on-demand-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:40.256Z"
---

# Configure account and billing account layouts for on-demand sync

Learn how to configure account and billing account layouts to enable On-Demand data sync with Zuora CPQ.

Use the custom On-Demand button to send a request to Zuora to sync the data for all the billing accounts currently associated with this account in Zuora CPQ.

1.  Add the On-Demand Button to Account Layout
    Use the custom On-Demand button to send a request to Zuora to sync the data for all the billing accounts currently associated with this account in Zuora CPQ.
    1.  Browse to Setup > Build > Customize > Accounts > Page Layouts.
    2.  Click Edit next to the Account Layout.
    3.  Click Buttons in the Account Layout area at the top of the page.
    4.  Drag Sync Data from ZBilling to the Custom Buttons box, located under the Account Detail heading.
    5.  Click Save.
2.  Add the On-Demand Button to Billing Account Layout
    Use the custom On-Demand button to send a request to Zuora to sync the Zuora customer account currently associated with this billing account.
    1.  Browse to Setup > Build > Create > Objects.
    2.  Select Billing Account from the Custom Objects list.
    3.  Scroll to the Page Layouts section, and click Edit next to Billing Account Layout.
    4.  Click Buttons in the Customer Account Layout area at the top of the page. This displays the list of available buttons.
    5.  Drag Sync Data from ZBilling to the Custom Buttons box, located under the Billing Account Detail heading.
    6.  Click Save.
