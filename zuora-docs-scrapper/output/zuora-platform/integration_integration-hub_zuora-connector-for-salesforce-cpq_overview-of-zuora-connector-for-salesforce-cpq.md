---
title: "Overview of Zuora Connector for Salesforce CPQ"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/overview-of-zuora-connector-for-salesforce-cpq"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:47.732Z"
---

# Overview of Zuora Connector for Salesforce CPQ

The Zuora Connector for Salesforce CPQ enables seamless integration between Salesforce CPQ and Zuora, automating subscription billing and syncing product catalogs.

The Zuora Connector for Salesforce CPQ provides a common integration mapping that allows your CPQ frontend to automate your subscription billing backend. The Connector integrates Salesforce CPQ Contracts and Salesforce CPQ Quotes with Zuora Subscriptions. The Connector also allows you to sync the Salesforce Product Catalog from Salesforce to Zuora.

Product catalogs and the quoting/contracting process are aligned between Zuora and Salesforce CPQ as follows:

-   Product Catalog: With Zuora Connector for Salesforce CPQ, you manage your product catalog in your Salesforce org and sync the product data over to Zuora. In Zuora, the products and prices are translated to Zuora products, rate plans, charges, and charge tiers. The information is tied to the subscriptions created from Salesforce CPQ and managed in Zuora for billing, payments, and other services provided in Zuora.
-   Quoting and Contracting: When a quote is created in Salesforce CPQ, it will create or change a Salesforce CPQ Contract. In turn, these Salesforce CPQ Contracts are translated into the New, Amend, or Cancel Subscriptions in Zuora. Zuora metrics, such as MRR and TCV, are also stored at the contract level and you can preview the metrics on the Salesforce CPQ contract.

## Other considerations

-   Lightning is not supported by Zuora Connector for Salesforce CPQ.
-   Custom fields on the Subscription Object cannot be sent to Zuora with a Salesforce Contract for Amendment or Renewal Subscriptions. You can only send them with Salesforce Contracts for New Subscriptions.
