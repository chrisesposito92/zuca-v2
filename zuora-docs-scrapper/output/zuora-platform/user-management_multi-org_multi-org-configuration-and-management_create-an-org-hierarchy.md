---
title: "Create an Org hierarchy"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/create-an-org-hierarchy"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:56.087Z"
---

# Create an Org hierarchy

Learn how to sett up an organization hierarchy by activating currencies, determining parent-child relationships, and specifying invoice details.

This operation would typically be performed by your Org Super Admin or any other persona mentioned in Multi-Org user personas who would be working jointly with the business, finance and operations team to determine the organization structure best suited for your company.

1.  To enable activate currencies,navigate to Billing > Customize Currencies to activate currencies that you plan to use as reporting, functional, and transactional currencies.

    -   Ensure the required Functional Currency is added to the list of currencies. To add a new currency, see [Customize currencies](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/customization-of-currencies) .
    -   Ensure that the Functional Currency you want to select is set to Active.

    Currency Settings Limitation:Currently, you can only have a tenant-level currency setting, which will be shared by all the org units.

2.  Determine the parent-child relationship in the org hierarchy

3.  Determine valid invoice display name, invoice display details, and Org Unit description details that should appear on your invoice.


1.  Click your username at the top right and navigate to Administration > Organization Hierarchy Management
2.  In the Basic Information section, click Edit on the top right and specify the following information in the Edit Basic Information pop-up:
    1.  Name : Specify the name of the Company or the Org. hierarchy
    2.  Description : Add a suitable description for the organization's hierarchy.
    3.  Click Save
