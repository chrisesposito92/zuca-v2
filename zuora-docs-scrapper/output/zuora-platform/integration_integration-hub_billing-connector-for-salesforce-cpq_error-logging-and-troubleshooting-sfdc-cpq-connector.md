---
title: "Error logging and troubleshooting SFDC CPQ connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/error-logging-and-troubleshooting-sfdc-cpq-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:24.547Z"
---

# Error logging and troubleshooting SFDC CPQ connector

This guide provides instructions for accessing and troubleshooting error logs in the SFDC CPQ connector, including common synchronization issues and their resolutions.

To troubleshoot issues and access real-time debug logs for self-serving capabilities, navigate to the System Health Dashboard. Every synced record, whether successful or encountering errors, will have a corresponding system health log.

To access logs:

-   Go to System Health > Integration Hub.
-   Filter by connector name: 'SFDC to Zuora'
-   The error message for a failed transaction sync will be displayed in the Task message column. For more detailed information, download the logs to review the full error messages and troubleshoot issues effectively.

## Common Synchronization Issues and Resolutions

This section offers comprehensive insights into common error messages encountered during the synchronization between Salesforce CPQ and Zuora. It outlines possible causes and offers step-by-step resolutions to ensure smooth data integration. Refer to the System Health dashboard to identify errors, and use this guide to resolve them efficiently.

| S.No | Error Message | Possible Causes | Resolution |
| --- | --- | --- | --- |
| 1 | Invalid referenced products | The Product Code in Salesforce CPQ is not populated. | Populate the Product Code field in Salesforce CPQ. Make sure the SKU in Zuora matches the Product Code in CPQ, or assign a code and let the connector synchronize the product. |
| 2 | Unable to locate a matching rate plan to amend for OrderItem/OrderProduct. | a. The subscription owner's Zuora account does not contain subscriptions with a matching "Externally Managed Plan ID" and the "Revised Order Product" on the order Item. | a. Find the Zuora subscription that requires modification and make sure to populate the "Externally Managed Plan ID" field in the subscription's rate plan with the "Revised Order Product" field from the order product. |
|  |  | b.If the subscription owner in Zuora does not match the subscription owner in the Salesforce order. If a Zuora subscription is manually moved to a different account, the connector cannot locate it. | b.Ensure that the subscription owner account in Zuora matches the subscription owner account in the Salesforce order for the subscription to be amended. |
| 3 | No matching Subscription for OrderItem/OrderProduct. | Each subscription-based order product in Salesforce must be associated with a subscription object. | Activate the order in CPQ and contract it. |
| 4 | The revised OrderItem/OrderProduct doesn't have a specified ID for the revised order item consumption schedule. | The Externally Managed Plan ID field in Zuora's subscription rate plan requires the orderItemConsumptionSchedule.Id to be populated. | Find the Zuora subscription that requires amendment and ensure that you populate the orderItemConsumptionSchedule.Id field from the order in the subscription rate plan. To ensure the source fields are populated, follow the standard amendment process in Salesforce. |
| 5 | The Order Product Consumption Schedule could not be found. | a. The product consumption schedule in Salesforce was deleted or changed. | a. Link the required consumption schedule to the product by creating a product consumption schedule in the Product2 object. Populate the new product consumption schedule ID in the Externally Managed Plan ID field of the corresponding product rate plan. |
|  |  | b. The consumption schedule on the order product was modified after quoting. | b. Verify that the product consumption schedule is present in Salesforce and its ID is filled in the Externally Managed Plan ID field in Zuora's rate plan for the corresponding Salesforce Product. You have two options: delete the product in Zuora and let the connector resynchronize, or manually update the rate plan with the ID. |
| 6 | Cannot find the charge for the Product | Usage-based orders: There is no rate plan in Zuora's product catalog that has the product consumption schedule ID corresponding to the order product consumption schedule in the order that is trying to be synced. Non-usage-based orders: There is no product rate plan in Zuora corresponding to the product in the Order Product from Salesforce. | Usage-based orders: Navigate to the order product consumption schedule in Salesforce and locate the associated Salesforce product. Locate this product in Zuora using the product code and SKU. In this product, check the rate plan corresponding to the product consumption schedule and populate its ID in the Externally Managed Plan ID field. Non-usage-based orders: Navigate to the product2 in Salesforce from the order product. Identify the corresponding product in Zuora using the product name and SKU. Populate the Product 2.ID from Salesforce in the correct rate plan in Zuora under the identified product in the Externally Managed Plan ID field. |
