---
title: "Process large billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/install-vertex-o-series-tax-connector-app/process-large-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T05:09:43.270Z"
---

# Process large billing documents

Learn how to process large billing documents with Zuora's Vertex O Series Tax Connector app, supporting up to 15,000 taxable line items in a single request.

Zuora's Vertex O Series Tax Connector app can support a maximum of 15,000 taxable line items in a single invoice, credit memo, or debit memo. To process a large billing document in a single tax calculation request:

1.  Go to ENGINE SETTINGS \> Click ![Edit icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6c4955ce-f413-4102-9a7d-92c4df7969a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZjNDk1NWNlLWY0MTMtNDEwMi05YTdkLTkyYzRkZjc5NjlhMSIsImV4cCI6MTc2NjYzOTM4MSwianRpIjoiZTM5MzQwM2E3MDQzNDBiMmI3YmM4OTk1MGU4MDE0N2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yuxvSRM-IMQrHm6y0vTBhU0OIGXQ7gC-4rLKMZ9Kpr8) System Configuration tab.
2.  In the NETREAD TIMEOUT(SECONDS) field, increase the timeout seconds up to 600. (Default is 60.)
3.  Click UPDATE to save the change.

On the tax vendor side, Vertex can support a maximum of 5,000 taxable line items in a single tax call. If you have confirmed with the tax vendor that a higher number of items can be processed in a timely manner (within 120 seconds), submit a request at Zuora Global Support and ask to test a higher limit.

Tip: We suggest that you post invoices and calculate tax via bill runs, as the asynchronous operations are not limited by the designated network timeout in Zuora Billing. If you use Zuora UI or synchronous API calls, it is better to check the result back in about 5 to 10 minutes, depending on the size of the invoice.
