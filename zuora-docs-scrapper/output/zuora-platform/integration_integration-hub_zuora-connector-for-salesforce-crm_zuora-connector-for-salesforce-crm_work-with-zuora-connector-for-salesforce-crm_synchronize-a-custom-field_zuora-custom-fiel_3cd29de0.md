---
title: "Zuora Custom fields synchronization"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/synchronize-a-custom-field/zuora-custom-fields-synchronization"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:17.303Z"
---

# Zuora Custom fields synchronization

This article provides guidance on synchronizing custom fields from Zuora to Salesforce and addresses common issues encountered during the sync process.

This article explains how to synchronize custom fields created in the Zuora application to Salesforce.

## Troubleshooting

In some cases, the sync process cannot sync custom fields. This can happen when the object has already been synced before the custom fields were added in Salesforce.

For example:

-   SubscriptionA exists in Zuora. It has custom fields and values. There are no custom fields defined in Salesforce.com.

-   When you run the sync, SubscriptionA syncs to Salesforce without custom fields.

-   Then you add the custom fields in Salesforce and sync again.


In this case, you will not see values for the custom fields because this is an incremental sync and SubscriptionA is not updated. Because of this, SubscriptionA will not sync to Salesforce.

If you have configured custom fields but do not see them in Salesforce, you must update the object that you want to sync by opening the object for edit in Zuora and then saving the object without making changes. When you update the object, the custom fields will be synced in the next incremental sync. However, if you are updating a large number of records, Zuora recommends that you perform a cleanup sync.
