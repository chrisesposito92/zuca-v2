---
title: "Zuora OneID FAQs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-oneid-faqs"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:44:41.803Z"
---

# Zuora OneID FAQs

This document provides answers to common questions about Zuora OneID, including authentication protocols, SCIM provisioning, and user migration details.

This article contains answers to frequently asked questions about Zuora OneID. If you have a question not covered here, don't hesitate to [ask in the Community](https://community.zuora.com/communities/community-home?CommunityKey=8714f7c9-c6eb-4001-9739-3b9600e66cdc) Group or reach out to [Zuora Global Support](https://www.zuora.com/support-center/).

We are continually updating the list.

Q : Which authentication protocol does Zuora OneID support?

A : Zuora OneID enables authentication through SAML 2.0 protocol.

Q : Is it possible to perform SCIM provisioning with Zuora OneID?(System for Cross Domain Identity Management)

A : Zuora OneID offers SCIM provisioning to facilitate secure automated exchange of user identity data with other IAM systems. In Zuora, it can be utilized to perform CRUD operations on user and group resources. At present, Zuora OneID does not support SCIM provisioning with Azure AD.

Q : Can I still login with my old local credentials after moving to Zuora OneID?

A : After migrating to OneID, you can use your old local credentials for 90 days by default. Your local login details will soon be outdated, and you will only be able to access Zuora tenants using Zuora OneID.You can modify the lock-in period of local credentials as per your organization's needs.

Q : Can we switch to OneID using only Sandbox environments initially?

A : It's possible to onboard/migrate to OneID using your Sandbox environment and its users. You can enable the Production tenant in OneID later.

Q : Does migrating users to OneID from local Zuora tenants maintain their roles and access levels?

A : OneID migration from tenant will keep users' roles and permissions intact.

Q : Between user migration roles and roles assigned by user groups, which one takes precedence?

A : The roles assigned to user groups have higher priority than roles assigned locally to users in local tenants.
