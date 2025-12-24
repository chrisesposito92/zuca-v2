---
title: "Custom Field Sync and Mapping"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/custom-field-sync-and-mapping"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:12.180Z"
---

# Custom Field Sync and Mapping

The Zuora Billing Salesforce CPQ Connector facilitates the synchronization and mapping of custom fields between Salesforce and Zuora, allowing for flexible configuration and seamless data integration.

The Zuora Billing Salesforce CPQ Connector syncs custom fields. These custom fields can be configured during the Connector setup and are modifiable at any time. The connector does not restrict the data type of custom fields in Salesforce CPQ or Zuora and their mappings.

## Supported Salesforce and Zuora Objects

| Salesforce | Zuora | Custom to Custom | Custom to Standard | Standard to Custom | Standard to Standard | Description |
| --- | --- | --- | --- | --- | --- | --- |
| Account | Account | Y | Y | Y | Y |  |
| Contact | Contact | Y | Y | Y | Y | Configure this information in the account-level fields of the connector setup. |
| Product | Product | Y | Y | Y | Y | Map any custom or standard field from Salesforce to a custom or standard field in Zuora. |
| Product | Product Rate Plan | Y | Y | Y | Y |  |
| Product | Product Rate Plan Charge | Y | Y | Y | Y |  |
| Order | Order | Y |  | Y |  |  |
| Order Item | Order Line Item or Subscription Rate Plan | Y |  | Y |  | Mapping is based on the order item type (asset or subscription). |
| Subscription | Subscription | Y |  | Y |  |  |
| Subscription | Subscription rate plan charge | Y |  | Y |  |  |
| Order Item Consumption Schedule | Subscription Rate Plan | Y |  | Y |  |  |
| Opportunity | Order | Y |  | Y |  |  |

## Custom Field Mapping Format

Custom field mapping is configured using the following format:

<source custom field> : source\_customField1, source\_customField2 <target custom field>: target\_customField1, target\_customField2

For example, use the following code to map custom fields on accounts during the Connector setup:

accountCustomFields : source\_apiName1, source\_apiName2 zuoraAccountCustomFields: target\_apiName1, target\_apiName2

This maps source\_apiName1 to target\_apiName1.

## Map to Standard Zuora Fields

The Connector supports mapping Salesforce fields to standard fields in Zuora. This mapping is done through custom field configuration. Currently, this feature is supported on the following objects: Account, Contact, and Product.

Configure source and target to ensure seamless data integration and synchronization between Salesforce and Zuora platforms.

-   Source: SFDC field name.
-   Target: API name of the standard field in Zuora used in the Zuora Billing API request. For instance, if the API name in the request payload is "notes," it indicates mapping to the Notes field in the account. For more details, refer to [Zuora API Reference](https://developer.zuora.com/v1-api-reference/api/operation/POST_Account/). To map nested standard fields in the Zuora API, use the format <parent field>/<child field>. To link the VATId in TaxInfo, use the mapping taxInfo/VATId.

## Custom field support

The custom field enables data synchronization across multiple objects as follows:

-   Standard-to-Standard: Enables account and contact standard fields for seamless synchronization.
-   Standard-to-Custom: Enables synchronization between standard and custom fields across all objects.
-   Custom-to-Custom: Enables synchronization between custom fields across all objects.
