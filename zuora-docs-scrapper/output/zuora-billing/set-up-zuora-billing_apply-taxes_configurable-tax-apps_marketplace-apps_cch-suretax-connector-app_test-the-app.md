---
title: "Test the app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/cch-suretax-connector-app/test-the-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:08:04.783Z"
---

# Test the app

Learn how to test the CCH SureTax Connector app by following a series of steps, including logging in, creating test products, and generating invoices.

After the CCH SureTax Connector app is configured, perform the following steps to test the app:

1.  Log in to your Zuora tenant, navigate to in the left-hand column navigation menu.
2.  Create a test product in your product catalog. See Create a Product in Product Catalog for more information on creating a product.
3.  Create a subscription on an account with only the test product. See Create Subscriptions for more information.
4.  Define billing rules. Navigate to in your Zuora tenant.
5.  Create a bill run for the test account and generate an invoice. See Creating Bill Runs for more information.
6.  Post the invoice. If the tax value is displayed on your invoice, your template was configured correctly and can be used for future bill runs. If you don't see any tax displayed on the invoice, troubleshoot and test your configurations using CURL requests. For more information see, System Health for tax log monitoring.
