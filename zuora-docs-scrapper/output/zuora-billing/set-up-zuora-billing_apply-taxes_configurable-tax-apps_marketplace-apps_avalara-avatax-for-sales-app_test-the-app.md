---
title: "Test the app"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/marketplace-apps/avalara-avatax-for-sales-app/test-the-app"
product: "zuora-billing"
scraped_at: "2025-12-24T05:07:39.119Z"
---

# Test the app

Learn how to test the Avalara AvaTax for Sales app by configuring billing settings, creating test products and subscriptions, and generating invoices.

After the Avalara AvaTax for Sales app is configured, take the following steps to test the app:

1.  Access the app by navigating to .
2.  Create a test product in your product catalog. See Create a product in product catalog for more information on creating a product.
3.  Create a subscription on an account with only the test product. See Create subscriptions for more information.
4.  Define billing rules. Navigate to in your Zuora tenant.
5.  Create a bill run for the test account and generate an invoice. See Create bill runs for more information.
6.  Post the invoice. If the tax value is displayed on your invoice, your template was configured correctly and can be used for future bill runs. If you don't see any tax displayed on the invoice, troubleshoot and test your configurations using CURL requests. For more information see, System Health for tax log monitoring.
