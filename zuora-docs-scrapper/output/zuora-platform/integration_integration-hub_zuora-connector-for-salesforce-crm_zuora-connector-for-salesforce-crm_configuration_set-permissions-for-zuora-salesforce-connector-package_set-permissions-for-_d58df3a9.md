---
title: "Set permissions for custom objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/set-permissions-for-zuora-salesforce-connector-package/set-permissions-for-custom-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:37.035Z"
---

# Set permissions for custom objects

Learn how to set permissions for custom objects in Salesforce, including creating custom profiles and granting access to specific objects.

To set sync permissions for each sync user:

If you do not have custom profiles in Salesforce, click New Profile to create a new custom profile. You can skip this step if you are using the System Admin profile.

1.  In Salesforce, navigate to .
2.  In the list of profiles, click Edit next to a custom profile you want to edit. You can only edit Custom profiles. You cannot edit the permissions on the standard or custom objects for the standard profiles.
3.  In the Custom Object Permissions section on the Profile Edit page, set the permissions. ![Custom_Oject_Permissions.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/19e4207f-f5de-4b8d-83ec-9c4454c84216?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE5ZTQyMDdmLWY1ZGUtNGI4ZC04M2VjLTljNDQ1NGM4NDIxNiIsImV4cCI6MTc2NjY1MTU1NSwianRpIjoiYWQ4MzZmMzI5NWJiNGFjMTliNDA2NWVlNTAyYzkxOTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PvTu-lNin6uQzAn67gFaWRkUM1umiCJytbqk9cmRZ8o) Grant the user who syncs the Accounts and Related Objects all access (Read, Create, Edit, Delete, Modify All) on the following objects:

    -   Billing Accounts

    -   Invoices

    -   Invoice Payments

    -   Payments

    -   Payment Gateway

    -   Payment Methods

    -   Payment Term

    -   Refunds

    -   Refund Invoice Payments

    -   Subscriptions

    -   Subscription Product & Charges

    -   Subscription Rate Plan

    -   Subscription Rate Plan Charge Tier

    -   Sync Histories

    -   Unit Of Measure (zqu\_\_ZUnitOfMeasure\_\_c)


4.  ​Grant the user who syncs the Product Catalog all access (Read, Create, Edit, Delete, Modify All) on the following objects:

    -   Feature

    -   Product

    -   Product Feature

    -   Product Rate Plans

    -   Product Rate Plan Charges

    -   Product Rate Plan Charge Tiers

    -   Unit Of Measure (Zuora\_\_UnitOfMeasure\_\_c)


5.  Set only the Read access to all other profiles for these objects.
6.  Click Save .
