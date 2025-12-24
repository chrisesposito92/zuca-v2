---
title: "Troubleshooting"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync/troubleshooting"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:59.834Z"
---

# Troubleshooting

Learn about the error messages and how to resolve the causes

Read the following for more information about error messages and how to resolve the problems that caused the errors.

## The NetSuite integration status is 'Sync Complete', but the custom fields have not been synced in NetSuite

1.  Cause: The NetSuite Custom field name specified in the mapping UI is incorrect.Resolution: Recheck the mapping UI to ensure you have mapped the right fields in NetSuite such as the Custom Field name.

2.  Cause: The data type of the custom field in NetSuite is not of type free-form text.Resolution: Create a custom field of type free-form text in NetSuite and reconfigure the mapping page.

3.  Cause: The custom field type in NetSuite is incorrect. Refer to prerequisites for [custom fields](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync#concept-9z2y7dgk__title-1477) to identify the type of custom field you need to create for the given object.Resolution: Create an appropriate type of custom field in Netsuite.


## The NetSuite Integration status on the record is 'Error updating custom fields'

Impact on data in NetSuiteThe record has been created successfully in NetSuite with all the standard fields but without the custom fields. Such records cannot be resynced to sync the custom fields. You will have to handle them separately.

1.  Cause: The Netsuite update call has failed. This happens when there are special characters such as "&" or "<" in the custom field value in Zuora. Resolution: Remove such values in the future syncs as NetSuite API call does not support these characters.

2.  Cause: If the Netsuite custom field type is not of free-form text.Resolution: Update the NetSuite custom field type.

## The Netsuite integration status on the record reads 'Updating Custom Field'

Impact on data in NetSuiteThe record has been created successfully in NetSuite with all the standard fields but without the custom fields. Such records cannot be resynced to sync the custom fields. You will have to handle them separately.

Cause: This is an unknown error. Resolution: You can reach out to [support@zuora.com](mailto:support@zuora.com) for further help.
