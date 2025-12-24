---
title: "Manage user provisioning by directly assigning tenants to individual users"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid/manage-user-provisioning-by-directly-assigning-tenants-to-individual-users"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:52.145Z"
---

# Manage user provisioning by directly assigning tenants to individual users

Learn how to manage user provisioning by directly assigning tenants to individual users, bypassing user groups.

## Overview

User groups will help you perform bulk user provisioning for users of the same type and access level. If you are still looking for a suitable group to assign the user or feel that grouping users is unnecessary, you may assign tenant access directly to the user and manage provisioning at the user level.

To grant tenant access with appropriate roles at the user level without adding them to groups, switch off the Group Enabled toggle.

Note:

If the Group Enabled toggle is disabled, users cannot be added to User Groups, and the only way to grant tenant access is via direct tenant assignment on the user details page.

![clipboard_ed06a59d4102a2ba8b762cb65882f990a.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/80d3bb08-98e7-479e-850a-aefaaf8c666c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgwZDNiYjA4LTk4ZTctNDc5ZS04NTBhLWFlZmFhZjhjNjY2YyIsImV4cCI6MTc2NjYzNzg5MCwianRpIjoiOGIxYjQ1OTFmYmY0NGY2ZDgzOWI2YjEyMGVkOTYxYjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.aNdf8G3inD71JzQZwUicRotGiJvrElN5Pe41vNXd0As)

## Assign tenants from the Users page

1.  Navigate to Admin Console > Users.
2.  Click Add New User. The New User page opens.
3.  Deactivate the Group Enabled toggle from Basic Information. The tenant permission setting gets displayed.
4.  Activate the toggle under Permissions to allow access to tenants with appropriate user-level roles.
5.  Click Save. The tenant can now access the assigned user role without being part of a user group.

## View tenant details and roles

1.  Navigate to Admin Console > Users.
2.  Select the name of the tenant you want to view.
3.  Navigate to the Environment Access section to view the tenant name and assigned user role.
