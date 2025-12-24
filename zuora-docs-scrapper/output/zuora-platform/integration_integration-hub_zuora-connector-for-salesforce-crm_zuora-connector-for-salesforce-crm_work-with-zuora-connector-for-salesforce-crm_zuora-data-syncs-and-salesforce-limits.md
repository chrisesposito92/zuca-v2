---
title: "Zuora Data Syncs and Salesforce Limits"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/zuora-data-syncs-and-salesforce-limits"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:27.070Z"
---

# Zuora Data Syncs and Salesforce Limits

Zuora Connector for Salesforce CRM Syncs consume Salesforce APIs and Bulk APIs. Plan your sync sessions to avoid exceeding Salesforce API limits.

This article describes how Zuora Connector for Salesforce CRM Syncs consume the Salesforce APIs and Bulk APIs. Use the information presented to plan your sync sessions so that you do not exceed the Salesforce API limits or Bulk API limits.

## Salesforce Limits

This section summarizes the Salesforce limits that Zuora CPQ users should consider when planning and performing Zuora Connector for Salesforce CRM Syncs.

Note:

Zuora CPQ packages are Salesforce certified managed packages listed on the AppExchange. These packages do not count against your system limits.

## API-Based Sync

For Salesforce Professional and Enterprise, each organization has a limit of 1,000 API calls per user license per day. Review the limits for your Salesforce edition in Salesforce API Limit .

## Salesforce API Limits and API-Based Sync

When you perform an API-based sync, such as On-demand or Near Real-Time Sync with Zuora Connector for Salesforce CRM, the sync session consumes Salesforce API calls. Use the usage information in the above section to plan your sync sessions so that you do not exceed your API limit. See Near Real-Time Sync for detailed information about how the Real-time Sync trigger setting affects the API consumption.

## Best practice for Master-Detail relationships

It's recommended to avoid surpassing 10,000 child records within a master-detail relationship.

Exceeding this limit may lead to issues, particularly when dealing with parent records containing more than 10,000 child records. For instance, if an invoice contains over 10,000 invoice item records, deleting the invoice might result in a failure to cascade delete all associated invoice item records, leaving orphaned records behind. For more information, see the following external Salesforce documentation: Considerations for Object Relationships .

Note:

In the event of encountering such a scenario, please contact Salesforce support for assistance in deleting these orphan records.
