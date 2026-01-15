---
title: "Overview of DAC to Multi-Org migration"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/overview-of-dac-to-multi-org-migration"
product: "zuora-platform"
scraped_at: "2026-01-15T21:59:26.340Z"
---

# Overview of DAC to Multi-Org migration

The article features the transition from Data Access Control (DAC) to Zuora Multi-Org, highlighting the benefits and migration strategies for businesses.

Note: Data Access Control (DAC) is not available for sale and is in maintenance mode. However, we will continue to support it for customers who already purchased this capability.

Data Access Control (DAC) allows businesses to customize and control user access within Zuora Billing. A hierarchy of tags was leveraged to enforce access to a Zuora object. This hierarchy of tags has a tree structure where tags are assigned to users and objects. However, certain constraints including no API support, and having no autonomy over user access controls led to the creation of Zuora Multi-Org.

## Migrating from Data Access Controls (DAC) enabled tenant to Zuora Multi-Org

There are 2 use cases where a business would want to migrate to Multi-Org from their existing DAC-enabled setup:

1.  Businesses can leverage the existing DAC tag hierarchy to create the new Org hierarchy in Zuora Multi-Org as a 1:1 mapping.
2.  Businesses can create a brand new Org hierarchy in Zuora Multi-Org.

## Upgrade to Zuora Multi-Org with existing DAC tag hierarchy

This section explains Use Case 1 in detail on how a business that has an existing DAC-enabled tenant can upgrade to Zuora Multi-Org using the same tag hierarchy created in DAC with a 1:1 mapping. For more information see [DAC upgrade to Multi-Org](/zuora-platform/user-management/multi-org/multi-org-configuration-and-management/multi-org-upgrade-models/upgrade-data-access-control-tenant-to-zuora-multi-org-through-apis).

![DAC Tag Hierarchy 1:1 mapping to Multi-Org hierarchy](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4ea6e750-691f-4ad2-a858-9001641bd671?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlYTZlNzUwLTY5MWYtNGFkMi1hODU4LTkwMDE2NDFiZDY3MSIsImV4cCI6MTc2ODYwMDc2MiwianRpIjoiYmEwZjgwYjNjYWU3NDA2Mzk2MjNlYWZiNDUzNGJiZGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.2TaEV13GGpWwZ1318LN_apYOb00gg0-jKSqgGoElG74)

## Terms and concepts of DAC

| Zuora DAC | Zuora Multi-Org |
| --- | --- |
| Root Root is referred to as the global entity by default. | Root Root is referred to as the global organization (default parent) |
| Segments Children under the root level. | Org. Units Each of the children under the root is referred to as an org. unit. |

Note: For a DAC customer, the following are backward-incompatible API changes.

Originally there was a xxx\_\_h field where xxx is the hierarchy API name, in the API payload. Once the customer is migrated to Multi-Org the xxx\_\_h will no longer exist. This will be replaced by new organization-related fields including "organizationLabels" or "organizationLabel".

Existing API Payloads for DAC customers

The following APIs have xxx\_\_h field in their response body:
| Method | URI | Field Path |
| --- | --- | --- |
| GET | /accounts/{account-key} | basicInfo.tags |
| GET | /accounts/{account-key}/summary | basicInfo.tags |
| GET | /catalog/product/{product-id} | tags |
| GET | catalog/products | products.tags |

| Method | URI | Request body field |
| --- | --- | --- |
| POST | /orders | newAccount.tagging |
| PUT | /accounts/{account-key} | tagging |
| PUT | /orders/{orderNumber} | newAccount.tagging |
