---
title: "FAQs about Orders Harmonization"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/faqs-about-orders-harmonization"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:52.726Z"
---

# FAQs about Orders Harmonization

This article provides answers to frequently asked questions about Orders Harmonization, including its impact on existing integrations, new features, and data migration processes.

This article contains answers to frequently asked questions about Orders Harmonization and Orders . You can always contact Zuora Global Support if you have a question that is not covered here.

We are continually updating the following FAQs list.

Q : What happens when Orders Harmonization is enabled?

A : You will see the following:

-   Zuora automatically creates an object called Order when you create a new subscription or make an amendment to an existing subscription via the UI or API. Enabling Orders Harmonization allows you to use both the Subscribe and Amend API and the Orders API without impacting your existing code or integrations.

-   You can get access to Order Delta Metrics .


Q : How do I know if Orders Harmonization has been enabled in my tenant?

-   Within your Billing > Define Default Subscription and Order Settings , you will see an Enable Order UI option available. This setting allows you to turn on the Orders UI and start creating orders; it is disabled by default when Orders Harmonization is turned on.

-   If you are using Zuora CPQ and/or on the Enterprise or Nine edition, you have a new UI option called Enable Ramp for Orders within your Billing > Define Default Subscription and Order Settings . This setting is disabled by default.

-   The Ramps feature allows you to natively create a subscription for a multi-interval contract where potentially a different discount and/or price point is set at these intervals. For example, some B2B customers like to offer 3-year deals where there is a higher discount on year 1 of the 3-year contract.

-   You can see the Order object gets automatically populated for your subscriptions and amendments once Orders Harmonization is enabled. This data source is visible once Orders Harmonization is enabled.

-   You can get access to Order Delta Metrics .


Q : Do I need to start using the Orders feature to manage my subscriptions?

A : No, you can continue to use the Subscribe and Amend feature to manage your subscriptions. Orders Harmonization gives you the option to adopt the Orders feature when you are ready since it gives you the ability to use the Subscription object and Amendment object, as well as the Order object harmoniously in Zuora.

Q : Will Orders Harmonization impact on my existing integrations or require code changes?

A : No, enabling Orders Harmonization will not impact on your existing integrations or require code changes.

Q : What happens to my existing subscriptions and amendments once Orders Harmonization is enabled?

A : There is no impact on your existing subscriptions and amendments. You can continue to utilize Zuora as you do today.

Q : Can I use the Subscribe and Amend APIs in the same environment if Orders Harmonization is enabled?

A : Yes, you can use Subscribe and Amend APIs and Orders APIs harmoniously in the environment.

Q : How did Zuora test to ensure Orders Harmonization will not have an impact on my existing integrations?

A : Orders Harmonization has been a generally available feature since 2020. We have continuously enhanced this feature and have removed barriers for customers to adopt it. We devoted a team of cross-functional resources this year (2022) that worked with product and engineering experts to remove the final barriers to ensure customers can adopt this feature with no impact on their existing configurations. This team has worked with hundreds of customers on testing Orders Harmonization and ensuring their existing configurations remain intact once Orders Harmonization is enabled, which is why this feature is being released to all customers in our normal release cycle.

Q : What is the difference between Orders Harmonization and Orders?

A : The differences are as follows:

-   Orders is a feature in Zuora Billing. Orders Harmonization is Orders in Harmonization mode, a path that allows Subscribe and Amend customers to adopt Orders seamlessly. With Orders Harmonization enabled, you can use Orders and all features that require Orders, while keeping the existing Subscribe and Amend integration.

-   Orders Harmonization is not an intermediate step between Subscribe and Amend and Orders. It is a mode of Orders designed specifically for Subscribe and Amend customers to adopt. It requires the least effort to switch to and still provides access to the Subscribe and Amend functionalities.

-   If you are an existing Subscribe and Amend customer and want to move to a modern architecture, you should enable Orders Harmonization. Customers often look at the adoption of Orders-based new features in phases. For example, some customers will adopt the Orders in the UI, then in CPQ, and finally, they will refactor their self-service APIs. Some customers will only use Orders for new use cases (such as Order Line Items ) and keep the existing Subscribe and Amend integration in place.

