---
title: "Product catalog deployment and reversion"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-product-catalog/product-catalog-deployment-and-reversion"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:24.037Z"
---

# Product catalog deployment and reversion

The guide references on deploying a product catalog using Deployment Manager, including source tenant, setup, running a deployment, and managing deployment options.

## Product catalog deployment recommendations

The Product Catalog involves large volumes of data and integrated parameters, so follow these recommendations to ensure a smooth deployment.

-   Configure and baseline the following components before deploying the product catalog to minimize failed deployments.
    -   Tax Codes
    -   Accounting Codes
    -   Revenue Recognition Codes
    -   Units of Measure
    -   Chart of Accounts
-   Deploy custom fields before deploying the product catalog.
-   Baseline the following support-enabled features before deploying the product catalog in source and target.
    -   Prepaid with Drawdown, Minimum Commitment, Prepaid Cash with Drawdown, and Dynamic Usage Charges
    -   Zuora Revenue
    -   Billing - Revenue Integration
    -   Z-Finance

## Deployment Activities

Product Catalog deployment in Deployment Manager consists of the following high-level activities:

-   Creating a source tenan
-   Creating a source tenan
-   Reverting a deployment (optional)

## Deployment facts for Product, Rate Plans and Rate Plan Charges

-   If you select to validate and deploy a product name as the primary key for comparison, then the system behaves as follows based on the selection:

    -   Product Name - If multiple products have the same name in the source tenant, Deployment Manager does not support comparison and deployments of these products.

    -   SKU and Product Number - If the user selects SKU as the primary comparison key, the products with no validation will be displayed for validation and deployment.

-   Deployment Manager does not support comparing and deploying Rate Plans and Rate Plan Charges with the same name. The primary key for comparing the Rate Plans and Rate Plan Charges is the name; hence multiple rate plans with the same name are not compared and displayed by the compare screen.

-   Product catalog deployments deal with a large volume of data, and the deployment manager does not compare and display the products configured only in the target.


## Create a source tenant

To run a deployment, you need to create a source tenant that hosts the metadata objects you want to migrate to other tenants. There are two ways to create a source tenant:

-   From the Source Tenants tab on the landing screen of the Deployment Manager
-   When a new deployment run is created (See [Run a deployment](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/run-a-deployment-process)for information)

## Terminologies in List view interface for Product Catalog

| Status | Description |
| --- | --- |
| Submitted | The compare job is initiated and is in queue. |
| Compare in Progress | The system is retrieving and validating data in the backend. |
| Compare Done | The comparison between source and target tenant is complete. |
| Compare Failed | The comparison job has failed due to a breakage in the backend integration logic. |
| Canceled | The comparison job is canceled if the job runs for more than 15 minutes and is considered a failure. The user can initiate a new job with the same tenants. |
| View Details | The comparison results are available for validation and deployment on the compare screen. |
| Auto-Generate SKU | The deployment manager will generate a new SKU based on the last SKU present in the target tenant while creating a new product. |
| Clone Source Tenant SKU | The deployment manager will clone the product, including the SKU, from the source to the target tenant. |

On the source list view interface, the new source tenant's record appears as read-only. You can delete the source tenant ID after authentication.

## Run a deployment

Deployment is the process of migrating product catalog as a component from a source tenant to a target tenant.

To run a deployment after you have logged into the target tenant, click Deployment Run , then click the +New button.

You can filter the product catalog records by selecting the following options during the deployment run.

-   Primary comparison keys : Product Name and SKU

    -   If you select Product Name, the records on the compare screen are filtered and displayed with the name of the products. The system will treat all the products with the same name as duplicated and does not display them on the compare screen for deployment.
    -   If you select SKU and Product Number, the records are filtered and displayed. Products with same name are not skipped using this option.
-   All Products - Includes all the active and inactive products, including base, add-on, and miscellaneous.
-   Active Products - If you select this option, all the products currently tagged as Active in the source tenant will be displayed. The inactive products are not displayed.
-   Rate Plans - When you have made the product level selections, you can select the rate plans.

## Primary Comparison Keys and Availability

Deployment Manager uses the following primary comparison keys:

-   Product: Name or SKU or Product Number
-   Rate Plans: Name of the Rate Plan
-   Rate Plan Charges: Name and Charge Type of the Rate Plan Charge
-   Rate Plan Charge Tier: Tier

## Revert a deployment

After a deployment run is complete, you have the choice to revert the values of the target tenant to their previous values.

To revert a deployment run, click Revert under the Action column in the Deployment Run tab. Upon revert, the status of the deployment run will be changed to Reverted. The job status is reflected under the Status of the Deployment List view page.

Note: You can revert a deployment only if its status is Done.
