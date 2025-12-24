---
title: "Appstore Connector Reconciliation API"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/appstore-connector-reconciliation-api"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:03.478Z"
---

# Appstore Connector Reconciliation API

The Appstore Connector Reconciliation API offers endpoints to verify and reconcile subscription data across Google, Apple, and Roku, ensuring synchronization and accurate management of user subscriptions.

The Appstore Connector Reconciliation API provides endpoints for verifying and reconciling subscription objects across multiple providers (Google, Apple, and Roku). These APIs ensure that subscription data remains synchronized between your system and upstream providers, enabling accurate tracking and management of user subscriptions.

The API includes two key endpoints:

1.  Verify Object : Used to check the synchronization status of a subscription object against its upstream counterpart.
2.  Reconcile Object : Used to verify and, if necessary, update an out-of-sync subscription object to ensure consistency with upstream data.

Both the endpoints support the following providers:

-   Google : Subscriptions identified by `purchaseToken` .

-   Apple : Subscriptions identified by `originalTransactionId` .

-   Roku : Subscriptions identified by `originalTransactionId` .


-   URL : `GET {base_url}/v1/event-gateway/{provider}/verify/{ssuid}`

-   Purpose : Checks the synchronization status of a subscription object.

-   Behavior : Confirms whether the subscription object ( `ssuid` ) is in sync with its upstream data.


| Parameter | Description |
| --- | --- |
| provider | The subscription provider. Supported values: google , apple , roku . |
| ssuid | The unique identifier for the subscription object to verify. Specific to each provider: |
|  | - For Google , ssuid is the purchaseToken . |
|  | - For Apple , ssuid is the originalTransactionId . |
|  | - For Roku , ssuid is the originalTransactionId . |

| Code | Description |
| --- | --- |
| 200 | Synchronization status returned. |
| 404 | Subscription object not found. |
| 401 | Unauthorized: Invalid credentials. |

-   200 OK (Object is in sync):


{ "result": "In Sync" }

-   200 OK (Object is out of sync):


{ "result": "Out Of Sync" }

-   URL : `GET {base_url}/v1/event-gateway/{provider}/reconcile/{ssuid}`

-   Purpose : Verifies the synchronization status and performs updates if the subscription object is out of sync.

-   Behavior :

    -   Confirms the synchronization status of the subscription object ( `ssuid` ).

    -   Automatically updates the object if it is out of sync.


| Parameter | Description |
| --- | --- |
| provider | The subscription provider. Supported values: google , apple , roku . |
| ssuid | The unique identifier for the subscription object to reconcile. Specific to each provider: |
|  | - For Google , ssuid is the purchaseToken . |
|  | - For Apple , ssuid is the originalTransactionId . |
|  | - For Roku , ssuid is the originalTransactionId . |

| Code | Description |
| --- | --- |
| 200 | Synchronization status returned, and update executed if necessary. |
| 404 | Subscription object not found. |
| 401 | Unauthorized: Invalid credentials. |

-   200 OK (Object is already in sync):


{ "result": "Object in Sync no action taken" }

-   200 OK (Object was out of sync and updated):


{ "result": "Object was out of Sync. Sync action has been executed" }
| Provider | SSUID Description |
| --- | --- |
| Google | purchaseToken |
| Apple | originalTransactionId |
| Roku | originalTransactionId |

These mappings define how subscription identifiers are used for verification and reconciliation across different providers.
