---
title: "View the relationships between a specific object and other objects"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/view-the-relationships-between-a-specific-object-and-other-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:33.185Z"
---

# View the relationships between a specific object and other objects

Learn how to view the relationships between a specific object and other objects via the Schema Visualizer.

1.  Navigate to in the left navigation menu.
2.  On the Object Manager page, click the Schema Visualizer tab. A canvas with Zuora Billing objects opens.
3.  Enable all product filters by clicking the product names in the upper left of the page. Only Billing is enabled by default.
4.  Click the object name. This object and all related objects are highlighted on the canvas.
5.  Click the link between two objects and the Edge Detail pane opens with the following information on the relationship between these objects:

    -   Edge Type: The relationship type between two objects. For example, many-to-one.

    -   Source Node Details: The name, API name, and category of the source node. The source node is the “Many” end in a many-to-one relationship. For example, in the many-to-one relationship between Invoice and Account, the source node is Invoice.

    -   Target Node Details: The name, API name, and category of the target node. The target node is the “One” end in a many-to-one relationship. For example, in the many-to-one relationship between Invoice and Account, the target node is Account.

    -   Relationship Fields: The source node field and target node field that link these objects. For example, in the relationship between Invoice and Account, the source node field (on Invoice) is `AccountId` and the target node field (on Account) is `Id`.
