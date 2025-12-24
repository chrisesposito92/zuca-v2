---
title: "Assign the API user role to a user"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/assign-the-api-user-role-to-a-user"
product: "zuora-platform"
scraped_at: "2025-12-24T05:03:18.226Z"
---

# Assign the API user role to a user

Learn how to assign the API user role to a user.

Ensure that a user role with the API Write Access is available in your tenant. See [Create an API user role](/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/create-an-api-user-role).

The API user account must be used exclusively for API access. It is usually best to create a new user account specifically for this purpose and assign it the API user role.

1.  Log in to Zuora as the tenant administrator.
2.  Click the user name at the top right and click Administration .
3.  On the Administration Settings page, click Manage Users .
4.  On the All Users page, click add single user to create a new user, or click the name of an existing user to change that user's access.
5.  Fill in the fields. We recommend using a name that suits the purpose, such as the name of your application, or "Dev" or "QA".
6.  Select API user for the Zuora Platform Role option.
7.  Configure the user setting as described in Platform roles .
8.  Click Save to create the user.

All newly-created users are assigned a Pending Active status until they respond to the invitation email and create a password on the Zuora website. We recommend that your new API user open the password link in an Incognito window. Otherwise, you might experience cookie issues and might not be able to log in with another user easily.
