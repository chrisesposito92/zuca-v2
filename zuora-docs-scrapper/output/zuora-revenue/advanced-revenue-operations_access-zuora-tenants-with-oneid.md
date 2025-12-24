---
title: "Access Zuora tenants with OneID"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/access-zuora-tenants-with-oneid"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:43:22.601Z"
---

# Access Zuora tenants with OneID

Learn how to access Zuora tenants using OneID for seamless login and management of user roles and permissions.

Zuora OneID provides an easy way to access the Zuora tenants in your organization with one click. After linking a tenant user to your OneID user, you can access the tenant with OneID without entering the credentials for that tenant. OneID opens the home page of your Zuora tenant and keeps you logged in as the linked tenant user.

When accessing a Zuora tenant from OneID, a user obtains user roles and permissions for that tenant from the OneID user group to which the user is added. For more information, see [OneID user groups](/zuora-revenue/advanced-revenue-operations/oneid-overview).

## Prerequisites

Before accessing a Zuora tenant with OneID, ensure you have linked a tenant user of that tenant to your OneID user. For more information, see [Link tenant users to OneID](/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid).

If you want to access a Zuora tenant when logging in to OneID via single sign-on (SSO), ensure you have set the default tenant in OneID. For more information, see [Set the default tenant in OneID](/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid).

## Access the default tenant when logging in to OneID via SSO

When logging in to OneID via SSO, OneID opens the home page of the default tenant in addition to the OneID portal.

For more information about SSO and the default tenant in OneID, see [Configure single sign-on for OneID](/zuora-revenue/advanced-revenue-operations/configure-single-sign-on-for-oneid) and Set the [default tenant in OneID](/zuora-revenue/advanced-revenue-operations/manage-user-and-group-provisioning-in-oneid) .

Note that OneID opens the home page of your Zuora tenant in a new tab and your browser might block this page. If this happens, you need to open the blocked page manually, or change your browser settings to allow pop-up windows from Zuora OneID ([https://one.zuora.com](https://one.zuora.com/)). Changing the pop-up window settings depends on the browser you use. Refer to your browser provider for more information.
