---
title: "Configure and apply filters in Deployment Manager"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-filters-in-deployment-manager/configure-and-apply-filters-in-deployment-manager"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:00.854Z"
---

# Configure and apply filters in Deployment Manager

Learn how to configure and apply filters in Deployment Manager to efficiently manage and deploy custom objects and components.

Filters on the compare screen enable you to find a custom object or components you want to deploy in a tenant. You can use the quick filter feature to run basic queries to filter data and create specialized views. You can create new filters, save filters, and view and update the filter conditions. The saved filters are available to all users of a tenant.

Configuring a quick filter involves selecting the source component(s), applying the filter and narrowing down the results. The steps in this section can be accessed during the new deployment run procedure.

1.  Select a metadata object for validation and deployment by initiating a new deployment run.
2.  Click Next to view the selected source components.

    ![Configure filter in source component](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7d5d5ff-7313-4efd-9e0a-e81997f14037?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3ZDVkNWZmLTczMTMtNGVmZC05ZTBhLWU4MTk5N2YxNDAzNyIsImV4cCI6MTc3MTU1NzQ3OCwianRpIjoiZmRkODBiMmIzNzZmNGFiZjg2MDk5M2IxYzI1ODZmMDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.nDiejVmtnGCmtxSi93rfA2XgXerkmWA_BZ41dtaljZc)

3.  Click the Filter icon, and the Quick Filter window appears.
4.  Select the components for deployments and select an operator. You can select as many as five components and also you can select the same component more than once as each component has child parameters. For example, Billing can be selected more than once for searching records under currency and units of measure.
    For more information, see [Filter operators](/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/about-filters-in-deployment-manager#reference-8068__section-1396)​.

5.  Filter the product catalog records by selecting the following options:

    -   Primary comparison keys : Product Name and SKU
        -   If the user selects Product Name, the records on the compare screen are filtered and displayed with the name of the products. The system will treat all the products with the same name as duplicated and does not display them on the compare screen for deployment.
        -   If the user selects SKU, the records are filtered and displayed. Products with same name are not skipped using this option.
    -   All Products - Includes all the active and inactive products, including base, add-on, and miscellaneous.
    -   Active Products - If the user selects this option, all the products currently tagged as Active in the source tenant will be displayed. The inactive products are not displayed.
    -   Rate Plans - When the user has made the product level selections, the user can select the rate plans.

6.  Click Apply to search or click Reset to refresh the search conditions
7.  Click Next to view the selected source components.

    ![Configure filter in source component](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b7d5d5ff-7313-4efd-9e0a-e81997f14037?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3ZDVkNWZmLTczMTMtNGVmZC05ZTBhLWU4MTk5N2YxNDAzNyIsImV4cCI6MTc3MTU1NzQ3OCwianRpIjoiYjgxM2JlZTY2OTg1NGRiYzhkNDMwNTNhYTE3ZWFhN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.KAAko8PVHqY7XZq8B8QXH_NRDM9XoyVwarP2-H8jxzs)

    To apply a quick filter to the source components, complete the following steps:

    1.  Click the Filter icon, and the Quick Filter window appears.
    2.  Select the components for deployments and select an operator.
        You can select as many as 5 components and also you can select the same component more than once as each component has child parameters. For example, Billing can be selected more than once for searching records under currency and units of measure.

    3.  Filter the product catalog records by selecting the following options:

        -   Primary comparison keys : Product Name and SKU
            -   If the user selects Product Name, the records on the compare screen are filtered and displayed with the name of the products. The system will treat all the products with the same name as duplicated and does not display them on the compare screen for deployment.
            -   If the user selects SKU, the records are filtered and displayed. Products with same name are not skipped using this option.
        -   All Products - Includes all the active and inactive products, including base, add-on, and miscellaneous.
        -   Active Products - If the user selects this option, all the products currently tagged as Active in the source tenant will be displayed. The inactive products are not displayed.
        -   Rate Plans - When the user has made the product level selections, the user can select the rate plans.

    4.  Click Apply to search or click Reset to refresh the search conditions.
