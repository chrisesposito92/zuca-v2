---
title: "Update the price of active subscriptions in a subscription cohort"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/batch-price-update/update-the-price-of-active-subscriptions-in-a-subscription-cohort"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:08.670Z"
---

# Update the price of active subscriptions in a subscription cohort

This task topic explains how to update the price of active subscriptions in a subscription cohort using the Batch Price Update flow.

1.  Click the Batch Price Update drop-down button on the Subscriptions page.
2.  Select Submit New Batch to open the Batch Price Update for Subscriptions page.
3.  In the Charge To Be Updated search box, enter a product name or SKU and select a rate plan charge from the product once displayed.

    Note: If your product rate plan charge is set in a specific currency, you can click the currency tab to select the product rate plan charge.

4.  In the New Price on Subscription field, select one of the following options to update the price of the subscription rate plan charges. The currency for both options is the same as the currency of the product rate plan charge you selected in Step 3.

    -   Specific value: Enter a new price for the subscription rate plan charges.
    -   Increase by percentage: Enter a positive percentage to increase the price of the subscription rate plan charges.

5.  In the Order Date section, click the calendar icon ![Image: calendar-icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c22b9233-5045-46fe-bab7-0a36361c1dd3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyMmI5MjMzLTUwNDUtNDZmZS1iYWI3LTBhMzYzNjFjMWRkMyIsImV4cCI6MTc3MTY5NTAwNCwianRpIjoiMTIwODlmMWE5NDE4NDNjNmFiYWQ0MmY2MDdjMWYzN2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.QBgj585labp0YorZNLVGnfQ5Op-H9wR6S5PpLf12Y9U) and select an order date.
6.  In the Subscription Price Update Effective Policy section, next to Specific Date, click the calendar icon ![Image: calendar-icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c22b9233-5045-46fe-bab7-0a36361c1dd3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyMmI5MjMzLTUwNDUtNDZmZS1iYWI3LTBhMzYzNjFjMWRkMyIsImV4cCI6MTc3MTY5NTAwNCwianRpIjoiYWQ1MzZmZWI1ZWYwNDk2NGFkN2M2ZDM2MTVhM2Y5OTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.bypmRwsnA_L-uMZDpWj6PZT1D6cf6UBt3M9QlfmJUGo) and select a date.
7.  In the Subscription Cohort section, you can define a subscription cohort through one of the following methods:

    -   Select the Filter Subscriptions option, and filter and group subscriptions of account batches into a subscription cohort as follows:
        1.  In the Included Subscriptions from Account Batches section, select All Batches or Specific Batches :
            -   If the All Batches option is selected, the new price will be applied to all active subscriptions if the subscriptions are associated with the selected rate plan charge.
            -   If the Specific Batches option is selected, click the down arrow to select one or more batches to apply the new price to all active subscriptions in the selected batches if the subscriptions are associated with the selected rate plan charge.
                Note: After the selection, click an area other than the selection panel to make the selection take effect.

        2.  In the Term Type section, select one or both of the following subscription term types:
            -   Evergreen
            -   Termed
    -   Select the Upload CSV File option, and then drag and drop a CSV file with a predefined subscription cohort in the Upload CSV File area.
        -   The file must contain only one column of subscription numbers instead of subscription IDs, without a header.
        -   The subscriptions in the file can be under different subscription owners or invoice owners.

8.  If the following custom fields were set, enter the values in the custom fields. For more information, see [Manage Custom Fields](/zuora-platform/extensibility/custom-fields/custom-field-overview) .

    -   Additional Information of Orders and Additional Information of Update Product Order Action sections: The sections display for the Orders tenant users and the Orders Harmonization tenant users with Orders UI enabled. The new price takes effect in the next Billing Cycle Day (BCD) for generating the new invoice.
    -   Additional Information of Amendment section. Only the Amendment Name displays for the Subscribe and Amend tenant users and the Orders Harmonization tenant users with Orders UI disabled.

9.  Select Notify me via email when finished to enable email notification. The process of Batch Price Update may take hours or longer. If you have enabled the email notification, your subscription account will receive the email notification once the process is complete.
10.  Click Submit.
