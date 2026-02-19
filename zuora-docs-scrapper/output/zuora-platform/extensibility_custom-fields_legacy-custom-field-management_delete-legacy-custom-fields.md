---
title: "Delete legacy custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/delete-legacy-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:38.970Z"
---

# Delete legacy custom fields

Learn how to delete a custom field from a standard object.

1.  Open the settings page:

    -   If the object is related to accounts, subscriptions, invoices, or products, click your username at the top right and navigate to .

    -   If the object is related to payments or refunds, click your username at the top right and navigate to .

    -   If the object is related to accounting or revenue, click your username at the top right and navigate to .


2.  Click Manage Custom Fields.
3.  Select the object that contains the custom field you want to delete.
4.  Click Remove to the right of the custom field from the list view.
5.  In the confirmation dialog, click Yes. Note that you cannot edit the custom field while deletion is in progress. The label and API name of the custom field are displayed in gray during the deletion. The deletion time varies based on the data volume of this field in your Zuora tenant. For example, deleting a custom field with 10 million records might take more than two hours.

When the deletion is completed, this custom field will be removed from the list after reloading the page.