-   If you are an existing Subscribe and Amend customer and have already enabled Orders Harmonization, your tenant is in Orders Harmonization mode, with access to Orders and all features that require Orders. We recommend the following best practices:

    -   Start using the Orders UI and API for ongoing transactions, and gradually phase out the transactions and traffic using Subscribe and Amend.

    -   Keep the tenant in Orders Harmonization mode and do not re-enable Orders. Orders without Harmonization mode not only removes the access to Subscribe and Amend, but also requires you to make necessary integration changes, migrate historical amendment data, and test your use cases.

-   If you are a new Zuora Billing customer, Orders is enabled in your tenant by default. You cannot enable Orders Harmonization in this case. As a result, you have access to the Order object via the Orders UI and API, but not to Subscribe and Amend functionalities.


Q : Are there known limitations for Orders Harmonization?

A : Subscriptions suspended by order can be resumed by order only.

Q : Are there known limitations for Orders?

A : Yes, see Known Limitations in Orders and Order Metrics .

Q : Are there new features I have access to with the Orders feature?

A : Yes, tons of new features have been developed only on the Orders framework that you can use now, including the following:

-   Order Line Items for unified monetization

-   CPQ X

-   Ramp Deals (that is, multi-year deals)

-   Prepaid with Drawdown

-   Bundled amendments (that is, multiple order actions)

-   Mid-term changes with multi-year deals

-   Quickstart API

-   Flexible Billing Attributes

-   Billing Schedule


Q : What are the use cases that are solved when utilizing the Orders feature?

A : The use cases are as follows:

-   Creating multiple subscriptions under the same billing account through one Orders API call.

-   Creating multiple order actions (that is, amendments) to the same subscription or multiple subscriptions under the same billing account through one Orders call.

-   Creating an upgrade or downgrade with multiple amendments through one Orders call.

-   Creating a multi-year (or multi-interval) deal arrangement with different discounts and/or price points through one Orders call without the burden of future dated amendments.

-   Sticking in mid-term changes for a multi-year subscription without rolling back and recreating future dated amendments.

-   Creating a stand-alone invoice for a one-time good or service with an order line item (this does not have to be associated with a subscription).

-   Supporting billing use cases for Prepaid with Drawdown . Under this model, customers pay upfront to receive a number of units, usually for a period of time like a month or a year. Then they consume against that prepayment balance in a use-it-or-lose-it fashion, with a possibility of topping up more units or being charged for any overage. This model strikes a balance between upfront commitment and the pure pay-as-you-go pricing models.

-   Reporting on a delta change between subscription versions as the change relates to an order action (that is, amendment) including MRR, TCV, TCB.

-   Utilizing Quickstart API .

-   Setting different payment terms and/or bill-to contacts at the subscription level through Flexible Billing Attributes . This helps when managing the hierarchical relationships in billing.


Q : If I want to start adopting the Orders feature, what impact will this have on my existing integrations?

A : You will see the following impacts:

-   Order objects take the place of the Amendment object today. As a rule of thumb, you need to understand how you are using the Amendment object and start pulling order actions moving forward when orders are used. Zuora Global Support can assist you with evaluating the impact on your existing configurations.

-   This is not an exhaustive list but some impact areas are included:

    -   Amendment reporting - Are you reporting off the Amendment object today in Zuora? If so, when you start using the Order object, you will want to look at the Order Action object for that amendment information including ‘type’. This includes any outside reporting via AQuA data pulls to your data lake or data warehouse.

    -   Amendment callouts - If you using Amendment callouts today, please make sure you recreate these onto the equivalent Order Action object.

    -   Amendment data queries - If you are using the Amendment object in data queries today, please make sure you recreate these onto the equivalent Order Action object.

    -   Subscribe and Amend APIs - The Subscribe and Amend APIs will continue to work with Orders. However, you will need to refactor your APIs if you want to see the benefits of Orders (that is, if you wish to bundle multiple amendments to a subscription into one API call, you need to use the Orders APIs rather than the Subscribe and Amend APIs).

    -   Workflows - Similar to your APIs, workflows will continue to work with orders. However, if you are looking to take advantage of orders within your workflow, you need to refactor your Subscribe and Amend API calls in your workflows to use the Orders API.

    -   CPQ - Orders can be enabled in CPQ if you are on version 8 or above. There is no impact on existing users as the UI does not change (unless you are looking to use CPQ X). Under the hood, when you are creating or making changes to a subscription, Zuora will start sending the changes in the Orders API call. We recommend you update to the latest version of CPQ when enabling Orders as there have been a lot of enhancements in CPQ version 8 or above.

    -   Sync for Zuora 360+ and Zuora 360 - There are no changes to your existing sync integrations.

    -   Email notifications - When Orders Harmonization is enabled, notifications are automatically created for the equivalent order action. So, there is no action for your team to recreate and activate these once orders are created.


