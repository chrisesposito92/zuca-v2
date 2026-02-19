---
title: "User and user group relationships"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/oneid/user-groups-in-oneid/user-and-user-group-relationships"
product: "zuora-platform"
scraped_at: "2026-02-19T03:22:15.715Z"
---

# User and user group relationships

This reference explains the many-to-many relationship between users and user groups in OneID, detailing methods for adding users to groups and managing these associations.

There is a many-to-many relationship between users and user groups. A user group can contain multiple users, and a user can belong to multiple user groups.

Here are some ways to add users to user groups in OneID:

-   Add a user to a user group when creating a user.

-   Add a user to multiple user groups when editing a user.

-   Add multiple users to a user group when creating or editing a user group.


The following table shows the operations and details of these approaches:

| Operation | How many users can be managed? | How many user groups can be managed? |
| --- | --- | --- |
| Adding a user | One | One |
| Editing a user | One | Multiple |
| Adding a user group | Multiple | One |
| Editing a user group | Multiple | One |

For example, when editing an existing user in OneID, you can add the current user to multiple user groups.
