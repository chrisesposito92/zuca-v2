---
title: "Create an API user process flow"
url: "https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/create-an-api-user-process-flow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:03:13.034Z"
---

# Create an API user process flow

This overview walks you through the process of creating an API user.

To use the Zuora REST API or SOAP API, your application will need to present user credentials for an account that has API write access. The administrator for your tenant can create an API user in two steps:

1.  [Create an API user role](/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/create-an-api-user-role). This is a role that's used only for application API access, not for general use.

2.  [Assign the API user role to a user](/zuora-platform/system-management/administrator-settings/manage-users/create-an-api-user/assign-the-api-user-role-to-a-user). This is a user created specifically for this purpose.


Zuora recommends that you never use your API user credentials to log into the Zuora UI. If an API user account is used to log into the Zuora UI, this login becomes subject to the periodic forced password expirations. This automatic security feature may eventually cause API authentication failures that can be hard to diagnose.
