---
title: "Billing connector for Salesforce CPQ"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:43.871Z"
---

# Billing connector for Salesforce CPQ

The Billing Connector for Salesforce CPQ enables seamless integration between Salesforce CPQ and Zuora, optimizing sales-to-billing processes and ensuring accurate data synchronization for enhanced operational efficiency.

Note:

This feature is in the Early Availability phase. We are actively soliciting feedback from a small set of early adopters before releasing it to all customers. To join this early availability program, submit a request at [Zuora Global Support](https://support.zuora.com/).

## Overview

The CPQ Connector, facilitates seamless integration between the Salesforce CPQ frontend and the subscription-powered backend in Zuora. This integration optimizes sales-to-billing-to-revenue processes, resulting in reduced bottlenecks and enhanced operational efficiency by eliminating data management complexities. Through data synchronization, the Connector ensures that critical information from Salesforce CPQ, including Accounts, Orders, Subscriptions, Contracts, and Quotes, is accurately mapped and integrated with relevant Zuora objects, enabling smooth downstream processes.

## Prerequisites

-   Ensure that Orders are enabled in Zuora.
-   Install the Salesforce CPQ package in your Salesforce instance.
-   Ensure that your authenticated Salesforce CPQ integration user has the necessary read permissions (SOQL query access) in Salesforce. At a minimum, the user must be able to:

    -   Read all Salesforce objects and fields referenced in the [Salesforce CPQ mappings guide](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-field-mappings-guide), as well as any additional custom fields you have configured in the connector's field mappings.

    -   Execute the following SOQL query, which requires read access to the Organization.Id field on the Organization object: `Select Id FROM Organization`.


## Key features

-   Seamless Integration: The CPQ Connector offers straightforward integration without complex installations or technical expertise. Setup can be completed rapidly, ensuring minimal Time-to-Go-Live (TTGL).
-   Pre-configured Data Mapping: Simplify integration tasks by utilizing pre-configured data mapping, which mitigates the complexities associated with point-to-point integrations. This feature ensures data integrity and coherence throughout the synchronization process.
-   Custom Field Synchronization: Businesses can synchronize custom fields to ensure that vital business information is seamlessly transferred between Salesforce CPQ and Zuora, facilitating downstream operations.
-   Utilization of Orders API: The Connector leverages the Orders API, along with other relevant APIs, to remain aligned with the latest capabilities in Zuora. This ensures compatibility and optimal performance.
-   Real-time Troubleshooting: Users can access downloadable debug logs immediately post-sync, empowering them with self-service capabilities for real-time issue resolution

## Object Mapping

On a high level, the objects in Zuora are linked to those in Salesforce as outlined below:

Figure 1. SFDC

![sdfc](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4e0d33a2-0098-4aa4-a22a-f30b8c0bd398?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlMGQzM2EyLTAwOTgtNGFhNC1hMjJhLWYzMGI4YzBiZDM5OCIsImV4cCI6MTc2NjY1MTIwMiwianRpIjoiODMzNWJlYTk0ZmY0NGYzY2E2MDViM2NjZWQwZjg5MDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.28Qx1oOScGLHBbYo18gXLL_H9Vsi2GxoXYZ35VR5NoM)

For more information, refer to the [object and field mapping](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-field-mappings-guide) for Salesforce CPQ and Zuora integration.
