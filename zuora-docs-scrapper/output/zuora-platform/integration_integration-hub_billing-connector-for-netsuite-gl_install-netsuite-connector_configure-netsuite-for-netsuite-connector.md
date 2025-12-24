---
title: "Configure NetSuite for NetSuite Connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-netsuite-for-netsuite-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:15.204Z"
---

# Configure NetSuite for NetSuite Connector

Learn how to configure NetSuite for the NetSuite Connector integration

NetSuite Connector creates NetSuite Items for all charges in the Zuora Product Catalog. Before performing the NetSuite Connector integration, you must configure the following features in NetSuite.

## Enable Revenue Recognition and disable Consolidated Payments

1.  To enable revenue recognition, select Setup > Company > Enable Features.
2.  Select the Accounting tab.
3.  In the Advanced Features section, enable Revenue Recognition by selecting its checkbox.
4.  In the Advanced Features section, disable Consolidated Payments by clearing its checkbox.
5.  Click Save.

![NS_Enable_Features_HL.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/adec1ca1-c818-4cec-ae2a-8cae0317b964?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkZWMxY2ExLWM4MTgtNGNlYy1hZTJhLThjYWUwMzE3Yjk2NCIsImV4cCI6MTc2NjY0MTg3MywianRpIjoiYWFmNDhkNjA5NDMyNDkwMjhhMWUzMjQyZDE3ZWIwZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JAnng7etPsi0Gpys3TmVO7Jg3oVLDxFMlcNiNx8tqyc)

## Enable SuiteCloud: SuiteTalk (Web Services) and SuiteScript

1.  To enable SuiteCloud options, select Setup > Company > Enable Features.

2.  Select the SuiteCloud tab.

3.  In the SuiteScript area, enable the following features (For both features, click I agree when prompted to accept the terms of service):

    -   Client SuiteScript

    -   Server SuiteScript

4.  In the SuiteTalk (Web Services) area, enable Web Services. This allows Zuora to connect to NetSuite.

5.  Click Save.


![SuiteCloud Settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a639ae2d-9c8a-47f7-a180-b8365cde82e3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE2MzlhZTJkLTljOGEtNDdmNy1hMTgwLWI4MzY1Y2RlODJlMyIsImV4cCI6MTc2NjY0MTg3MywianRpIjoiYWFhZWU1ZmZlZGQxNDNiNmI2NTNjMzI3M2VhMTgyNWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jV7PNN-xSA9wQrhTq8Sj1SmmEIA0iduAWi1_R4NSgGw)

## Configure default accounting preferences

1.  Zuora recommends that you also enable Specify Default GL Income Account. Select Setup > Accounting > Accounting Preferences.

2.  Select the Items/Transactions tab.

3.  In the Accounts area, select a value for the Default Income Account.

4.  Click Save.


![NetSuite Accounting Preferences](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f3b2a6a9-4153-4845-b965-ce036dc4a52c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYzYjJhNmE5LTQxNTMtNDg0NS1iOTY1LWNlMDM2ZGM0YTUyYyIsImV4cCI6MTc2NjY0MTg3MywianRpIjoiZTRjYTMzMjdkMzA5NDY5NmJjN2I2OGE3YmJjMmMwZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1s-xoR3kd8zchqxpMDFpHQ_RFOsLXsHUa3SNuZrcG1c)

## Configure auto-generated numbers

1.  Decide whether you want to use Zuora's numbering for customers and transactions, or if you want use NetSuite's numbering. The NetSuite Integration will use NetSuite's numbering by default.

2.  To use Zuora's numbering, select Setup > Company > Auto-Generated Numbers.

3.  Click Entities.

4.  Check Enabled and Allow Override for each item in the Entities list.

5.  Click Save.

6.  Click Document Numbers.

7.  In the Document Numbers list, check Allow Override for the following transactions that you want to sync:

    -   Credit Memo

    -   Invoice

    -   Payment

    -   Sales Order

8.  Click Save.


## Configure multiple currencies (if used)

You can also enable multiple currencies. In NetSuite, select Lists > Accounting > Currencies > New to add new currencies.

See the NetSuite online help for more information about creating and activating multiple currencies.

![NS_add_currency.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/62f61840-384f-4d22-ab94-dfa952509060?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyZjYxODQwLTM4NGYtNGQyMi1hYjk0LWRmYTk1MjUwOTA2MCIsImV4cCI6MTc2NjY0MTg3MywianRpIjoiZGJiMDlmMzUzZWEwNDRiZGFmMWIyY2NhYjFkNjJiZjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hPfkHmXzB76FCnYZKF9I-o6DALeFUqsA9O7OVqp44pk)
