---
title: "Map Billing entities to Revenue organizations"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/map-billing-entities-to-revenue-organizations"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:12.640Z"
---

# Map Billing entities to Revenue organizations

Zuora Billing and Zuora Revenue require consistent role privileges across systems, necessitating defined mappings between Billing entities and Revenue organizations during environment setup.

Zuora Billing allows that one tenant can have multiple entities, while Zuora Revenue allows for multiple organizations. Therefore, the role privilege for users across the two systems must be consistent. It requires that any standard user who can access a particular Billing entity has visibility to only the Revenue organization that is mapped from this entity. Such mappings between the entity in Zuora Billing and the organization in Zuora Revenue must be defined as a part of the environment setup.

This article explains how to map multiple Billing entities to multiple Revenue organizations. You need to define the mapping only once unless the mapping relationship needs to be changed afterward.

Note:

If you have only one organization in Zuora Revenue and multiple entities in Zuora Billing, you can run the RevPro3.0 Billing Entity ID Sync Process job to map all Billing entities to the Zuora Revenue organization.

## Prerequisites

-   Only the users with the superuser role in Zuora Revenue can configure the mappings between Billing entities and Revenue organizations. Therefore, you must ensure that the user you use to configure the mappings is granted the superuser role.

-   Ensure that the value of the ZBILL\_MULTI\_ENTITY\_MULTI\_ORG profile in Zuora Revenue is set to Yes.


## Procedure

Take the following steps to define entity and organization mappings:

1.  Log in to the Zuora Revenue environment as a superuser.
2.  Navigate to Setups > Application > Organization.
3.  (Optional): If the Organization # column does not list all your Revenue organizations, click the '+' icon to add new organizations.
4.  Click Run Billing Entity Sync. The Run Billing Entity Sync dialog opens.
5.  Select Multi Entity, and then enter the ID of your Billing global entity in the field.
6.  Click Sync Entity. Wait for the job to complete. Then, all sub-entities under the global entity will be synced into Zuora Revenue and populated into the dropdown list in the Entity Name column.
7.  For each of your Revenue organizations, select the sub-entity from the dropdown list in the Entity Name column to set up the mapping relationship. In the single organization case, map all entities to the default organization.
8.  After you have completed all mappings, click the save icon to save the configuration.

## Results

Later, all standard users will see only the entities or organizations that are assigned to their user role. For instance, if the user whose user role is associated with the 9400 Billing entity is configuring the Revenue Sync job or CCV Report, the 9400 entity will be automatically populated into the Entity field and cannot be changed.

## What to do next

After Billing entities and Revenue organizations are mapped, you can start syncing Zuora Billing settings to Zuora Revenue. For more information, see Sync Zuora Billing settings to Zuora Revenue. .
