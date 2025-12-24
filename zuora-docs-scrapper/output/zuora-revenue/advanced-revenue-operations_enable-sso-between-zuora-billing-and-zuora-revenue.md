---
title: "Enable SSO between Zuora Billing and Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/enable-sso-between-zuora-billing-and-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:20.288Z"
---

# Enable SSO between Zuora Billing and Zuora Revenue

The Billing Revenue UI Authentication Proxy is a UI integration between Zuora Billing and Zuora Revenue. With Billing Revenue UI Authentication Proxy enabled, you can easily switch between Zuora Billing and Zuora Revenue without additional logins.

This feature can be enabled only if the Billing - Revenue Integration feature has been enabled.

## Procedure

To enable Billing Revenue UI Authentication Proxy, submit a request at [Zuora Support](https://support.zuora.com/) and provide the following information in the request:

-   Zuora Billing tenant ID

-   Zuora Billing entity ID (if [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) is enabled in your Zuora Billing tenant)

-   Zuora Billing environment

-   Zuora Revenue UI URL

-   The Zuora Billing user name that will be used as the {{s\_revpro }} superuser


After single sign-on (SSO) between the two systems is enabled, only the Zuora Billing user provided in the request has access to Zuora Revenue with the Super User role. All other Billing users are assigned with the First Time User role. Later, the superuser can assign appropriate user roles in Zuora Revenue to other users.

## Result

After Billing Revenue UI Authentication Proxy is enabled, the Zuora Billing UI will be the centralized place to log into both Zuora Billing and Zuora Revenue. The following UI changes will happen:

-   ![Billing UI](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/409080e2-e016-4300-8c16-4c10117a4fa6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQwOTA4MGUyLWUwMTYtNDMwMC04YzE2LTRjMTAxMTdhNGZhNiIsImV4cCI6MTc2NjYzNzQ5OCwianRpIjoiYjUwMjRkYWQ1NWU1NDdmZmI3NzJjMGNhNWYxMTE5ZTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QgD93QeJSwEPrnd4kA374Z7MGHOfO9_BhlwH2wGY6tg)

-   To go back to the Zuora homepage from Zuora Revenue, click your user name on the upper-right corner of the screen, and then click Zuora Home in the dropdown list.
