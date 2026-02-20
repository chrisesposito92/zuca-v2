---
title: "Comparison and deployment scenarios"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-product-catalog/comparison-and-deployment-scenarios"
product: "zuora-platform"
scraped_at: "2026-02-20T17:39:04.588Z"
---

# Comparison and deployment scenarios

This reference provides a comprehensive overview of comparison and deployment scenarios for product catalogs, focusing on product configurations, source and target tenants, and deployment manager displays.

## Primary Comparison Key SKU

| Scenarios | Product Configuration | Source Tenant | Target Tenant | Deployment Manager compare screen display | Comments |
| --- | --- | --- | --- | --- | --- |
| 1 | Product ARate Plan 1RPC 1 Rate Plan 2RPC 1RPC 2RPC 3Rate Plan 3RPC 1RPC 2RPC 3RPC 4 | Product ARate Plan 1RPC 1Rate Plan 2RPC 1RPC 2RPC 3Rate Plan 3RPC 1RPC 2RPC 3RPC 4 | No | Different | Product will be created in target tenant |
| Product ARate Plan 1RPC 1.1 | Product ARate Plan 1RPC 1.1 | No | Different |  |  |

## Primary Comparison Key Product Name

| Scenarios | Product Configuration | Source Tenant | Target Tenant | Deployment Manager compare screen display | Comments |
| --- | --- | --- | --- | --- | --- |
| 2.1 | Product BRate Plan 1RPC 1.1 | Product BRate Plan 1RPC 1.1 | No | Product will not be displayed on the compare screen | Product Name is duplicated in the source tenant |
| Product BRate Plan 1RPC 1.1Rate Plan 2 | Product BRate Plan 1RPC 1.1Rate Plan 2 | No |  |  |  |
| 2.2 | Product BRate Plan 1RPC 1.1 | Product BRate Plan 1RPC 1.1 | No | Product will not be displayed on the compare screen | Product Name is duplicated in the source tenant |
| Product BRate Plan 1RPC 1.1 | Product BRate Plan 1RPC 1.1 | Product BRate Plan 1RPC 1.1 |  |  |  |
| 2.3 | Product CRate Plan 1RPC 1.1Rate Plan 2RPC 2.1Rate Plan 3RPC 3.1 | No | Product CRate Plan 1RPC 1.1Rate Plan 2RPC 2.1Rate Plan 3RPC 3.1 | Product will not be displayed on the compare screen | Product is in target tenant only |

## Rate Plan Deployment Scenarios

| Scenarios | Product Configuration | Source Tenant | Target Tenant | Deployment Manager compare screen display | Comments |
| --- | --- | --- | --- | --- | --- |
| 3.1 | Product DRate Plan 1RPC 1.1Rate Plan 2RPC 2.1Rate Plan 3RPC 3.1 | Product DRate Plan 1RPC 1.1Rate Plan 2RPC 2.1Rate Plan 3RPC 3.1 | Product DRate Plan 1RPC 1.1Rate Plan 2RPC 2.1 | Different | Rate plan charge 3 will be created with associated RPC |
| 3.2 | Product D1Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 3RPC 3.1 | Product D1Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 3RPC 3.1 | Product DRate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 3RPC 3.1 | Different | Rate plan 2.2 will be created in the target |
| 3.3 | Product D2Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 2RPC 2.1 | Product D2Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 2RPC 2.1 | Product D2Rate Plan 1RPC 1.1 | No Change | Rate Plan 2 with associated RPC will not be displayed on compare screen as there is duplication |
| 3.4 | Product D2Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 2RPC 2.1Rate Plan 3 | Product D2Rate Plan 1RPC 1.1Rate Plan 2RPC 2.1RPC 2.2Rate Plan 2RPC 2.1Rate Plan 3 | Product D2Rate Plan 1RPC 1.1 | Different | Rate Plan 3 will be created in target and Rate 2 will be not be displayed and deployed as there is duplication |

## Rate Plan Charges Deployment Scenarios

| Scenarios | Product Configuration | Source Tenant | Target Tenant | Deployment Manager compare screen display | Comments |
| --- | --- | --- | --- | --- | --- |
| 4.1 | Product ERate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product ERate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product ERate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Different | The RPC 2.2 with difference will be updated in the target tenant |
| 4.2 | Product E1Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product E1Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product E1Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1 | Product E1Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | The RPC 2.2 will be created in the target tenant |
| 4.3 | Product E2Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product E2Rate Plan 1RPC 1RPC 2Rate Plan 2RPC 2.1RPC 2.2 | Product E2Rate Plan 1RPC 1RPC 2 | No Change | RPC 2.1 and 2.2 will not be displayed on the compare screen as they have same model and type |

## Known system behavior with natural keys or product number

-   Always standardize the prefix for Product Number in source and target tenant. A difference in the configurations of prefixes in source and target will result in comparison being displayed as different every time.
-   In the pre-deployment phase, the tenant is configured with a set of products, rate plans, and rate plan charges. Subsequently, during the post-deployment phase, newly introduced products, rate plans, and rate plan charges will be assigned incremental product numbers derived from the latest numbers already present in the target tenant. It is recommended to select auto-generate Product Number in this scenario. If not, the system will throw a validation error.
-   When deploying products in the target tenant which does not have existing products, rate plans, rate plan charges, either the clone of Product Number or auto generate product number options may be selected for deployments.
-   If deploying a newly configured product, rate plan or rate plan charge between tenants that have been already baselined accurately and up-to-date, the option of cloning product number from source to target may be selected.
