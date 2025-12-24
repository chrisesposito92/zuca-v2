---
title: "Synchronize custom fields with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-synchronization-with-custom-fields/synchronize-custom-fields-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:36.544Z"
---

# Synchronize custom fields with HubSpot connector

Learn how to synchronize custom fields with HubSpot connector.

1.  To specify the mapping of custom fields, populate the fieldMapping (optional) field on the Zuora connector configuration page.
2.  To configure custom fields, refer to the template below.

    \[ { "sourceObject": "<Object name in HubSpot>", "targetObject": "<Object name in Zuora", "fields": \[ { "source": "<Custom field Internal Name in HubSpot", "target": "<Custom field API Name in Zuora>" }, { "source": "<Custom field Internal Name in HubSpot", "target": "<Custom field API Name in Zuora>" } \] } \]

    The following example applies this template:

    \[ { "sourceObject": "Deal", "targetObject": "Subscription", "fields": \[ { "source": "deal\_coolness", "target": "DealCoolness\_\_c" }, { "source": "deal\_value", "target": "DealValue\_\_c" } \] }, { "sourceObject": "Contact", "targetObject": "Contact", "fields": \[ { "source": "message", "target": "crmOrderId\_\_c" }, { "source": "address", "target": "address2" }, { "source": "address", "target": "IsCool\_\_c" } \] } \]

3.  To map to any target standard field in Zuora on any of the objects, the target field name must be the API name of the field as per the standard REST APIs.

    These mappings are supported both when the objects are created and during subsequent syncs to update the data.

    Consider the HubSpot custom field name as the source and the API name of the standard field in Zuora as the target, as mentioned in the Zuora Billing API request. Refer to this example: [https://developer.zuora.com/v1-api-reference/api/operation/POST\_Account/](https://developer.zuora.com/v1-api-reference/api/operation/POST_Account/). The API request payload uses the name notes to map to the Notes field in the account.
