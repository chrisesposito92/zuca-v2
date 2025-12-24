---
title: "Create a new product in the product catalog"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-set-up/create-a-new-product-in-the-product-catalog"
product: "zuora-platform"
scraped_at: "2025-12-24T05:19:42.168Z"
---

# Create a new product in the product catalog

Learn how to add a new product to your product catalog and manage its availability across different organizational units.

Each product in your product catalog can belong to more than one org unit in your org hierarchy. Products added to a particular org unit are not implicitly inherited by other org units, irrespective of their hierarchical precedence. While adding a new product to your product catalog, you must explicitly select every org unit in which the product must be available.

For example, if you add a product to the Western Europe Org unit, it is not automatically inherited by or available for transaction to the Spain org unit. In this case, the Western Europe org unit is the parent of the Spain Org unit, yet product inheritance is not applicable in this case. To make the product available to the Spain org unit and the Western Europe org unit, you must select both these org units while adding the new product to the product catalog.

You can update the visibility of a product for an org unit by either associating the org unit with the product or by removing an Org Unit from the product catalog list which should no longer be in a position to transact said product

1.  Navigate to Products > Product Catalog in the left-hand navigation section.
2.  Click Add New Product .
    A New Product page opens.

3.  On the New Product page, specify the product details along with the following org-specific information:

    -   Company (For Multi-org enabled tenants): Select one or more org units from this dropdown, to which you wish to make the product available for transaction.

    -   You can specify the other product-related details


    ![Add new product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4c662e9f-d9ec-4e2e-88f5-ae1aed4570af?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRjNjYyZTlmLWQ5ZWMtNGUyZS04OGY1LWFlMWFlZDQ1NzBhZiIsImV4cCI6MTc2NjYzOTk3OSwianRpIjoiZGQxMTcyNTc3OGFhNDYyYmE4NTQzMjc1MzA3NmE3ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CE46F5CSUHlU3e3AO9v6HoYNyoLtXU1bTRa8X_ES0Pw)

    Note: You can update the visibility of a product for an org unit by either associating the org unit with the product or by removing an Org Unit from the product catalog list which should no longer be in a position to transact said product.
