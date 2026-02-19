---
title: "Set Up an entity connections for object sharing"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-entity/multi-entity-business-management/business-objects-sharing-across-entities/set-up-an-entity-connections-for-object-sharing"
product: "zuora-platform"
scraped_at: "2026-02-19T03:24:41.644Z"
---

# Set Up an entity connections for object sharing

Learn how to set up connections between entities to share business objects.

If you want to share business objects across entities, you need to set up a connection between the source entity and the target entity first.

You can only send a connection request to the entities that you have permission to access. So if you want to set up a connection between a source entity and a target entity, make sure the source entity users have permission to access to the target entity.

1.  In a source entity, send a connection request to a target entity.
    1.  Log in as a source entity administrator who must have permission to access to the target entity.
    2.  Navigate to the source entity from the entity switcher .
    3.  Click your username at the top right and navigate to Administration > Manage Entity Connections .
    4.  In the Share To (Outbound) tab, click Request Connection next to the target entity. The connection is then in Pending status.
2.  In the target entity, accept the connection request from the source entity.
    1.  Navigate to the target entity from the entity switcher .
    2.  Click your username at the top right and navigate to Administration > Manage Entity Connections .
    3.  In the Share From (Inbound) tab, you can see a connection request from the source entity. Click Accept . The connection status is changed to Connected.

        To set up a connection from REST API, you need to [initiate a connection](https://developer.zuora.com/v1-api-reference/older-api/operation/POST_EntityConnections/) and then [accept the connection](https://developer.zuora.com/v1-api-reference/older-api/operation/PUT_EntityConnectionsAccept/).
