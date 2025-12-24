---
title: "Orders Enablement Process"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/orders-migration-guidance/orders-enablement-process"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:37.411Z"
---

# Orders Enablement Process

This procedure helps you to enable the Orders feature in your tenant by completing training, upgrading Zuora Quotes, and verifying integrations and customizations.

Perform the following steps to enable the Orders feature in your tenant:

1.  First complete the Zuora University training Zuora Orders: An Introduction and Orders Harmonization. This will give you an introduction to Orders Harmonization, Full Orders, Order Metrics, and other related features. To take this training:

    -   Visit Zuora University .

    -   Enter your Access Code: zuorderupgrade18

    -   Enter all other information and click "Sign Up".


2.  Upgrade your Zuora Quotes to the latest version assuming you have assessed any customization related issues. See Upgrade Zuora Quotes .
3.  Submit a request at Zuora Global Support to enable Orders in your API Sandbox tenant.
4.  Your support agent will help you check the most common prerequisites for Orders based on the Limitations in Orders . If applicable, use the workarounds as listed in the table below.

    | a | Account level discounts | Account level discounts are not available with Order Metrics.A workaround is to use Subscription level discounts instead of Account level discounts if you have this business requirement.You can still perform the following Amendments for Subscriptions under an Account with an account level discount applied, but no order metrics will be generated until those subscriptions with Account level discounts are removed:Create Subscription (without an account level discount)Add Product (without an account level discount)UpdateRemoveT&CsCancellationRenewSuspend / ResumeIdeally before enabling Orders, you should remove all subscriptions with Account level discounts completely. |
    | --- | --- | --- |
    | b | Draft/Pending subscriptions and amendments | You can create Draft/Pending subscriptions, but these pending Subscriptions and Amendments are not migrated and Order Metrics are not generated until all activation dates are provided.Before enabling Order Metrics, you should ideally activate or delete all draft and pending subscriptions, though metrics will be generated once activated after enablement. |

5.  Verify your integrations with Zuora and check whether Subscribe/Amend APIs are used. If so, migrate your integrations to use the Orders REST APIs . See Orders API Migration Guidance .
6.  Check your tenant's subscription setting on "Calculate Tax for TCB and ELP Metrics? ". If your setting is Yes , Zuora will call the tax engine to populate the Tax fields for TCB metrics during the Orders migration. Zuora recommends that you configure the setting to No before migrating to Orders. Note the Order ELP feature is only available to existing Orders customers who already have access to the feature.
7.  If your Salesforce org has used Order Builder in Zuora 360, check whether Subscribe/Amend APIs are used in your Order Builder integration code . If yes, migrate your integrations to use the Orders REST APIs .
8.  Verify your Zuora Quotes customizations and check for any usage of the Billing Total, Subtotal, Tax, or Discount fields at Quote Rate Plan Charge or Quote Charge Summary level. As these fields are no longer populated OOTB with Orders, Zuora recommends customization to calculate these fields in conjunction with the Invoice Item Global Methods for any custom Quote PDF presentation requirements such as for Ramp Deals. For non Ramp Deal Quotes, it is advised to consider using the new TCB fields (e.g., Delta TCB, Delta TCB Tax, Delta Discount TCB).
9.  Verify your Zuora Quotes customizations and check whether there is any customization populating forecasting or approval processes. Since the metrics returned by Orders are different, you should change your customization accordingly if needed.
10.  With Orders enabled, when non-ramp update quotes or remove amendment quotes are created in Zuora Quotes, the subscription start date is taken as the contract effective date instead of the quote start date. See more details in this Community article . You should change your customization accordingly if needed.
11.  New Orders Notifications will be enabled for Orders. For any subscription creation or amendment created through Subscribe and Amend APIs, the existing Zuora Billing notifications configured in your tenant will continue to work. However, since for every subscription creation and amendment, if you configure Orders notifications then both order related notifications and amendment notifications will be triggered. Zuora recommends you to configure only the Orders notifications and turn off the existing Amendment related notifications if you do not want duplicate notifications.
12.  If your tenant has any data queries (for example, ZOQL or AQuA ) or third party data warehouse transformations that depend on amendment data, you should consider refactoring these queries or transformations to use Orders.
13.  New data sources become available with Order Metrics, for example, Order MRR and Order TCB . Since the new data sources can be leveraged by your Revenue Recognition integration (especially for ASC 606 or IFRS 15), you should review your Revenue Recognition processes to determine any impacts or any improvements needed.
14.  Verify any existing in-flight quotes in your Zuora Quotes implementation. Any existing quotes should be able to send to Zuora successfully after enabling Orders (assuming you upgraded from a relatively recent Quotes version such as 8.x). However, if you try to preview Metrics on an existing quote that was created prior to the Orders upgrade, an error may occur. Zuora recommends that you re-create the quote in this case.
15.  Your support agent will now enable Orders in your API Sandbox tenant. You do not need to take any action in this step.
16.  Now your API Sandbox tenant has Orders enabled. You should test in your tenant with dummy data. Zuora recommends that you run the use cases in Order API Migration Guidance .
17.  Submit a request at Zuora Global Support to enable Orders in your Production Copy Environment (PCE) tenant if you have purchased one. Note that the Reporting UI and Orders UI is not available in PCE tenants, but data source exports are available.
18.  As for the API Sandbox tenant, your support agent will help you check the limitation checklist for your PCE tenant. You should use the same workarounds as listed in the table in step 4.
19.  Your support agent will now enable Orders in your PCE tenant. You do not need to take any action in this step.
20.  Your PCE tenant now has Orders enabled. You should test your PCE tenant with production copy data prior to enabling in Production.
