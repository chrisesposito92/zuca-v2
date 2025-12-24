---
title: "Product Catalog deployment FAQs"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/product-catalog-deployments/product-catalog-deployment-faqs"
product: "zuora-platform"
scraped_at: "2025-12-24T05:11:46.158Z"
---

# Product Catalog deployment FAQs

This reference article provides answers to frequently asked questions about deploying the Product Catalog, including error resolution, deployment status, and system behavior.

1.  What does the following error in view logs mean? Why do I get this error message?

    {"Errors":\[{"Message":"SKU number 'SKU-00000163' is in conflict with the system generated SKU.","Code":"INVALID\_VALUE"}\],"Success":false} Deployment failed for the SKU-00000163::Plume Block API with url : settings/v1/catalog/product

    A product can be created in the target tenant when the difference in the SKU is not more than 2. Refer to [General Deployment Facts](/zuora-platform/data-management/deployment-manager/product-catalog-deployments/product-catalog-deployment-reference-facts) for more information.

2.  How do I resolve the following error shown in the View Logs?

    ![Product atalog error logs](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8eb25686-6ea6-41f0-8e3c-6d933056b311?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlYjI1Njg2LTZlYTYtNDFmMC04ZTNjLTZkOTMzMDU2YjMxMSIsImV4cCI6MTc2NjYzOTUwNCwianRpIjoiYWE3ODY3MjUxZGQ0NDdiNDk0MTJkMzA0ZDAzYjZmNjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.skna9ivlnh76jFoMZI_k4k4drEa8NR-pt405zyxZcs0)

    Configure the Charge Models and Tax Code values under Billing Settings and configure the Chart of Accounts value under Finance Settings in the target tenant. Deployment Manager supports deploying these parameters.

3.  The status of the deployment says "Partially Done". It should be either failed or successful. How is this possible?

    Message in the View Logs:Partial Deployments : 1 1, SKU-00000007::testproduct <-----------------------------------------------------------> ###################### DEPLOY ###################### SKU-00000007::testproduct ---> (SKU-00000007::testproduct) Start time : 2023-02-01T05:12:21.909Z Created product with name: "testproduct" Created product rate plan with name: "New Rate Plan" Error : Cannot create/update product rate plan charge due to error: {"Errors":\[{"Message":"Tier data missing required default currency: USD","Code":"MISSING\_REQUIRED\_VALUE"}\],"Success":false} Status : PARTIALLY-DONE End time : 2023-02-01T05:12:25.229Z Duration (hours:minutes:seconds) : 0:0:3 Deployment done partially for the SKU-00000007::testproduct API with url : settings/v1/catalog/products

    The Deployment Manager successfully created the Product and Rate Plan in the target tenant. But the Rate Plan Charge is not created because the default currency is not enabled in the target tenant. Navigate to Settings >Billing to configure the default currency or use the Deployment Manager.

4.  What should I do during a failed deployment that displays the following messages in the View Logs? Response Body received is empty when create/update product api is invoked Failed to insert the master data in s3 bucket Failed to fetch the products from the source for the url

    This is a system-generated error; submit a request at [Zuora Global Support](https://support.zuora.com/) for assistance. The errors are at the API gateway and client integration code level and will require the engineering team's assistance to resolve this issue.

5.  What will happen if I do not select a SKU option on the compare screen?

    Current version of Product Catalog support in the deployment manager does not support the view history section. You can leverage the View Logs for maintaining a record and for audit trail purposes.

6.  How can I know the details of the product catalog deployment?

    If you do not select an SKU preference on the "Select" screen, the system will pick the default state "Clone Source Tenant SKU."

7.  I cannot see some products, rate plans and rate plan charges on the compare screen? Is there a problem?

    See [Best Practices for managing Product Catalog in tenants](/zuora-platform/data-management/deployment-manager/product-catalog-deployments/best-practices-for-managing-product-catalog-in-tenants) for more information.

8.  I deploy between the same tenants, but why is the compare result different?

    This happens when you choose the Auto Generate New SKU option. If you deploy from source and target tenants and selects the Auto Generate New SKU option, the products are created in the target tenant with the new SKU. The results will differ if you perform another deployment run in the same tenants and selects a primary comparison key as SKU.

9.  What happens if the Source Tenant has more than 2800 products?

    For example, if the Source Tenant has 2800 products, the Deployment Manager will take the first 2800 products based on the last modified date. The remaining 700 products will be completely skipped from comparison and deployment. The skipped products are not captured in the view logs".

10.  The known behavior says that Deployment Manager supports 300 Rate Plans and 300 Rate Plan Charges. Is this valid?

     Deployment Manager Supports deploying 300 rate plans and 300 rate plan charges. For example, if a product in the source tenant has 310 rate plans, the Deployment Manager will compare and deploy the first 300 rate plans based on the last modified date. The balance 10 rate plans will be skipped for deployments.

11.  What does the following error mean?

     Cannot create/update product rate plan charge due to error: {"Errors":\[{"Message":"Tier data missing required default currency: USD","Code":"MISSING\_REQUIRED\_VALUE"}\],"Success":false},

     The default currency must be the same in the source and target tenant. For example, if the default currency is AUD in the source tenant and USD in the target, this error will be displayed in the view logs.

12.  I deployed my product from source to target and now when I am updating it or comparing it again there is a difference in the custom fields under Product Information. Why is this difference when I did not change anything??

     This is a valid scenario, and the Deployment manager is trying to retrieve custom fields from both source and the target tenant. This will happen if some custom fields configured on Product, Rate Plan, and Rate Plan Charges differ from those configured on the source tenant.

13.  I get the following error. How do I resolve this issue?

     Cannot create/update product rate plan charge due to error: {"Errors":\[{"Message":"Blank accounting code is not allowed. Please select a valid accounting code.","Code":"MISSING\_REQUIRED\_VALUE"}\],"Success":false},

     Navigate to Finance Settings > Configure Accounting Rules and select the value as Yes for the Allow blank accounting codes.

14.  What do I do when I get the following error?

     Errors : Failed to fetch dependency for Tax codes, due to the reason --> { "errorCode" : "REMOTE\_HTTP\_CLIENT\_ERROR", "remoteHttpStatus" : 403, \_"messages" : \[ " {\\"error\\":\\"403 Forbidden\\",\\"processId\\":\\"EBA4896CCD1D3033\\",\\"message\\":\\"security.error.noPermission\\"} " \]\_ }

     This error occurs if Taxation permissions are not enabled in the target tenant. Enable Taxation in the target tenant and try deploying again.

15.  Does the deployment manager automatically activate sub-currency upon migration of Product rate plan charges?

     When a multi-currency product is deployed to the Target Tenant, the sub-currency is not automatically activated, as in the case of Source Tenant.

     For example:

     Product ACurrency: USDSub-Currency: GBP, JPY, CAD

     A sub-currency is activated in Source but when the product is copied to the Target tenant, its sub-currency is not activated. You must manually activate the sub-currency in the Target tenant after the product is copied.
