---
title: "Product Catalog deployment reference facts"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/product-catalog-deployments/product-catalog-deployment-reference-facts"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:48.694Z"
---

# Product Catalog deployment reference facts

Learn about deploying the Product Catalog and Revenue Accounting Codes using Deployment Manager, including settings, workflows, and limitations.

-   Deployment Manager does not currently support deploying the Accounts Receivable field under Invoice Posted in Product Rate Plan Charges. You must update this field manually during deployment.
-   Deploy Product Catalog as a standalone component for best performance results. For more information, see [Product Recommendation](/zuora-platform/data-management/deployment-manager/product-catalog-deployments/product-catalog-deployment-and-reversion-using-deployment-manager).
-   For successful deployments of Revenue Accounting Codes, enable the following setting: Finance Settings > Configure Accounting Rules > Allow Blank Accounting Codes to Yes.
-   Product Catalog deployments are deployed at the product level. For example, If a product is configured in both the source and target, the rate plan differs, the rate plan charges are selected for deployment, and then the complete product payload is deployed. A validation checkpoint prevents the creation of duplicate rate plans and rate plan charges.
-   Deploying a product catalog is a synchronous and asynchronous workflow. When you submit a comparison job between source and target, it is queued at the backend. At this stage, the job status is "Submitted." You can submit a maximum of 50 comparison jobs per environment.
-   If the comparison job takes more than 30 minutes, it is canceled, and its status is displayed as Canceled.
-   The compared jobs are stored in the Deployment Manager for 24 hours from when they were completed. After that, the system auto-deletes them.
-   Deployment Manager supports deploying 2800 products, 300 Rate Plans(for each per product), and 300 (for each per product) Rate Plan Charges. The system picks the products, rate plans, and rate plan charges based on the last modified date.
-   The current version of the Product Catalog does not support Product Features, Price Books, and Catalog Groups.
-   Deployment Manager does not support migration of the following field for Product Rate Plan Charge:
    -   POB Policy
-   Product Catalog has a validation that allows you to create products only when the difference between the SKU numbering varies by 2. If there are exceptions to this validation, the product is not created successfully in the target.


For example,

| SKU in Source Tenant | Last SKU in Target Tenant | Post Deployment System Behavior |
| --- | --- | --- |
| SKU-000160 | SKU-0000097 | Error |
| SKU-000161 | Error |  |
| SKU-000162 | Error |  |
| SKU-000163 | Error |  |

| SKU in Source Tenant | Last SKU in Target Tenant | Post Deployment System Behavior (assuming all dependent parameters are baselined) |
| --- | --- | --- |
| SKU-000160 | SKU-0000158 or SKU-000159 | Successful Deployment |
| SKU-000161 | Successful Deployment |  |
| SKU-000162 | Successful Deployment |  |
| SKU-000163 | Successful Deployment |  |

In this scenario, the recommendation is to deploy by selecting "Auto-Generating SKU" option.

-   If the user selects the All button on the compare screen, all the products from the source tenant will be selected for deployment. The user will not be able to deselect any product. In such a case, the products will be disabled for selection on the compare screen.
-   The following Revenue field can be deployed through API. See [CRUD: Create a product rate plan charge](https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/), for more information.

    -   POB Policy
