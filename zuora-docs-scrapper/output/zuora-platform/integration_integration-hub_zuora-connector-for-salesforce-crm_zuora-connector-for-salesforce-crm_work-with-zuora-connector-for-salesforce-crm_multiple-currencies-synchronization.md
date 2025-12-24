---
title: "Multiple currencies synchronization"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/work-with-zuora-connector-for-salesforce-crm/multiple-currencies-synchronization"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:06.996Z"
---

# Multiple currencies synchronization

This topic explains synchronizing multi-currency information in subscription and invoice data using Zuora Connector for Salesforce CRM.

## Overview

Zuora Connector for Salesforce CRM provides support for syncing multi-currency information in subscription and invoice data.

This topic assumes that you have already set up your Zuora application to handle multi-currency .

## Configure Salesforce to Understand and Read Foreign Currencies

When syncing subscription and invoice data, the values for all currency fields are synced as they exist in Zuora, and the currency is set to the currency of the transaction record.

If multi-currency is enabled for the Salesforce org, by default, Salesforce shows two value amounts as shown in the following format:

The value amount in the the transaction currency (The value amount converted to the current user's currency )

For example:

![MultiCurrency](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2c89aa55-7293-4090-8225-2cb7785434d2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJjODlhYTU1LTcyOTMtNDA5MC04MjI1LTJjYjc3ODU0MzRkMiIsImV4cCI6MTc2NjY1MTcwNSwianRpIjoiOTk5MTIwYTVkMzg0NGRjNmJlYzQ2MGU3NGJhYmUyODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.W5XDJkMBuuXCuXCWfDClL288LpckNLXxCbcWhjUtKhg)

The Parenthetical Currency Conversion option controls this setting in Salesforce.

For example, with multi-currency enabled, a customer account in Zuora with a TCV of 100.00 pound sterling (GBP) will be synced to Salesforce as 100.00, and the currency will be set to: GBP 100.00 (USD 168.00)

Contact Salesforce Support to view subscriptions in their appropriate currencies.

See the Salesforce documentation Managing Multiple Currencies for more information.
