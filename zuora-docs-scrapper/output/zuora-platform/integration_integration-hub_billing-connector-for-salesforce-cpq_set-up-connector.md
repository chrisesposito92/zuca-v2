---
title: "Set up Connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/set-up-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:49.105Z"
---

# Set up Connector

Learn how to set up the Salesforce CPQ connector in Zuora, including authentication, configuration, and synchronization settings.

1.  Access the Configure tab in Marketplace > Integration Hub > Salesforce CPQ to initiate the connector setup. If you cannot access the CPQ connector, initiate a [support ticket](https://support.zuora.com/hc/en-us) for installation.
2.  Authenticate to Salesforce CPQ by following the on-screen prompts and entering your Lightning Salesforce CPQ customer instance credentials. Set the Salesforce instance type based on your Salesforce environment.
3.  Authenticate to Zuora using the provided Client ID and Client Secret. Set the environment to the REST Zuora endpoint. (e.g., rest.apisandbox.zuora.com). Generate Zuora credentials by following the steps outlined in the Zuora Knowledge Center guide.
4.  Configure the connector configuration fields listed below. Refer to the [Custom Field Mapping Forma](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/custom-field-sync-and-mapping)t for detailed steps on configuring custom field mappings.

    | Field Name | Description |
    | --- | --- |
    | SFDC Host | The SFDC environment. For example: zuora-18f-dev-ed.develop.lightning.force.com. The SFDC domain is the unique endpoint for SFDC without the https |
    | zuora REST endpoint | The Zuora environment (For example, rest.apisandbox.zuora.com) |
    | Zuora tenant ID | Tenant ID in Zuora |
    | zuora_customer_name | Preferred Zuora customer name |
    | Sync opportunity fields | When set to true, the opportunity custom fields can be synced between SFDC CPQ and Zuora Order |
    | sfdc_use_list_price_base | Refer to Billing SFDC Connector |
    | use_subscription_start_date | When enabled, the connector will map the subscription start date in Zuora subscription to the subscription start date in Salesforce. If not enabled, the subscription start date in Zuora will default to the contract start date in Salesforce CPQ |
    | amend_subscriptions | Enabling "amend_subscriptions" is recommended to support common use cases of syncing orders from Salesforce CPQ |
    | customer_alert_email | Receive email alerts for synchronization failures |
    | Increment tier upper bound for decimal point | Impacts the way usage-based tiered and volume charges are calculated. For more information, see Order synchronization impact. |
    | Subscription_term_in_days | This allows the connector to create subscription terms in Zuora in days, ideal for handling incomplete months. It should only be used when sfdc_use_list_price_base is not enabled. |
    | Trigger_dates_on_order | Enables the synchronization of all three trigger dates on subscriptions. |

5.  Click Next and Finish. You can modify the connector configuration at any point in time.
