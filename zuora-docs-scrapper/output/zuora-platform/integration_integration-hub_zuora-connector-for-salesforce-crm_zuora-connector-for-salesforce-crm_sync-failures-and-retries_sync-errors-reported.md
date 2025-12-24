---
title: "Sync errors reported"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/sync-failures-and-retries/sync-errors-reported"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:44.597Z"
---

# Sync errors reported

Details on error codes encountered during Zuora and Salesforce CRM data synchronization, including explanations and recommendations for resolving them.

This table provides details on error codes encountered during Zuora and Salesforce CRM data synchronization, including explanations and recommendations for resolving them.

| Code | Short Message | Explanation |
| --- | --- | --- |
| DACO-903303 | Missing Field Permission | Check the field permissions on the issue. |
| DACO-01 | Known Target System Error | Known SFDC error. This can range across a wide variety of errors that will be identified via the error message. |
| 1. INVALID_FIELD.not found for field. - Field does not exist in SFDC |  |  |
| 2. CANNOT_EXECUTE_FLOW_TRIGGER.* - Issue with trigger on the SFDC side. Error message will have more info |  |  |
| 3. INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY.* - Provided CRM ID does not exist in the SFDC org |  |  |
| 4. MISSING_ARGUMENT.* - N/A |  |  |
| 5. DUPLICATE_VALUE.* - A value with a duplicate primary key already exists in SFDC. SFDC ID will be in the error message. Deleting that object and retrying should work |  |  |
| 6. External ID.more than one record found for external ID field. - Similar to the DUPLICATE_VALUE error, but with external ID instead of primary key |  |  |
| 7. ENTITY_IS_DELETED - Record has already been deleted, no action needed |  |  |
| 8. Foreign key external ID.not found for field. - Same as DACO-05 lookup error |  |  |
| 9. Field name provided.* - N/A |  |  |
| 10. CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY.* - Could not insert or update the record. Recommend checking write permissions on the tenant |  |  |
| DACO-02 | Missing CRM ID | Parent billing account is missing a CRM ID or it is malformed. Recommend populating that field. This error will not be selected for automatic retry processing.To learn more about resolving this error, see Fixing DACO-02 errors . |
| DACO-03 | Record has already been deleted | DACO tried to delete an already deleted object. No action needed from the you. |
| DACO-04 | Login Failure | Invalid credentials. Recommend checking the sync user and maybe re-inputting the credentials in the billing UI if necessary. |
| DACO-05 | Waiting for lookup dependency | Child object is waiting for parent. Recommend retrying the parent record with a dummy update or a retry from SHD if it failed due to some error. |
| DACO-06 | Target System Resource Limit | SFDC request or storage limit exceeded. The error message will specify which. For request limits, recommend waiting some time before retrying. For storage limits, recommend freeing up some space in the org. |
| DACO-07 | Target System Unavailable | SFDC target is down, typically happens during planned SFDC maintenance. Recommend checking SFDC trust for an incident or seeing if there's any maintenance going on there |
| DACO-08 | Throttled message due to too many SFDC failures | Some kind of consistent failure was detected against the SFDC org which triggered additional records to be throttled. |
| DACO-09 | Failed to extract SFDC namespace | Failed to parse the SFDC package namespace. No action needed. |
| DACO-10 | Row locking error | Multiple records are trying to access the same parent as part of sync, and the SFDC database row locked. Recommend retrying, but in small batches if possible. |
| DACO-11 | Target System Timeout | SFDC timed out on an API call. Recommend retrying if temporary or taking a look at if there's something going on with the org that would cause poor performance. |
| DACO-12 | String field is too long for corresponding SFDC field | A field was too long for the target SFDC field. Recommend truncating the field in billing if possible. |
| DACO-13 | Error occurred while getting calculated fields | This is a Zuora issue where a callback to billing failed. Recommend retrying the record from the failure list/SHD. |
| DACO-98 | SFDC error occurred during transfer | The error message should have more info, such as which trigger or flow is failing and why. |
| DACO-101 DACO-198 | Deprecated codes | All DACO errors > 100 should never happen, they're part of the deprecated dynamics connector. |
