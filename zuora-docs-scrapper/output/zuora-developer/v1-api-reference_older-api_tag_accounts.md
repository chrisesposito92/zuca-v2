---
title: "Accounts"
url: "https://developer.zuora.com/v1-api-reference/older-api/tag/Accounts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:28:12.771Z"
---

# Accounts

Some operations in this section are similar to each other, but are provided for different use scenarios. You should choose the one that best suits your needs.

For example, the [Create account](https://developer.zuora.com/api-references/api/operation/POST_Account) operation is used to create an account with a credit card payment method, a bill-to contact, and optionally an sold-to contact or an associated subscription. If you want to create an account without creating any associated objects such as subscriptions, use [CRUD: Create Account](https://developer.zuora.com/api-references/older-api/operation/Object_POSTAccount/) instead.

If you want to create an account and the associated subscription at the same time without providing credit card information, use the [Subscribe](https://developer.zuora.com/api-references/older-api/operation/Action_POSTsubscribe/) action.
