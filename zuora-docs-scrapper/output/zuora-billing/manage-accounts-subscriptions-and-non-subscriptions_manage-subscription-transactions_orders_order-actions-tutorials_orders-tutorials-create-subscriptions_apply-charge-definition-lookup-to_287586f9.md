---
title: "Apply charge definition lookup to subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/apply-charge-definition-lookup-to-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:53.330Z"
---

# Apply charge definition lookup to subscriptions

This task explains how to apply charge definition lookup to subscriptions through the UI, ensuring accurate pricing based on attribute-based pricing.

Charge definition lookup is supported in API and UI. This article demonstrates how to apply charge definition lookup to subscriptions through UI. If you subscribe to the product rate plan through API as usual after defining the price lookup formula , the charge definition lookup is automatically processed. For more information, see Overview of Attribute-based Pricing .

The charge definition lookup is only available when the Attribute-based Pricing feature is enabled in the Orders Harmonization and Orders tenants.

By supporting this function, you can view the actual price of a charge based on the matching charge definition when subscribing this charge to a subscription through the Create Subscription or Add Product order action.

A price lookup formula must be created for a product rate plan charge in the product catalog to enable the charge definition lookup. The charge definitions are looked up based on attributes or custom fields defined in the formula. A successful charge definition lookup is based on the following rule: the values of the attributes or custom fields in the subscription and account during the Create Subscription or Add Product order action exactly match those values in charge definitions.

In this article, only one subscription custom field is used as a simple example to demonstrate how looking up charge definition works. For complex use cases using multiple fields for lookup, see Price lookup in Attribute-based Pricing .

To enable charge definition lookup, perform the following steps:

1.  Add a custom field on the subscription object. For more information, see Manage custom fields . In this example, you created the soldToRegion custom field and the corresponding API Name value soldToRegion\_\_c for looking up charge definitions during the order action. You configured two values InRegion and Overseas for this custom field.

    ![Custom field setting for ABP](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a6ee1f0f-f5fd-4310-81bb-9f68b92b557d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE2ZWUxZjBmLWY1ZmQtNDMxMC04MWJiLTlmNjhiOTJiNTU3ZCIsImV4cCI6MTc2NjY0MDE3MSwianRpIjoiNzIyMTg3YWQ0YzQ3NDMzMDk1MzllNzNkMjc0YTA0NDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TAluI7oMHzieDxnIk0OD2lZlxXm70mU0a3ES005MBro)

2.  Enable the Attribute-based Pricing feature.
3.  For the charge, create the charge definitions and price lookup formula in the Charge Amount section of the charge in the product catalog. In this example, the following two charge definitions are defined for the charge. The formula is as follows:

    ![charge definitions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/85f32778-2e89-4544-8499-1ac2923c6bf5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg1ZjMyNzc4LTJlODktNDU0NC04NDk5LTFhYzI5MjNjNmJmNSIsImV4cCI6MTc2NjY0MDE3MSwianRpIjoiZmFhNmY3NDc5MGQ3NDg4OWEwNGU1MWY0NmIwNTMwNTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HCKDs1fAt3A2b8vEOXN-dPkQXpHei9yiqaVngns52VU)

    Note: To avoid lookup failures caused by formula syntax errors, you are recommended to copy our formula example and replace `soldToRegion__c` with your custom field API Name . For more information, see Price lookup in Attribute-based Pricing .
    lookup("soldToRegion\_\_c" = fieldLookup("subscription", "soldToRegion\_\_c"))

4.  Perform Create Subscription or Add Product order action. In this example, the custom field value InRegion is used.

    -   For the Create Subscription order action, specify this value before adding the product rate plan charge. Specify this value in the soldToRegion custom field in the Custom Fields section on the Create a New Subscription page.

    -   For the Add Product order action, update this value in the existing subscription before performing the order action. Update this value in the Additional Information section on the subscription details page.


5.  When you add a product rate plan during the order action, you can identify whether the lookup succeeds or fails.

    -   The following picture indicates a successful lookup. Since you specified the custom field value in this subscription as InRegion and the charge definition CD-00001210 has the same custom field value, this charge definition is successfully looked up based on the error-free formula. In this case, you can perform one of the following steps: ![ABP with formula in orders UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e2683717-41a6-4e0e-8b0b-ed689214e8ce?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyNjgzNzE3LTQxYTYtNGUwZS04YjBiLWVkNjg5MjE0ZThjZSIsImV4cCI6MTc2NjY0MDE3MSwianRpIjoiMDlmN2JjMTIyYmI1NGQwMDk0MzkzNmFhNjJhOWIxNmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.m_Xv3QPwOzVTmJcUdk6A-AyWHVMQUC8v1mGVWKf_cBU)

        -   Update the subscription rate plan charge price in the Price field.

        -   Click the link of the product charge definition number to view and update the product charge definition. If you update the List price field in the product charge definition, the subscription rate plan charge price in the Price field will not be synchronized during the order action.

        -   Click the attribute list icon to check based on which custom field in the formula the lookup is processed. In this example, `"subscription", "#soldToRegion__c"` is displayed in the attribute list.

    -   The following picture indicates a failed lookup. Identify and resolve the issue by yourself or contact your product catalog manager.


    ![CD lookkup failed](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1876a2f-1eae-4a2f-bd17-17f80c72603d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxODc2YTJmLTFlYWUtNGEyZi1iZDE3LTE3ZjgwYzcyNjAzZCIsImV4cCI6MTc2NjY0MDE3MSwianRpIjoiY2MwYzYzNTgyZmUyNDZmNDljMTMyZDMwMzFhOGYzYTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.W_O2aCIuzJ9thXMnzduBWZKHWI_TJv-nIIshoIehkm8)

6.  Review your order and activate the order.
