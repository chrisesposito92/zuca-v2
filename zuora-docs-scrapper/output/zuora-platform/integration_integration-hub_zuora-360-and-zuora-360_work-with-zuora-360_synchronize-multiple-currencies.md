---
title: "Synchronize multiple currencies"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/work-with-zuora-360/synchronize-multiple-currencies"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:33.470Z"
---

# Synchronize multiple currencies

Zuora 360+ enables synchronization of multi-currency information in subscription and invoice data, ensuring accurate currency representation in Salesforce.

## Overview

Zuora 360+ provides support for syncing multi-currency information in subscription and invoice data.

This topic assumes that you have already set up your Zuora application to handle multi-currency.

## Configure Salesforce to Understand and Read Foreign Currencies

When syncing subscription and invoice data, the values for all currency fields are synced as they exist in Zuora, and the currency is set to the currency of the transaction record.

If multi-currency is enabled for the Salesforce org, by default, Salesforce shows two value amounts as shown in the following format:

The value amount in the the transaction currency (The value amount converted to the current user's currency )

For example:

![Multicurrency](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/06d97d9a-0e85-4894-ba4a-c513caca9eca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA2ZDk3ZDlhLTBlODUtNDg5NC1iYTRhLWM1MTNjYWNhOWVjYSIsImV4cCI6MTc2NjY4NzkxMSwianRpIjoiYmUyZmY0YmUxM2YzNDFjMTlhNWEwZjlmMjVlZGVlZTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xvOw8TpWZp-z3l5BEvkHeOfwuv7niSI51EBIec6Wtkw)

The Parenthetical Currency Conversion option controls this setting in Salesforce.

For example, with multi-currency enabled, a customer account in Zuora with a TCV of 100.00 pound sterling (GBP) will be synced to Salesforce as 100.00, and the currency will be set to: GBP 100.00 (USD 168.00)

Contact Salesforce Support to view subscriptions in their appropriate currencies.

See the Salesforce documentation [Managing Multiple Currencies](https://help.salesforce.com/s/articleView?id=sales.admin_currency.htm&type=5) for more information.