Q : What testing do you recommend if I want to start utilizing the Order object?

A : We recommend the following:

-   All testing should be done in a sandbox environment before moving to the production environment - orders have no exceptions.

-   We recommend assessing how you are utilizing the Amendment object today to ensure you feel comfortable with recreating the Amendment-equivalent actions on the Order Action object (no matter whether the actions are callouts, data queries, and/or reporting).

-   We also recommend you have properly tested how orders can be created in the UI as there is a reinvented UI within Zuora.

-   Ensure you have tested the Orders API for all new and/or existing Subscribe and Amend use cases (depending on how you are looking to roll out the Orders feature). Amendment workflows would need to be modified to use the Orders API as well depending on how you are looking to roll out the Orders feature).

-   Finally, we recommend you are on the latest version of CPQ if you want to send Orders calls from Zuora CPQ into Billing.

    -   While Orders are compatible with CPQ version 8, there have been a lot of enhancements we have made since then and thus recommend you are on the latest and greatest version ideally before rolling out the Orders feature.

    -   If you want to test CPQ X , it is required to be on version 10 or above.


Q : What are the benefits of enabling Orders Harmonization for my environment?

A : The benefits are as follows:

-   You can choose when you want to utilize the Orders functionality for other new functionalities. These new functionalities are based on the Orders framework, including Order Line Items , Ramp Deals , CPQ X , Prepaid with Drawdown , and so on. The new functionalities are now accessible to your team with Orders Harmonization enabled!

-   You can optionally use the Orders API and UI to manage your subscriptions. Orders support a high volume of subscription creations and amendments in one API call.

-   Orders can be seamlessly leveraged through Orders Harmonization without migrating or refactoring your existing integrations from the Subscribe and Amend APIs to the new Orders APIs. None of your existing Subscribe and Amend integrations will break with Orders Harmonization enabled.


Q : I have additional questions, who do I contact?

A : Contact your Zuora account team, or Zuora Global Support for additional assistance.

## Data migration FAQs

Frequently asked questions about migrating historical amendment data to Orders are listed below:

Q : When the Orders feature is enabled in my Zuora tenant, should I have to migrate my historical amendment data to Orders?

A : Data migration is not a necessary process since the amendment data is still available for Report, Data Source Export, and Data Query. If you want to view the historical amendments in order format, then you can consider data migration.

Q : When the Orders feature is enabled in my Zuora tenant, should I migrate Order Metrics to Order Delta Metrics ?

A : When the Orders feature is enabled, you can get access to Order Delta Metrics . If you have enabled Order Metrics before, you will have both Order Metrics and Order Delta Metrics generated for new orders. If you want to have Order Delta Metrics available for old orders, you can request a data migration at Zuora Global Support .

Q : If I don't want to convert all my historical data, I can choose an option of an “As Of” date, right?

A : Yes, you can migrate historical data with an “As Of” date.

Q : Can I continue to use the system during the data migration process (assume 1M subscriptions)?

A : Yes, you can continue to use the system during the data migration process.

Q : Will I experience system slowness during the data migration process?

A : No, you will not experience system slowness during the data migration process.

Q : Does the data migration affect my concurrency limits in any way?

A : No.

Q : Are there any jobs I should not run during the data migration process?

A : No.

Q : How do I get regular updates on the migration process?

A : You cannot view and feel the migration progress, but, Zuora Global Support will inform you once the data migration is completed.

Q : Why are the created dates for orders and order actions different from the created dates for the subscription version amendments?

A : Created dates of orders and order actions indicate when the order and order action objects are generated but not the amendments generated dates. In the migration, the created dates of order and order actions are the migration dates.
