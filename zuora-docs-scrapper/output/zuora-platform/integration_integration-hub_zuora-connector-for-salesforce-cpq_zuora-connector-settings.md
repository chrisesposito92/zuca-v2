---
title: "Zuora Connector Settings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/zuora-connector-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T08:36:17.811Z"
---

# Zuora Connector Settings

Customize the Zuora Connector for Salesforce CPQ by configuring settings such as order enablement, tax, finance, and subscription management.

You configure the Zuora Connector Settings to customize Zuora Connector for Salesforce CPQ in your Salesforce organization.

The following fields are available for configuring the Connector.

| Setting | Description |
| --- | --- |
| Enable Orders | You must select this setting if the Orders feature is enabled in your Zuora Tenant. |
| Enable Tax | You must select the setting if the Taxation setting is enabled in your Zuora tenant. |
| Enable Zuora Finance | You must select this setting if the Zuora Finance setting is enabled in your Zuora tenant. |
| Generate Invoice | Select to automatically generate an invoice when a subscription is created in Zuora.The setting you select here is a default value at the organization-level. You can override this org-default value when creating a new quote.If this option selected, configure in your Zuora tenant to invoice subscriptions separately. |
| Process Payments | Select to automatically apply a payment when the subscription is created in Zuora.The setting you select here is a default value at the organization-level. You can override this org-default value when creating a new quote.If this option is selected, configure in your Zuora tenant to invoice subscriptions separately. |
| Default Subscriptions to Auto-Renew | If selected, the subscriptions are automatically renewed for the term specified in the renewal term.If not selected, the subscriptions expire when the initial term ends. |
| Allow Blank Activation Dates | With this setting selected, subscriptions and amendments can be sent to Zuora with blank Service Activation and Customer Acceptance Dates.If the setting is not selected, the Service Activation Date will default to the value of the Contract Effective Date, and the Customer Acceptance Date will default to Service Activation Date, if not populated. |
| Require Service Activation of Orders | If selected, your users must enter a Service Activation Date to activate a subscription.The Service Activation Date is the date on which the customer is provided access to the services or products in a subscription. |
| Require Customer Acceptance of Orders | If selected, your users must enter a Customer Acceptance Date to activate a subscription.The Customer Acceptance Date is the date on which the customer accepts the services or products in a subscription. |
| Default Account Number | Specifies how to set the Zuora Account Number when contracting a quote with a new account and no account number. The following options are available:Salesforce Account Number: The default account number is the Salesforce Account Number.Salesforce Account ID: The default account number is the Salesforce Account ID.Auto-Generated number: The default account number is the auto-generated number from Zuora.If there is an Account Number for a quote, that Account Number always overrides this setting. |
| Submit Contract Order Plugin | Specifies the component name of Zuora reference implementation or your custom implementation of SubmitContractOrder Plugin. You must enable the Orders feature in your Zuora tenant and select the Enable Orders setting in the Zuora Connector Settings before you can use the implementation of SubmitContractOrder Plugin |
