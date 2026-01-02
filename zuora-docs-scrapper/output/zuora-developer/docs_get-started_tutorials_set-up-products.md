---
title: "Set up your product catalog"
url: "https://developer.zuora.com/docs/get-started/tutorials/set-up-products/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:16:04.867Z"
---

#

Set up your product catalog

If you have not yet set up your product catalog in your tenant yet, follow the steps below to set up the products. Otherwise, skip this step and proceed to the [Show products to your customers](/docs/get-started/tutorials/show-product-details/) section.

Products describe the goods or services you offer to your customers. Each product has a unique ID and SKU.

Product rate plans are collections of charges. While products help you track inventory or provisioning, product rate plans and product rate plan charges help you track payment terms.

A product rate plan is the part of a product that customers subscribe to. A product can have multiple product rate plans, and each product rate plan can have multiple charges.

Product rate plan charges determine how you charge your customers for the product they subscribe to. Since products allow you to track inventory and provisioning, you can change charges without having to change your provisioning scheme.

The most efficient way to set up your product catalog is to use the Zuora UI. Navigate to **Products** > **Product Catalog** in the left-hand navigation section to start setting up your product catalog.

##

Step 1: Create a product

To create the SmartLearn Tablet product, take the following steps:

1.  Click **Add New Product**. The New Product page opens.
2.  Complete the configuration fields as follows:
    -   **Name**: SmartLearn Tablet
    -   **Description**: Portable tablet designed for kids' learning with pre-installed educational apps and games.
    -   **Effective Start Date**: 01/01/2024
    -   **Effective End Date**: 01/01/2034
    -   **Category**: Base Products
3.  Click **Save** to save the product. Then this new product is created.

![SmartLearn Product configuration](/9aecec8e4eb621dc72fa6008d56ca102/SmartLearn-product-config.png)

##

Step 2: Create product rate plans

After a product is created, you can create the product rate plans for this product.

To create the Basic Package plan, take the following steps:

1.  On the details page of the product you just created, click add Rate Plan in the USD tab in the Rate Plans section. The New Rate Plan section is displayed.
2.  In the Rate plan information section, complete the configuration fields as follows:

-   **Name**: Basic Package
-   **Description**: Entry-level service for cost-conscious users.
-   **Effective Start Date**: 01/01/2024
-   **Effective End Date**: 01/01/2034

3.  Click **Save** to save the product rate plan. Then this new product rate plan is created.

Repeat step 1-3 for the Premium Package, Elite Package, and VIP Package plans.

##

Step 3: Create product rate plan charges

For each product rate plan, you can create multiple or one of the following charge types:

-   One-time charges
-   Recurring charges
-   Usage charges

To create the Recurring flat fee charge for the Basic Package, take the following steps:

1.  In the Basic Package section, click **\+ add new** in the **Recurring Charges / Period** column. The Elite Package is then expanded.
2.  Specify the configuration fields as follows:

-   **Name**: Recurring flat fee
-   **Description**: No refund if you cancel after 7 days.
-   **Charge Model**: Flat Fee Pricing
-   **List Price**: 19.99 USD
-   **Trigger Condition**: Upon Contract Effective
-   **Billing Period**: Month
-   **Billing Day**: Default from Customer Account
-   In the **Recognized Revenue** entry, select the appropriate accounting code for the Credit transaction, for example, Subscription Revenue.

3.  Click **Save** to save the product rate plan charge. Then this new product rate plan charge is created.

Repeat step 1-3 for creating charges for the Premium Package, Elite Package, and VIP Package plans. Note that when creating the per unit charges, you need to configure the following fields differently:

-   **Charge Model**: Per Unit Pricing
-   **List Price**: 29.99 USD/Month, 39.99 USD/Month, or 49.99 USD/Month
-   **UOM**: License
-   **Default Qty**: 1

Now you have set up all the product rate plans and charges for the SmartLearn Tablet product in Zuora! This product is ready to be sold to your customers.

![SmartLearn Product Rate Plans](/7898e529283af1baf00c0ca9201246c0/SmartLearnPlans.png)

##

More about product catalog concepts

Zuora’s product catalog can appear a little different to what you may have seen elsewhere. In addition to creating products, we offer the flexibility to price that product in multiple ways.

This tutorial is based on the assumption that you will offer a SmartLearn Tablet product with the following packages:

-   **Basic**: 19.99 USD per month
-   **Premium**: 29.99 USD/License per month
-   **Elite**: 39.99 USD/License per month
-   **VIP**: 49.99 USD/License per month

For example, the "Basic Package" in our example is priced at $19.99 per month. But you might want to offer the same Basic Package for purchase annually at a discounted price of $199.99. With Zuora you can create a new product rate plan called "Annual Basic Package" and specify the **List Price** as 199.99 USD/Year. Perhaps you want to include a one-time setup fee (for example, $10) alongside the recurring fee, then the "Annual Basic Package" could have two charges:

-   an annual recurring charge of $199.99,
-   a one-time charge for $10.

Zuora’s product catalog has the three-tier structure to support pricing flexibility. But if it is not needed, you can always create a single charge for a single rate plan for each product so there is an easy mapping between the Zuora product catalog item to an external system like your ERP that understands products as individually priced items.

There is power and complexity embedded within our product catalog so this is a topic you’ll be exploring more as your Zuora skills increase. Be sure to lean on more experienced Zuora knowledgeable colleagues or reach out to your contacts at Zuora for help.
